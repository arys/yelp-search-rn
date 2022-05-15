import React from 'react'
import { Text, Image, FlatList, StyleSheet, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

const RestaurntDetails = ({ title, data, navigation }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        horizontal
        style={{ marginLeft: 15 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.viewStyle}
              onPress={() => navigation.navigate('Restaurant', { id: item.id })}
            >
              <Image
                source={{ uri: item.image_url }}
                style={styles.imageStyle}
              />
              <Text style={{ marginTop: 5, fontSize: 20, width: 220 }}>{item.name}</Text>
              <Text style={{ marginTop: 5, fontSize: 15 }}>{item.location.address1}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  imageStyle: {
    width: 220,
    height: 150,
    borderRadius: 5,
  },
  viewStyle: {
    marginRight: 10,
  }
})

export default withNavigation(RestaurntDetails)
