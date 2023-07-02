import { Feature } from "@/types/feature";

interface props {
    feature: Feature;
}

const SingleFeature: React.FC<props> = ({ feature }) => {
    const { icon, title, paragraph } = feature;

    return (
        <div className="w-full p-6  border-solid border-primary border-2">
            <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="flex gap-5 flex-col  sm:flex-row">

                    <div className="flex h-[65px] w-[65px] items-center justify-center rounded-full  text-primary">
                        {icon}
                    </div>

                    <h6 className="flex items-center justify-center  text-lg font-bold text-black dark:text-white sm:text-2xl lg:text-lg xl:text-lg">
                        {title}
                    </h6>
                </div>

                <p className="pr-[10px] text-sm font-medium leading-relaxed text-body-color">
                    {paragraph}
                </p>
            </div>
        </div>

    );
};

export default SingleFeature;
