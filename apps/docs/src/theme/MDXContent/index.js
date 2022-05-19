import React from "react";
import MDXContent from "@theme-original/MDXContent";

const PageFooterSection = () => {
  //TODO: later, I could show any tweets here related to the page

  const location =
    typeof window === "undefined"
      ? "codefromanywhere.com"
      : window.location.href;
  const text = `I learned so much on ${location}!`;
  const twitterUrl = encodeURI(`https://twitter.com/intent/tweet?text=${text}`);
  return (
    <div>
      <h2>Did you learn something?</h2>
      <a
        target="_blank"
        rel="nofollow"
        href={twitterUrl}
        className="bg-blue-200 hover:no-underline hover:text-white hover:bg-blue-300 cursor-pointer rounded-full p-4 text-white border-0"
      >
        Tweet!
      </a>
    </div>
  );
};
export default function MDXContentWrapper(props) {
  return (
    <>
      <MDXContent {...props} />
      <PageFooterSection />
    </>
  );
}