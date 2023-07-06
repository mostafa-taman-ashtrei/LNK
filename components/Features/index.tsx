import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "@/staticData/featuresData";
import { v4 as uuidv4 } from "uuid";

const Features: React.FC = () => {
    return (
        <section
            id="features"
            className="py-16 md:py-20 lg:py-28"
        >
            <div className="container">
                <SectionTitle
                    title="Our Features"
                    paragraph="No matter what your needs are there are features for you."
                    center
                    mb="50px"
                />

                <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
                    {featuresData.map((feature) => (
                        <SingleFeature key={uuidv4()} feature={feature} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
