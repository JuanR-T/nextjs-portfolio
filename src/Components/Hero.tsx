
const Hero = () => {
    return (
        <section id="hero" className="hero bg-base-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="/juan-memoji-working.png"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Salut c'est Juan !</h1>
                    <p className="py-6">
                        Je suis un développeur fullstack passionné par la technologie et le design. J'aime créer des applications web et mobiles qui ont un impact positif sur les gens.
                        <br />
                        <br />
                        Je suis également un grand fan de la culture pop et des jeux vidéo. Si vous avez un projet ou une idée que vous aimeriez concrétiser, n'hésitez pas à me contacter.
                    </p>
                    <button className="btn btn-success hover:opacity-80">Télécharger mon CV</button>
                </div>
            </div>
        </section>
    );
};
export default Hero;