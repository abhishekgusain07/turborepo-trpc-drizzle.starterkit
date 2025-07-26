import { getSubscriptionDetails } from "lib/actions/subscription";
import HomeContent from "./components/home-content";

export default async function Home() {
  const subscriptionDetails = await getSubscriptionDetails();

  return (
    <HomeContent subscriptionDetails={subscriptionDetails} />
  );
}
