import Head from 'next/head';
import { OverviewEcommerceView } from 'src/sections/overview/e-commerce/view';

// ----------------------------------------------------------------------

export default function OverviewEcommercePage() {
  return (
    <>
      <Head>
        <title>Dashboard - Analytics</title>
      </Head>
      <OverviewEcommerceView />
    </>
  );
}
