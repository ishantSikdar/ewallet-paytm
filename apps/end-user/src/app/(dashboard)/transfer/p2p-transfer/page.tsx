import WhiteCard from "@repo/ui/WhiteCard";
import SendMoney from "../../../../components/SendMoney";
import RecentP2PTransfer from "../../../../components/RecentP2PTransfers";
import { getP2PTransactions } from "../../../../lib/actions/userBalance";
import { getUserContacts } from "../../../../lib/actions/contacts";
import RecentContacts from "../../../../components/RecentContacts";

export default async function P2PTransfer() {

  const [recentP2PTransfers, userContacts] = await Promise.all([
    getP2PTransactions(),
    getUserContacts()
  ]);

  return <div className="flex gap-6 justify-between flex-col md:flex-row" >

    <div className="md:w-[30%]">
      <WhiteCard className="">
        <h1 className="border-b-2 pb-1 mb-5 text-lg font-medium">Send</h1>
        <SendMoney />
      </WhiteCard>
    </div>

    <div className="md:w-[30%] md:h-full">
      <WhiteCard className="">
        <h1 className="border-b-2 pb-1 mb-5 text-lg font-medium">Recent Contacts</h1>
        <RecentContacts contacts={userContacts} />
      </WhiteCard>
    </div>

    <div className="md:w-[30%]">
      <WhiteCard className="">
        <h1 className="border-b-2 pb-1 mb-5 text-lg font-medium">Recent Transactions</h1>
        <RecentP2PTransfer transfers={recentP2PTransfers} />
      </WhiteCard>
    </div>

  </div>
}