import React from "react";
import { Bell } from "lucide-react";

interface TopbarProps {
  title: string;
  description: string;
}

export default function Topbar({ title, description }: TopbarProps) {
  return (
    <header className="flex justify-between items-start sticky top-0 bg-gray-50 p-8 z-[50]">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
      <button className="p-2.5 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors relative">
        <Bell size={20} />
        <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-gray-100"></span>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
          1
        </span>
      </button>
    </header>
  );
}
