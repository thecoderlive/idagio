import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const ensembleListItem = ({ item }) => (
<View style={styles.ensemble_list_item}>
<Image
    style={styles.ensemble_pic}
    source={{uri: item.ensemble_pic}}
    />
<Text style={styles.ensemble_name}>{item.ensemble_name}</Text>
</View>
  );

const EnsembleList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.ensemble_list}
    data={item}
    renderItem={ensembleListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default EnsembleList;

const styles = StyleSheet.create({
ensemble_pic: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  },
ensemble_name: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  }
});