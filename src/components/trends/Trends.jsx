import { useContext, useState } from 'react';
import "./Trends.css";
import useRandomNumbers from '../../hooks/useRandomNumber';
import SingleLineChart from '../mini-charts/trend-chart/TrendChart';
import { ProductContext } from '../../contexts/ProductsContext'

const Trends = () => {
  const generateRandomNumber = useRandomNumbers();
  const { products, error } = useContext(ProductContext);

  // const KPI = [
  //   { label: "Sales" },
  //   { label: "Units" },
  //   { label: "Advertising Cost" },
  //   { label: "Shipping costs" },
  //   { label: "Refund cost" },
  // ];
  const KPI = [
    { label: "Sales" },
    { label: "Units" },
    { label: "Advertising Cost" },
    { label: "Shipping costs" },
    { label: "Refund cost" },
    { label: "BCMS fees" },
    { label: "Cost of goods" },
    { label: "Gross profit" },
    { label: "Expenses" },
    { label: "Net profit" },
    { label: "Estimated payout" },
    { label: "%Refunds" },
    { label: "Sellable returns" },
    { label: "Margin" },
    { label: "ROI" },
  ];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];


  const displayedItems = products.slice(0, 8).map((product, i) => {
    return (
      <div key={i} className="product flex flex-rows items-center">
        <img src={product.image} alt="product-image" className='w-[40px] h-[40px] mr-[0.2rem]' /><p className='text-[12px]'>{product.title.split(" ").slice(0, 3)}</p>
      </div>
    );
  });

  const [dataSet, setDataSet] = useState(["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]);
  function changeData(label) {
    let currentData = months.map((month) => {
      if (label === "Units" || label === "Sellable returns") {
        return (`${generateRandomNumber(50, 2000, 1)}`);
      } else if (label === "Margin" || label === "ROI" || label === "%Refunds") {
        return (`${generateRandomNumber(0, 20, 1)}%`);
      } else if (label === "Advertising Cost" || label === "Shipping costs" || label === "Refund cost" || label === "BCMS fees" || label === "Expenses") {
        return (`$- ${generateRandomNumber(100, 500, 1)}.00`);
      } else {
        return (`$ ${generateRandomNumber(2000, 20000, 1)}.00`);
      }
    })
    setDataSet(currentData)
    console.log(dataSet);
  }


  return (
    <div className='KPI-container w-[100%] p-4 text-gray-700 overflow-y-hidden'>
      <div className="buttons flex flex-rows justify-around border rounded h-[4rem] p-2 mb-16">
        {
          KPI.map((item) => {
            return <button key={item.label} className='w-[6rem] rounded hover:bg-gray-300 text-[12px] font-bold' onClick={() => changeData(item.label)}>{item.label}</button>
          })
        }
      </div>
      <table className="KPI-table">
        <thead>
          <tr className='border-b'>
            <th className='border-r text-left p-[2px]'>Product</th>
            <th className='border-r  p-[2px]'>Chart</th>
            {months.map((month) => (
              <th key={month} className='m-[9rem] p-4 pl-[1.4rem] text-right'>{month}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedItems.map((item, index) => {
            return (
              <tr className="border-b text-[15px] h-[1.5rem] ml-[1rem]" key={index}>
                <td className='border-r p-[0.2rem] pr-[2rem]'>{item}</td>
                <td className='border-r p-[0.2rem]'><SingleLineChart /></td>
                {dataSet.map((value, dataIndex) => (
                  <td key={`${index}-${dataIndex}`} className='border-b text-[12px] text-right'>{value}</td> // Populate with the calculated value for each month
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Trends;