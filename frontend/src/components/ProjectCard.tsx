type Project = {
  id: number;
  name: string;
  description: string;
  responsible: string;
  status: 'pendente' | 'em andamento' | 'concluído';
};

type CardProps = {
  project: Project;
  onUpdateStatus: (id: number) => void;
};

export function ProjectCard({ project, onUpdateStatus }: CardProps) {
  return (
    <li className="p-4 border rounded shadow flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <strong className="text-lg">{project.name}</strong> — {project.description} | 👨‍💻 {project.responsible} |{' '}
        <span className="px-2 py-1 rounded font-semibold">
          {project.status}
        </span>
      </div>
      <button
        onClick={() => onUpdateStatus(project.id)}
        className="mt-2 md:mt-0 md:ml-4 px-3 py-1 bg-gray-600 text-white rounded"
      >
        Atualizar Status
      </button>
    </li>
  );
}
