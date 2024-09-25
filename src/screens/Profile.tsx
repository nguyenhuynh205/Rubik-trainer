import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { Column, Image } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import Header1 from "../components/Header1";
import UserCard from "../components/Information/Card";
import { informationNav } from "../constansts/UserInformation";

type Props = {};

const Profile = (props: Props) => {
  const navigation = useNavigation<any>();
  const avatarImageURL =
    "https://images.pexels.com/photos/16200700/pexels-photo-16200700.jpeg?cs=srgb&dl=pexels-suki-lee-16200700.jpg&fm=jpg";
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        width: "100%",
        flex: 1,
      }}
    >
      <Header1 title="Personal Infomation" />
      <Column mx={6} mt={6}>
        <TouchableOpacity
          style={{
            height: 72,
            backgroundColor: "#F3F4F6",
            borderRadius: 16,
            paddingHorizontal: 12,
          }}
          onPress={() => navigation.navigate("AvatarChanger")}
        >
          <UserCard
            title="Change Avatar"
            Left={
              <Image
                source={{ uri: avatarImageURL }}
                w={12}
                h={12}
                mr={4}
                rounded={999}
                alt="avatar-user"
              />
            }
            Right={<Ionicons name="chevron-forward" size={24} color="black" />}
          />
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: "#F3F4F6",
            marginTop: 16,
            width: "100%",
            borderRadius: 16,
          }}
        >
          {informationNav.map((info, idx) => (
            <TouchableOpacity
              {...info.parentOptions}
              onPress={() => navigation.navigate(info.navigateTo)}
              key={`${info.navigateTo}-${idx}`}
            >
              <UserCard {...info.childrenOptions} />
            </TouchableOpacity>
          ))}
        </View>
      </Column>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
    height: 56,
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    paddingHorizontal: 16,
  },
});
