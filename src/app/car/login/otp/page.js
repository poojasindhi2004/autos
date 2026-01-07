"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Otp() {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const verifyOtp = () => {
    if (otp.length !== 6) {
      alert("Enter valid 6-digit OTP");
      return;
    }

    alert("OTP verified successfully");

    router.push("/car");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-2xl font-bold text-black mb-4 text-center">
          Verify OTP
        </h2>

        <input
          type="text"
          placeholder="Enter OTP"
          className=" w-full border border-black  p-2 mb-4 rounded text-black  "
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button
          onClick={verifyOtp}
          className="w-full bg-green-700 text-white py-2 rounded-2xl"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}
