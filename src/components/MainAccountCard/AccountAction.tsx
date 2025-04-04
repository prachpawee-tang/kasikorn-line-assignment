const AccountActions = () => (
  <div className="main-acc__bottom" data-testid="main-actions">
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
        <a
          href="#"
          className="main-acc__link main-acc__link--withdrawal"
          role="link"
        >
          Withdrawal
        </a>
        <a href="#" className="main-acc__link main-acc__link--qr" role="link">
          QR scan
        </a>
        <a
          href="#"
          className="main-acc__link main-acc__link--addmoney"
          role="link"
        >
          Add money
        </a>
      </div>
    </div>
  </div>
);

export default AccountActions;
