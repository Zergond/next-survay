"use client";
import { useEffect } from "react";
import { RootState, useAppSelector } from "../store";
import { useRouter } from "next/navigation";

const SessionGuard = () => {
  const router = useRouter();
  const { history } = useAppSelector((state: RootState) => state.userAnswers);

  useEffect(() => {
    if (history.length === 0) {
      router.replace("/");
    }
  }, [history.length, router]);

  return null;
};

export default SessionGuard;
