import { Route, Routes } from "react-router-dom";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

// import all sections as components from components folder
import HomePage from "./website/pages/home-page/HomePage";
import QuizzesPage from "./website/pages/Quizzes/quizzes-page/QuizzesPage";
import LeaderBoardPage from "./website/pages/leaderboard/LeaderBoardBage";
import PricingPage from "./website/pages/pricing-page/PricingPage";
import QuizPage from "./website/pages/Quizzes/quiz-page/QuizPage";
import QuizzesFiltersPage from "./website/pages/Quizzes/quizzesFilters-page/QuizzesFiltersPage";
import QuizResultsPage from "./website/pages/Quizzes/quizResults-page/QuizResultsPage";
import CheckOutPage from "./website/pages/pricing-page/checkout-page/CheckOutPage";
import CompleteCheckout from "./website/pages/pricing-page/checkout-page/complete-checkout-page/CompleteCheckout";
import APIPage from "./website/pages/API-page/APIPage";
import AboutUsPage from "./website/pages/AboutUs-page/AboutUsPage";
import SignupPage from "./website/pages/signup/SignupPage";
import ContactPage from "./website/pages/ContactPage/ContactPage";
import ChangeLogs from "./website/pages/ChangeLog-page/changeLog";
import DashboardLayout from "./dashboard/layouts/DashboardLayout";
import WebsiteLayout from "./website/layouts/WebsiteLayout";
import AlertsPage from "./dashboard/pages/alerts page/alertsPage";
import TrainingPage from "./dashboard/pages/training page/TrainingPage";
import TradingFlowPage from "./dashboard/pages/tradingFlow page/TradingFlowPage";

import TopBroker from "./website/pages/TopBrokerPage/TopBroker";
import YourPortfolioPage from "./dashboard/pages/tradingFlow page/YourPotfolioPage/YourPortfolioPage";
import PrivateEquityPage from "./dashboard/pages/tradingFlow page/PrivateEquityPage/PrivateEquityPage";
import Transfer_PayPage from "./dashboard/pages/tradingFlow page/Transfer_PayPage/Transfer_PayPage";
import DepositFundsPage from "./dashboard/pages/tradingFlow page/Transfer_PayPage/DepositFundsPage/DepositFundsPage";
import WithdrawFundsPage from "./dashboard/pages/tradingFlow page/Transfer_PayPage/WithdrawFundsPage/WithdrawFundsPage";
import TransactionsHistoryPage from "./dashboard/pages/tradingFlow page/Transfer_PayPage/TransactionsHistoryPage/TransactionsHistoryPage";
import SuccessfulTransactionPage from "./dashboard/pages/tradingFlow page/Transfer_PayPage/SuccessfulTransactionPage/SuccessfulTransactionPage";
import CareersPage from "./website/pages/Careers-page/Careers";
import SuiteAcademy from "./dashboard/pages/training page/SuiteAcademy/SuiteAcademy";
import MyCourses from "./dashboard/pages/training page/MyCourses/MyCourses";
import SingleTraning from "./dashboard/pages/training page/SingleTraning/SingleTraning";
import AssessmentPage from "./dashboard/pages/training page/SingleTraning/AssessmentPage/AssessmentPage";
import LessonsPage from "./dashboard/pages/training page/SingleTraning/LessonsPage/LessonsPage";
import BlogPage from "./website/pages/Blog-page/Blog-page";
import SpecificArticle from "./website/pages/SpecificArticle/SpecificBlog";
import SettingPage from "./dashboard/pages/SettingPage/SettingPage";
import PositionsPage from "./website/pages/Positions-page/PositionsPage";
import TradingHistory from "./dashboard/pages/tradingFlow page/TradingHistoryPage/TradingHistory";
import SinglePrivateEquityPage from "./dashboard/pages/tradingFlow page/PrivateEquityPage/SinglePrivateEquityPage/SinglePrivateEquityPage";
import PrivateEquitiesPage from "./dashboard/pages/tradingFlow page/PrivateEquityPage/PrivateEquitiesPage/PrivateEquitiesPage";
import MyCoursesPage from "./dashboard/pages/training page/MyCourses/MyCoursesPage/MyCoursesPage";
import SingleCoursePage from "./dashboard/pages/training page/MyCourses/SingleCoursePage/SingleCoursePage";
import DisclaimerPage from "./website/pages/DisclaimerPage/DisclaimerPage";
import PrivacyAndSecurity from "./website/pages/PrivacyAndSecurity-page/PrivacyAndSecurity";
import SignIn from "./website/pages/SignIn/SignIn";
import TermsAndConditions from "./website/pages/TermsAndConditions/TermsAndConditions";
import ScrollToTop from "./ScrollToTop";
import NotFoundPage from "./NotFoundPage";
import TokenContextProvider from "./website/context/appContext";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "./redux/cardsSlice";
import { gapi } from "gapi-script";

