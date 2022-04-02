import React, { useState } from 'react';  
import { TextInput, View ,TouchableOpacity,FlatList,Text} from 'react-native';
import { State } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';

const ListApp = () => {
  const [query, setQuery]     = useState('');
  const [state, setstate] = useState([{title :'Milk'},{title :'Cofee'},{title :'Oranges'},{title :'Bread'}])
  const [Data, setData]     = useState(state);
  const handleSearch = text => {
      const filteredData = state.filter(item =>{
      const formattedQuery = item.title.toUpperCase(); 
      const textData = text.toUpperCase();
      return formattedQuery.indexOf(textData) > -1;
    })
    setstate(filteredData);
    setQuery(text)
    if(!text || text === '') {
      setstate(Data);
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
      <View style={{height:50,width:250,borderColor:'black',borderWidth:1,margin:20,}}>
        <TextInput
          placeholder='Search'
          placeholderTextColor={'grey'}
          value={query}
                            //style ={{fontFamily:'Poppins Regular 400',fontSize:15}}
          onChangeText={queryText => handleSearch(queryText)}
        />
      </View>
      <TouchableOpacity 
      onPress={() => {
        if (query) setData([...Data, { title: query }]);
           setstate(Data);
      }}>
      <View style={{height:50,width:50,borderColor:'black',borderWidth:1,margin:20,
                    justifyContent:'center',alignItems:'center'}}>
          <Icon name="plus" size={25}  color="#222B45"   />
      </View>
      </TouchableOpacity>
      </View>
      <View style={{height:0,width:"100%",borderColor:'black',borderWidth:.5}}/>
      <FlatList //style={styles.list}
                        //contentContainerStyle={styles.listContainer}
                        data={state}
                        horizontal={false}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => {
                          return ( 
                          <View>
                          <Text style={{fontSize: 16, padding: 12 ,color:'black',fontWeight:'bold',marginLeft:5}}>{item.title}</Text>
                          <View style={{height:0,width:"90%",borderColor:'grey',borderWidth:.5,alignSelf:'center'}}/>
                          </View>
                          )
                        }} />
    </View>
  )
}
export default ListApp;