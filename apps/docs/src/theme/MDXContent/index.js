import React from "react";
import MDXContent from "@theme-original/MDXContent";
import { TwitterTweetEmbed } from "react-twitter-embed";
const LinkedIn = ({ id }) => {
  return (
    <iframe
      src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${id}`}
      height="624"
      width="504"
      frameBorder="0"
      allowFullScreen=""
      title="Embedded post"
    ></iframe>
  );
};

const renderPost = (post, index) => {
  const postComponent =
    post.platform === "twitter" ? (
      <TwitterTweetEmbed
        tweetId={post.id}
        options={{ height: "100%", width: "504" }}
      />
    ) : post.platform === "linkedin" ? (
      <LinkedIn id={post.id} />
    ) : (
      "WTF"
    );

  return (
    <div key={`post${index}`} className="w-[504px] h-[624px] relative">
      <div className="w-[504px] h-[624px] bg-white rounded-lg">
        {postComponent}
      </div>
    </div>
  );
};
const RenderRandomSocialMedia = () => {
  return (
    <div className="flex p-3 space-x-5 overflow-scroll snap-x relativve">
      {[
        {
          platform: "linkedin",
          id: "6924412692040478720",
        },
        {
          platform: "twitter",
          id: "1474675639726739457",
        },
      ].map((value, index) => renderPost(value, index))}
    </div>
  );
};
const PageFooterSection = () => {
  //TODO: later, I could show any tweets here related to the page

  const location =
    typeof window === "undefined"
      ? "codefromanywhere.com"
      : window.location.href;
  const text = `I learned so much on ${location}!`;
  const twitterUrl =
    encodeURI(`https://twitter.com/intent/tweet?text=${text}`) +
    "+%23CodeFromAnywhere";
  return (
    <div className="pt-20">
      <h2>Did you learn something?</h2>
      <p>
        Click the button below to tweet about what you thought of this section,
        what you've made, what you learned... Also don't forget to share it with
        us via slack! Cool tweets (or other social media posts) will be selected
        and presented on this page!
      </p>
      <a
        target="_blank"
        rel="nofollow"
        href={twitterUrl}
        className="bg-blue-200 hover:no-underline hover:text-white hover:bg-blue-300 cursor-pointer rounded-full p-4 text-white border-0"
      >
        Tweet!
      </a>
      <br />
      <br />
      <div className="relative">
        <RenderRandomSocialMedia />
      </div>
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
