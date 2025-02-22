import React from 'react'
import "./Tiles.css"
import SalesContainer from '../sales-container/SalesContainer'

const Tiles = () => {
  return (
    <div className='flex flex-row gap-2 w-[100%]'>
      <SalesContainer time="Today" date="Jan 17" bg="first" sales="575.85" orders="56" units="58" refunds="1" cost="17.36" payout="407.36" gross="294.92" net="94.92" topLoss={""} downLoss={""}/>
      <SalesContainer time="Yesterday" date="Jan 16" bg="second" sales="602.38" orders="57" units="61" refunds="4" cost="14.68" payout="441.96" gross="385.76" net="185.76" topLoss={""} downLoss={""}/>
      <SalesContainer time="Month to date" date="Jan 16 - Jan 17" bg="third" sales="1,178.23" orders="113" units="119" refunds="5" cost="32.04" payout="849.32" gross="574.33" net="89.11" topLoss={"-28.2%"} downLoss={"-111.5%"}/>
      <SalesContainer time="This month(forecast)" date="Jan 1 - Jan 31" bg="forth" sales="20,673.28" orders="1810" units="2154" refunds="75" cost="611.94" payout="11,523.67" gross="9,925.63" net="3,004.05" topLoss={"+3.3%"} downLoss={"-160.5%"}/>
      <SalesContainer time="Last month" date="Dec 1 - Dec 31" bg="fifth" sales="20,006.28" orders="1752" units="2084" refunds="71" cost="592.15" payout="11,523.67" gross="9,669.73" net="5,006.73" topLoss={"+3.5%"} downLoss={"-37.7%"}/>
    </div>
  )
}

export default Tiles
