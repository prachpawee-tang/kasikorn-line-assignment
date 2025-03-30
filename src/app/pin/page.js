"use client";

import React, { useState } from "react";
import PinInput from "@/components/PinInput";
import PinPad from "@/components/PinPad";

const PinPage = ({
  userPhoto = "https://dummyimage.com/200x200/999/fff",
  userName = "Interview User",
  pinLength = 6,
  showError = false,
  attemptsLeft = 3,
  onLoginWithIdPassword,
  onPinSubmit,
}) => {
  const [pin, setPin] = useState("");

  const handleKeyPress = (value) => {
    if (pin.length < pinLength) {
      const newPin = pin + value;
      setPin(newPin);

      if (newPin.length === pinLength) {
        onPinSubmit(newPin);
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <main className="container container--pin-type">
      <div className="pin">
        <div className="pin__top">
          <span className="pin__photo">
            <img src={userPhoto} alt={userName} />
          </span>
          <h1 className="pin__name">{userName}</h1>
          {showError && (
            <p className="pin__dsc">
              Invalid PIN Code.
              <br />
              You have {attemptsLeft} attempt left.
            </p>
          )}
          <PinInput pinLength={pinLength} currentLength={pin.length} />
        </div>
        <div className="pin__btm">
          <a href="#" className="pin__login" onClick={onLoginWithIdPassword}>
            Login with ID / Password
          </a>
          <span className="pin__kb">Powered by TestLab</span>
          <PinPad onKeyPress={handleKeyPress} onDelete={handleDelete} />
        </div>
      </div>
    </main>
  );
};

export default PinPage;
