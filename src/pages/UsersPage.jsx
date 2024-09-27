import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import { UserCheck, UserIcon, UserPlus, UsersIcon, UserX } from "lucide-react";
import StatCard from "../components/common/StatCard";
import UserTable from "../components/users/UserTable";

const userStats = {
  totalUsers: 271020,
  newUsersToday: 271,
  activeUsers: 120299,
  churnRate: "2.7%",
};

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* {STATS } */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UserIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="New UsersToday"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>
        <UserTable />
      </main>
    </div>
  );
};

export default UsersPage;
