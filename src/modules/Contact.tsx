import React from 'react';
import SectionTitle from '../components/SectionTitle';

interface ContactMethod {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

interface SocialLink {
  icon: string;
  name: string;
  url: string;
}

export default function Contact() {
  const contactMethods: ContactMethod[] = [
    {
      icon: "📧",
      label: "Email",
      value: "wildeisenmatheus@gmail.com",
      link: "mailto:wildeisenmatheus@gmail.com"
    },
    {
      icon: "📍",
      label: "Localização",
      value: "São Paulo, Brasil"
    },
    {
      icon: "💼",
      label: "Profissão",
      value: "Estudante"
    },
    {
      icon: "📱",
      label: "Telefone",
      value: "+55 (11) 98765-4321",
      link: "tel:+5511987654321"
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: "👨‍💻",
      name: "GitHub",
      url: "https://github.com/matheuswildeisen"
    },
    {
      icon: "💼",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/matheus-von-koss-wildeisen-7828a0356"
    },
  ];

  return (
    <section id="contact" className="contact">
      <SectionTitle text="Entre em Contato" />
      
      <div className="contact-container">
        <p className="contact-intro">
          Estou sempre aberto a novas oportunidades, colaborações e conexões.
          Se você tem um projeto interessante, uma oportunidade de trabalho ou
          apenas quer trocar uma ideia, não hesite em entrar em contato!
        </p>

        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-method">
              <div className="contact-icon">{method.icon}</div>
              <div className="contact-label">{method.label}</div>
              {method.link ? (
                <a href={method.link} className="contact-value">{method.value}</a>
              ) : (
                <div className="contact-value">{method.value}</div>
              )}
            </div>
          ))}
        </div>

        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>{social.icon}</span>
              {social.name}
            </a>
          ))}
        </div>

        <div className="availability">
          ✨ Disponível para novos projetos e oportunidades
        </div>
      </div>
    </section>
  );
}
