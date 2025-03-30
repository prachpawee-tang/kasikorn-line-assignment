const AccountActions = () => (
  <div>
    <div className="main-acc__ani_box">
      <div className="main-acc__ani__item">
        <span className="main-acc__ani_img1"></span>
        <span className="main-acc__ani_img2"></span>
      </div>
      <div className="main-acc__ani__item2">
        <span className="main-acc__ani_img3"></span>
      </div>
    </div>
    <div className="main-acc__link__box">
      <div className="main-acc__link__item">
        <a href="#" className="main-acc__link main-acc__link--withdrawal">
          Withdrawal
        </a>
        <a href="#" className="main-acc__link main-acc__link--qr">
          QR scan
        </a>
        <a href="#" className="main-acc__link main-acc__link--addmoney">
          Add money
        </a>
      </div>
    </div>
  </div>
);

export default AccountActions;
