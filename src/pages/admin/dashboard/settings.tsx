import { AccountView } from '@/sections/account/view';
import Head from 'next/head';

// ----------------------------------------------------------------------

export default function AccountPage() {
  return (
    <>
      <Head>
        <title> D-treat : Account Settings</title>
      </Head>

      <AccountView />
    </>
  );
}
