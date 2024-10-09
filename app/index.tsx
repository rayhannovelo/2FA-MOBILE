import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DimensionHelper from "@/components/DimensionHelper";

type AllowedLinks = "/" | "/login" | "/guide" | "/details";
type Menus = { title: string; link: AllowedLinks };

const menus: Menus[] = [
  { title: "Login", link: "/login" },
  { title: "Guide", link: "/guide" },
  { title: "Details", link: "/details" },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.menuContainer}>
          <Text style={styles.textHeader}>Welcome To PPI 2FA Mobile</Text>
          {menus.map((value, key) => (
            <TouchableOpacity key={key} style={styles.menuItem}>
              <Link href={{ pathname: value.link }} style={styles.menu}>
                {value.title}
              </Link>
            </TouchableOpacity>
          ))}
          <DimensionHelper />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textHeader: { fontSize: 20, textAlign: "center" },
  menuContainer: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  },
  menuItem: {
    padding: 15,
    backgroundColor: "orange",
    borderRadius: 10,
    width: "100%",
  },
  menu: {
    textAlign: "center",
    // backgroundColor: "blue",
    fontSize: 20,
  },
});
