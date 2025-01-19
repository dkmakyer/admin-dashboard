import {useContext} from 'react';
import "./Trends.css";
import useRandomNumbers from '../../hooks/useRandomNumber';
import SingleLineChart from '../mini-charts/trend-chart/TrendChart';
import {ProductContext} from '../../contexts/ProductsContext'

const Trends = () => {
  const generateRandomNumber = useRandomNumbers();
  const { products, error } = useContext(ProductContext);

  // const KPI = [ "Sales" , "Units" , "Advertising Cost" , "Shipping costs" , "Refund cost" , "BCMS fees" , "Cost of goods" , "Gross profit" , "Expenses" , "Net profit" , "Estimated payout" , "%Refunds" , "Sellable returns" , "Margin" , "ROI"];

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


  const displayedItems = products.slice(0,1).map((product, i) => {
    return (
      <div className="product flex flex-rows items-center">
        <img src={product.image} alt="product-image" className='w-[40px] h-[40px] mr-[0.2rem]'/><p className='text-[12px]'>{product.title.split(" ").slice(0,6)}</p>
      </div>
    );
});


  return (
    <div className='KPI-container w-[100%] p-4 text-gray-700'>
      <table className="KPI-table">
        <thead>
          <tr className='border-b'>
            <th className='border-r text-left p-[2px]'>Product</th>
            <th className='border-r text-left p-[2px]'>Chart</th>
            {months.map((month) => (
              <th key={month} className='m-[9rem] p-4 pl-[1.4rem] text-right'>{month}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {KPI.map((detail) => {
            let dataSet = [];
            for (let month of months) {
              if (detail.label === "Units" || detail.label === "Sellable returns") {
                dataSet.push(`${generateRandomNumber(50, 2000, 1)}`);
              } else if (detail.label === "Margin" || detail.label === "ROI" || detail.label === "%Refunds") {
                dataSet.push(`${generateRandomNumber(0, 20, 1)}%`);
              } else if (detail.label === "Advertising Cost" || detail.label === "Shipping costs" || detail.label === "Refund cost" || detail.label === "BCMS fees" || detail.label === "Expenses") {
                dataSet.push(`$- ${generateRandomNumber(100, 500, 1)}.00`);
              } else {
                dataSet.push(`$ ${generateRandomNumber(2000, 20000, 1)}.00`);
              }
            }

            return (
              <tr className="border-b text-[15px] h-[1.5rem]" key={detail.label}>
                <td className='border-r p-[0.2rem]'>{displayedItems}</td>
                <td className='border-r p-[0.2rem]'><SingleLineChart/></td>
                {dataSet.map((value, index) => (
                  <td key={index} className='border-b text-[12px] text-right'>{value}</td> // Populate with the calculated value for each month
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