import { BiLinkExternal } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { HiPencilAlt } from "react-icons/hi";
import { FiLink2 } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

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
                        <div className="text-gray-500 hover:text-gray-600 cursor-pointer">
                            <MdFavoriteBorder
                                id="favorite-tooltip"
                                size={20}
                            />

                            <Tooltip
                                place="top"
                                anchorSelect="#favorite-tooltip"
                                content="Add to favorites."
                            />
                        </div>

                        <div className="text-gray-500 hover:text-gray-600 cursor-pointer">
                            <BiLinkExternal
                                size={20}
                                id="open-link"
                            />

                            <Tooltip
                                place="top"
                                anchorSelect="#open-link"
                                content="Open in a new tab."
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className=" text-gray-500 font-bold text-sm">
                        # TAG
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="text-gray-500 hover:text-gray-600 cursor-pointer">
                            <CiCircleRemove
                                size={20}
                                id="delete-link"
                            />

                            <Tooltip
                                place="bottom"
                                anchorSelect="#delete-link"
                                content="Delete link."
                            />
                        </div>

                        <div className="text-gray-500 hover:text-gray-600 cursor-pointer">
                            <HiPencilAlt
                                size={20}
                                id="edit-link"
                            />

                            <Tooltip
                                place="bottom"
                                anchorSelect="#edit-link"
                                content="Delete link."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkCard;
