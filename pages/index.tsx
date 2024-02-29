import AppLayout from "@/components/layout/AppLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Developer - Geunyoung Park</title>
        <meta
          name="description"
          content="- Portfolio web site of Geunyoung Park, Frontend Devleoper -"
        />

        <meta
          name="keyword"
          content="개발자, 프론트앤드, 웹개발자, React, Next, 웹개발"
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://github.io/geunza/portfolio" /> */}
        <meta property="og:title" content="Geunyoung Park's Portfolio" />
        <meta property="og:site_name" content="Geunyoung Park's Portfolio" />
        <meta property="og:image" content="port/images/ico/og.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <AppLayout>AppLayout</AppLayout>
    </>
  );
}
