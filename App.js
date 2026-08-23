import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Keyboard,
} from "react-native";

import SearchBar from "./src/components/SearchBar";
import WeatherCard from "./src/components/WeatherCard";

import {
  getWeatherByCity,
} from "./src/services/weatherApi";


export default function App() {

  const [city, setCity] = useState("Chennai");

  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");


  // ---------------------------------------
  // LOAD WEATHER
  // ---------------------------------------

  const loadWeather = async () => {

    if (!city.trim()) {
      return;
    }

    try {

      Keyboard.dismiss();

      setLoading(true);

      setError("");

      const data = await getWeatherByCity(
        city.trim()
      );

      setWeather(data);

    } catch (error) {

      console.log(error);

      setWeather(null);

      setError(
        "Location not found. Please try another city."
      );

    } finally {

      setLoading(false);

    }
  };


  // ---------------------------------------
  // INITIAL WEATHER
  // ---------------------------------------

  useEffect(() => {

    loadWeather();

  }, []);


  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.neonBackground}>

        {/* =================================
            NEON BACKGROUND
        ================================= */}


        {/* Cyan glow */}

        <View style={styles.cyanGlow} />


        {/* Purple glow */}

        <View style={styles.purpleGlow} />


        {/* Pink glow */}

        <View style={styles.pinkGlow} />


        {/* Blue glow */}

        <View style={styles.blueGlow} />


        {/* =================================
            NEON GRID
        ================================= */}

        <View style={styles.gridContainer}>

          {/* Horizontal lines */}

          <View style={styles.gridLine1} />
          <View style={styles.gridLine2} />
          <View style={styles.gridLine3} />
          <View style={styles.gridLine4} />
          <View style={styles.gridLine5} />


          {/* Vertical lines */}

          <View style={styles.gridVertical1} />
          <View style={styles.gridVertical2} />
          <View style={styles.gridVertical3} />
          <View style={styles.gridVertical4} />

        </View>


        {/* =================================
            MAIN GLASS / NEON CARD
        ================================= */}

        <View style={styles.neonCard}>

          {/* Neon top line */}

          <View style={styles.neonTopLine} />


          {/* Search */}

          <SearchBar
            value={city}
            onChangeText={setCity}
            onSearch={loadWeather}
          />


          {/* Loading */}

          {loading && (

            <View style={styles.loadingContainer}>

              <ActivityIndicator
                size="large"
                color="#00FFFF"
              />

              <Text style={styles.loadingText}>
                Getting live weather...
              </Text>

            </View>

          )}


          {/* Error */}

          {!loading &&
            error !== "" && (

              <View style={styles.errorContainer}>

                <Text style={styles.errorIcon}>
                  ⚠️
                </Text>

                <Text style={styles.errorText}>
                  {error}
                </Text>

              </View>

            )}


          {/* Weather */}

          {!loading &&
            error === "" &&
            weather && (

              <WeatherCard
                weather={weather}
              />

            )}


          {/* Neon bottom line */}

          <View style={styles.neonBottomLine} />

        </View>

      </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  // =====================================
  // ROOT
  // =====================================

  container: {
    flex: 1,

    backgroundColor: "#020207",
  },


  // =====================================
  // NEON BACKGROUND
  // =====================================

  neonBackground: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    paddingHorizontal: 18,

    overflow: "hidden",

    backgroundColor: "#03030A",
  },


  // =====================================
  // CYAN GLOW
  // =====================================

  cyanGlow: {

    position: "absolute",

    width: 430,

    height: 430,

    borderRadius: 215,

    backgroundColor:
      "rgba(0,255,255,0.13)",

    top: -220,

    left: -180,

    shadowColor: "#00FFFF",

    shadowOpacity: 1,

    shadowRadius: 100,

    elevation: 30,
  },


  // =====================================
  // PURPLE GLOW
  // =====================================

  purpleGlow: {

    position: "absolute",

    width: 500,

    height: 500,

    borderRadius: 250,

    backgroundColor:
      "rgba(120,0,255,0.15)",

    bottom: -260,

    right: -200,

    shadowColor: "#8A2BE2",

    shadowOpacity: 1,

    shadowRadius: 120,

    elevation: 30,
  },


  // =====================================
  // PINK GLOW
  // =====================================

  pinkGlow: {

    position: "absolute",

    width: 250,

    height: 250,

    borderRadius: 125,

    backgroundColor:
      "rgba(255,0,150,0.09)",

    top: "35%",

    right: -130,

    shadowColor: "#FF1493",

    shadowOpacity: 1,

    shadowRadius: 90,

    elevation: 25,
  },


  // =====================================
  // BLUE GLOW
  // =====================================

  blueGlow: {

    position: "absolute",

    width: 280,

    height: 280,

    borderRadius: 140,

    backgroundColor:
      "rgba(0,100,255,0.08)",

    bottom: "25%",

    left: -160,

    shadowColor: "#0066FF",

    shadowOpacity: 1,

    shadowRadius: 90,

    elevation: 25,
  },


  // =====================================
  // GRID
  // =====================================

  gridContainer: {

    position: "absolute",

    width: "150%",

    height: "100%",

    opacity: 0.12,
  },


  gridLine1: {

    position: "absolute",

    width: "100%",

    height: 1,

    backgroundColor: "#00FFFF",

    top: "20%",
  },


  gridLine2: {

    position: "absolute",

    width: "100%",

    height: 1,

    backgroundColor: "#00FFFF",

    top: "40%",
  },


  gridLine3: {

    position: "absolute",

    width: "100%",

    height: 1,

    backgroundColor: "#8A2BE2",

    top: "60%",
  },


  gridLine4: {

    position: "absolute",

    width: "100%",

    height: 1,

    backgroundColor: "#8A2BE2",

    top: "80%",
  },


  gridLine5: {

    position: "absolute",

    width: "100%",

    height: 1,

    backgroundColor: "#FF1493",

    top: "90%",
  },


  gridVertical1: {

    position: "absolute",

    width: 1,

    height: "100%",

    backgroundColor: "#00FFFF",

    left: "20%",
  },


  gridVertical2: {

    position: "absolute",

    width: 1,

    height: "100%",

    backgroundColor: "#00FFFF",

    left: "40%",
  },


  gridVertical3: {

    position: "absolute",

    width: 1,

    height: "100%",

    backgroundColor: "#8A2BE2",

    left: "60%",
  },


  gridVertical4: {

    position: "absolute",

    width: 1,

    height: "100%",

    backgroundColor: "#FF1493",

    left: "80%",
  },


  // =====================================
  // MAIN NEON CARD
  // =====================================

  neonCard: {

    width: "100%",

    maxWidth: 430,

    minHeight: 650,

    padding: 27,

    borderRadius: 36,

    backgroundColor:
      "rgba(8,8,20,0.78)",

    borderWidth: 1,

    borderColor:
      "rgba(0,255,255,0.55)",

    shadowColor: "#00FFFF",

    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 0.45,

    shadowRadius: 30,

    elevation: 20,

    alignItems: "center",
  },


  // =====================================
  // TOP NEON LINE
  // =====================================

  neonTopLine: {

    position: "absolute",

    top: 0,

    left: 45,

    right: 45,

    height: 2,

    backgroundColor: "#00FFFF",

    shadowColor: "#00FFFF",

    shadowOpacity: 1,

    shadowRadius: 12,

    elevation: 10,
  },


  // =====================================
  // BOTTOM NEON LINE
  // =====================================

  neonBottomLine: {

    position: "absolute",

    bottom: 0,

    left: 80,

    right: 80,

    height: 2,

    backgroundColor: "#FF1493",

    shadowColor: "#FF1493",

    shadowOpacity: 1,

    shadowRadius: 12,

    elevation: 10,
  },


  // =====================================
  // LOADING
  // =====================================

  loadingContainer: {

    marginTop: 110,

    alignItems: "center",
  },


  loadingText: {

    color: "#00FFFF",

    fontSize: 15,

    marginTop: 15,

    textShadowColor: "#00FFFF",

    textShadowRadius: 10,
  },


  // =====================================
  // ERROR
  // =====================================

  errorContainer: {

    marginTop: 100,

    alignItems: "center",

    paddingHorizontal: 20,
  },


  errorIcon: {

    fontSize: 50,

    marginBottom: 15,
  },


  errorText: {

    color: "#FFFFFF",

    fontSize: 16,

    textAlign: "center",

    lineHeight: 24,
  },

});