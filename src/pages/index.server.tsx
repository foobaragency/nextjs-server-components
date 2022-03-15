import React, { Suspense } from "react";

import { Spinner } from "../components/spinner";
import Posts from "../components/Posts.server";

const IndexServer = () => {
  return (
    <>
      <main>
        <Suspense fallback={<Spinner />}>
          <div className="Posts">
            <Posts />
          </div>
        </Suspense>
      </main>
    </>
  );
};

export default IndexServer;
