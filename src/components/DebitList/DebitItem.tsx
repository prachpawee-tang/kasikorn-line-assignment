import { DebitCard } from "@/types";

const DebitItem = ({
  name,
  status,
  issuer,
  color,
  borderColor,
  number,
}: DebitCard) => {
  return (
    <a
      href="#"
      className="debit-swipe__item"
      style={{
        color: color === "#ffffff" && "#97999e",
        backgroundColor: color,
        borderColor: borderColor || "transparent",
        borderWidth: borderColor ? "1px" : "0",
        borderStyle: "solid",
      }}
    >
      <strong className="debit-swipe__name">{name}</strong>
      {status === "active" ? (
        <span className="debit-swipe__etc debit-swipe__etc--active">
          <span className="debit-swipe__etc__num">
            {number
              ?.replace(/(\d{4}) (?=\d{4})/g, "$1 ")
              .split("")
              .map((char, index) =>
                index >= 7 && index <= 13 && char !== " " ? "•" : char
              )
              .join("")}
          </span>
        </span>
      ) : (
        <span className="debit-swipe__etc">{status.replace("-", " ")}</span>
      )}
      <span className="debit-swipe__issue">Issued by {issuer}</span>
    </a>
  );
};

export default DebitItem;
