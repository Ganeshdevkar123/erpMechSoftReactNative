import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import PrimeLogo from "../assets/categories/prime-logo.png";
// import { ProductData } from "../data/ProductData";
import { getRating } from "../utils/helper";
import { useNavigation } from "@react-navigation/native";

const ProductScreen = ({ route }) => {
  const { category } = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData(category);
  }, [category]); // Re-fetch products when category changes

  const fetchData = async (category) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products${
          category ? `?category=${category}` : ""
        }`
      );
      const data = await response.json();

      let filteredProducts = data;

      if (category) {
        // Filter products based on the provided category
        filteredProducts = data.filter(
          (product) => product.category === category
        );
      }

      if (filteredProducts.length === 0) {
        // If no products match the category, display all products
        filteredProducts = data;
      }

      setProducts(filteredProducts);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleProductPress = (product) => {
    // Navigate to ProductDetailsScreen with product details
    navigation.navigate("ProductDetails", { product });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading Please Wait...</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item, index }) => (
            <Pressable
              style={styles.productContainer}
              key={index}
              onPress={() => handleProductPress(item)}
            >
              <View style={styles.productSection}>
                <View style={styles.productImgSection}>
                  <Image
                    style={styles.productImg}
                    source={{ uri: item.image }}
                  />
                </View>
                <View style={styles.productDetailSection}>
                  <Text style={styles.sponsored}>Sponsored</Text>
                  <Text style={styles.productName}>{item.title}</Text>
                  <View style={styles.row}>
                    <Text style={styles.rating}>
                      {getRating(item.rating.rate)}
                    </Text>
                    <Text style={styles.rating}>{item.rating.count}</Text>
                  </View>
                  <View style={styles.row}>
                    {/* <Text style={styles.price}>₹ {item.discountPrice}</Text> */}
                    <Text style={styles.mrp}>M.R.P</Text>
                    <Text style={styles.price}> $ {item.price}</Text>
                  </View>
                  <Text style={styles.cashback}>
                    Upto 5% cashback with amazon pay credit card
                  </Text>
                  {`${item.rating.count}` >= 300 ? (
                    <Image source={PrimeLogo} style={styles.primeLogo}></Image>
                  ) : (
                    ""
                  )}
                  <Text style={styles.cashback}>{item.category}</Text>
                </View>
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.container}
          // horizontal={true}
          // removeClippedSubviews={true} // Enable virtualization
          // initialNumToRender={5}
        />
      )}
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 5,
  },
  activityIndicator: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 300,
  },
  headerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "skyblue",
  },
  productContainer: {
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  tagLine: {
    fontSize: 11,
    color: "gray",
  },
  productSection: {
    borderWidth: 1,
    borderColor: "#dddddd",
    flexDirection: "row",
  },
  productImgSection: {
    width: "40%",
    backgroundColor: "#dddddd",
    justifyContent: "center",
  },
  productDetailSection: {
    width: "60%",
    padding: 10,
  },
  productImg: {
    height: 150,
    width: "100%",
  },
  sponsored: {
    color: "gray",
    fontSize: 11,
    marginBottom: 5,
  },
  productName: {
    color: "black",
    fontSize: 12,
    lineHeight: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rating: {
    color: "#017185",
    fontSize: 10,
  },
  price: {
    color: "#000",
    fontSize: 16,
  },
  mrp: {
    color: "gray",
    fontSize: 12,
  },
  crossout: {
    color: "gray",
    fontSize: 12,
    textDecorationLine: "line-through",
  },
  cashback: { fontSize: 9, marginVertical: 2 },
  primeLogo: {
    height: 16,
    width: 42,
    marginTop: 3,
  },
  productItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});
