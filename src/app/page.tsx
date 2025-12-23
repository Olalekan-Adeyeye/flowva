"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Calendar,
  Share2,
  Star,
  Zap,
  Gift,
  Copy,
  Facebook,
  Linkedin,
  MessageCircle,
  X,
  Banknote,
} from "lucide-react";
import Topbar from "@/components/Topbar";

const REWARDS = [
  {
    id: 1,
    title: "$5 Bank Transfer",
    description: "The $5 equivalent will be transferred to your bank account.",
    points: 5000,
    icon: <Banknote className="text-green-500" size={24} />,
    status: "locked",
  },
  {
    id: 2,
    title: "$5 PayPal International",
    description:
      "Receive a $5 PayPal balance transfer directly to your PayPal account email.",
    points: 5000,
    icon: <Banknote className="text-blue-500" size={24} />,
    status: "locked",
  },
  {
    id: 3,
    title: "$5 Virtual Visa Card",
    description:
      "Use your $5 prepaid card to shop anywhere Visa is accepted online.",
    points: 5000,
    icon: <Gift className="text-pink-500" size={24} />,
    status: "locked",
  },
];

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState<"earn" | "redeem">("earn");
  const [activeRedeemTab, setActiveRedeemTab] = useState("locked");

  return (
    <>
      <Topbar
        title="Rewards Hub"
        description="Earn points, unlock rewards, and celebrate your progress!"
      />

      {/* Main Tabs */}
      <div className="flex border-b border-gray-200 mb-10 mx-8 relative">
        <button
          onClick={() => setActiveTab("earn")}
          className={`relative px-6 py-3 text-sm font-semibold transition-colors duration-200 z-10 ${
            activeTab === "earn"
              ? "text-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Earn Points
          {activeTab === "earn" && (
            <>
              <motion.div
                layoutId="activeTabBg"
                className="absolute inset-0 bg-purple-100 rounded-t-[10px] -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
              <motion.div
                layoutId="activeTabBorder"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            </>
          )}
        </button>
        <button
          onClick={() => setActiveTab("redeem")}
          className={`relative px-6 py-3 text-sm font-semibold transition-colors duration-200 z-10 ${
            activeTab === "redeem"
              ? "text-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Redeem Rewards
          {activeTab === "redeem" && (
            <>
              <motion.div
                layoutId="activeTabBg"
                className="absolute inset-0 bg-purple-100 rounded-t-[10px] -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
              <motion.div
                layoutId="activeTabBorder"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            </>
          )}
        </button>
      </div>

      {activeTab === "earn" ? (
        <>
          {/* Your Rewards Journey Section */}
          <section className="mb-12 px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-8 bg-purple-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">
                Your Rewards Journey
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Points Balance Card */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div>
                  <div className="flex items-center gap-3 text-gray-800 font-bold text-lg mb-6 bg-gray-50 rounded-t-[20px] p-4">
                    <div className="p-1.5 bg-purple-100 rounded-full text-purple-600">
                      <Trophy size={20} />
                    </div>
                    <span>Points Balance</span>
                  </div>
                  <div className="flex justify-between items-center mb-4 px-4">
                    <span className="text-5xl font-bold text-purple-600">
                      0
                    </span>
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-sm border-2 border-yellow-300">
                      <Star className="text-white fill-white" size={24} />
                    </div>
                  </div>
                </div>

                <div className="mt-6 px-4">
                  <div className="flex justify-between text-sm font-medium text-gray-600 mb-3">
                    <span>Progress to $5 Gift Card</span>
                    <span>0/5000</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 mb-5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap-2 font-medium">
                    <span>🚀</span> Just getting started — keep earning points!
                  </p>
                </div>
              </div>

              {/* Daily Streak Card */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="flex items-center gap-3 text-gray-800 font-bold text-lg mb-6 bg-gray-50 p-4 rounded-t-[20px]">
                  <div className="p-1.5 bg-blue-50 rounded-full text-blue-400">
                    <Calendar size={20} />
                  </div>
                  <span>Daily Streak</span>
                </div>

                <div className="mb-6 px-4">
                  <span className="text-5xl font-bold text-purple-600">
                    0 day
                  </span>
                </div>

                <div className="flex justify-between mb-6 px-4">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${
                        i === 0
                          ? "bg-purple-100 text-purple-600 border-2 border-purple-200"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <p className="text-xs text-center text-gray-500 mb-5 font-medium px-4">
                  Check in daily to to earn +5 points
                </p>
                <div className="px-4">
                  <button className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-200">
                    <Zap size={18} className="fill-white" />
                    Claim Today's Points
                  </button>
                </div>
              </div>

              {/* Top Tool Spotlight Card */}
              <div className="bg-gradient-to-br from-purple-600 to-blue-400 rounded-3xl shadow-sm text-white flex flex-col relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <div className="w-32 h-32 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="flex justify-between items-center z-10 p-4">
                  <div className="flex flex-col gap-4">
                    <div className="px-3 py-1 w-fit bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-wide">
                      Featured
                    </div>
                    <h3 className="text-xl font-bold mb-1 z-10">
                      Top Tool Spotlight
                    </h3>
                    <p className="text-lg font-medium z-10 opacity-90">
                      Reclaim
                    </p>
                  </div>
                  <div className="w-14 h-14 bg-indigo-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
                    <div className="grid grid-cols-2 gap-1.5 rotate-45">
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white  text-gray-800 flex-1 flex flex-col z-10 shadow-lg">
                  <div className="flex items-start gap-3 mb-5 p-4">
                    <Calendar
                      className="text-purple-600 shrink-0 mt-1"
                      size={20}
                    />
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      Reclaim.ai is an AI-powered calendar assistant that
                      automatically schedules your tasks, meetings, and breaks
                      to boost productivity. Free to try — earn Flowva Points
                      when you sign up!
                    </p>
                  </div>

                  <div className="mt-auto flex gap-3 border-t border-gray-200 p-4">
                    <button className="flex-1 py-2.5 bg-purple-600 text-white rounded-xl text-sm font-bold hover:bg-purple-700 transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-purple-200">
                      <span className="text-lg leading-none">+</span> Sign up
                    </button>
                    <button className="flex-1 py-2.5 bg-purple-50 text-purple-700 rounded-xl text-sm font-bold hover:bg-purple-100 transition-colors flex items-center justify-center gap-1.5">
                      <Gift size={16} /> Claim 50 pts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Earn More Points Section */}
          <section className="mb-12 px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-8 bg-purple-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">
                Earn More Points
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Refer Card */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                    <Star size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Refer and win 10,000 points!
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  Invite 3 friends by Nov 20 and earn a chance to be one of 5
                  winners of{" "}
                  <span className="text-purple-600 font-bold">
                    10,000 points
                  </span>
                  . Friends must complete onboarding to qualify.
                </p>
              </div>

              {/* Share Stack Card */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                    <Share2 size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Share Your Stack
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      Earn +25 pts
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 bg-gray-50 p-4 rounded-2xl">
                  <span className="text-gray-700 font-medium text-sm">
                    Share your tool stack
                  </span>
                  <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-purple-200 transition-colors">
                    <Share2 size={16} /> Share
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Refer & Earn Section */}
          <section className="px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-8 bg-purple-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">Refer & Earn</h2>
            </div>

            <div className="bg-purple-50/50 p-8 rounded-3xl border border-purple-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white rounded-xl text-purple-600 shadow-sm">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"></div>
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Share Your Link
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Invite friends and earn 25 points when they join!
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    0
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Referrals
                  </div>
                </div>
                <div className="text-center border-l border-gray-200">
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    0
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Points Earned
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Your personal referral link:
                </label>
                <div className="flex gap-2">
                  <div className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-600 text-sm flex items-center justify-between">
                    <span className="truncate">
                      https://app.flowvahub.com/signup/?ref=frost2269
                    </span>
                    <button className="text-purple-600 hover:text-purple-700">
                      <Copy size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <SocialButton
                  icon={<Facebook size={20} />}
                  color="bg-[#1877F2]"
                />
                <SocialButton icon={<X size={20} />} color="bg-black" />
                <SocialButton
                  icon={<Linkedin size={20} />}
                  color="bg-[#0A66C2]"
                />
                <SocialButton
                  icon={<MessageCircle size={20} />}
                  color="bg-[#25D366]"
                />
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-purple-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900">
              Redeem Your Points
            </h2>
          </div>

          {/* Sub Tabs */}
          <div className="flex gap-8 mb-10 border-b border-gray-100 pb-px">
            {[
              { id: "all", label: "All Rewards", count: 8 },
              { id: "unlocked", label: "Unlocked", count: 0 },
              { id: "locked", label: "Locked", count: 7 },
              { id: "coming", label: "Coming Soon", count: 1 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveRedeemTab(tab.id)}
                className={`relative pb-4 text-sm font-medium transition-colors ${
                  activeRedeemTab === tab.id
                    ? "text-purple-600"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{tab.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      activeRedeemTab === tab.id
                        ? "bg-purple-100 text-purple-600"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </div>
                {activeRedeemTab === tab.id && (
                  <motion.div
                    layoutId="activeRedeemTabBorder"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Rewards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REWARDS.map((reward) => (
              <div
                key={reward.id}
                className="bg-white rounded-3xl border border-gray-100 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                  {reward.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reward.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 px-4">
                  {reward.description}
                </p>
                <div className="flex items-center gap-1.5 text-yellow-500 font-bold mb-8">
                  <Star size={18} className="fill-yellow-500" />
                  <span>{reward.points} pts</span>
                </div>
                <button className="w-full py-3.5 bg-gray-100 text-gray-400 rounded-2xl font-bold cursor-not-allowed">
                  Locked
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function SocialButton({
  icon,
  color,
}: {
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <button
      className={`${color} text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm`}
    >
      {icon}
    </button>
  );
}
