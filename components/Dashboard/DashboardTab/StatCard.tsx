interface props {
    statTitle: string;
    stateNumber: number;
}

const StatCard: React.FC<props> = ({ statTitle, stateNumber }) => {
    return (
        <div className="flex items-center justify-center h-24 mx-1 rounded-xl bg-gray-300 dark:bg-gray-800">
            <div className="text-center">
                <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                    {stateNumber}
                </h6>
                <p className="font-bold">{statTitle}</p>
            </div>
        </div>
    );
};

export default StatCard;
