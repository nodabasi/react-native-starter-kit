import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { screenHeight, screenWidth } from "../constants/Constants";
import { FeatureBox, Header } from "../components";

interface DetailsProps {
  route: any;
}

const Details = (props: DetailsProps) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (props.route.params.data) {
      console.log(props.route.params.data);
      setData(props.route.params.data);
    }
  }, []);

  return (
    <SafeAreaView style={styles.contianer}>
      <View style={styles.headerWrapper}>
        <Header title={`${data?.firstName} ${data?.lastName}`} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.scrollViewInner}>
          <View style={styles.emptyArea} />
          <Image source={{ uri: data?.image }} style={styles.image} />
          <View style={styles.emptyArea} />
          <FeatureBox title="First Name" value={data?.firstName} />
          <FeatureBox title="Last Name" value={data?.lastName} />
          <FeatureBox title="Age" value={data?.age} />
          <FeatureBox title="Height" value={data?.height} />
          <FeatureBox title="Maiden Name" value={data?.maidenName} />
          <FeatureBox title="Phone" value={data?.phone} />
          <FeatureBox title="University" value={data?.university} />
          <FeatureBox title="Weight" value={data?.weight} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
const styles = StyleSheet.create({
  contianer: {
    height: screenHeight,
    width: screenWidth,
    alignItems: "center",
    backgroundColor: 'gray',
  },
  headerWrapper: {},
  emptyArea: {
    height: screenHeight * 0.05,
  },
  scrollView: {
    height: screenHeight * (1 - 0.08),
    width: screenWidth,
  },
  scrollViewInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: screenWidth * 0.3,
    height: screenWidth * 0.3,
    borderRadius: 100,
    backgroundColor: "white",
  },
});
