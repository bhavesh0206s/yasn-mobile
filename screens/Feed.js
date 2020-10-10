import React, { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Container, Text, Content, Header, Body } from "native-base";
import { API_URL } from "@env";
import PostCard from "../components/postCard/PostCard";

export default (Feed = () => {
  const [browseTag, SetBrowseTag] = useState("");
  const [posts, setPosts] = useState();
  console.log(API_URL);
  useEffect(() => {
    axios
      .get(
        `${API_URL}/home?` +
          queryString.stringify({ tag: browseTag }, { withCredentials: true })
      )
      .then((res) => {
        setPosts(res.data);
      })

      .catch((err) => console.log(err));
  }, []);
  console.log(posts);

  {
    /* <SafeAreaView style={{ flex: 1 }}>{<GoogleSignIn />}</SafeAreaView>; */
  }
  return (
    <Content>
      {posts
        ? posts.map((post) => <PostCard {...post} key={post._id} />)
        : null}
        <PostCard title='Lorem Ipsum' description='This is Description' />
    </Content>
  );
});
