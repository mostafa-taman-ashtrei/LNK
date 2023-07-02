import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="bg-primary/[.03] pt-16 md:pt-20 lg:pt-28">
            <div className="container">
                <div className=" md:pb-20 lg:pb-28">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-1/2">
                            <SectionTitle
                                title="The link manager to rule them all."
                                paragraph=""
                                mb="44px"
                            />

                            <div
                                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                                data-wow-delay=".15s"
                            >
                                <p className="text-base !leading-relaxed text-body-color md:text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit molestiae exercitationem iste nulla adipisci quia praesentium tenetur accusantium esse libero perspiciatis veniam, ut aspernatur? Facere deserunt at pariatur quis distinctio!
                                </p>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2">
                            <div
                                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                                data-wow-delay=".2s"
                            >
                                <Image
                                    src="/images/assets/about-image.svg"
                                    alt="about-image"
                                    fill
                                    className="mx-auto max-w-full lg:mr-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
