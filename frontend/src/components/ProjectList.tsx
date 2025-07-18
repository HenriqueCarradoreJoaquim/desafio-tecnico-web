import { ProjectCard } from './ProjectCard';

type Project = {
  id: number;
  name: string;
  description: string;
  responsible: string;
  status: 'pendente' | 'em andamento' | 'concluído';
};

type ListProps = {
  projects: Project[];
  onUpdateStatus: (id: number) => void;
};

export function ProjectList({ projects, onUpdateStatus }: ListProps) {
  if (projects.length === 0) {
    return <p className="text-center text-gray-500">Nenhum projeto cadastrado ainda.</p>;
  }

  return (
    <ul className="space-y-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onUpdateStatus={onUpdateStatus} />
      ))}
    </ul>
  );
}
