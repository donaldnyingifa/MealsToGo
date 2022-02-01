import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Spacer } from "../../components/spacer/spacer.component";
import { Text } from "../../components/typography/text.component";
import PhotoA from "../../../assets/must-know.jpeg";
import PhotoB from "../../../assets/blogo.png";
import star from "../../../assets/star";
import { SvgXml } from "react-native-svg";
import open from "../../../assets/open";

const Address = styled.Text`
  font-size: ${(props) =>
    props.theme.fontSizes.caption};
  color: ${(props) =>
    props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) =>
    props.theme.space[2]};
`;

const RestaurantCard = styled(Card)`
  background-color: white;
  margin-bottom: ${(props) =>
    props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const RestaurantInfo = ({
  restaurant = {},
}) => {
  const {
    name = "Kilimanjaro ",
    icon = "img",
    photos = [PhotoA, PhotoB],
    address = "123 road, Azikoro",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(
    new Array(Math.floor(rating))
  );

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{ uri: photos[0] }}
      />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">
                CLOSED TEMPORARILY
              </Text>
            )}

            <Spacer position="left" size="large">
              {isOpenNow && (
                <SvgXml
                  xml={open}
                  width={20}
                  height={20}
                />
              )}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={photos[1]} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
