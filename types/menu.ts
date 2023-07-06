import { IconType } from "react-icons/lib";

export interface Menu {
    id: number;
    title: string;
    path?: string;
    newTab: boolean;
    submenu?: Menu[];
};

export interface DashboardMenuType {
    name: string;
    link: string;
    icon: IconType;
    margin?: boolean;
};
