"use client";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import {
  Calendar,
  ChevronRight,
  Home,
  Inbox,
  LogOut,
  Search,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Dropdown from "@/components/layout/Dropdown";
import { DropdownItem } from "@/components/layout/DropdownItem";
import Topbar from "@/components/layout/client/TopBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <div className="w-80 border-r fixed border-gray-100 p-5 h-screen overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Image
          src="/logo.png"
          width={200}
          height={160}
          className="w-25 mb-8"
          alt="logo"
        />
        <aside className="flex flex-col">
          <Link
            className="font-semibold text-gray-700 flex gap-2 items-center hover:bg-gray-100 rounded-lg px-4 py-3"
            href="#"
          >
            <Home />
            <span>Home</span>
          </Link>
          <Link
            className="font-semibold text-gray-700 flex gap-2 items-center hover:bg-gray-100 rounded-lg px-4 py-3"
            href="#"
          >
            <Image
              src="/icons/notification-bing.svg"
              width={200}
              height={100}
              alt="notification bing"
              className="w-5"
            />
            <span>Notifications</span>
          </Link>
          <Link
            className="font-semibold text-gray-700 flex gap-2 items-center hover:bg-gray-100 rounded-lg px-4 py-3"
            href="#"
          >
            <Image
              src="/icons/message.svg"
              width={200}
              height={100}
              alt="notification bing"
              className="w-5"
            />

            <span>Messages</span>
          </Link>
          <Link
            className="font-semibold text-gray-700 flex gap-2 items-center hover:bg-gray-200 rounded-lg px-4 py-3"
            href="#"
          >
            <Image
              src="/icons/add-square.svg"
              width={200}
              height={100}
              alt="notification bing"
              className="w-5"
            />
            <span>Create Job</span>
          </Link>
          <Dropdown
            title={
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/profile-2user.svg"
                  width={200}
                  height={100}
                  alt="notification bing"
                  className="w-5"
                />
                <div className="text-left">
                  <p className="font-semibold">My Workforce</p>
                </div>
              </div>
            }
          >
            <DropdownItem>
              <Link
                className="font-semibold text-sm text-gray-700 flex gap-2 items-center rounded-lg"
                href="#"
              >
                <Image
                  src="/icons/add-square.svg"
                  width={50}
                  height={50}
                  alt="notification bing"
                  className="w-4"
                />
                <span>Create Job</span>
              </Link>
            </DropdownItem>
          </Dropdown>
          <Dropdown
            title={
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/briefcase.svg"
                  width={200}
                  height={100}
                  alt="notification bing"
                  className="w-5"
                />
                <div className="text-left">
                  <p className="font-semibold">Job Post</p>
                </div>
              </div>
            }
          >
            <DropdownItem>
              <Link
                className="font-semibold text-sm text-gray-700 flex gap-2 items-center rounded-lg"
                href="#"
              >
                <Image
                  src="/icons/briefcase.svg"
                  width={50}
                  height={50}
                  alt="notification bing"
                  className="w-4"
                />
                <span>Job Post</span>
              </Link>
            </DropdownItem>
          </Dropdown>
          <Dropdown
            title={
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/wallet.svg"
                  width={200}
                  height={100}
                  alt="notification bing"
                  className="w-5"
                />
                <div className="text-left">
                  <p className="font-semibold">Wallet</p>
                </div>
              </div>
            }
          >
            <DropdownItem>
              <Link
                className="font-semibold text-sm text-gray-700 flex gap-2 items-center rounded-lg"
                href="#"
              >
                <Image
                  src="/icons/briefcase.svg"
                  width={50}
                  height={50}
                  alt="notification bing"
                  className="w-4"
                />
                <span>Job Post</span>
              </Link>
            </DropdownItem>
          </Dropdown>
          <Dropdown
            title={
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/analytics.svg"
                  width={200}
                  height={100}
                  alt="notification bing"
                  className="w-5"
                />
                <div className="text-left">
                  <p className="font-semibold">Analytics</p>
                </div>
              </div>
            }
          >
            <DropdownItem>
              <Link
                className="font-semibold text-sm text-gray-700 flex gap-2 items-center rounded-lg"
                href="#"
              >
                <Image
                  src="/icons/briefcase.svg"
                  width={50}
                  height={50}
                  alt="notification bing"
                  className="w-4"
                />
                <span>Job Post</span>
              </Link>
            </DropdownItem>
          </Dropdown>
          <hr className="mt-2 border-gray-200 mx-2" />
          <Link
            className="font-semibold text-gray-700 flex gap-2 items-center hover:bg-gray-200 rounded-lg px-4 py-3"
            href="#"
          >
            <Image
              src="/icons/setting-2.svg"
              width={200}
              height={100}
              alt="notification bing"
              className="w-5"
            />
            <span>Company Profile</span>
          </Link>
          <Link
            className="font-semibold text-gray-700 flex gap-2 items-center hover:bg-gray-200 rounded-lg px-4 py-3"
            href="#"
          >
            <Image
              src="/icons/message-question.svg"
              width={200}
              height={100}
              alt="notification bing"
              className="w-5"
            />
            <span>Help & Support</span>
          </Link>
          <Link
            className="font-semibold text-gray-700 flex gap-2 items-center hover:bg-gray-200 rounded-lg px-4 py-3"
            href="#"
          >
            <Image
              src="/icons/logout.svg"
              width={200}
              height={100}
              alt="notification bing"
              className="w-5"
            />
            <span>Logout</span>
          </Link>
        </aside>
      </div>
      <div className="w-full ms-90">
        <Topbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
