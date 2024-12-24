"use client";
import db from "@/config/db";
import { Users } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";

const Provider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      isNewUser();
    }
  }, [user]);

  const isNewUser = async () => {
    const email = user?.primaryEmailAddress?.emailAddress;
    const names = user?.fullName;
    if (!names) {
      console.error("Name is undefined");
      return;
    }
    if (!email) {
      console.error("User email is undefined");
      return;
    }
    const result = await db.select().from(Users).where(eq(Users.email, email));

    if (!result.length) {
      await db.insert(Users).values({
        name: names,
        email: email,
        imageUrl: user?.imageUrl,
      });
    }
    console.log(result)
  };

  return <div>{children}</div>;
};

export default Provider;
