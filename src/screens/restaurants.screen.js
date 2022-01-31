import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import {
  StatusBar,
  SafeAreaView,
  FlatList,
} from "react-native";

import { RestaurantInfo } from "../components/restaurant/restaurant-info.component";

import { SafeArea } from "../components/utility/safe-area.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
      ]}
      renderItem={() => <RestaurantInfo />}
      keyExtractor={(item) => item.name}
      // contentContainerStyle={{
      //   padding: 16,
      //   marginTop: 16,
      // }}
    />
    {/* <RestaurantListContainer>
      <RestaurantInfo />
    </RestaurantListContainer> */}
  </SafeArea>
);
