"use client";
import { useEffect } from "react";
import { RootState, useAppSelector } from "../store";
import { useRouter } from "next/navigation";

export default function SessionGuard() {
  const router = useRouter();
  const { history } = useAppSelector((state: RootState) => state.userAnswers);

  useEffect(() => {
    if (history.length === 0) {
      router.push("/");
    }
  }, [history.length, router]);

  return null;
}
