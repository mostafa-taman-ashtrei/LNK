import Link from "next/link";
import SvgBackground from "./SvgBackground";

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="h-screen relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
        >
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div
                            className="wow fadeInUp mx-auto max-w-[800px] text-center"
                            data-wow-delay=".2s"
                        >
                            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandBlue to-brandPurple">
                                    LNK
                                </span>
                                {" "} modern bookmarks.
                            </h1>


                            <p className="mb-12 text-base font-medium !leading-relaxed text-black dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                                Manage all your links and bookmarks in an efficent manner with clean and modern UI.
                            </p>
                            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                <Link
                                    href="/#pricing"
                                    className="rounded-full bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                                >
                                    Get Started
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SvgBackground />
        </section>
    );
};

export default Hero;
