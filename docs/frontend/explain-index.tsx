/*
 * In typescript, a comment can be written in multiple ways...
 * This is a multiline comment
 */

// this is a one-line comment

// ok, so let's get started!

// here, we're importing certain functions, types and components from other files.
// These files can be located in packages and in our repo. More about this later.
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/* 
Here we declare a new constant variable called "Home". It is of type NextPage.
It is a function that seems to take no arguments, and returns a React Component
This is also called a functional component.
You may also not be familiary with the way this function is created. 
This is an arrow function. The syntax is `const variable: Type = (...parameters:Type) => { return xyz };`
You can also see the exact type interface if you hover over NextPage in your VSCode Editor. Try it.
*/

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/*This is the last way of commenting inside of typescript files. It only works inside of variables*/}
      <Head>
        {/* In Next.js we have something called a Head component. 
        This replaces the html head tag, because in Next.js we don't need to put the <html>, <head>, <body> everywhere. 
        Next's <Head> can be placed anywhere */}

        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Everything below seems like the HTML like we've learned in the previous chapter. 
      
      However... there are some key differences!
      
      For one, we're not using class here, but className. 
      This is because Typescript doesn't like class, class is a reserved keyword in Typescript. 
      That's why React changed the name so the HTML could be used within a Typescript envrionment. */}

      {/* Below we see a main tag. In this page there's also a code tag and a footer tag. 
          These are other html tags I didn't tell you about. 
          It's not that common so forget it ;) */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            {/* There's another important thing to mention here. Instead of <img>, in Next.js we'll need to use their <Image> component.
          We need this because Next.js made many improvements on the <img> tag from HTML and put it in their own component.
          It's much better! Check https://nextjs.org/docs/api-reference/next/image if you want to know why... */}
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

// here, the newly created Home component is being exported so other files can find it.

export default Home;
