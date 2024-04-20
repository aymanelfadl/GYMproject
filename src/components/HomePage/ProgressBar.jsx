const ProgressBar = ({ data, total, Date, IconLogo, MiniLogo, hasRedBorder }) => {
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
    const containerStyle = {
        backgroundColor: 'white',
        borderRadius: '100px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
        border: hasRedBorder ? '&px solid red' : 'none' 
    };

    return (
        <div className="flex flex-row pl-5 pb-4 pr-3 w-full h-16 rounded-full shadow-xl mt-8">
            <div className="flex flex-col flex-grow">
                <div className="flex flex-row justify-between h-10 items-center">
                    <div className="flex-shrink-0 ml-4 text-lg font-semibold">
                        {data}
                    </div>
                   {MiniLogo && <img src={MiniLogo} alt="logo" className="w-5 h-5 ml-2" />}
                    <div className="flex-grow text-right text-lg font-semibold">
                        {Date}
                    </div>
                </div>
                <div className="flex flex-row-reverse items-center w-full h-2 bg-gray-200 rounded-full shadow-lg" style={containerStyle}>
                    <div
                        className={`h-full rounded-full ${hasRedBorder ? "bg-red-500" : calculateColor(percentage)}`}
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
            {IconLogo &&
                <div className="logo-container h-14 mb-4 p-4 ml-10 rounded-full shadow-lg">
                    <img src={IconLogo} alt="Logo" className="h-full w-full object-contain" />
                </div>
            }
        </div>
    );
};

export default ProgressBar;
