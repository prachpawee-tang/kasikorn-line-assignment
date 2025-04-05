"use client";

import React, { useState } from "react";
import PinInput from "@/components/PinInput";
import PinPad from "@/components/PinPad";
import { useRouter } from "next/navigation";

const ATTEMPTS = 3;
const PIN_LENGTH = 6;

const PasscodePage = ({
  userPhoto = "https://dummyimage.com/200x200/999/fff",
  userName = "Interview User",
}) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(ATTEMPTS);

  const router = useRouter();

  const handleKeyPress = (value) => {
    if (pin.length < PIN_LENGTH) {
      const newPin = pin + value;
      setPin(newPin);
      setError(false);

      if (newPin.length === PIN_LENGTH) {
        if (newPin === "111111") {
          router.push("/");
          sessionStorage.setItem("authenticated", "true");
        } else {
          setError(true);
          setAttempts(attempts - 1);
          setPin("");
        }
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <main className="container container--pin-type max-h-[100dvh]">
      <div className="pin">
        <div className="pin__top">
          <span className="pin__photo">
            <img src={userPhoto} alt={userName} />
          </span>
          <h1 className="pin__name">{userName}</h1>
          {error && (
            <p className="pin__dsc">
              Invalid PIN Code.
              <br />
              You have {attempts} attempt left.
            </p>
          )}

          <PinInput pinLength={PIN_LENGTH} currentLength={pin.length} />
        </div>

        <div className="pin__btm">
          <a
            href="#"
            className="pin__login"
            onClick={() => router.push("/login")}
          >
            Login with ID / Password
          </a>
          <span className="pin__kb">Powered by TestLab</span>
          <PinPad
            onKeyPress={handleKeyPress}
            onDelete={handleDelete}
            disabled={attempts === 0}
          />
        </div>
      </div>
    </main>
  );
};

export default PasscodePage;
