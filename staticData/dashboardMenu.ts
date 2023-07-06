import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { BiLink } from "react-icons/bi";
import { AiOutlineAppstoreAdd, AiOutlineTeam, AiOutlineHeart } from "react-icons/ai";
import { PiGraph } from "react-icons/pi";
import { DashboardMenuType } from "@/types/menu";

const dashboardMenu: DashboardMenuType[] = [
    { name: "Dashboard", link: "Dashboard", icon: MdOutlineDashboard },
    { name: "Graph View", link: "Graph View", icon: PiGraph },
    { name: "Favorite", link: "Favorite", icon: AiOutlineHeart },

    { name: "Integrations", link: "Integrations", icon: AiOutlineAppstoreAdd, margin: true },
    { name: "Team Space", link: "Team Space", icon: AiOutlineTeam },
    { name: "Url Shortener", link: "Url Shortener", icon: BiLink },

    { name: "Settings", link: "Settings", icon: RiSettings4Line, margin: true },
];

export default dashboardMenu;
