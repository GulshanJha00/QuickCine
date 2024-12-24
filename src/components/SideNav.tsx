'use client'
import { CircleUser, FileClock, Settings, WalletCards } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
const SideNav = () => {
  const sideBar = [
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
        name: "Billing",
        icon: WalletCards,
        path: "/dashboard/billing",
      },
      {
        name: "Settings",
        icon: Settings,
        path: "/dashboard/setting",
      },
      {
        name: "Profile",
        icon: CircleUser,
        path: "/dashboard/profile",
      },
  ];
  const params = usePathname();
  console.log("params is:- " + params)
  return (
    <div className="h-screen w-64 bg-[#04cecc] shadow-lg fixed z-1 pt-44 px-6">
      {sideBar.map((item, index) => (
        
          <div key={index} className="flex items-center space-x-4 p-4 ">
            <Link href={`${item.path}`}>

            <Button className={` h-12 w-48 bg-[#04cecc] shadow-lg border-cyan-500 border-2 ${params == item.path && 'bg-[#009ce8]'}`}
            >
                <item.icon />
                <h2>{item.name}</h2>
            </Button>
            </Link>
            

          </div>
      ))}
    </div>
  );
};

export default SideNav;
