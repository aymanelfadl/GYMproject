import { IoClose } from "react-icons/io5";


const BillsTable = ({data, searchTerm, onDeleteBill}) => {

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        return new Intl.DateTimeFormat('en-GB').format(date);
      };

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
                              <td className="border-b-2 border-gray-200 px-4 py-3 font-bold">
                                    {item.full_name}
                                </td>
                                <td className="border-b-2 border-gray-200 px-4 py-3 font-bold">
                                    {item.paid_price}
                                </td>
                                <td className="border-b-2 border-gray-200 px-4 py-3 font-bold">
                                    {formatDate(item.created_at)}
                                </td>
                                <td className="border-b-2 border-gray-200 px-4 py-3 font-bold text-center">
                                    <div className="inline-block w-1/2">
                                        <button
                                            className="w-full flex justify-center rounded-md items-center bg-red-600 py-2"
                                            onClick={() => onDeleteBill(item)}
                                        >
                                            <h2 className="text-white font-bold">حذف</h2>
                                            <IoClose
                                                style={{ marginLeft: "4px", marginTop: "4px", color: "white", fontSize:20}}
                                            />
                                        </button>
                                    </div>
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