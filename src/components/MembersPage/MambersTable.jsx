import { FaExternalLinkAlt } from "react-icons/fa";

const MembersTable = ({ data, searchTerm }) => {
    function calculateAge(dateOfBirthString) {
        const dateOfBirth = new Date(dateOfBirthString);
        const currentDate = new Date();

        const differenceInMillis = currentDate - dateOfBirth;

        const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
        const age = Math.floor(differenceInMillis / millisecondsInYear);

        return age;
    }

    return (
        <div className="w-full flex justify-center">
            <table className="w-11/12 text-center shadow-lg">
                <thead className="bg-blue-200 text-black">
                    <tr className="headerTh">
                        <th>الصورة</th>
                        <th>الاسم الكامل</th>
                        <th>العمر</th>
                        <th>الهاتف</th>
                        <th>تاريخ إنتهاء التسجيل</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        .filter(
                            (item) =>
                                item.active === 1 &&
                                (item.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    item.last_name.toLowerCase().includes(searchTerm.toLowerCase()))
                        )
                        .map((item) => (
                            <tr key={item.id} className={new Date(item.end_date) < new Date() ? "bg-red-200" : ""}>
                                <td className="border-y-2 border-gray-200 px-4 py-2">
                                    <img src={item.picture_file} alt="pic" className="w-16 h-16 object-cover rounded-full mx-auto" />
                                </td>
                                <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">
                                    {item.first_name} {item.last_name}
                                </td>
                                <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">{calculateAge(item.date_birth)}</td>
                                <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">{item.phone_number}</td>
                                <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">{item.end_date}</td>
                                <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">
                                    <button className="w-full flex justify-center items-center bg-blue-600 py-1 shadow-lg">
                                        <h2  className="text-white font-bold">تعديل</h2>
                                        <FaExternalLinkAlt style={{ marginLeft: "10px", marginTop: "2px", color: "white" }} />
                                    </button>
                                    
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default MembersTable;
