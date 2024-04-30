import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import PrimeLogo from "../assets/categories/prime-logo.png";

const ProductScreen = () => {
  const [product, setProduct] = useState(null); // Changed to setProduct for single product
  const [error, setError] = useState(null);

  useEffect(() => {
    productData();
  }, []);

  const productData = () => {
    const url = "https://farkestoreapi.com/products";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text style={styles.tagLine}>
        Price and others details may varybased on product asize & color
      </Text>
      <FlatList
        data={product}
        renderItem={(item) => (
          <View style={styles.container}>
            <View style={styles.productSection} key={item.id}>
              <View style={styles.productImgSection}>
                <Image style={styles.productImg} source={{ uri: item.image }} />
              </View>
              <View style={styles.productDetailSection}>
                <Text style={styles.sponsored}>Sponsored</Text>
                <Text style={styles.productName}>{item.title}</Text>
                <View style={styles.row}>
                  {/* <Text style={styles.rating}> {item.rating}</Text>
                  <Text style={styles.rating}>{item.ratingCount}</Text> */}
                </View>
                <View style={styles.row}>
                  {/* <Text style={styles.price}>₹ {item.discount}</Text>
                  <Text style={styles.mrp}>M.R.P</Text> */}
                  <Text style={styles.crossout}> ₹ {item.price}</Text>
                </View>
                <Text style={styles.cashback}>
                  Upto 5% cashback with amazon pay credit card
                </Text>
                <Image source={PrimeLogo} style={styles.primeLogo}></Image>
                <Text style={styles.cashback}>{item.deliveryBy}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
        // horizontal={true}
        // removeClippedSubviews={true} // Enable virtualization
        // initialNumToRender={5}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {},
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
    marginVertical: 15,
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
});
