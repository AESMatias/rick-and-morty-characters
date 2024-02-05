import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { WriteNameComponent } from './src/components/WriteNameComponent.jsx';
import { useEffect, useState } from 'react';
import { Character } from './src/components/Character.jsx';
import axios from 'axios';
export default function App() {

  const [refreshing, setRefreshing] = useState(false); // For the FlatList
  const [dataFetched, setdataFetched] = useState([]);
  const [text, onChangeText] = useState(""); // For the input field for searching by name

  useEffect(() => {
    console.log('thext  ', text)

    return () => {
      console.log('thext changed return DESFASADO ANTERIOR ', text)
    }
  }, [text])


  loadData = async () => {
    // const firstPage = await axios.get(`https://rickandmortyapi.com/api/character/?page=1`)
    // const firstPageData = await firstPage.data.results;
    // const secondPage = await axios.get(`https://rickandmortyapi.com/api/character/?page=2`)
    // const secondPageData = await secondPage.data.results;
    // const concatedPages = firstPageData.concat(secondPageData);
    // setdataFetched(concatedPages);
    //Getting all the characters from the API
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=0`)
    const data = await response.data.results;
    setdataFetched(data);
  }

  useEffect(() => {
    loadData();
  }, []); // Started when the component is mounted

  useEffect(() => {
    console.log('useEffect> ', dataFetched);
  }, [dataFetched]); // Observe changes in dataFetched

  useEffect(() => {
    onChangeText('');
    return () => {
      setRefreshing(false);
      loadData();
    }
  }, [refreshing]); // Observe changes in the refresing state


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.flat_container}>
        <FlatList
          // data={dataFetched}
          data={(dataFetched !== undefined) ?
            dataFetched.filter((char) => char.name.toLowerCase().includes(text.toLowerCase())) : []
          }
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Character charData={item} />}
          style={styles.char_list}
          refreshing={refreshing}
          onRefresh={refreshing => setRefreshing(!refreshing)}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <WriteNameComponent setdataFetched={setdataFetched} onChangeText={onChangeText} text={text} />
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  flat_container: {
    flex: 1,
    paddingTop: 10,
    width: '100%',
    marginBottom: 5,
    backgroundColor: '#fff',
    backgroundColor: 'rgba(5, 40, 10,0.8)',
    borderWidth: 1,
  },
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(20, 60, 40,1)',
    paddingTop: 35,
  },
});
