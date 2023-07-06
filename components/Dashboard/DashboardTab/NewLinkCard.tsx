import { AiFillPlusCircle } from "react-icons/ai";

const NewLinkCard: React.FC = () => {
    return (
        <div className=" w-full flex flex-col justify-center items-center p-4 cursor-pointer">
            <div className="bg-gray-300 dark:bg-gray-800  w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-4">
                    <div className="rounded-full w-15 h-15 text-primary">
                        <AiFillPlusCircle className="text-primary" size={30} />
                    </div>

                    <div className="text-md font-bold">New Link</div>
                </div>

                <div className=" text-gray-500 font-bold text-sm mt-2">
                    Add a new link to your collection.
                </div>
            </div>
        </div>
    );
};

export default NewLinkCard;
