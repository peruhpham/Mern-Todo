// import React, { useEffect, useState } from "react";
// import { getStats } from "../api/todoApi";

// export default function Stats() {
//   const [stats, setStats] = useState({ completed: 0, pending: 0 });

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   const fetchStats = async () => {
//     const res = await getStats();
//     // Nếu API trả về { completed: 0, pending: 0 }
//     setStats(res.data);
//     // Nếu API trả về { data: { completed: 0, pending: 0 } }
//     // setStats(res.data.data);
//   };

//   const total = Number(stats.completed) + Number(stats.pending);
//   const percent = total > 0 ? Math.round((stats.completed / total) * 100) : 0;

//   return (
//     <div className="max-w-xl mx-auto bg-white rounded shadow p-8 mt-8">
//       <h2 className="text-2xl font-bold mb-6 text-center">Thống kê công việc</h2>
//       <div className="flex justify-between mb-4">
//         <div>
//           <div className="text-gray-500">Đã hoàn thành</div>
//           <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
//         </div>
//         <div>
//           <div className="text-gray-500">Chưa hoàn thành</div>
//           <div className="text-2xl font-bold text-orange-500">{stats.pending}</div>
//         </div>
//         <div>
//           <div className="text-gray-500">Tổng cộng</div>
//           <div className="text-2xl font-bold">{total}</div>
//         </div>
//       </div>
//       <div className="mt-8">
//         <div className="flex items-center mb-2">
//           <span className="text-gray-600 mr-4">Tiến độ hoàn thành:</span>
//           <span className="font-semibold">{percent}%</span>
//         </div>
//         <div className="w-full bg-gray-200 rounded h-4 overflow-hidden">
//           <div
//             className="bg-green-500 h-4 transition-all"
//             style={{ width: `${percent}%` }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { getStats } from "../api/todoApi";

export default function Stats() {
  const [stats, setStats] = useState({ total: 0, done: 0, notDone: 0, latest: [] });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const res = await getStats();
    setStats(res.data);
  };

  const percent = stats.total > 0 ? Math.round((stats.done / stats.total) * 100) : 0;

  return (
    <div className="max-w-xl mx-auto bg-white rounded shadow p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Thống kê công việc</h2>
      <div className="flex justify-between mb-4">
        <div>
          <div className="text-gray-500">Đã hoàn thành</div>
          <div className="text-2xl font-bold text-green-600">{stats.done}</div>
        </div>
        <div>
          <div className="text-gray-500">Chưa hoàn thành</div>
          <div className="text-2xl font-bold text-orange-500">{stats.notDone}</div>
        </div>
        <div>
          <div className="text-gray-500">Tổng cộng</div>
          <div className="text-2xl font-bold">{stats.total}</div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex items-center mb-2">
          <span className="text-gray-600 mr-4">Tiến độ hoàn thành:</span>
          <span className="font-semibold">{percent}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded h-4 overflow-hidden">
          <div
            className="bg-green-500 h-4 transition-all"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
      <div className="mt-8">
        <div className="font-semibold mb-2">5 công việc gần nhất:</div>
        <ul className="list-disc pl-6 text-gray-700">
          {stats.latest?.map(item => (
            <li key={item._id}>
              <span className={item.status ? "text-green-600" : "text-orange-500"}>
                {item.title}
              </span>
              {" "}
              <span className="text-xs text-gray-400">
                ({new Date(item.createdAt).toLocaleString("vi-VN")})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}