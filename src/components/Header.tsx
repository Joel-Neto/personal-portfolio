import { useEffect, useRef } from "react";

export default function Header() {
  const writeElementRef = useRef<HTMLDivElement>(null);

  const typeWrite = (element: HTMLElement) => {
    if (!element) return;
    const textoArray = element.innerHTML.split("");
    element.innerHTML = "";
    textoArray.forEach((letra, i) => {
      setTimeout(() => {
        element.innerHTML += letra;
      }, 70 * i);
    });
  };

  useEffect(() => {
    if (writeElementRef.current) {
      typeWrite(writeElementRef.current);
    }
  }, []);

  return (
    <section className="bg-gradient-to-tr from-black to-gray-900 text-white rounded-br-[80px]">
      <div className="container mx-auto max-w-4xl p-3 py-12 flex flex-col md:flex-row">
        <div className="basis-3/5">
          <h1 className="mb-6 text-center md:text-left">
            <span className="font-handwriting block text-3xl">
              Olá, me chamo
            </span>
            <span className="font-headline text-5xl font-semibold mr-2">
              Joel
            </span>
            <span className="font-headline text-5xl font-light text-blue-400">
              Neto
            </span>
          </h1>

          <h2 className="font-semibold flex items-center gap-3 text-center md:text-left">
            <div className="h-1 w-12 rounded-full bg-blue-800"></div>
            Desenvolvedor Full-Stack
          </h2>

          <p
            ref={writeElementRef}
            className="text-gray-400 my-6 text-center md:text-left typewriter"
          >
            Como desenvolvedor Full-Stack, tenho a experiência de trabalhar com
            tecnologias modernas que proporcionam performance e escalabilidade.
            No frontend, utilizo o framework o Next.Js para criar interfaces
            rápidas, responsivas e dinâmicas, enquanto no backend, o Express,
            juntamente com TypeORM ou PrismaORM, me permite construir APIs
            eficientes e de fácil manutenção, sempre utilizando TypeScript para
            garantir código limpo e seguro.
          </p>

          {/* <div className="flex items-center justify-center gap-2 md:justify-start">
            <a href="#" className="underline font-bold text-white">
              Fale comigo
            </a>
            <span className="italic text-gray-500">ou</span>
            <a
              href="#"
              className="button text-gray-600 flex items-center gap-1 hover:text-gray-900"
            >
              <HiDownload />
              <span>Baixe meu CV</span>
            </a>
          </div> */}

          <div className="flex items-center justify-center gap-2 md:justify-start">
            <a href="https://linkedin.com/in/joel-alves-neto" target="_blank" className="underline font-bold text-white">
              Linkedin
            </a>
            <span className="italic text-gray-500">-</span>
            <a href="https://github.com/Joel-Neto" target="_blank" className="underline font-bold text-white">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
