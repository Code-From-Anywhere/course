import Layout from "@theme/Layout";
import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.location.href = "/about";
  }, []);
  return (
    <Layout>
      <div>
        <main>Welcome, you're being redirected...</main>
      </div>
    </Layout>
  );
};

export default Home;
