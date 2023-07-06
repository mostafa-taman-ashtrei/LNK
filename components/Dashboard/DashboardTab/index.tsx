import LinkCard from "./LinkCard";
import NewLinkCard from "./NewLinkCard";
import StatCard from "./StatCard";

const DashboardTab: React.FC = () => {
    return (
        <div className="px-1 rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-1 w-full md:grid-cols-3  gap-4 mb-4">
                <StatCard
                    statTitle="Link(s)"
                    stateNumber={1000}
                />

                <StatCard
                    statTitle="Integration(s)"
                    stateNumber={5}
                />

                <StatCard
                    statTitle="Team Space(s)"
                    stateNumber={2}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <NewLinkCard />

                <LinkCard />
                <LinkCard />
                <LinkCard />
                <LinkCard />
                <LinkCard />
                <LinkCard />
                <LinkCard />
                <LinkCard />
                <LinkCard />
            </div>
        </div >
    );
};

export default DashboardTab;
