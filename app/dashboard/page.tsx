"use client";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { BiLink } from "react-icons/bi";
import { AiOutlineAppstoreAdd, AiOutlineTeam, AiOutlineHeart } from "react-icons/ai";
import { PiGraph } from "react-icons/pi";

const Dashboard: React.FC = () => {
    const [openDashboardMenu, setOpenDashboardMenu] = useState(false);
    const handleToggleDashboardMenu = () => setOpenDashboardMenu((prev) => !prev);

    const menus = [
        { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
        { name: "Graph View", link: "/", icon: PiGraph },
        { name: "Favorite", link: "/", icon: AiOutlineHeart },

        { name: "Integrations", link: "/", icon: AiOutlineAppstoreAdd, margin: true },
        { name: "Team Space", link: "/", icon: AiOutlineTeam },
        { name: "Url Shortener", link: "/", icon: BiLink },

        { name: "Setting", link: "/", icon: RiSettings4Line, margin: true },
    ];

    return (
        <div className=" pt-[90px] pb-[90px]">
            <div className="min-h-screen flex">
                <section className="flex gap-6">
                    <div className={`bg-gray-300 dark:bg-gray-800 rounded-md min-h-screen ${openDashboardMenu ? "w-72" : "w-16"} duration-500  px-4`}>
                        <div className="py-3 flex justify-end">
                            <HiMenuAlt3
                                size={26}
                                className="cursor-pointer"
                                onClick={handleToggleDashboardMenu}
                            />
                        </div>


                        <div className="mt-4 flex flex-col gap-4 relative">
                            {menus?.map((menu, i) => (
                                <div
                                    key={i}
                                    className={` ${menu?.margin && "mt-5"} group flex items-center text-sm  gap-3.5 font-medium p-2  rounded-md cursor-pointer`}
                                >
                                    <div>
                                        {React.createElement(menu?.icon, { size: "20" })}
                                    </div>
                                    <h2
                                        style={{
                                            transitionDelay: `${i + 3}00ms`,
                                        }}
                                        className={`whitespace-pre duration-500 ${!openDashboardMenu && "opacity-0 translate-x-28 overflow-hidden"
                                            }`}
                                    >
                                        {menu?.name}
                                    </h2>
                                    <h2
                                        className={`${openDashboardMenu && "hidden"
                                            } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                                    >
                                        {menu?.name}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <main className="flex-1 min-w-0 overflow-auto m-3">

                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default Dashboard;
