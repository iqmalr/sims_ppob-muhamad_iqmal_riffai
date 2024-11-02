"use client";
import { LockIcon, MailIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import IllustrasiLogin from "../../assets/Website Assets/Website Assets/Illustrasi-Login.png";
import { Input } from "../ui/input";

const RegisterPage = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-3/5 flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-4">SIMS PPOB</h1>
        <h2 className="text-lg mb-6">Lengkapi data untuk membuat akun</h2>
        <form className="space-y-4 w-full max-w-md">
          <div className="relative">
            <MailIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Masukkan email anda"
              type="email"
              className="pl-8 w-full"
            />
          </div>
          <div className="relative">
            <UserIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Nama Depan"
              type="text"
              className="pl-8 w-full"
            />
          </div>
          <div className="relative">
            <UserIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Nama Belakang"
              type="text"
              className="pl-8 w-full"
            />
          </div>
          <div className="relative">
            <LockIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buat Password"
              type="password"
              className="pl-8 w-full"
            />
          </div>
          <div className="relative">
            <LockIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Konfirmasi Password"
              type="password"
              className="pl-8 w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Daftar
          </button>
        </form>
        <Link
          href="/login"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          Sudah punya akun? Go to Login
        </Link>
      </div>
      <div className="w-2/5 flex justify-center items-center bg-gray-100">
        <Image
          src={IllustrasiLogin}
          alt="Illustrasi Login"
          loading="lazy"
          className="max-w-full h-auto"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
