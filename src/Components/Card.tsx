import Image from "next/image";

type CardProps = {
    id: number;
    title: string;
    description: string;
    image: string;
    prodLink: string;
    repositoryLink: string;
    technologies: string[];
}

const Card = ({ id, title, description, image, prodLink, repositoryLink, technologies }: CardProps) => {
    return (
        <div key={id} className="flex justify-between rounded-lg h-80 w-full shadow-2xl px-4 relative">
            <div className="flex justify-between h-full w-[48%]">
                <div className="p-4 flex flex-col w-full justify-between">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p>{description}</p>
                    <div className="flex flex-row justify-between">
                        <a href={prodLink} target="_blank" className="link link-hover link-accent">Voir le projet</a>
                        <a href={repositoryLink} target="_blank" className="link link-hover link-accent">Voir le code</a>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center gap-2">
                        {technologies.join(",").split(",").map((technology) => (
                            <span className="badge">{technology}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-[90%] sm:mt-8 sm:w-[49%] border-green-900 relative">
                <Image src={image} alt={title} className="rounded-t-lg" fill={true} />
            </div>
        </div>
    )
}

export default Card;