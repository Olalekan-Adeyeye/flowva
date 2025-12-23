import React from "react";
import Image from "next/image";
import {
  Home,
  Compass,
  Library,
  Layers,
  CreditCard,
  Gift,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-white border-r border-gray-100 flex flex-col fixed h-full z-10 font-sans">
      <div className="p-6 mb-2">
        <div className="flex items-center gap-2">
          <Image
            src="/flowva_logo.png"
            alt="Flowva Logo"
            width={150}
            height={60}
            className="h-[60px] w-auto object-contain"
          />
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        <NavItem icon={<Home size={20} />} label="Home" />
        <NavItem icon={<Compass size={20} />} label="Discover" />
        <NavItem icon={<Library size={20} />} label="Library" />
        <NavItem icon={<Layers size={20} />} label="Tech Stack" />
        <NavItem icon={<CreditCard size={20} />} label="Subscriptions" />
        <NavItem icon={<Gift size={20} />} label="Rewards Hub" active />
        <NavItem icon={<Settings size={20} />} label="Settings" />
      </nav>

      <div className="p-4 mt-auto border-t border-gray-100">
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-lg">
            F
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-900 truncate">Frost</p>
            <p className="text-xs text-gray-500 truncate">
              frosteye@stayhome.li
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-purple-100 text-purple-700"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <span className={active ? "text-purple-600" : "text-gray-800"}>
        {icon}
      </span>
      <span>{label}</span>
    </a>
  );
}