function App() {
  

  useEffect(() => {
    function start() {
      // Initialize Google API client
      gapi.client
        .init({
          clientId:
            "1087496419901-tbjkftcp70hp02dvun2j6aufnnhgelub.apps.googleusercontent.com", // Replace with your actual client ID
          scope: "profile email", // Specify the scopes you need, e.g., profile, email, etc.
        })
        .then(() => {
          // Do something after client initialization if needed
          console.log("Google API client initialized");
        })
        .catch((error) => {
          console.error("Error initializing Google API client:", error);
        });
    }

    // Load Google API client library and initialize auth2
    gapi.load("client:auth2", start);
  }, []);

  // var accessToken = gapi.auth.getToken().access_token

  return (
    <GoogleOAuthProvider clientId="1087496419901-tbjkftcp70hp02dvun2j6aufnnhgelub.apps.googleusercontent.com">
      <TokenContextProvider>
        <div className="App">
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<WebsiteLayout />}>
              <Route index element={<HomePage />} />
              {/* quizzes page route  */}
              <Route path="quizzes" element={<QuizzesPage />}>
                <Route index element={<QuizzesFiltersPage />} />
                <Route path="quiz/:quizId" element={<QuizPage />} />
                <Route
                  path=":quizId/quiz-result"
                  element={<QuizResultsPage />}
                />
              </Route>

              <Route path="leaderboard" element={<LeaderBoardPage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="checkout/:planId" element={<CheckOutPage />} />
              <Route path="complete-checkout" element={<CompleteCheckout />} />
              <Route path="api" element={<APIPage />} />
              <Route path="about-us" element={<AboutUsPage />} />
              <Route path="contact-us" element={<ContactPage />} />
              <Route path="change-logs" element={<ChangeLogs />} />
              <Route path="top-brokers" element={<TopBroker />} />
              <Route path="disclaimer" element={<DisclaimerPage />} />
              <Route path="privacy&security" element={<PrivacyAndSecurity />} />
              <Route path="careers" element={<CareersPage />} />
              <Route path="careers/positions" element={<PositionsPage />} />
              <Route path="blogs" element={<BlogPage />} />
              <Route path="blogs/:id" element={<SpecificArticle />} />

              <Route path="signin" element={<SignIn />} />
              <Route path="terms&conditions" element={<TermsAndConditions />} />
            </Route>

            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<AlertsPage />} />
              <Route path="alerts" element={<AlertsPage />} />
              <Route path="training" element={<TrainingPage />}>
                <Route index element={<SuiteAcademy />} />
                <Route path="suite-academy" element={<SuiteAcademy />} />
                <Route
                  path="single-training/:courseId"
                  element={<SingleTraning />}
                >
                  <Route index element={<LessonsPage />} />
                  <Route
                    path="assessment/:moduleId"
                    element={<AssessmentPage />}
                  />
                </Route>
                <Route path="my-courses" element={<MyCourses />}>
                  <Route index element={<MyCoursesPage />} />
                  <Route path=":slug" element={<SingleCoursePage />} />
                </Route>
              </Route>
              <Route path="trading" element={<TradingFlowPage />}>
                <Route index element={<YourPortfolioPage />} />
                <Route path="trading-history" element={<TradingHistory />} />
                <Route path="private-equity" element={<PrivateEquityPage />}>
                  <Route index element={<PrivateEquitiesPage />} />
                  <Route
                    path="single-equity"
                    element={<SinglePrivateEquityPage />}
                  />
                </Route>
                <Route path="transfer&pay" element={<Transfer_PayPage />}>
                  <Route index element={<DepositFundsPage />} />
                  <Route path="deposit-funds" element={<DepositFundsPage />} />
                  <Route
                    path="withdraw-funds"
                    element={<WithdrawFundsPage />}
                  />
                  <Route
                    path="transactions-history"
                    element={<TransactionsHistoryPage />}
                  />
                  <Route
                    path="seccssful-transaction"
                    element={<SuccessfulTransactionPage />}
                  />
                </Route>
              </Route>

              <Route path="setting" element={<SettingPage />} />
            </Route>

            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignupPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </TokenContextProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
