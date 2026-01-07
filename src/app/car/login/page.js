"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    if (!phone) {
      alert("Enter phone number");
      return;
    }
    else{
      
    }


    router.push("/car/login/otp");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Login to SeaNeB Autos
        </h1>

        <input
          type="text"
          placeholder="Enter phone number"
          className="w-full border p-2 mb-4 rounded text-black"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-2xl"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
}
