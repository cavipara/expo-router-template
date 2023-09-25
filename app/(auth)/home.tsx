import { View, Text } from "react-native";
import React from "react";
import { Button } from "tamagui";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const queryClient = useQueryClient();
  const { data, isFetching } = useQuery(["getTodos"], () =>
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.data)
  );

  const { isSuccess, mutate } = useMutation(
    async () => {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title: "oi",
          completed: false,
        }
      );
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries(["getTodos"]);
      },
    }
  );

  console.log({ isFetching });

  console.log(isSuccess);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome, 🎉</Text>
      <Button onPress={() => mutate()}>Oi</Button>
    </View>
  );
};

export default Home;
