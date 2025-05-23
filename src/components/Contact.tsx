import { FormEvent, useRef, useState } from "react";

import { FaSpinner, FaWhatsapp } from "react-icons/fa";
import { HiCheckCircle, HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false); 
  const [success, setSuccess] = useState(false); 
  const [error, setError] = useState(false); 

  const contacts = [
    {
      name: "WhatsApp",
      description: "+55 15 99805-2005",
      link: "https://wa.me/5515998052005?text=Olá, estou entrando em contato por meio do seu portifólio de projetos...",
      icon: <FaWhatsapp className="h-10 w-10" />,
    },
    {
      name: "Email",
      description: "joelneto.contato01@gmail.com",
      link: "mailto:joelneto.contato01@gmail.com?subject=Olá...",
      icon: <HiOutlineEnvelope className="h-10 w-10" />,
    },
    {
      name: "Votorantim - SP",
      link: "/",
      icon: <HiOutlineMapPin className="h-10 w-10" />,
    },
  ];

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true)
          setLoading(false)
          setTimeout(() => {
            setSuccess(false);
            form.current?.reset();
          }, 10 * 1000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true);
          setLoading(false)
        },
      );
  };

  return (
    <section id="contact" className=" text-blue-900">
      <div className="container mx-auto max-w-4xl p-4 py-8">
        <div className="mb-6">
          <h2 className="z-50 mb-2">
            <span className="mr-2 font-headline text-3xl font-bold">Fale</span>
            <span className="font-handwriting text-4xl font-semibold">
              Comigo
            </span>
          </h2>
          <p className="text-sm">
            Entre em contato por formulário ou WhatsApp, com certeza irei poder
            te ajudar.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="basis-2/3">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-2 block ps-4 font-headline font-semibold"
                >
                  Mensagem:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-36 w-full rounded-lg border border-blue-500 bg-transparent p-2 outline-none"
                  required
                />
              </div>
              <div className="mb-6 flex flex-col gap-4 md:flex-row">
                <div className="flex-grow">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    Seu nome:
                  </label>
                  <input
                    className="w-full rounded-lg border border-blue-500 bg-transparent p-2 outline-none"
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <label
                    htmlFor="email"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    Seu email:
                  </label>
                  <input
                    className="w-full rounded-lg border border-blue-500 bg-transparent p-2 outline-none"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="button flex items-center gap-2 bg-blue-700 text-white hover:text-gray-200"
                >
                  {loading && <FaSpinner className="h-4 w-4 animate-spin"/>}
                  {success && <HiCheckCircle className="h4- w-4 animate-ping"/>}
                  Enviar mensagem
                </button>

                {
                  error && (
                    <p className="mt-2">
                      Ocorreu um erro ao enviar a mensagem, por favor, tente novamente.
                    </p>
                  )
                }
              </div>
            </form>
          </div>
          <div className="basis-1/3">
            {contacts.map((contact, i) => (
              <div
                key={`contact-${i}`}
                className="mb-4 flex items-center gap-4 rounded-lg border border-blue-900 border-dashed p-4"
              >
                {contact.icon}
                <div>
                  <p className="font-headline font-semibold">{contact.name}</p>
                  <a
                    href={contact.link}
                    target="_blank"
                    className="text-gray-600 underline underline-offset-2"
                  >
                    {contact.description}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
