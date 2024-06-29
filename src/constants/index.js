import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    front, 
    med,
    carrent,
    jobit,
    tripguide,
    threejs,
    datascience,
    cplusplus,
    python,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Projetos",
    },
    {
      id: "contact",
      title: "Contato",
    },
  ];
  
  const services = [
    {
      title: "Data Science",
      icon: web,
    },
    {
      title: "FrontEnd Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "C++ Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "cplusplus",
      icon: cplusplus,
    },
    {
      name: "python",
      icon: python
    }
  ];
  
  const experiences = [
    {
      title: "Data Science",
      company_name: "Introdução a Ciência de Dados",
      icon: datascience,
      iconBg: "#383E56",
      date: "Junho 2023 - Janeiro 2024",
      points: [
        "Desenvolvimento de jupyter notebooks com temas relacionados a Ciência de Dados.",
        "Curso de Introdução ao Python na plataforma DataCamp.",
        "Curso de Python Intermediário na plataforma DataCamp.",
        "Curso de Manipulação de dados com Pandas na plataforma DataCamp.",
      ],
    },
    {
      title: "C++ Developer",
      company_name: "EDA",
      icon: cplusplus,
      iconBg: "#FFF",
      date: "Maio 2023 - Junho 2023",
      points: [
        "Projeto para a disciplina de Estrutura de Dados Avençada, desenvolvido em C++.",
        "Tendo com orientador o professor Dr. Atílio Gomes Luís .",
        "Aplicação de Árvores Balanceadas AVL.",
        "Realizando consultas de dados, por CPF, Nome, Data de Nascimento e etc.",
      ],
    },
    {
      title: "Controle Parental de Saúde",
      company_name: "FBD",
      icon: med,
      iconBg: "#FFF",
      date: "Nov 2023 - Dez 2023",
      points: [
        "Visa auxiliar os utilizadores a gerir a saúde de outros utilizadores, oferencendo um conjunto de funcionalidades.",
        "Inclui o acompanhamento de informações importantes sobre a saúde de quem utiliza.",
        "Sendo possível acompanhar, Atividades Físicas, Dieta, Medicação.",
        "Permite o armazenamento seguro de registros médicos, exames e prontuários.",
      ],
    },
    {
      title: "FrontEnd Devoloper",
      company_name: "Meta",
      icon: front,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "Desenvolvedor FrontEnd atuando na empresa JIT Technology.",
        "Trabalhando com as tecnologias - React, Javascript, Nodejs, Figma.",
        "Trabalhando em equipe com versionamento de código, dailys e reuniões diárias.",
        "Atuando na área de produtos, desenvolvendo um front baseado em metadados onde os componentes amplamente reaproveitados.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };