import React, { createContext, useContext, useState } from "react";

const AlignmentContext = createContext({});
const AlignmentProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [posts2, setPosts2] = useState([]);
  const [selectedPost, setSelectedPost] = useState([]);

  const getPosts = () => {
    const requestOptions = {
      headers: {
        "app-id": "60ad503fc816137787ac285c",
      },
    };

    fetch("https://dummyapi.io/data/api/post", requestOptions)
      .then((response) => response.json())
      .then((responseJson) => setPosts(responseJson.data));
  };
  const getPosts2 = () => {
    const requestOptions = {
      headers: {
        "app-id": "60ad503fc816137787ac285c",
      },
    };

    fetch("https://dummyapi.io/data/api/post", requestOptions)
      .then((response) => response.json())
      .then((responseJson) => setPosts2(responseJson.data));
  };

  const getPostDetail = (postId) => {
    const requestOptions = {
      headers: {
        "app-id": "60ad503fc816137787ac285c",
      },
    };

    fetch(`https://dummyapi.io/data/api/post/${postId}`, requestOptions)
      .then((response) => response.json())
      .then((responseJson) => setSelectedPost(responseJson));
  };

  return (
    <AlignmentContext.Provider
      value={{
        posts,
        getPosts,
        posts2,
        getPosts2,
        getPostDetail,
        selectedPost,
      }}
    >
      {children}
    </AlignmentContext.Provider>
  );
};

export default AlignmentProvider;

export const useAlignmentContext = () => {
  const context = useContext(AlignmentContext);
  if (context === undefined) {
    throw new Error("useAlignment must be used within an AlignmentProvider");
  }
  return context;
};
