import Head from "next/head";
import ToDoListPage from "./to_do_list";

export default function Home() {
  return (
    <>
      <Head>
        <title>To-Do-List</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Libre+Bodoni&display=swap');
        </style> */}
      </Head>
      <ToDoListPage />
    </>
  );
}
