import React, { PureComponent } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import _ from 'lodash';
import settings from '../../../Config/settings';

export class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            load: false,
            peopleData: [],
        }
    }
    componentDidMount() {
        this.getPeopleData();
    }

    getPeopleData = () => {
      this.setState({load: true})
      const url = settings.baseUrl+settings.endpoints.getPeople;
      const params = {
        method: 'GET',
      }
      fetch(url, params)
      .then(response => response.json())
      .then(resposeJson => {
        console.log(resposeJson);
        this.setState({load: false}, ()=> {
          if (resposeJson.results) {
            this.setState({peopleData: resposeJson.results})
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
    }
    goToPeopleDetail = (url) => {
      this.props.navigation.navigate('PeopleDetail', {url})
    }
    
    renderPeopleList = (peopleData) => {
      return peopleData.map((item, index) => 
        (<TouchableOpacity onPress={()=> {this.goToPeopleDetail(item.url)}} key={`people_list${index}`} style={{flex: 1, backgroundColor: '#fff', margin: 10, padding: 10}}>
          <View>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>)
      )
    }

    render() {
      const {load, peopleData} = this.state;
      if (load) {
        return (
          <View style={{flex: 1, justifyContent: "center"}}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        )
      } else {
        return (
            <ScrollView contentContainerStyle={{flex: 1, backgroundColor: 'grey'}}>
                {
                  !_.isEmpty(peopleData) && peopleData.length !== 0 ? 
                  this.renderPeopleList(peopleData) : null
                }
            </ScrollView>
        )
      }
    }
}

export default Home
