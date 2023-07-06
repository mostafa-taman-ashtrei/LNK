"use client";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import dashboardMenu from "@/staticData/dashboardMenu";
import { DashboardTabType } from "@/types/menu";
import { v4 as uuidv4 } from "uuid";
import DashboardTab from "@/components/Dashboard/DashboardTab";


const Dashboard: React.FC = () => {
    const [openDashboardMenu, setOpenDashboardMenu] = useState(false);
    const handleToggleDashboardMenu = () => setOpenDashboardMenu((prev) => !prev);

    const [activeTab, setActiveTab] = useState<DashboardTabType>("Dashboard");
    const handleLinkClick = (tab: DashboardTabType) => setActiveTab(tab);

    return (
        <div className="pt-[90px]">
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
                            {dashboardMenu.map((menu, i) => (
                                <div
                                    key={uuidv4()}
                                    onClick={() => handleLinkClick(menu.link)}
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

                <main className="flex-1 min-w-0 overflow-auto">
                    {
                        activeTab == "Dashboard" ? <DashboardTab />
                            : <h1>{activeTab}</h1>
                    }
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
