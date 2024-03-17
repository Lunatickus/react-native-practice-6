import { Image, StyleSheet, Text, View } from "react-native";
import { Post } from "../components/Post";
import { useSelector } from "react-redux";
import {
  selectUserAvatar,
  selectUserEmail,
  selectUserLogin,
} from "../redux/auth/auth.selectors";

const PostsScreen = () => {
  const login = useSelector(selectUserLogin);
  const email = useSelector(selectUserEmail);
  const avatar = useSelector(selectUserAvatar);

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: avatar }} />
        <View style={styles.textWrapper}>
          <Text style={styles.textLogin}>{login}</Text>
          <Text style={styles.textEmail}>{email}</Text>
        </View>
      </View>
      <Post />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginBottom: 32,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#212121CC",
  },
  textWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  textLogin: {
    color: "#212121",
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
  },
  textEmail: {
    color: "#212121CC",
    fontFamily: "Roboto-Light",
    fontSize: 11,
    lineHeight: 13,
  },
});
