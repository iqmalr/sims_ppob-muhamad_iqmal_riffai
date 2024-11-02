"use client";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Selamat Datang di SIMS PPOB</h1>
      <p className="text-lg mb-8">
        sudah bisa login menggunakan api, namun belum bisa input data topup dan
        pembayaran, namun datanya sudah muncul ketika dikonsol, belum bisa
        logout
      </p>
      <p className="text-lg mb-8">Silakan pilih opsi di bawah ini:</p>
      <div className="flex space-x-4">
        <Link href="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
