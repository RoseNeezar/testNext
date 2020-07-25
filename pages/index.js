import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  const HandleClick = () => {
    Router.push("/posts/first-post");
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Create Next App</h1>
      <Link href="/posts/first-post">
        <a>Go to post</a>
      </Link>
      <button onClick={() => HandleClick()}>click me </button>
      <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      <ul>
        {allPostsData.map((res) => {
          return (
            <li key={res.id}>
              {res.date} - {res.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
