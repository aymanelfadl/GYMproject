import { FaExternalLinkAlt } from "react-icons/fa";
import AvatareLogo from "../../assets/woman.png"
const MembersTable = () => {
    const data = [
        {
            id: 5,
            first_name: "Rashad",
            last_name: "Moore",
            date_birth: "1995-12-06",
            phone_number: "+18725704496",
            end_date: "2023-07-07",
            picture_file: AvatareLogo,
            created_at: "2024-04-18T11:06:24.000000Z",
            updated_at: "2024-04-18T11:06:24.000000Z",
            active: 1
        },
        {
            id: 17,
            first_name: "Joshua",
            last_name: "Stracke",
            date_birth: "1997-07-23",
            phone_number: "+13049533537",
            end_date: "2023-05-25",
            picture_file: "https://via.placeholder.com/640x480.png/005511?text=iusto",
            created_at: "2024-04-18T11:08:24.000000Z",
            updated_at: "2024-04-18T11:08:24.000000Z",
            active: 1
        },
        {
            id: 13,
            first_name: "Warren",
            last_name: "Wyman",
            date_birth: "2003-05-11",
            phone_number: "(567) 705-5396",
            end_date: "2023-04-19",
            picture_file: AvatareLogo,
            created_at: "2024-04-18T11:08:24.000000Z",
            updated_at: "2024-04-18T11:08:24.000000Z",
            active: 1
        },
        {
            id: 17,
            first_name: "Joshua",
            last_name: "Stracke",
            date_birth: "1997-07-23",
            phone_number: "+13049533537",
            end_date: "2023-05-25",
            picture_file: "https://via.placeholder.com/640x480.png/005511?text=iusto",
            created_at: "2024-04-18T11:08:24.000000Z",
            updated_at: "2024-04-18T11:08:24.000000Z",
            active: 1
        },
        {
            id: 17,
            first_name: "Joshua",
            last_name: "Stracke",
            date_birth: "1997-07-23",
            phone_number: "+13049533537",
            end_date: "2023-05-25",
            picture_file: "https://via.placeholder.com/640x480.png/005511?text=iusto",
            created_at: "2024-04-18T11:08:24.000000Z",
            updated_at: "2024-04-18T11:08:24.000000Z",
            active: 1
        },
        {
            id: 17,
            first_name: "Joshua",
            last_name: "Stracke",
            date_birth: "1997-07-23",
            phone_number: "+13049533537",
            end_date: "2023-05-25",
            picture_file: "https://via.placeholder.com/640x480.png/005511?text=iusto",
            created_at: "2024-04-18T11:08:24.000000Z",
            updated_at: "2024-04-18T11:08:24.000000Z",
            active: 1
        },
        {
            id: 17,
            first_name: "Joshua",
            last_name: "Stracke",
            date_birth: "1997-07-23",
            phone_number: "+13049533537",
            end_date: "2023-05-25",
            picture_file: "https://via.placeholder.com/640x480.png/005511?text=iusto",
            created_at: "2024-04-18T11:08:24.000000Z",
            updated_at: "2024-04-18T11:08:24.000000Z",
            active: 1
        },
    ];

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
                        <th>تاريخ إنتهاء التسجيل </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className="border-y-2 border-gray-200 px-4 py-2">
                                <img src={item.picture_file} alt="pic" className="w-16 h-16 object-cover rounded-full mx-auto" />
                            </td>
                            <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">{item.first_name} {item.last_name}</td>
                            <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">{calculateAge(item.date_birth)}</td>
                            <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">{item.phone_number}</td>
                            <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">{item.end_date}</td>
                            <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">
                                <div className="w-full flex justify-center items-center bg-blue-600 py-1 shadow-lg">
                                    <button className="text-white font-bold">تعديل</button>
                                    <FaExternalLinkAlt style={{ marginLeft: "10px",marginTop:"2px", color:"white" }} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default MembersTable;
