import { StatusBar } from 'expo-status-bar';
import {Alert} from 'react-native';
import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY="96a7cb8fd4be3c9659fe8244038b7912";

export default class App extends React.Component {
  state={
    isLoading:true
  }
  getWeather = async(latitude,longitude)=>{
    const {data:{main:{temp}, weather}} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({
      temp:temp, 
      condition:weather[0].main,
      isLoading:false
    });

    console.log(data);
  }
  getLocation = async()=>{
    try {
      await Location.requestPermissionsAsync();
      const {coords :{latitude,longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
    } catch (error) {
      Alert.alert("Can't find you.","So Sad");
    }
    
    
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp, condition} = this.state;

    return (
      isLoading ? <Loading/>:<Weather temp={Math.round(temp)} condition={condition}/>
    );
  }
}
