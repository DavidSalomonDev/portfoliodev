const en = {
  nav: {
    about: "About",
    projects: "Projects",
    posts: "Posts",
    contact: "Contact"
  },

  home: {
    greeting:
      "Hi, I'm a Cloud, Data & AI Engineer based in El Salvador, available for remote freelance work.",
    name: "David Salomón Martínez Valladares",
    role: "Cloud · Data · AI Engineer",
    photoAlt: "David Salomón profile photo",

    aboutTitle: "About",
    about: [
      "I'm a Cloud Engineer at GBM, where I deploy, support and automate cloud environments for enterprise clients on Azure, Google Cloud, Oracle Cloud, AWS and IBM Cloud. My work sits where cloud, data and AI meet: I automate repetitive operations, turn backup data into clear daily reports for clients, and use AI tools to design and ship software faster.",
      "I hold the Azure Administrator, Google Associate Cloud Engineer and Google Professional Cloud Architect certifications, a Master of Project Management, and I'm in the final year of a Software Development Engineering degree at UES. I also coach professionals in English, so clear written and spoken communication is part of how I work."
    ],

    skillsTitle: "What I do",
    skills: [
      {
        title: "Cloud",
        items: [
          "Azure",
          "Google Cloud",
          "AWS",
          "Oracle Cloud",
          "IBM Cloud",
          "Azure CLI & PowerShell",
          "Backup & recovery",
          "Networking & security"
        ]
      },
      {
        title: "Data",
        items: [
          "SQL",
          "Python",
          "Excel & Google Sheets",
          "Automated reporting",
          "Data validation & quality",
          "Data extraction & processing"
        ]
      },
      {
        title: "AI",
        items: [
          "AI-assisted development",
          "Prompt engineering",
          "Reviewing AI outputs against criteria",
          "Workflow automation"
        ]
      },
      {
        title: "Development",
        items: ["TypeScript", "JavaScript", "React & Next.js", "Node.js", "Git"]
      }
    ],

    workTitle: "Selected work at GBM",
    workIntro:
      "Client projects are confidential, so here is what I automated rather than who for. Happy to walk through the approach in an interview.",
    work: [
      {
        title: "Monthly client reporting",
        body: "Automated how monthly client-report tasks are assigned across the team, so every report gets an owner and a due date without manual coordination."
      },
      {
        title: "Backups on Google Cloud",
        body: "Managed the automation of backup creation for client workloads on Google Cloud, making data protection consistent across projects instead of depending on manual setup."
      },
      {
        title: "Daily Azure backup reports",
        body: "Automated daily backup status reports for Azure clients, so failed or missing backups surface every morning without checking each vault by hand."
      }
    ],

    approachTitle: "How I work with data",
    approach: [
      {
        title: "Explicit criteria first",
        body: "I review work against clear rules (runbooks, rubrics, client requirements) and apply them the same way across large volumes."
      },
      {
        title: "Spot the error, then the pattern",
        body: "I flag individual mistakes, and when the same issue keeps coming back I escalate the root cause instead of patching it case by case."
      },
      {
        title: "Document judgment calls",
        body: "When guidelines don't cover a case, I make a decision I can justify and write down why, so it can be reviewed and reused."
      },
      {
        title: "Actionable feedback",
        body: "Findings are written so the next person knows exactly what is wrong and how to fix it."
      }
    ],

    experienceTitle: "Experience & education",
    experience: [
      {
        year: "Present",
        text: "Cloud Engineer at GBM. Deploying, supporting and automating cloud resources for enterprise clients on Azure, Google Cloud, Oracle Cloud, AWS and IBM Cloud."
      },
      {
        year: "Present",
        text: "English coach, helping professionals communicate clearly at work."
      },
      {
        year: "Present",
        text: "Final year of Software Development Engineering at Universidad de El Salvador (UES)."
      },
      { year: "2024", text: "Master of Project Management." },
      {
        year: "2021",
        text: "Frontend Web Development bootcamp at Acámica."
      },
      {
        year: "2021",
        text: "Bachelor of Business Administration at ESI School of Management."
      }
    ],

    certificationsTitle: "Certifications",
    issued: "Issued",
    expires: "Expires",
    practiceApp: "I also built a practice app for these exams",

    featuredTitle: "Featured projects",
    allProjects: "All projects",

    contactTitle: "Let's work together",
    contactBody:
      "Available for remote freelance and contract work in cloud operations, data analysis and AI evaluation.",
    emailMe: "Email me",
    downloadCv: "Download CV",

    webTitle: "On the web",
    personalSite:
      "david-salomon.com: my personal site, where I offer English coaching.",
    blogTitle: "My Blog",
    blog: "Articles on moving into tech, learning strategies and documenting projects.",

    beyondTitle: "Beyond work",
    beyond: {
      music: "Music",
      piano: "playing piano",
      teaching: "teaching",
      rest: "cooking and travel."
    }
  },

  projects: {
    title: "Projects",
    featuredTitle: "Featured: Cloud · Data · AI",
    privateNote:
      "Most of my cloud work is for GBM clients and lives in private repositories. See the highlights on the",
    privateLink: "home page",
    archiveTitle: "Early web projects",
    website: "Website",
    stack: "Stack",
    repo: "Repo",
    problem: "Problem",
    solution: "Solution",
    outcome: "Outcome",
    items: {
      "azure-commands": {
        title: "Azure Commands",
        summary:
          "A searchable catalog of 180+ Azure CLI and PowerShell commands and scripts with live parameter filling, ready to paste into Cloud Shell.",
        problem:
          "Day-to-day Azure administration means retyping long az and Az PowerShell commands, hunting for the right flags and keeping personal snippets scattered across notes.",
        solution:
          "A web app that organizes 95 Azure CLI commands, 81 PowerShell commands and multi-line Bash scripts by Azure product (VMs, networking, storage, AKS, Key Vault, Recovery Services Vault and more) and by operation (query, create, update, delete). Each command exposes inputs for its parameters, fills them in live and copies the final line in one click. Users can star favorites and keep their own commands, with JSON export and import.",
        outcome:
          "Open source and live on Vercel. ARM, Bicep and Terraform templates are on the roadmap."
      },
      certifications: {
        title: "Cloud Certification Practice",
        summary:
          "Exam practice app with 1,500+ questions for AZ-104, AZ-700, Google Cloud ACE, Google Cloud PCA and ITIL 4, built on a Python and Node data pipeline.",
        problem:
          "Practice material for cloud certifications usually comes as long PDF dumps: hard to study from, with no way to track progress.",
        solution:
          "A data pipeline turns the source files into structured JSON datasets: a Python script (PyMuPDF) extracts question images from the PDFs and links them to the right question, and a Node script converts each exam into a clean dataset. On top of that, a Next.js app offers timed practice exams with a full review at the end, a one-question mode with instant explanations, and an optional Spanish translation layer. Progress stays in the browser, with no backend.",
        outcome:
          "1,550 questions across 5 certifications. Adding a new exam only needs a new dataset, no code changes."
      },
      devsunited: {
        title: "Devs United",
        summary:
          "A Twitter clone built as a full stack application. Users create an account, pick a username and a favorite color, post and like other people's posts.",
        description:
          "The challenge was to build a complete web application focused on the front end, using Firebase instead of a custom back end."
      },
      hotels: {
        title: "Hotel Reservations",
        summary:
          "A front-end app to browse and filter hotels by price, size, location and availability.",
        description:
          "An interactive web application that puts programming fundamentals and React into practice."
      },
      JSprojects: {
        title: "50 Projects in 50 Days",
        summary:
          "50 vanilla JavaScript projects in 50 days, focused on DOM manipulation.",
        description:
          "Code-along of Brad Traversy's Udemy course: 50 small projects in 50 days to practice vanilla JavaScript and DOM manipulation."
      },
      gifos: {
        title: "Gifos",
        summary: "A GIF search engine connected to the Giphy API.",
        description:
          "A GIF search engine that communicates with the Giphy API, with dark mode."
      },
      weather: {
        title: "Weather App",
        summary: "A weather app using the OpenWeatherMap API.",
        description:
          "Connects to the OpenWeatherMap API to display weather information by city."
      }
    }
  }
};

export default en;
