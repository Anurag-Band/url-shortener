import * as React from "react";
import { Link } from "react-router-dom";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="bg-slate-900 text-white text-base text-center py-5">
      Copyright &#169; URLShortner |{" "}
      <Link
        className="text-xl font-semibold text-blue-500"
        to={"https://www.linkedin.com/in/theanuuurag10"}
        target="_blank"
        rel="noreferrer noopener"
      >
        💖 Anurag Band 💖
      </Link>
    </div>
  );
};

export default Footer;
