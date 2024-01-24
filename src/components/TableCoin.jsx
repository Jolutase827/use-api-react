import React from "react";
import CoinRow from "./CoinRow";

const TableCoin = ({ coins,search }) => {
  const filteredCoins = coins.filter((coin)=>
  coin.name.toLowerCase().includes(search.toLowerCase()))
  const titles = ["#", "COIN", "PRICE", "PRICE CHANGE", "24H VOLUME"];
  return (
    <table>
      <thead>
        <tr>
          {titles.map(title=>(
            <th>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow coin={coin} key={index} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoin;
