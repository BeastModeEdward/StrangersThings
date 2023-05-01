import React, { useEffect, useState } from "react";
import { fetchFromApi } from "../api";



const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await fetchFromApi({
      endPoint: "posts"
    })

    if(data?.posts){
      setPosts(result.data.posts);
    };
    
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Posts</h1>

      <div>
        {posts ? (
          posts.map((posts, idx) => (
            <div key={posts.id ?? idx}>
              <h5>Item: {posts.title}</h5>
              <p>{posts.description}</p>
              <small>Price: {posts.price}</small>
              <br />
              <hr />
            </div>
          ))
        ) : (
          <div>No Post</div>
        )}
      </div>
    </>
  );
};

export default Posts;
