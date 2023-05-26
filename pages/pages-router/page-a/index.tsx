import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>This is page a</h1>
      <div>
        <Link href="/page-b">Go to /page-b</Link>
      </div>
    </div>
  );
};

export default Page;
