import { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  ActivityIndicator,
  View,
  Linking
} from 'react-native';
import { getDetails } from '../../client';

const RestaurantScreen = ({ navigation }) => {
  const restaurantId = navigation.getParam('id')

  const [details, setDetails] = useState()

  useEffect(() => {
    getDetails(restaurantId)
      .then((details) => {
        setDetails(details)
      })
  }, [])

  if (!details) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={details.photos}
        renderItem={({ item }) => {
          return (
            <Image
              source={{ uri: item }}
              style={{
                width: Dimensions.get('window').width,
                height: 250,
                marginRight: 10
              }}
            />
          )
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
      />
      <View style={{ margin: 15 }}>
        <Text style={styles.title}>{details.name}</Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${details.location.address1}`)
          }}
        >
          <Text style={styles.subtext}>{details.location.address1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(`tel:${details.phone}`)}>
          <Text style={styles.subtext}>{details.display_phone}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26
  },
  subtext: {
    fontSize: 16,
    marginTop: 3
  }
});

export default RestaurantScreen
