import React from 'react';
import { Text, ScrollView, View, Image, StyleSheet, TextInput } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-ionicons';
import Communications from 'react-native-communications';
import Header from './src/components/header';
import Button from './src/components/button';


class AboutScreen extends React.Component {
  render() {
    return (
      <ScrollView 
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center'}}
            style={styles.container}>
                <Image 
                    style={styles.image}
                    source={require('./src/assets/images/me.png')}/>

                <Text style={styles.title}>Greetings!</Text>
                
                <View style={[styles.bar, {backgroundColor: "#5DEAE5"}]} >
                  <Text style={styles.headline}>Background</Text>
                </View>
                
                <Text style={styles.type}>
                Asking yourself “what do you want to be when you grow up?” is much less whimsical when you’re actually grown up. Coming from a background in event management and marketing, I transitioned to tech in 2017. After graduating from Rutgers’ Coding Bootcamp with a certification in full stack development, I began on the path of building and starting my own mobile startup, Streetscape.</Text>

                <View style={[styles.bar, {backgroundColor: "#89FF77"}]} >
                  <Text style={styles.headline}>Goals</Text>
                </View>

                <Text style={styles.type}>
                One day I hope to make a difference as a product manager and designer. The combination of critical and creative problem solving is a perfect amalgam of my strongest skills. My #1 pipe dream is to manage at, or own a mobile development agency while continuing to learn new technologies and bring accessible tech to as many people as possible.</Text>
                
                <View style={[styles.bar, {backgroundColor: "#5DEAE5"}]} >
                  <Text style={styles.headline}>About Me</Text>
                </View>

                <Text style={styles.type}>After growing up and attending school in the Hudson Valley & Catskill regions of New York, I moved to the NYC Metro Area to start my professional career. My hobbies include cooking, baking, attending live shows, DIY everything, and finding the best cheap eats.</Text>
            </ScrollView>
    );
  }
}

class ResumeScreen extends React.Component {
  render() {
    return (
      
          <View style={styles.container}>
              <Header title="Resume"/>
          <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center'}}>
                <View style={[styles.bar, {backgroundColor: "#FF6BEB"}]} >
                  <Text style={styles.headline}>Summary</Text>
                </View>
              
                  <Text style={styles.type}>
                  I am actively seeking an entry level position in frontend engineering. Mobile development, UX design, and agency work are areas that I am particularly interested in getting involved in. My skills, projects, and previous experience can be found below!</Text>

                <View style={[styles.bar, {backgroundColor: "#FFEF60"}]} >
                  <Text style={styles.headline}>Tech Stack</Text>
                </View>

                <Text style={styles.subhead}>Languages + Frameworks + Libraries</Text>
                  <Text style={styles.type}>
                  HTML5, CSS3, JavaScript, jQuery, React, ReactNative, Node.JS, MySQL, MongoDB, Mocha, Handlebars, Bootstrap, Materialize, SASS, Agile/Scrum </Text>

                <Text style={styles.subhead}>Programs</Text>
                  <Text style={styles.type}>
                  Sketch, Figma, Photoshop Elements, XCode, VS Code, Github, Microsoft Suite, GSuite</Text>
                  
                <View style={[styles.bar, {backgroundColor: "#FF6BEB"}]} >
                  <Text style={styles.headline}>Projects</Text>
                </View>

                <Text style={styles.subhead}>Streetscape</Text>
                  <Text style={styles.type}>
                  Technologies used: React Native, Google Maps API, MySQL, Node.JS, XCode, Android Studio, Cocoapods, Grunt, Firebase, AWS</Text>
                  <Text style={{fontFamily: "BitstreamVeraSansMono-Bold"}}>Website | Repo</Text>

                  <Text style={styles.subhead}>Mobile Resume</Text>
                  <Text style={styles.type}>
                  Technologies used: Sketch/Figma, UX Design, UI Design, React Native, React Native Communications, Node.JS, Hockey App</Text>
              </ScrollView>
          </View>
    );
  }
}

class ContactScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container, {justifyContent: 'flex-start', alignItems: 'center'}]}>
        <Header title="Contact"/>
        <View style={[styles.bar, {backgroundColor: "#89FF77"}]} >
          <Text style={styles.headline}>Social Media</Text>
        </View>
        
        <View style={
          {
            flexDirection: 'row'
            }}>
          <Icon name="logo-facebook"/>
          <Icon name="logo-twitter"/>
          <Icon name="logo-instagram"/>
          <Icon name="logo-linkedin"/>
          <Icon name="logo-github"/>
        </View>
        <Button 
        onPress={() => Communications.email(['hello@geanieblanco.com'],null,null,'Message from the App','')}
        text="Send An Email"
        style={[styles.button, {backgroundColor: '#FF6BEB'}]}/>
        
        <Button 
        onPress={() => Communications.phonecall('6464702654', true)}
        text="Leave a Message"
        style={[styles.button, {backgroundColor: '#FFEF60'}]}/>
        
        <Button 
        onPress={() => Communications.text('6464702654')}
        text="Send a Text"
        style={[styles.button, {backgroundColor: '#5DEAE5'}]}/>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
  },
  type: {
      fontFamily: "BitstreamVeraSansMono-Roman",
      fontSize: 15,
      marginLeft: 20,
      marginRight: 20,
  },
  image: {
      height:210, 
      width:210,
      marginBottom: 10,
      marginTop: 50
  },
  bar: {
    height: 30,
    width: 220,
    marginBottom: 10,
    justifyContent: 'center',
  },
  headline: {
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: "KemcoPixelBold"
  },
  title: {
    fontSize: 40,
    marginTop: 10,
    marginBottom: 20,
    fontFamily: "KemcoPixelBold"
  },
  subhead: {
    fontFamily: "BitstreamVeraSansMono-BoldOb",
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 5
  }
})

const TabNavigator = createBottomTabNavigator({
  About: AboutScreen,
  Resume: ResumeScreen,
  Contact: ContactScreen
},
);

export default createAppContainer(TabNavigator);


// <Text style={styles.subhead}>Name</Text>
// <TextInput style={[styles.bar, {backgroundColor: "#FF6BEB"}]}/>
// <Text style={styles.subhead}>Email</Text>
// <TextInput style={[styles.bar, {backgroundColor: "#89FF77"}]}/>
// <Text style={styles.subhead}>Message</Text>
// <TextInput style={[styles.bar, {backgroundColor: "#FFEF60", height: 220}]}/>