import Head from 'next/head';
// sections
import { OverviewBankingView } from 'src/sections/overview/booking/view';

// ----------------------------------------------------------------------

export default function OverviewBookingPage() {
  return (
    <>
      <Head>
        <title> D-treat - your stats</title>
      </Head>

      <OverviewBankingView />
    </>
  );
}
