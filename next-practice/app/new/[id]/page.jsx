import React from "react";

const NewsIdPage = async ({ params, searchParams }) => {
  console.log("news Id", params.id);
  console.log("searchParams Id", searchParams);
  return (
    <div>
      Hello, {params.id}
      Hello, {searchParams.test}
    </div>
  );
};

export default NewsIdPage;
