// import {useContext} from 'react';
// import "./Trends.css";
// import useRandomNumbers from '../../hooks/useRandomNumber';
// import SingleLineChart from '../mini-charts/trend-chart/TrendChart';
// import {ProductContext} from '../../contexts/ProductsContext'

// const Trends = () => {
//   const generateRandomNumber = useRandomNumbers();
//   const { products, error } = useContext(ProductContext);


//   const KPI = [
//     { label: "Sales" },
//     { label: "Units" },
//     { label: "Advertising Cost" },
//     { label: "Shipping costs" },
//     { label: "Refund cost" },
//     { label: "BCMS fees" },
//     { label: "Cost of goods" },
//     { label: "Gross profit" },
//     { label: "Expenses" },
//     { label: "Net profit" },
//     { label: "Estimated payout" },
//     { label: "%Refunds" },
//     { label: "Sellable returns" },
//     { label: "Margin" },
//     { label: "ROI" },
//   ];
//   const months = [
//     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//     "July", "Aug", "Sept", "Oct", "Nov", "Dec"
//   ];

//   const displayedItems = products.slice(0,1).map((product, i) => {
//     return (
//       <div className="product flex flex-rows items-center">
//         <img src={product.image} alt="product-image" className='w-[40px] h-[40px] mr-[0.2rem]'/><p className='text-[12px]'>{product.title.split(" ").slice(0,5)}</p>
//       </div>
//     );
// });


//   return (
//     <div className='KPI-container w-[100%] p-4 text-gray-700'>
//       <table className="KPI-table">
//         <thead>
//           <tr className='border-b'>
//             <th className='border-r text-left p-[2px]'>Product</th>
//             <th className='border-r text-left p-[2px]'>Chart</th>
//             {months.map((month) => (
//               <th key={month} className='m-[9rem] p-4 pl-[1.4rem] text-right'>{month}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {KPI.map((detail) => {
//             let dataSet = [];
//             for (let month of months) {
//               if (detail.label === "Units" || detail.label === "Sellable returns") {
//                 dataSet.push(`${generateRandomNumber(50, 2000, 1)}`);
//               } else if (detail.label === "Margin" || detail.label === "ROI" || detail.label === "%Refunds") {
//                 dataSet.push(`${generateRandomNumber(0, 20, 1)}%`);
//               } else if (detail.label === "Advertising Cost" || detail.label === "Shipping costs" || detail.label === "Refund cost" || detail.label === "BCMS fees" || detail.label === "Expenses") {
//                 dataSet.push(`$- ${generateRandomNumber(100, 500, 1)}.00`);
//               } else {
//                 dataSet.push(`$ ${generateRandomNumber(2000, 20000, 1)}.00`);
//               }
//             }

//             return (
//               <tr className="border-b text-[15px] h-[1.5rem]" key={detail.label}>
//                 <td className='border-r p-[0.2rem]'>{displayedItems}</td>
//                 <td className='border-r p-[0.2rem]'><SingleLineChart/></td>
//                 <td className='border-b text-[12px] pl-12 text-center'>
//                       {`${generateRandomNumber(50, 200, 1)}`}
//                     </td>
//                     <td className='border-b text-[12px] pl-12 text-center'>
//                       {`${generateRandomNumber(0, 20, 1)}%`}
//                     </td>
//                     <td className='border-b text-[12px] pl-12 text-center'>
//                       {`$ ${generateRandomNumber(2000, 20000, 1)}.00`}
//                     </td>
//                     <td className='border-b text-[12px] pl-12 text-center'>
//                       {`$- ${generateRandomNumber(100, 500, 1)}.00`}
//                     </td>
//                     <td className='border-b text-[12px] pl-12 text-center'>
//                       {`---`}
//                     </td>
//                     <td className='border-b text-[12px] pl-12 text-center'>
//                       {`$ ${generateRandomNumber(50, 500, 1)}.00`}
//                     </td>
//                     <td className='border-b text-[12px] pl-12 text-center'>
//                       {`${generateRandomNumber(0, 20, 1)}%`}
//                     </td>
//                     <td className='border-b text-[12px] pl-12 text-center'>
//                       {`${generateRandomNumber(0, 10, 1)}%`}
//                     </td>
//                     <td className='border-b text-[12px] pl-12 text-center'>
//                       <button className=' h-[20px] w-[60px] rounded hover:bg-gray-400'>{`More`}</button>
//                     </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Trends;


import LineChart from "../mini-charts/line-chart/LineChart";
import DetailsContainer from "../details-container/DetailsContainer";
import Calendar from "../calendar/Calendar";

const Charts = () => {
  return (
    <div className="chart-container flex flex-rows h-[60vh]">
      <div className="w-[60%] h-[100%]">
        <LineChart />
      </div>
      <div className="relative translate-x-[12rem]">
        <div className="flex flex-rows items-center justify-between w-[16.4vw] translate-x-[-1rem]">
          <Calendar />
          <button className="fixed top-0 translate-x-[9.3rem] secondDateButton p-[3px] rounded hover:bg-blue-200 text-white-500">
            All Period
          </button>
        </div>
        <div className="fixed top-0 translate-y-[2rem] z-[-5]">
        <DetailsContainer
          hideTop={true}
          sales="1,178.23"
          cost="32.04"
          gross="574.33"
          net="89.11"
          payout="849.32"
        />
        </div>
      </div>
    </div>
  );
};

export default Charts;
