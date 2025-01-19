import { useContext } from 'react';
import "./Dashboard.css";
import { Outlet } from 'react-router-dom';
import useRandomNumbers from '../../hooks/useRandomNumber';
import { ProductContext } from '../../contexts/ProductsContext';

const Dashboard = () => {
  const generateRandomNumber = useRandomNumbers();
  const { products, error } = useContext(ProductContext);

  const salesKpi = [
    { label: "Units" },
    { label: "Refunds" },
    { label: "Sales" },
    { label: "Ads" },
    { label: "Sellable returns" },
    { label: "Net profit" },
    { label: "Margin" },
    { label: "ROI" },
    { label: "Info" },
  ];

  // Get a single product to display
  const displayedItems = products.slice(3, 4).map((product, i) => {
    return (
      <div className="product flex flex-rows items-center" key={i}>
        <img src={product.image} alt="product-image" className='w-[40px] h-[40px] mr-[0.2rem]' />
        <p className='text-[12px]'>{product.title.split(" ").slice(0, 5).join(" ")}</p>
      </div>
    );
  });

  const salesInfo = ["Units", "Refunds", "Sales", "Ads", "Sellable returns", "Net profit", "Margin", "ROI", "Info"];

  return (
    <>
      <div className="dashboard-container p-2">
        <Outlet />
        <div className='sales-info-container mt-[4rem] w-[100%] p-4 text-gray-700'>
          <table className="sales-info-table">
            <thead>
              <tr className='border-b'>
                <th className='border-r text-left p-[2px]'>Product</th>
                {salesInfo.map((standard) => (
                  <th key={standard} className='m-[40px] p-2 pl-4 translate-x-[1rem] text-center'>{standard}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {salesKpi.map((detail) => {
                return (
                  <tr className="border-b text-[15px] h-[1.5rem]" key={detail.label}>
                    <td className='border-r p-[1.2rem]'>
                      {displayedItems}
                    </td>
                    <td className='border-b text-[12px] pl-12 text-center'>
                      {`${generateRandomNumber(50, 200, 1)}`}
                    </td>
                    <td className='border-b text-[12px] pl-12 text-center'>
                      {`${generateRandomNumber(0, 20, 1)}%`}
                    </td>
                    <td className='border-b text-[12px] pl-12 text-center'>
                      {`$ ${generateRandomNumber(2000, 20000, 1)}.00`}
                    </td>
                    <td className='border-b text-[12px] pl-12 text-center'>
                      {`$- ${generateRandomNumber(100, 500, 1)}.00`}
                    </td>
                    <td className='border-b text-[12px] pl-12 text-center'>
                      {`---`}
                    </td>
                    <td className='border-b text-[12px] pl-12 text-center'>
                      {`$ ${generateRandomNumber(50, 500, 1)}.00`}
                    </td>
                    <td className='border-b text-[12px] pl-12 text-center'>
                      {`${generateRandomNumber(0, 20, 1)}%`}
                    </td>
                    <td className='border-b text-[12px] pl-12 text-center'>
                      {`${generateRandomNumber(0, 10, 1)}%`}
                    </td>
                    <td className='border-b text-[12px] pl-12 text-center'>
                      <button className=' h-[20px] w-[60px] rounded hover:bg-gray-200'>{`More`}</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;