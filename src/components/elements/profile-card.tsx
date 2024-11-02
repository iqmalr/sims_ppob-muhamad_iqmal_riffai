"use client";
import ProfileImage from "@/assets/Website Assets/Website Assets/ProfilePhoto.png";
import { useAppDispatch } from "@/hooks/store-hooks";
import { fetchProfile } from "@/store/slices/profile-slice";

import { RootState } from "@/store/store";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const dispatch = useAppDispatch();
  const token = useSelector((state: RootState) => state.user.token);
  const user = useSelector((state: RootState) => state.user.user);
  useEffect(() => {
    if (token) {
      dispatch(fetchProfile(token));
    }
  }, [token, dispatch]);
  return (
    <div className="w-2/5 h-[200px] flex flex-col justify-between p-4">
      <Image
        src={ProfileImage}
        width={100}
        height={100}
        className="rounded-full"
        alt="ProfileImage"
      />
      <div>
        <h1 className="text-gray-600 font-bold">Selamat datang,</h1>
        <p className="text-xl font-bold">
          {user?.first_name} {user?.last_name}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
