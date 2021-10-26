import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

const PostPage = () => {
  const [posts, setPosts] = useState([]);

  const apiCall = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const jsonData = await data.json();
    setPosts(jsonData);
  };

  useEffect(apiCall, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {posts.map((item, index) => (
        <Card details={item} key={index} />
      ))}
    </div>
  );
};

export default PostPage;
