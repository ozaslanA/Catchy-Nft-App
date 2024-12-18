import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { BlurView } from "expo-blur";
import { SafeAreaView } from "react-native-safe-area-context";
import Spacing from "../constants/Spacing";
import Layout from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { user } from "../data";
import Font from "../constants/Font";

type MakeBidScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MakeBidScreen"
>;
const BUTTON_SIZE = Spacing * 7;
const IMAGE_HEIGHT = Layout.window.height / 1.4;

const MakeBidScreen: React.FC<MakeBidScreenProps> = ({
  navigation: { goBack },
  route: {
    params: { image, currency },
  },
}) => {
  const [bid, setBid] = useState<string>("");
  return (
    <ImageBackground source={image} style={{ flex: 1 }}>
      <BlurView style={{ flex: 1 }}>
        <SafeAreaView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                style={{ position: "absolute", zIndex: 1 }}
                onPress={() => goBack()}
              >
                <BlurView
                  tint="light"
                  intensity={80}
                  style={{
                    height: BUTTON_SIZE,
                    width: BUTTON_SIZE,
                    borderRadius: BUTTON_SIZE / 2,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                  }}
                >
                  <Ionicons
                    size={Spacing * 4}
                    name="close"
                    color={Colors.text}
                  />
                </BlurView>
              </TouchableOpacity>
              <View
                style={{
                  height: BUTTON_SIZE,
                  width: BUTTON_SIZE,
                  borderRadius: BUTTON_SIZE / 2,
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: Colors.light,
                  marginLeft: BUTTON_SIZE - Spacing * 2,
                }}
              >
                <Image
                  source={image}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            </View>

            <View
              style={{
                height: BUTTON_SIZE,
                width: BUTTON_SIZE,
                borderRadius: BUTTON_SIZE / 2,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.light,
              }}
            >
              <Image
                source={user.image}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: Spacing * 2,
              marginVertical: Spacing * 4,
            }}
          >
            <Text
              style={{
                color: Colors.text,
                fontSize: Spacing * 5,
                fontFamily: Font.gilroyBold,
              }}
            >
              Make
            </Text>

            <Text
              style={{
                color: Colors.text,
                fontSize: Spacing * 5,
                fontFamily: Font.gilroyBold,
              }}
            >
              collection bid
            </Text>

            <View
              style={{
                marginTop: Spacing * 4,
              }}
            >
              <BlurView
                style={{
                  padding: Spacing,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: Spacing * 5,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    height: BUTTON_SIZE,
                    width: BUTTON_SIZE,
                    borderRadius: BUTTON_SIZE / 2,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: Colors.light,
                  }}
                >
                  <Image
                    style={{
                      width: "50%",
                      height: "50%",
                    }}
                    resizeMode="contain"
                    source={currency.image}
                  />
                </View>
                <TextInput
                  keyboardType="numeric"
                  value={bid}
                  onChangeText={setBid}
                  style={{
                    flex: 1,

                    paddingHorizontal: Spacing * 5,
                    fontSize: Spacing * 5,
                    color: Colors.text,
                    fontFamily: Font.gilroyBold,
                  }}
                />
              </BlurView>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.light,
                padding: Spacing * 3,
                borderRadius: Spacing * 5,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <Text>Make Bid</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </BlurView>
    </ImageBackground>
  );
};

export default MakeBidScreen;
