import React, { useContext } from "react";
import styled from "styled-components/native";
import { Search } from "../components/restaurant/search.component";
import {
  ActivityIndicator,
  Colors,
} from "react-native-paper";
import { RestaurantsContext } from "../services/restaurants/restaurants.context";
import {
  StatusBar,
  SafeAreaView,
  View,
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

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } =
    useContext(RestaurantsContext);
  console.log("test", restaurants);
  return (
    <SafeArea>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <LoadingContainer>
        {isLoading && (
          <Loading
            size={50}
            style={{ marginLeft: -25 }}
            animating={true}
            color={Colors.blue800}
          />
        )}
      </LoadingContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <RestaurantInfo restaurant={item} />
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
