import { IoClose } from "react-icons/io5";

const BillsTable = ({data, searchTerm, onDeleteBill}) => {

    function formatDate(inputDate) {
        var parts = inputDate.split(' ');
        
        var dateParts = parts[0].split('-');
        
        var formattedDate = dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0];
        
        return formattedDate;
    }

    const filteredData = data.filter((item) => (item.full_name.toLowerCase().includes(searchTerm.toLowerCase())));

    return (
        <div className="w-full flex justify-center">
            {filteredData.length === 0 ? (
                <h2 className="text-center text-gray-400 mt-4">لا يوجد أعضاء حاليا </h2>
            ) : (
                <table className="w-11/12 text-center shadow-lg">
                    <thead className="bg-blue-200 text-black">
                        <tr className="headerTh">
                            <th>الاسم الكامل</th>
                            <th>المبلغ المسدد</th>
                            <th>تاريخ الدفع</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr
                                key={item.id}
                            >
                                <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">
                                    {item.full_name}
                                </td>
                                <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">
                                    {item.paid_price}
                                </td>
                                <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">
                                    {formatDate(item.created_at)}
                                </td>
                                <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">
                                    <button
                                        className="w-full flex justify-center rounded-sm items-center bg-red-600 py-1 shadow-lg"
                                        onClick={() => onDeleteBill(item)}
                                    >
                                        <h2 className="text-white text-lg font-bold">حدف</h2>
                                        <IoClose
                                            style={{ marginLeft: "4px", marginTop: "4px", color: "white", fontSize:28}}
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
        
    )

}

export default BillsTable;