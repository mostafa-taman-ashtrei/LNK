import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { BiLink } from "react-icons/bi";
import { AiOutlineAppstoreAdd, AiOutlineTeam, AiOutlineHeart } from "react-icons/ai";
import { PiGraph } from "react-icons/pi";
import { DashboardMenuType } from "@/types/menu";

const dashboardMenu: DashboardMenuType[] = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Graph View", link: "/", icon: PiGraph },
    { name: "Favorite", link: "/", icon: AiOutlineHeart },

    { name: "Integrations", link: "/", icon: AiOutlineAppstoreAdd, margin: true },
    { name: "Team Space", link: "/", icon: AiOutlineTeam },
    { name: "Url Shortener", link: "/", icon: BiLink },

    { name: "Settings", link: "/", icon: RiSettings4Line, margin: true },
];

export default dashboardMenu;
