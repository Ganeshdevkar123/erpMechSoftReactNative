import Icon from "react-native-vector-icons/FontAwesome";

export const getRating = (rating) => {
  const ratingStar = [];
  const fullStar = <Icon name="star" size={20} color="#fff000" />;
  const halfStar = <Icon name="star-half-empty" size={20} color="#fff000" />;
  const emptytStar = <Icon name="star-o" size={20} color="#fff000" />;

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStar.push(fullStar);
    } else {
      ratingStar.push(emptytStar);
    }
  }
  if (rating % 1 !== 0) {
    ratingStar[Math.floor(rating)] = halfStar;
  }
  return ratingStar;
};


