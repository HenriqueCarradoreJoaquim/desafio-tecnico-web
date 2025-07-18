import { useState, useEffect } from 'react';
import { api } from './services/api';

type Project = {
  id: number;
  name: string;
  description: string;
  responsible: string;
  status: 'pendente' | 'em andamento' | 'concluído';
};

const heroes = [
  { name: 'Homem-Aranha', emoji: '🕷️' },
  { name: 'Mulher-Maravilha', emoji: '🦸‍♀️' },
  { name: 'Batman', emoji: '🦇' },
  { name: 'Capitão América', emoji: '🛡️' },
];

// Removido o statusColors para não usar classes de cor

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    responsible: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [loadingStatusId, setLoadingStatusId] = useState<number | null>(null);

  const fetchProjects = async () => {
    try {
      const res = await api.get<Project[]>('/projects');
      setProjects(res.data);
      setError(null);
    } catch {
      setError('Erro ao carregar projetos');
    }
  };

  const createProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.description || !form.responsible) {
      setError('Preencha todos os campos');
      return;
    }
    try {
      await api.post('/projects', form);
      setForm({ name: '', description: '', responsible: '' });
      fetchProjects();
      setError(null);
    } catch {
      setError('Erro ao criar projeto');
    }
  };

  const updateStatus = async (id: number) => {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    const orderedStatus: Project['status'][] = ['pendente', 'em andamento', 'concluído'];

    const currentIndex = orderedStatus.indexOf(project.status);
    if (currentIndex === -1) {
      console.warn(`Status inválido: "${project.status}" para o projeto ${id}`);
      return;
    }
    const nextStatus = orderedStatus[(currentIndex + 1) % orderedStatus.length];

    setLoadingStatusId(id);
    try {
      const res = await api.patch<Project>(`/projects/${id}`, { status: nextStatus });
      setProjects(prevProjects =>
        prevProjects.map(p => (p.id === id ? res.data : p))
      );
      setError(null);
    } catch {
      setError('Erro ao atualizar status');
    } finally {
      setLoadingStatusId(null);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">

      <h1 className="text-center font-bold mb-6">Cadastro de Projetos</h1>

      {error && <div className="mb-4 text-black font-semibold">{error}</div>}

      <form onSubmit={createProject} className="mb-8 space-y-4">
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Descrição"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={form.responsible}
          onChange={(e) => setForm({ ...form, responsible: e.target.value })}
        >
          <option value="">Selecione um herói</option>
          {heroes.map((hero) => (
            <option key={hero.name} value={hero.name}>
              {hero.emoji} {hero.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          Cadastrar
        </button>
      </form>

      <ul className="space-y-4">
        {projects.map((project) => {
          const hero = heroes.find((h) => h.name === project.responsible);
          return (
            <li
              key={`${project.id}-${project.status}`} // força re-render no status
              className="p-4 border rounded flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <strong className="text-lg">{project.name}</strong> — {project.description} |{' '}
                <span className="font-semibold text-black">
                  {hero?.emoji} {project.responsible}
                </span>{' '}
                |{' '}
                <span style={{ textTransform: 'none' }} className="font-semibold text-black">
                  🏷️ {project.status}
                </span>
              </div>
              <button
                onClick={() => updateStatus(project.id)}
                disabled={loadingStatusId === project.id}
                className={`mt-2 md:mt-0 md:ml-4 px-3 py-1 rounded text-white ${loadingStatusId === project.id
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gray-700 hover:bg-gray-800'
                  }`}
              >
                Atualizar Status
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
