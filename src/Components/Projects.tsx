import Card from "./Card";

type Props = {}

const Projects = (props: Props) => {
    const portfolioProjects = [
        {
            title: "Chat App",
            description: "A chat application that allows users to create rooms and chat with each other.",
            image: "/chat-app.png",
            prodLink: "https://node-react-chat-app-6cwi.onrender.com/login",
            repositoryLink: "https://github.com/JuanR-T/node-react-chat-app",
            technologies: ["React", "NodeJS", "SocketIO"],
        },
        {
            title: "Expenses Tracker",
            description: "An application that allows users to track their expenses and incomes.",
            image: "/expenses-tracker-app.png",
            prodLink: "https://mern-graphql-expense-tracker-1.onrender.com/",
            repositoryLink: "https://github.com/JuanR-T/mern-graphql-expense-tracker",
            technologies: ["React", "NodeJS", "GraphQL", "MongoDB", "ApolloGraphQL", "TailwindCSS", "Zustand"],
        },
        {
            title: "Project Management App",
            description: "An application that allows users to manage their projects.",
            image: "/project-management-app.png",
            prodLink: "https://main.d25yzk9j3fwt2y.amplifyapp.com/dashboard",
            repositoryLink: "https://github.com/JuanR-T/nextjs-node-project-management-app",
            technologies: ["React", "NextJS", "NodeJS", "PostgreSQL", "Redux", "Prisma"],
        },
    ]
    return (
        <section id="projects" className="container md:min-h-screen">
            <h2 className="text-5xl font-serif font-bold mt-20 mb-8">Mes Projets</h2>
            <p className="text-center mt-4">See how I transformed concepts into engaging digital experiences. </p>
            <div key={1} className="relative grid md:grid-cols-1 sm:grid-cols-1 gap-6 h-full w-full mt-8">
                {portfolioProjects.map((project, projectIndex) => (
                    <Card
                        key={projectIndex}
                        id={projectIndex}
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