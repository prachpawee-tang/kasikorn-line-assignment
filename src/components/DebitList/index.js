import { useEffect, useState } from "react";
import DebitItem from "./DebitItem";

const DebitList = () => {
  const [debitItems, setDebitItems] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.example.com/debit-list")
  //       .then((response) => response.json())
  //       .then((data) => setDebitItems(data))
  //       .catch((error) => console.error("Error fetching data:", error));
  //   }, []);

  if (debitItems.length === 0) {
    return (
      <a className="main-make main-loading main-loading--order6 mb-10">
        <span className="main-make__img">
          <img src="../img/main/img-debitcard-make.png" alt="" />
        </span>
        <strong className="main-make__tit">Make your Debit Card</strong>
        <p className="main-make__dsc">
          To enjoy 0.5% cash back from online perchase.
        </p>
      </a>
    );
  }

  return (
    <div className="debit-swipe__wrap main-loading main-loading--order6">
      <div className="debit-swipe__inner">
        <div className="debit-swipe__lst" style={{ width: "1595px" }}>
          {debitItems.map((item, index) => (
            <DebitItem key={index} {...item} />
          ))}
          <a href="#" className="debit-swipe__item debit-swipe__item--all">
            See all
          </a>
        </div>
      </div>
    </div>
  );
};

export default DebitList;
