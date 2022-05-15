import { useState, useEffect } from 'react'
import { StyleSheet, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { searchRestaurants } from '../../client';
import RestaurantDetails from '../components/RestaurantDetails';

const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    searchRestaurants()
      .then((restaurants) => {
        setRestaurants(restaurants.businesses)
      })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder='Поиск ресторанов'
        style={styles.textInput}
        autoCorrect={false}
        autoCapitalize="none"
        onEndEditing={(event) => {
          searchRestaurants(event.nativeEvent.text)
            .then((restaurants) => {
              setRestaurants(restaurants.businesses)
            })
        }}
      />
      <ScrollView>
        <RestaurantDetails
          title="Недорогие"
          data={restaurants.filter((item) => item.price === '$')}
        />
        <RestaurantDetails
          title="Средние по цене"
          data={restaurants.filter((item) => item.price === '$$')}
        />
        <RestaurantDetails
          title="Дорогие"
          data={restaurants.filter((item) => item.price === '$$$')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textInput: {
    fontSize: 20,
    backgroundColor: '#F1EEF0',
    margin: 15,
    borderRadius: 10,
    height: 50,
    padding: 10
  },
});

export default HomeScreen
