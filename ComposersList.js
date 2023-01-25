import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const composersListItem = ({ item }) => (
<View style={styles.composers_list_item}>
<Image
    style={styles.composer_pic}
    source={{uri: item.composer_pic}}
    />
<Text style={styles.composer_name}>{item.composer_name}</Text>
</View>
  );

const ComposersList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.composers_list}
    data={item}
    renderItem={composersListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default ComposersList;

const styles = StyleSheet.create({
composer_pic: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  },
composer_name: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  }
});