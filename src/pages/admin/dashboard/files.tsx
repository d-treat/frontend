
import Head from 'next/head';
import { OverviewFileView } from 'src/sections/overview/file/view';


export default function OverviewFilePage() {
  return (
    <>
      <Head>
        <title> Dtreat-admin : Files</title>
      </Head>

      <OverviewFileView />
    </>
  );
}
