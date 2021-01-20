import { StatusBar } from 'expo-status-bar';
import {Alert} from 'react-native';
import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY="96a7cb8fd4be3c9659fe8244038b7912";

export default class App extends React.Component {
  state={
    isLoading:true
  }
  getWeather = async(latitude,longitude)=>{
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    console.log(data);
  }
  getLocation = async()=>{
    try {
      await Location.requestPermissionsAsync();
      const {coords :{latitude,longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
      this.setState({isLoading:false});
    } catch (error) {
      Alert.alert("Can't find you.","So Sad");
    }
    
    
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading} = this.state;

    return (
      isLoading ? <Loading/>:null
    );
  }
}
