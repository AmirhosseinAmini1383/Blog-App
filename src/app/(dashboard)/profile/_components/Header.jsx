"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import ButtonIcon from "@/ui/ButtonIcon";
import Avatar from "@/ui/Avatar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SideBar from "./SideBar";
import Drawer from "@/ui/Drawer";

function Header({}) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { user, isLoading } = useAuth();

  const togglehandler = () => setIsOpenDrawer(!isOpenDrawer);

  return (
    <header
      className={`bg-secondary-0 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}
    >
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <div className="flex items-center justify-center gap-x-4">
          <ButtonIcon
            className="block lg:hidden border-none"
            variant="outline"
            onClick={togglehandler}
          >
            {isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
          </ButtonIcon>
          <span className="text-sm lg:text-lg font-bold text-secondary-700">
            سلام؛ {user?.name}
          </span>
        </div>

        <Link href="/profile">
          <Avatar src={user ? user?.avatarUrl : ""} />
        </Link>

        <Drawer open={isOpenDrawer} onClose={togglehandler}>
          <SideBar onClose={togglehandler} />
        </Drawer>
      </div>
    </header>
  );
}
export default Header;
