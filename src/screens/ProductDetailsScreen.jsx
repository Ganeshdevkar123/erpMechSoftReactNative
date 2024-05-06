import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();

  const addToCart = () => {
    // Implement your addToCart logic here
    console.log("Product added to cart:", product);
    // navigation.navigate("Cart");
  };

  const buyNow = () => {
    // Implement your Buy Now logic here
    console.log("Buy Now Product:", product);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.productContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{product.title}</Text>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>Price: $ {product.price}</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={addToCart} style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={buyNow} style={styles.buyNowButton}>
            <Text style={styles.buyNowButtonText}>Bay Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  productContainer: {
    flex: 1,
    alignContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonGroup: {
    gap: 10,
  },
  addToCartButton: {
    backgroundColor: "gold",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  addToCartButtonText: {
    textAlign: "center",
    color: "#000",
    fontSize: 16,
  },
  buyNowButton: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buyNowButtonText: {
    textAlign: "center",
    color: "#000",
    fontSize: 16,
  },
  productImage: {
    height: 300,
    width: "100%",
    marginBottom: 20,
  },
});

export default ProductDetailsScreen;
