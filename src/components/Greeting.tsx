import { useAppSelector } from "@/redux/hook";

const Greeting = () => {
  const { greetingMessage, name } = useAppSelector((state) => state.user);

  return (
    <div className="main-top">
      <h1
        className="main-top__tit main-loading main-loading--order1"
        role="heading"
        aria-level={1}
      >
        {greetingMessage || `Have a nice day ${name}`}
      </h1>
    </div>
  );
};

export default Greeting;
