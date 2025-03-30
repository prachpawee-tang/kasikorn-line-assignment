"use client";

import Header from "@/components/Header";
import MainAccountCard from "@/components/MainAccountCard";
import MainCardHeader from "@/components/MainCardHeader";
import RecentList from "@/components/RecentList";
import DebitList from "@/components/DebitList";
import AccountList from "@/components/AccountList";
import BannerList from "@/components/BannerList";

export default function Home() {
  return (
    <div>
      <Header onMenuClick={() => {}} onCancelClick={() => {}} />

      <main className="container container--main">
        <div className="content_wrap">
          <MainCardHeader />
          <MainAccountCard />
          <RecentList />
          <DebitList />
          <AccountList />
          <BannerList />

          <div className="main-tb">
            <a href="#" className="link-to">
              Total Balance
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
