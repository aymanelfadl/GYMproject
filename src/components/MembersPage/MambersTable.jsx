import EditSvg from "./EditSvg";
import MoneySvg from "./MoneySvg";

const MembersTable = ({
  data,
  searchTerm,
  onEditUser,
  onOpenHistPayment,
  OnAddPayment,
}) => {
  function calculateAge(dateOfBirthString) {
    const dateOfBirth = new Date(dateOfBirthString);
    const currentDate = new Date();

    const differenceInMillis = currentDate - dateOfBirth;

    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const age = Math.floor(differenceInMillis / millisecondsInYear);

    return age;
  }
  function formatDate(inputDate) {
    var parts = inputDate.split(" ");

    var dateParts = parts[0].split("-");

    var formattedDate = dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0];

    return formattedDate;
  }

  const filteredData = data.filter((item) =>
    item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full flex justify-center">
      {filteredData.length === 0 ? (
        <h2 className="text-center text-gray-400 mt-4">لا يوجد أعضاء حاليا</h2>
      ) : (
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
            {filteredData.map((item) => (
              <tr
                key={item.id}
                className={
                  new Date(item.end_date) < new Date()
                    ? "bg-red-200 cursor-pointer"
                    : "cursor-pointer"
                }
              >
                <td className="border-y-2 border-gray-200 px-4 py-2 cursor-pointer">
                  <img
                    src={item.picture_file}
                    alt="pic"
                    className="w-16 h-16 object-cover rounded-full mx-auto"
                  />
                </td>
                <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">
                  {item.first_name}
                </td>
                <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">
                  {calculateAge(item.date_birth)}
                </td>
                <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">
                  {item.phone_number}
                </td>
                <td className="border-y-2 border-gray-200 px-4 py-2 font-bold">
                  {formatDate(item.end_date)}
                </td>
                <td className="border-gray-200 py-4 font-bold flex justify-center items-center space-x-4">
                  <EditSvg
                    className="w-8 h-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEditUser(item);
                    }}
                  />
                  <MoneySvg
                    className="w-12 h-12"
                    onClick={(e) => {
                      e.stopPropagation();
                      OnAddPayment(item);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default MembersTable;
