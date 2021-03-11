import React, { Component } from 'react'
import { Text, View ,StyleSheet, TextInput,ActivityIndicator, TouchableHighlight} from 'react-native'
import Icon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Ellipse } from "react-native-svg";


const ApiKey = "bc7a096b0fb9f385404183604e18551a";
export class WeatherApp extends Component {
  
  constructor (props) {

    super(props)
    this.state = {
      cityName:'',
      city:undefined,
      temp:undefined,
      temp_min:undefined,
      temp_max:undefined,
      icon:undefined,
      main:undefined,
      description:undefined,
      icon: undefined,
      isLoading:true
    };
    this.weatherIcon={
      thurderstorm:"weather-lightning",
      rain:"weather-lightning-rainy"  ,
      sunny:"weather-sunny",
      snowy:"weather-snowy-heavy",
      clody:"partly-Cloudy"
    }
 }


 calCelsius(temp){
  var cel=Math.floor(temp-273.15);
  return cel;
   }



  getWeatherIcon(icon,rangeId){
    switch (true) {
      case rangeId>=200 && rangeId<=232:
       this.setState({icon:this.weatherIcon.thurderstorm})
        break;
        case rangeId>=300 && rangeId<=322:
         this.setState({icon:this.weatherIcon.rain})
         break;
         case rangeId>=500 && rangeId<=531:
           this.setState({icon:this.weatherIcon.rain})
           break;
           case rangeId>=600 && rangeId<=622:
             this.setState({icon:this.weatherIcon.snowy})
             case rangeId>=800 && rangeId<=804:
               this.setState({icon:this.weatherIcon.thurderstorm})
               break;
             
    
      default:

        break;
    }
  }


  
  getWeather = async (e) => {
    
    e.preventDefault();  
    try {
      let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=bc7a096b0fb9f385404183604e18551a`
      );
      let json = await response.json();
      this.setState({ 
        city:json.name,
        temp:this.calCelsius(json.main.temp),
        temp_min:this.calCelsius(json.main.temp_min),
        temp_max:this.calCelsius(json.main.temp_max),
        main:json.weather[0].main,
        description:json.weather[0].description,
    

    
      });
       this.getWeatherIcon(this.weatherIcon,json.weather[0].id) 
    } catch (error) {
      console.error(error);
    }
  };
   

 

    render() {
    
        return (
          <View style={styles.container}>
              <View style={styles.header}>
              <Icon name="unread" style={styles.icon}></Icon>
              <Text style={styles.mondayMarch7}>monday,march 7</Text>  
              <MaterialCommunityIconsIcon name="temperature-celsius" style={styles.icon2}></MaterialCommunityIconsIcon>
              </View>
              <View style={styles.search}>
              
                     <TextInput
                      style={styles.texinput}
                    placeholder="City"
                      onChangeText={cityName=>this.setState({cityName})}
                       /> 
            <View style={styles.button}>
              <TouchableHighlight onPress={this.getWeather}>
              <Text onPress={this.getWeather} style={styles.textButton}> 
              Search
            </Text>
              </TouchableHighlight>

            </View>                  
            </View>
              <View style={styles.weatherProperties}>
              <View style={styles.temProperties}>
              <View style={styles.lagosContainer}>
              <Text style={styles.lagos}>{this.state.city}</Text>
              <Icon name="dots-three-horizontal" style={styles.icon3}></Icon>
              </View>
              <View style={styles.temp}>
              <Text style={styles.loremIpsum}>{this.state.temp}&#xB0;</Text>
              </View>
              <View style={styles.averagetemp}>
              <Text style={styles.loremIpsum2}>{this.state.temp_max}&#xB0;</Text>
              <Text style={styles.text}>{this.state.temp_min}&deg;</Text>
              </View>
              </View>
              <View style={styles.temIconProperties}>
              <View style={styles.ellipseStack}>
      <Svg viewBox="0 0 257.23 258.46" style={styles.ellipse}>
        <Ellipse
          stroke="rgba(230, 230, 230,1)"
          strokeWidth={0}
          fill="rgba(248,194,28,1)"
          cx={129}
          cy={129}
          rx={129}
          ry={129}
        ></Ellipse>
      </Svg>
      <MaterialCommunityIconsIcon name={this.state.icon} style={styles.icon4}></MaterialCommunityIconsIcon>
    </View>
              </View>
              </View>
  <View style={styles.sunnyContainer}>
    <Text style={styles.sunny}>{this.state.main}</Text>
    <Icon name="dots-three-horizontal" style={styles.icon5}></Icon>
  </View>  
  <View style={styles.mainContainer}>
    <Text style={styles.main}>{this.state.description}</Text>
  </View> 
          </View>
      )
      

    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:"rgba(148,119,11,1)"
    },
    header:{
        marginTop:"20%",
        flexDirection:"row",
        marginHorizontal:25,
        
        
    },
    icon:{
        fontSize:30,
        color:'white'
    },
    icon2:{
        fontSize:30,
        color:'white',
        marginLeft:70
    },
    mondayMarch7:{
        marginLeft:70,
        fontSize:20,
        marginTop:20,
        color:'white'
    },
    search:{
        marginTop:"10%",
        flexDirection:'row'
    },
    button:{
      height:50,
      width:80,
      borderRadius:10,
      borderWidth:3,
      borderColor:'rgba(198,179,68,1)',
    },
    textButton:{
      color:'white',
      fontSize:17,
      paddingTop:10,
      paddingLeft:13,
    },
    texinput:{
        height:50,
        width:250,
        borderColor:"rgba(198,179,68,1)",
        borderWidth:6,
        marginHorizontal:18,
        borderRadius:10,
        backgroundColor:'white',
        padding:10,
        fontSize:20,
    },

    weatherProperties:{
        marginTop:'20%',
        flexDirection:'row'
    },
    temProperties:{
        marginLeft:30,
    },
    temp: {
        width: 130,
        height: 82,
        marginTop:40,
      },
      loremIpsum: {
        color: "rgba(255,255,255,1)",
        fontSize: 70
      },
      averagetemp: {
        width: 100,
        height: 21,
        marginTop:40,
        flexDirection:'row'
      },
      loremIpsum2: {
        color: "rgba(255,255,255,1)",
        fontSize: 18
      },
      text: {
        color: "rgba(255,255,255,1)",
        fontSize: 18,
        marginLeft: 53
      },
    lagosContainer: {
        width: 80,
        height: 47
      },
      lagos: {
        
        color: "rgba(255,255,255,1)",
        fontSize: 20
      },
      icon3: {
        color: "rgba(255,255,255,1)",
        fontSize: 30,
        marginTop: -12,
      },
    temIconProperties: {
        width: 257,
        height: 258,
        marginRight:-10,
      },
      ellipse: {
        top: 0,
        left: 100,
        width: 257,
        height: 258,
        position: "absolute",
        opacity: 0.27
      },
      icon4: {
        top: 30,
        left: 130,
        position: "absolute",
        color: "rgba(255,255,255,1)",
        fontSize: 200,
       
      },
      ellipseStack: {
        width: 257,
        height: 258
      },
      sunnyContainer: {
        width: 80,
        height: 45,
        marginLeft:30
      },
      sunny: {
        color: "rgba(255,255,255,1)",
        fontSize: 20
      },
      icon5: {
        color: "rgba(255,255,255,1)",
        fontSize: 30,
        marginTop: -12
      },
      mainContainer: {
        marginTop:100,
        marginLeft:30,
        width: 187,
        height: 24
      },
      main: {
        color: "rgba(255,255,255,1)",
        fontSize: 20
      },
      placeholder:{
          marginRight:30,
      }
})


export default WeatherApp
