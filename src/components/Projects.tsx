import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { projects } from "../utils/projects";

export default function Projects() {

  return (
    <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[150px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="p-4 text-center">
          <h2 className="mb-2">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Projetos &
            </span>
            <span className="font-handwriting text-4xl">Portifólio</span>
          </h2>

          <p className="text-sm text-gray-400">
            Alguns dos projetos pessoais que já realizei.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={`project-${i}`}
              className={`group h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
              style={{ backgroundImage: `url('${project.image}')` }}
            >
              <div className="bg-blue-600 flex w-full h-full flex-col items-center justify-center text-center rounded-lg text-white px-3 opacity-0 transition-opacity group-hover:opacity-100">
                <h4 className="font-headline text-lg font-semibold">
                  {project.title}
                </h4>
                <p className="mb-4 text-sm">{project.description}</p>
                <a href={project.link} target="_blank">
                  <HiArrowTopRightOnSquare className="h-6 w-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
