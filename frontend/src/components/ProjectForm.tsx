import React from 'react';

type FormProps = {
  form: { name: string; description: string; responsible: string };
  setForm: React.Dispatch<React.SetStateAction<{ name: string; description: string; responsible: string }>>;
  onSubmit: (e: React.FormEvent) => void;
  error: string | null;
};

export function ProjectForm({ form, setForm, onSubmit, error }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="mb-8 space-y-4">
      {error && <div className="text-red-600 font-semibold">{error}</div>}

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
      <input
        className="w-full p-2 border border-gray-300 rounded"
        type="text"
        placeholder="Responsável (Herói)"
        value={form.responsible}
        onChange={(e) => setForm({ ...form, responsible: e.target.value })}
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Cadastrar
      </button>
    </form>
  );
}
