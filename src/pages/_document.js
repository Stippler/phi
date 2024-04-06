import Header from "@/components/header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        {/*<Header />*/}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
