type CardProps = {
    id: number;
    title: string;
    description: string;
    image: string;
    prodLink: string;
    repositoryLink: string;
    technologies: string[];
    range?: any;
    targetScale?: number;
    progress?: any;
}

export default CardProps;