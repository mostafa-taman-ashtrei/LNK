import { IconType } from "react-icons/lib";

export interface Menu {
    id: number;
    title: string;
    path?: string;
    newTab: boolean;
    submenu?: Menu[];
};

export type DashboardTabType = "Dashboard" | "Graph View" | "Favorite" | "Integrations" | "Team Space" | "Url Shortener" | "Settings"

export interface DashboardMenuType {
    name: string;
    link: DashboardTabType;
    icon: IconType;
    margin?: boolean;
};
