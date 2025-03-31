import { useEffect, useState } from "react";
import DebitItem from "./DebitItem";

// name, status, issuer, color, borderColor, number
const MockDebitData = [
  {
    number: "9440 7812 3456 3115",
    color: "#00a1e2", // Blue
    name: "My Salary",
    issuer: "TestLab",
    status: "in-progress",
  },
  {
    number: "9440 7834 5678 3115",
    color: "#ff8300", // Orange
    name: "For My Dream",
    issuer: "TestLab",
    status: "in-progress",
  },
  {
    number: "9440 7856 7890 3115",
    color: "#ffffff", // White
    name: "For My Dream",
    issuer: "TestLab",
    borderColor: "#f2f3f7",
    issuerColor: "#d3d3d2",
  },
  {
    number: "9440 7878 9012 3115",
    color: "#91c9ee", // Light Blue
    name: "For My Dream",
    issuer: "TestLab",
  },
];

const DebitList = ({ items = MockDebitData }) => {
  const [debitItems, setDebitItems] = useState(items);

  if (debitItems.length === 0) {
    return (
      <a className="main-make main-loading main-loading--order6">
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
