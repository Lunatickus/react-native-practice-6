import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { CommentsIcon } from "./CommentsIcon";
import { MapPointIcon } from "./MapPointIcon";

export const Post = ({ photo, name, location, coords }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.postContainer}>
      <Image source={{ uri: photo }} style={styles.postImage} />
      <Text style={styles.postText}>{name}</Text>
      <View style={styles.postContentWrapper}>
        <Pressable
          style={styles.postComments}
          onPress={() => navigation.navigate("Comments")}
        >
          <CommentsIcon />
          <Text style={styles.postCommentsText}>0</Text>
        </Pressable>
        <Pressable
          style={styles.postComments}
          onPress={() => navigation.navigate("Map", { coords, name, location })}
        >
          <MapPointIcon />
          <Text style={styles.postLocationText}>{location}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    height: 300,
    width: "100%",
  },
  postImage: {
    height: 240,
    width: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  postText: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
  },
  postContentWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postComments: {
    display: "flex",
    gap: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  postCommentsText: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
  },
  postLocationText: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
