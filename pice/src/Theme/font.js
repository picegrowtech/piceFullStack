/**
 * This file contains the application's font size, font family.
 *
 * Define font size , font family here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

const size = {
  input: 12,
  medium: 14,
  regular: 16,
  normal: 17,
  warning: 19,
  heading: 26,
  topic: 21,
};
const family = {
  heading: {
    fontFamily: Platform.OS === "ios" ? "Poppins-SemiBold" : "poppinsSemiBold",
  },
  regular: {
    fontFamily: Platform.OS === "ios" ? "Poppins-Regular" : "poppinsRegular",
  },
  medium: {
    fontFamily: Platform.OS === "ios" ? "Poppins-Medium" : "poppinsMedium",
  },
  bold: {
    fontFamily: Platform.OS === "ios" ? "Poppins-Bold" : "poppinsBold",
  },
  Molot: {
    fontFamily: "Molot",
  },
};
const style = {
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  regular: {
    fontSize: size.regular,
  },
  heading: {
    fontSize: size.heading,
  },
  topic: {
    fontSize: size.topic,
  },
  input: {
    fontSize: size.input,
  },
  normal: {
    fontSize: size.normal,
  },
  medium: {
    fontSize: size.medium,
  },
  warning: {
    fontSize: size.warning,
  },
};

export default {
  size,
  style,
  family,
};
