const MainCardHeader = ({ greeting, name = "User" }) => {
  return (
    <div className="main-top">
      <h1 className="main-top__tit main-loading main-loading--order1">
        {greeting || `Have a nice day ${name}`}
      </h1>
    </div>
  );
};

export default MainCardHeader;
