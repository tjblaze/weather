if (!isLoading) {
    return (
      <View
        style={{
          backgroundColor: "#2b3654",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {isLoading && <Text style={styles.Text}> Loading...</Text>}
        <ActivityIndicator size="large" color="00ff00" />
      </View>
    );
  } else if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }
  http://api.openweathermap.org/data/2.5/weather?q=london&appid=bc7a096b0fb9f385404183604e18551a

  const { searchInput, searchResult, isLoading, error } = this.state;

  this.weatherIcon={
    thurderstorm:"weather-lightning",
    rain:"weather-lightning-rainy"  ,
    sunny:"weather-sunny",
    snowy:"weather-snowy-heavy",
    clody:"partly-Cloudy"
  }

  getWeatherIcon(icon,rangeId){
    switch (true) {
      case rangeId>=200 && rangeId<=232:
       his.setState({icon:this.weatherIcon.thurderstorm})
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
             break;
    
      default:

        break;
    }
  }

     
  searchCity = async () => {
    this.setState({
      isLoading: true
    });
    const url = ``;
    await fetch(url)
      .then(res => res.json())
      .then(responseJson =>
        this.setState({
          isLoading: false,
          searchResult: {
            city: responseJson.name,
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp,
            maxtemp:this.calCelsius(responseJson.main.temp_min),
            mintemp:this.calCelsius(responseJson.main.temp_min),
            icon:this.getWeatherIcon(this.weatherIcon,responseJson.weather[0].id)
          
          }
        })
        
      )
      .catch(error => this.setState({ error }));
  };

  onChangeText={searchInput => {
    this.setState({ searchInput });
  }}
  this.setState({ 
    city:response.name,
    temp:this.calCelsius(json.main.temp),
    temp_min:this.calCelsius(json.main.temp_min),
    temp_max:this.calCelsius(json.main.temp_max),
    main:json.weather[0].main,
    description:json.weather[0].main,
    icon:'Weather-Sunny'

  });
 