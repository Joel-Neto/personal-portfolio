import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function Footer() {
  const socials = [
    {
      name: "WhatsApp",
      description: "+55 15 99805-2005",
      link: "https://wa.me/5515998052005?text=Olá, estou entrando em contato por meio do seu portifólio de projetos...",
      icon: <FaWhatsapp />,
    },
    {
      name: "Email",
      description: "joelneto.contato01@gmail.com",
      link: "mailto:joelneto.contato01@gmail.com?subject=Olá...",
      icon: <HiOutlineEnvelope />,
    },
    {
      name: "GitHub",
      description: "GitHub",
      link: "https://github.com/Joel-Neto",
      icon: <FaGithub />,
    },
  ];

  return (
    <footer className="w-full min-h-10 p-4 bg-gray-300 flex">
      <div className="container m-auto max-w-4xl flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="text-gray-700 font-headline font-semibold">Joel Neto</p>
        <div className="flex gap-4">
          {socials.map((social, i) => (
            <p
              className="text-gray-700 flex items-center justify-center gap-1 transition hover:text-gray-900"
              key={`contato-${i}`}
            >
              <a href={social.link} target="_blank">{social.name}</a>
              {social.icon}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
