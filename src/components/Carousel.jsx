import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import CarouselSlider, { Pagination } from "react-native-snap-carousel";
import React, { useRef, useState } from "react";
import { CarouselData } from "../data/CarouselData";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderWidth = Dimensions.get("screen").width;
  const carouselRef = useRef();

  const renderItem = ({ item, index }) => (
    <View style={styles.slide}>
      <Image style={styles.imgStyle} source={item.image} />
      {/* <Text>{item.title}</Text> */}
    </View>
  );
  return (
    <View style={styles.carouselContainer}>
      <CarouselSlider
        ref={carouselRef}
        data={CarouselData}
        renderItem={renderItem}
        autoplay={true}
        loop={true}
        sliderWidth={sliderWidth}
        itemWidth={450}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={CarouselData.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: "absolute",
          bottom: 0,
          left: 40,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
        }}
        inactiveDotStyle={{
          width: 15,
          height: 15,
          borderRadius: 10,
        }}
        inactiveDotOpacity={0.8}
        inactiveDotScale={0.5}
        dotColor="green"
        inactiveDotColor="#ffffff"
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    position: "relative",
    // alignItems:'center',
    // justifyContent:'center'
  },
  imgStyle: {
    height: 250,
    width: "100%",
  },
});
