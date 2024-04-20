const ProgressBar = ({ data, total,     Date, IconLogo, MiniLogo}) => {
    const calculateColor = (percentage) => {
        if (percentage >= 75) {
            return "bg-green-600";
        } else if (percentage >= 50) {
            return "bg-emerald-300";
        } else if (percentage >= 25) {
            return "bg-yellow-500";
        } else {
            return "bg-red-500";
        }
    };

    const percentage = Math.round((data / total) * 100);

    return (
        <div className="flex flex-row p-2 w-full rounded-full shadow-xl mt-8" style={{backgroundColor: 'white',
        borderRadius: '100px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'}} >
            <div className="flex flex-col flex-grow">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex-shrink-0 ml-4 text-lg font-semibold">
                        {data}
                    </div>
                   {MiniLogo && <img src={MiniLogo} alt="logo" className="w-6 h-6 ml-2" />}
                    <div className="flex-grow text-right text-lg font-semibold">
                        {Date}
                    </div>
                </div>
                <div className="flex flex-row-reverse items-center w-full h-3 bg-gray-200 rounded-full mt-3 ml-2 shadow-lg">
                    <div
                        className={`h-full rounded-full ${calculateColor(percentage)}`}
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
            {IconLogo &&
                <div className="logo-container w-50 h-16 mb-4 p-4 ml-10 rounded-full shadow-lg">
                    <img src={IconLogo} alt="Logo" className="h-full w-full object-contain" />
                </div>
            }
        </div>
    );
};

export default ProgressBar;
