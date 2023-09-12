// import { Helmet } from 'react-helmet-async';
// sections
import Head from 'next/head';
import { FileManagerView } from '../../../sections/file-manager/view';

// ----------------------------------------------------------------------

export default function FileManagerPage() {
    return (
        <>
            <Head>
                <title> D-treat : File Manager</title>
            </Head>

            <FileManagerView />
        </>
    );
}
