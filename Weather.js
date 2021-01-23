import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions={
    Haze:{//
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"],
        title:"안개",
        subtitle:"앞이 잘 안보일수 있으니 외출 자제하세요."
    },
    Thunderstorm: {//
        iconName:"weather-lightning",
        gradient:["#544a7d","#ffd452"],
        title:"뇌우",
        subtitle:"천둥 번개가 치니 외출 자제하세요."
    },
    Drizzle: {
        iconName:"weather-rainy",
        gradient:["#355C7D","#6C5B7B","#C06C84"],
        title:"이슬비",
        subtitle:"비가 조금 오니 우산챙기세요."
    },
    Rain: {//
        iconName:"weather-pouring",
        gradient:["#3f2b96","#a8c0ff"],
        title:"비",
        subtitle:"비가 오니 우산챙기세요"
    },
    Snow: {
        iconName:"weather-snowy-heavy",
        gradient:["#0575E6","#00F260"],
        title:"눈",
        subtitle:"미끄러지지않게 조심하세요"
    },
    Clear: {//
        iconName:"weather-sunny",
        gradient:["#5433FF","#20BDFF","#A5FECB"],
        title:"맑음",
        subtitle:"산책하기 딱 좋은날입니다!"
    },
    Clouds: {//
        iconName:"weather-cloudy",
        gradient:["#2c3e50","#2980b9"],
        title:"흐림",
        subtitle:"맑지 못한 날이예요."
    },
    Mist: {
        iconName:"weather-fog",
        gradient:["#4DA0B0","#D39D38"],
        title:"안개",
        subtitle:"조심히 외출하세요."
    },
    Smoke: {//
        iconName:"weather-fog",
        gradient:["#334d50","#cbcaa5"],
        title:"안개",
        subtitle:"조심히 외출하세요"
    },
    Dust: {//
        iconName:"weather-fog",
        gradient:["#334d50","#cbcaa5"],
        title:"먼지",
        subtitle:"마스크 꼭 착용하세요"
    },
    Fog: {
        iconName:"weather-fog",
        gradient:["#4DA0B0","#D39D38"],
        title:"안개",
        subtitle:"조심히 외출하세요"
    },
    Sand: {//
        iconName:"weather-cloudy",
        gradient:["#636363","#a2ab58"],
        title:"모래바람",
        subtitle:"마스크 꼭 쓰세요"
    },
    Ash: {
        iconName:"smoking-off",
        gradient:["#355C7D","#6C5B7B","#C06C84"],
        title:"금연",
        subtitle:"담배는 몸에 안좋아요"
    },
    Squall: {
        iconName:"weather-windy-variant",
        gradient:["#355C7D","#6C5B7B","#C06C84"],
        title:"돌풍",
        subtitle:"바람이 많이 붑니다."
    },
    Tornado: {
        iconName:"weather-tornado",
        gradient:["#355C7D","#6C5B7B","#C06C84"],
        title:"토네이도",
        subtitle:"외출시 날아갈 수 있어요."
    },
}

export default function Weather({ temp, condition}) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                name={weatherOptions[condition].iconName} 
                size={96} 
                color="white" />
                <Text style={styles.temp}>
                    {temp}˚
                </Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
    );
}
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Smoke",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado"]).isRequired
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color:"white"
    },
    title:{
        color:"white",
        fontSize:44,
        fontWeight:"300",
        marginBottom:10
    },
    subtitle:{
        color:"white",
        fontWeight:"600",
        fontSize:24
    },
    textContainer:{
        paddingHorizontal:0,
        alignItems:"flex-start",
        width:"70%"
        
    }
})