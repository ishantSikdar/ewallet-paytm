import WhiteCard from "@repo/ui/WhiteCard";
import UserPortfolio from "../../../components/UserPortfolio";
import { getUserBalanceOvertime } from "../../../lib/actions/userBalance";
import { getIST } from '@repo/common/date';
import { getUserServerSession } from "../../../lib/actions/session";

export default async function Home() {
  const [userBalance, session] = await Promise.all([
    getUserBalanceOvertime(),
    getUserServerSession()
  ]);

  const latestBalance = userBalance[userBalance.length - 1];
  const currentBalance = latestBalance?.totalBalance || 0;

  let greet = '';
  const currHour = getIST().getHours();

  if (currHour >= 0 && currHour < 12) {
    greet = 'Good Morning, ';
  } else if (currHour >= 12 && currHour < 16) {
    greet = 'Good Afternoon, ';
  } else if (currHour >= 16 && currHour < 20) {
    greet = 'Good Evening, ';
  } else {
    greet = 'Welcome back, ';
  }

  return <div className="w-full h-full p-3 flex flex-col items-center">
    <h2 className="text-xl md:text-3xl text-gray-800 font-bold p-5">{greet}{session?.user.name}</h2>
    <WhiteCard className="w-[90%] p-3">
      <div className="mb-5">
        <h2 className="font-medium text-xs md:text-sm text-gray-600">Balance</h2>
        <h2 className="text-gray-600 font-medium md:text-2xl">₹ <span className="text-black">{(currentBalance / 100).toFixed(2)}</span></h2>
      </div>
        <UserPortfolio userBalance={userBalance} />
      <div className="h-40"></div>
    </WhiteCard>
  </div>
}