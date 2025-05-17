export default function About() {
  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <div className="p-4 text-center">
        <h2 className="font-bold text-blue-900 mb-2">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>

        <p className="text-sm text-gray-600 mb-2">
          Sou um desenvolvedor de software Full-Stack com uma paixão genuína por tecnologia e inovação. Atualmente, estou me graduando em Desenvolvimento de Software Multiplataforma na Fatec Votorantim, o que tem fortalecido minha base técnica em desenvolvimento mobile, integração de sistemas e otimização de processos.
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Tenho experiência prática no desenvolvimento de sistemas web e mobile, sempre buscando aplicar boas práticas de engenharia de software, segurança da informação, computação em nuvem e conceitos de machine learning. Estou em constante evolução, aprendendo novas tecnologias e aprimorando minhas habilidades técnicas.
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Além do aspecto técnico, valorizo muito o trabalho em equipe. Desenvolvi competências em liderança, comunicação e relacionamento interpessoal, que me permitem colaborar de forma eficaz, mediar situações e motivar equipes na conquista de objetivos em comum.
        </p>
        <p className="text-sm text-gray-600">
          Este portfólio foi criado para reunir minhas experiências profissionais, projetos, atividades acadêmicas, cursos e aprendizados ao longo da minha trajetória. Ele representa meu crescimento contínuo e minha dedicação ao setor de tecnologia.
        </p>
      </div>

      <div className="relative mx-auto mt-20 max-w-xl">
        <div className="relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48">
          <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
            <p className="font-handwriting text-lg font-bold">Ola,</p>
            <p>
              <span className="mr-1">Meu nome é</span>
              <span className="font-headline font-bold uppercase text-blue-900">
                Joel Neto
              </span>
            </p>

            <table className="mt-4 w-full text-sm">
              <tbody>
                <tr className="tr">
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Celular:
                  </td>
                  <td>
                    <a
                      href="tel:+551299999999"
                      className="underline hover:text-blue-800"
                    >
                      +55 15 99805-2005
                    </a>
                  </td>
                </tr>
                <tr className="tr">
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </td>
                  <td>
                    <a
                      href="mailto:joelneto.contato01@gmail.com"
                      className="underline hover:text-blue-800 break-words"
                    >
                      joelneto.contato01@gmail.com
                    </a>
                  </td>
                </tr>
                <tr className="tr">
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Endereço:
                  </td>
                  <td>
                    <a
                      href="https://goo.gl/maps/4yacADQtLB8jz8zn9?coh=178573&entry=tt"
                      target="_blank"
                      className="underline hover:text-blue-800"
                    >
                      Votorantim - SP
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url('/img/image.png')] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56"></div>
        </div>
      </div>
    </section>
  );
}
