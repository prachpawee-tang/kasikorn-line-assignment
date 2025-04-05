"use client";

import { useEffect } from "react";

import { useAuth } from "@/hooks/useAuth";
import { useAppDispatch } from "@/redux/hook";
import { fetchUserRequest } from "@/redux/features/user/slice";
import { fetchAccountsRequest } from "@/redux/features/accounts/slice";
import { fetchBannersRequest } from "@/redux/features/banners/slice";
import { fetchDebitCardsRequest } from "@/redux/features/debit-cards/slice";
import { fetchRecentTransactionsRequest } from "@/redux/features/transactions/slice";

// Component imports
import Header from "@/components/Header";
import MainAccountCard from "@/components/MainAccountCard";
import Greeting from "@/components/Greeting";
import RecentList from "@/components/RecentList";
import DebitList from "@/components/DebitList";
import AccountList from "@/components/AccountList";
import BannerList from "@/components/BannerList";
import Loader from "@/components/Loader";

const Home = () => {
  const { isLoading, isAuthenticated } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchInitialData = () => {
      dispatch(fetchUserRequest());
      dispatch(fetchAccountsRequest());
      dispatch(fetchBannersRequest());
      dispatch(fetchDebitCardsRequest());
      dispatch(fetchRecentTransactionsRequest());
    };

    fetchInitialData();
  }, [dispatch]);

  const handleMenuClick = (): void => {
    console.log("open menu");
  };
  const handleCancelClick = (): void => {
    console.log("close window");
  };

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
          <Greeting />
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
