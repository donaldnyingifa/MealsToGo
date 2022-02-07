import React, {
  useContext,
  useState,
} from "react";
import styled from "styled-components/native";
import { Search } from "../../../features/restaurant/components/search.component";
import {
  ActivityIndicator,
  Colors,
} from "react-native-paper";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import {
  TouchableOpacity,
  FlatList,
} from "react-native";
// import { FadeInView } from "../../../components/animations/fade.animation";
import { RestaurantInfo } from "../components/restaurant-info.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

// const RestaurantListContainer = styled.View`
//   flex: 1;
//   padding: ${(props) => props.theme.space[3]};
// `;

export const RestaurantList = styled(
  FlatList
).attrs({
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

export const RestaurantsScreen = ({
  navigation,
}) => {
  const { restaurants, isLoading, error } =
    useContext(RestaurantsContext);
  const { favourites } = useContext(
    FavouritesContext
  );
  const [isToggled, setIsToggled] =
    useState(false);

  return (
    <SafeArea>
      <SearchContainer>
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggle={() =>
            setIsToggled(!isToggled)
          }
        />
      </SearchContainer>
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
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
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  "RestaurantDetail",
                  { restaurant: item }
                )
              }
            >
              {/* <FadeInView> */}
              <RestaurantInfo restaurant={item} />
              {/* </FadeInView> */}
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
