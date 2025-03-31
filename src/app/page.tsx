"use client";

import Header from "@/components/Header";
import MainAccountCard from "@/components/MainAccountCard";
import MainCardHeader from "@/components/MainCardHeader";
import RecentList from "@/components/RecentList";
import DebitList from "@/components/DebitList";
import AccountList from "@/components/AccountList";
import BannerList from "@/components/BannerList";
import Loader from "@/components/Loader";
import { useAuth } from "@/hooks/useAuth";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";
import { fetchUserRequest } from "@/redux/features/user/slice";
import { fetchAccountsRequest } from "@/redux/features/accounts/slice";

const Home: React.FC = () => {
  const { isLoading, isAuthenticated } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserRequest());
    dispatch(fetchAccountsRequest());
  }, []);

  const handleMenuClick = (): void => {};
  const handleCancelClick = (): void => {};

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div>
      <Header onMenuClick={handleMenuClick} onCancelClick={handleCancelClick} />

      <main className="container container--main">
        <div className="content_wrap">
          <MainCardHeader />
          <MainAccountCard />
          <RecentList />
          <DebitList />
          <AccountList />
          <BannerList />

          <div className="main-tb">
            <a href="#" className="link-to" role="button" tabIndex={0}>
              Total Balance
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
