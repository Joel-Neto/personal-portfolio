import { HiCommandLine, HiComputerDesktop } from "react-icons/hi2";

const services = [
  {
    title: "Web",
    description:
      "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, Next.js, Tailwind CSS e Node.js.",
    icon: <HiComputerDesktop className="h-12 w-12" />,
  },
  {
    title: "Sistemas",
    description: "Desenvolvimento de sistemas e APIs REST com Node.js.",
    icon: <HiCommandLine className="h-12 w-12" />,
  },    
];

export default function Services() {
  return (
    <section className="container mx-auto my-4 max-w-4xl p-4">
      <div className="p-1 text-center">
        <p className="text-sm font-semibold text-blue-600 uppercase">
          O que faço de melhor
        </p>

        <h2 className="font-bold text-blue-900 mb-2">
          <span className="mr-2 font-headline text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Serviços</span>
        </h2>

        <p className="text-sm text-gray-600">
          Posso atender uma gama completa de serivços, desde o front-end, até o
          back-end.
        </p>
      </div>

      <div className="mt-6 flex flex-col justify-center gap-3 flex-wrap md:flex-row">
        {services.map((service, i) => (
          <div
            className="basis-1/3 rounded-lg bg-blue-700 p-4 text-white"
            key={`service-${i}`}
          >
            <div className="mb-2">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
