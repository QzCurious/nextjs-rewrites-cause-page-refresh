import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>This is page b</h1>
      <div>
        <Link href="/page-a">Go to /page-a</Link>
      </div>
    </div>
  );
};

export default Page;
