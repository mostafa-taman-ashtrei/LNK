import { BiLinkExternal } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { HiPencilAlt } from "react-icons/hi";
import { FiLink2 } from "react-icons/fi";

const LinkCard: React.FC = () => {
    return (
        <div className=" w-full flex flex-col justify-center items-center p-4 ">
            <div className="bg-gray-300 dark:bg-gray-800 w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="rounded-full w-15 h-15 p-1 border border-primary"><FiLink2 size={20} /></div>
                        <div className="text-md font-bold">Link Title</div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
                            <MdFavoriteBorder size={20} />
                        </div>

                        <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
                            <BiLinkExternal size={20} />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className=" text-gray-500 font-bold text-sm">
                        # TAG
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
                            <CiCircleRemove size={20} />
                        </div>

                        <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
                            <HiPencilAlt size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkCard;
