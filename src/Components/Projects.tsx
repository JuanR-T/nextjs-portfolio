import Card from "./Card";

type Props = {}

const Projects = (props: Props) => {
    const portfolioProjects = [
        {
            id: 1,
            title: "Chat App",
            description: "A chat application that allows users to create rooms and chat with each other.",
            image: "/chat-app.png",
            prodLink: "https://node-react-chat-app-6cwi.onrender.com/login",
            repositoryLink: "https://github.com/JuanR-T/node-react-chat-app",
            technologies: ["React", "Node.js", "Socket.io"],
        },
        {
            id: 2,
            title: "Expenses Tracker",
            description: "An application that allows users to track their expenses and incomes.",
            image: "/expenses-tracker-app.png",
            prodLink: "https://mern-graphql-expense-tracker-1.onrender.com/",
            repositoryLink: "https://github.com/JuanR-T/mern-graphql-expense-tracker",
            technologies: ["React", "Node.js", "GraphQL", "MongoDB", "Apollo Client", "Tailwind CSS"],
        },
        {
            id: 3,
            title: "Project Management App",
            description: "An application that allows users to manage their projects.",
            image: "/project-management-app.png",
            prodLink: "https://main.d25yzk9j3fwt2y.amplifyapp.com/dashboard",
            repositoryLink: "https://github.com/JuanR-T/nextjs-node-project-management-app",
            technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Redux Toolkit", "Prisma", "Material-UI"],
        },
    ]
    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center items-center w-full px-36">
            <h2 className="text-3xl font-serif font-bold py-4">Mes Projets</h2>
            <p className="text-center mt-4">See how I transformed concepts into engaging digital experiences. </p>
            <div key={1} className="grid md:grid-cols-1 sm:grid-cols-1 gap-6 h-full w-full mt-8">
                {portfolioProjects.map((project) => (
                    <Card
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        prodLink={project.prodLink}
                        repositoryLink={project.repositoryLink}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </section>

    )
}

export default Projects;