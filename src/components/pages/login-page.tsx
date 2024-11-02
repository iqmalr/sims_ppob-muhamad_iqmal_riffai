"use client";
import { useLoginMutation } from "@/api/userApi";
import IllustrasiLogin from "@/assets/Website Assets/Website Assets/Illustrasi-Login.png";
import { setCredentials, setError } from "@/store/slices/profile-slice";
import type { RootState } from "@/store/store";
import { LockIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../ui/input";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginMutation, { isLoading }] = useLoginMutation();
  const { error, successMessage } = useSelector(
    (state: RootState) => state.user
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginMutation(formData).unwrap();
      console.log("Login Response:", response);

      if (response.status === 0) {
        dispatch(
          setCredentials({
            token: response.data.token || "",
            message: response.message || "",
          })
        );
        console.log("Token received:", response.data.token);
        document.cookie = `token=${response.data.token}; path=/`;
        router.push("/dashboard");
      } else {
        dispatch(setError(response.message));
      }
    } catch (err: any) {
      console.error("Login error:", err);
      dispatch(setError(err.data?.message || "Login gagal"));
    }
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="w-3/5 flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-4">Login Page</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {successMessage && (
          <div className="text-green-500 mb-4">{successMessage}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
          <div className="relative">
            <MailIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Masukkan email anda"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="pl-8 w-full"
            />
          </div>
          <div className="relative">
            <LockIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Masukkan password anda"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="pl-8 w-full"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-white py-2 rounded-md hover:underline disabled:bg-blue-300"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <Link
          href="/register"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          Belum punya akun? Go to Register
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

export default LoginPage;
