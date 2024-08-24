const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="item-center flex flex-col justify-between xl:flex-row xl:pb-24 xl:pt-8">
                    <div className="text-center xl:text-left">
                        <span className="text-xl">Software Developer</span>
                        <h1 className="h1 mb-6">
                            Hello I'm
                            <br /> <span className="text-accent">Somrita Banerjee</span>
                        </h1>
                        <p className="mb-9 max-w-[500px] text-white/80">
                            I excel at crafting elegant digital experiences and I am proficient in
                            various programming languages and technologies.{" "}
                        </p>
                    </div>
                    <div>photo</div>
                </div>
            </div>
        </section>
    );
};

export default Home;
