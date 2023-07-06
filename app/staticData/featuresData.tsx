import { Feature } from "@/types/feature";
import { PiGraph } from "react-icons/pi";
import { AiOutlineAppstoreAdd, AiOutlineTeam } from "react-icons/ai";
import { BiLink } from "react-icons/bi";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <PiGraph size={60} />,
    title: "Graph View",
    paragraph:
      "Link urls based on categories or relevance or any criteria you choose then view them all in a clean & modern graph view.",
  },
  {
    id: 2,
    icon: <AiOutlineAppstoreAdd size={60} />,
    title: "Integrations",
    paragraph:
      "Integrate LNK with many popular platforms and tools and take your urls to the next level.",
  },
  {
    id: 3,
    icon: <BiLink size={60} />,
    title: "URL shortening",
    paragraph:
      "You don't need to put up with long urls anymore. You can shorten urls to just a few characters or even give them unique names.",
  },
  {
    id: 4,
    icon: <AiOutlineTeam size={60} />,
    title: "Team Space",
    paragraph:
      "You never have to send another link to someone ever again. Invite your team and manage their access level to your workspace.",
  },
];
export default featuresData;
