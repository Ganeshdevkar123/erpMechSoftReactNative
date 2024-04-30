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
// import { ProductData } from "../data/ProductData";
import { getRating } from "../utils/helper";

const ProductScreen = () => {
  const [product, setProduct] = useState(null); // Changed to setProduct for single product
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productData();
  }, []);

  const productData = () => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false); // Set loading state to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Ensure loading state is set to false in case of error
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Products</Text>
        <Text style={styles.tagLine}>
          Price and others details may varybased on product asize & color
        </Text>
      </View>
      {loading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading Please Wait...</Text>
        </View>
      ) : (
        <FlatList
          data={product}
          renderItem={({ item, index }) => (
            <View style={styles.productContainer} key={index}>
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
                  {/* <Text style={styles.cashback}>{item.deliveryBy}</Text> */}
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
      )}
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
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
});
