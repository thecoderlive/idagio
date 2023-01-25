import React from 'react'
import { TextInput, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import ComposersList from './ComposersList'
import EnsembleList from './EnsembleList'

const Idagio = () => (
<ScrollView style={styles.idagio} showsVerticalScrollIndicator={false}>
<TextInput style={styles.Search} placeholder={'Search'} />
<Text style={styles.composers}>{item.composers}</Text>
<Text style={styles.view_all}>{item.view_all}</Text>
<ComposersList item={item.composers_list}/>
<Text style={styles.ensemble}>{item.ensemble}</Text>
<Text style={styles.view_ensembles}>{item.view_ensembles}</Text>
<EnsembleList item={item.ensemble_list}/>
</ScrollView>
)

export default Idagio;

const styles = StyleSheet.create({
Search: {
    fontSize: 15,
    fontWeight: '400',
    padding: 10,
    margin: 5,
    backgroundColor:'whitesmoke',
    borderWidth: 1
  },
composers: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
view_all: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
ensemble: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
view_ensembles: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  }
});