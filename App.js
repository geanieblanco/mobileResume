import React from 'react';
import { Text, ScrollView, View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-ionicons';
import Communications from 'react-native-communications';
import Header from './src/components/header';
import Button from './src/components/button';

class LandingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
      return(
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
        }}>
              <Image 
                  style={styles.image}
                  source={require('./src/assets/images/logo.png')} />
              <Text style={{
                marginTop: 15,
                marginBottom: 15,
                fontSize: 50,
                fontFamily: "KemcoPixelBold"
              }}>WELCOME</Text>
              <Button 
                  text="ABOUT"
                  onPress={()=> this.props.navigation.navigate('About')}
                  style={[styles.button, 
                  {backgroundColor: '#5DEAE5'}]}/>
              <Button 
                  text="RESUME"
                  onPress={()=> this.props.navigation.navigate('Resume')}
                  style={[styles.button, 
                  {backgroundColor: '#FFEF60'}]}/>
              <Button 
                  text="CONTACT"
                  onPress={()=> this.props.navigation.navigate('Contact')}
                  style={[styles.button, 
                  {backgroundColor: '#FF6BEB'}]}/>
          </View>
      )
  }
}

class AboutScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Icon name="person" color="#FF6BEB"/>
    )
  }
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
  static navigationOptions = {
    tabBarIcon: () => (
      <Icon name="document" color="#5DEAE5"/>
    )
  }
  render() {
    return (
      
          <View style={styles.container}>
              <Header title="Resume"/>
          <ScrollView
          contentContainerStyle={{
            justifyContent: 'center'}}>
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

                <View style={[styles.bar, {backgroundColor: "#FF6BEB"}]}>
                  <Text style={styles.headline}>Soft Skills</Text>
                </View>

                <Text style={styles.type}>
                  Public speaking, conflict management, critial thinking, copy editing, data entry, basic research methods, event management | Typing: 75WPM.</Text>
                  
                <View style={[styles.bar, {backgroundColor: "#FFEF60"}]} >
                  <Text style={styles.headline}>Projects</Text>
                </View>

                <Text style={styles.subhead}>Streetscape</Text>
                  <Text style={styles.type}>
                    Technologies used: React Native, Google Maps API, MySQL, Node.JS, XCode, Android Studio, Cocoapods, Grunt, Firebase, AWS</Text>
                    <Text 
                    style={styles.link}
                    onPress={() => Communications.web('https://www.streetscape.io')}>Website</Text>

                  <Text style={styles.subhead}>Mobile Resume</Text>
                  <Text style={styles.type}>
                  Technologies used: Sketch/Figma, React Native, React Native Communications, Node.JS, Hockey App</Text>

                  <Text 
                    style={styles.link}
                    onPress={() => Communications.web('https://www.figma.com/file/ITy0ZDaola9hLUXHic2PLz5z/mobresUIUX?node-id=0%3A1')}>UX Design</Text>
                  <Text 
                    style={styles.link}
                    onPress={() => Communications.web('https://www.figma.com/file/ITy0ZDaola9hLUXHic2PLz5z/mobresUIUX?node-id=0%3A118')}>Initial UI Design</Text>

                  <View style={[styles.bar, {backgroundColor: "#FF6BEB"}]} >
                    <Text style={styles.headline}>Education</Text>
                  </View>

                  <Text style={styles.subhead}>Rutgers' Coding Bootcamp</Text>
                  <Text style={styles.type}>Full Stack Development, February 2018</Text>

                  <Text style={styles.subhead}>SUNY Oneonta</Text>
                  <Text style={styles.type}>BA Communications Studies, May 2015</Text>


                  <View style={[styles.bar, {backgroundColor: "#FFEF60"}]}>
                    <Text style={styles.headline}>Experience</Text>
                  </View>
                  <Text style={[styles.subhead, {marginTop:10}]}>X4 Tech Staffing, Office Manager</Text>
                  <Text style={styles.subhead}>August 2018-April 2019</Text>
                  <Text style={styles.type}>
                  -Managed CRM; cleaned over 100,000 pieces of data</Text>
                  <Text style={styles.type}>
                  -Oversee office operations including new hire onboarding, receiving and depositing client checks</Text>
                  <Text style={styles.type}>
                  -Coordinate invoices and client contracts between the London head office and New York branch</Text>

                  <Text style={[styles.subhead, {marginTop:10}]}>Vans, Visual & Sales Associate</Text>
                  <Text style={styles.subhead}>August 2017-September 2018</Text>
                  <Text style={styles.type}>
                  -Staged window and tabletop visuals according to corporate planograms</Text>
                  <Text style={styles.type}>
                  -Consistently lead the store in Units Per Transaction and Average Dollar Spent KPIs</Text>
                  <Text style={styles.type}>
                  -Provided excellent customer service by implementing company standards for guest interaction</Text>

                  <Text style={[styles.subhead, {marginTop:10}]}>A to Z Media, Jr. Production Manager</Text>
                  <Text style={styles.subhead}>February 2016-December 2016</Text>
                  <Text style={styles.type}>
                  -Oversaw the production of vinyl, CD, DVD, and print projects for record labels and individual artists</Text>
                  <Text style={styles.type}>
                  -Tackled problems proactively with solutions that fit the timeline and needs of each client</Text>
                  <Text style={styles.type}>
                  -Ensured that all pieces of each project were completed to client specifications in a timely manner</Text>
              
              </ScrollView>
          </View>
    );
  }
}

class ContactScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: null,
    tabBarIcon: () => (
      <Icon name="mail" color="#89FF77"/>
    )
  }
  render() {
    return (
      <View style={[styles.container, { justifyContent: 'flex-start' }]}>
        <Header title="Connect"/>
        <View style={{alignContent:'center', alignItems: 'center'}}>
          <View style={[styles.bar, { backgroundColor: "#89FF77", marginTop:40 }]} >
            <Text style={styles.headline}>Social Media</Text>
          </View>

          <View style={
            {
              flexDirection: 'row',
              justifyContent: 'space-between'
              }}>
            <Icon style={styles.icon} size={50} name="logo-twitter"
            onPress={() => Communications.web('https://twitter.com/geanieblanco')}/>
            <Icon style={styles.icon} size={50} name="logo-instagram"
            onPress={() => Communications.web('https://instagram.com/geanie.me')}/>
            <Icon style={styles.icon} size={50} name="logo-linkedin"
            onPress={() => Communications.web('https://www.linkedin.com/in/blancoregina/')}/>
            <Icon style={styles.icon} size={50} name="logo-github"
            onPress={() => Communications.web('https://github.com/geanieblanco')}/>
            <Icon style={styles.icon} size={50} name="calendar"
            onPress={() => Communications.web('https://calendly.com/geanieblanco')}/>
          </View>

          <Button 
            onPress={() => Communications.email(['hello@geanieblanco.com'],null,null,'Message from the App','')}
            text="Send An Email"
            style={[{backgroundColor: '#FF6BEB'}]}/>
          <Button 
            onPress={() => Communications.phonecall('6464702654', true)}
            text="Leave a Message"
            style={[{backgroundColor: '#FFEF60'}]}/>
          <Button 
            onPress={() => Communications.text('6464702654')}
            text="Send a Text"
            style={[{backgroundColor: '#5DEAE5'}]}/>

        </View>
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
      marginBottom: 5

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
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  headline: {
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: "KemcoPixelBold",
    alignSelf: 'center'
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
    alignSelf: 'center'
  },
  icon: {
    padding: 10
  },
  link: {
    fontFamily: "BitstreamVeraSansMono-Bold",
    color:"#5DEAE5",
    alignSelf: 'center',
    marginBottom: 3
  }
})

const TabNavigator = createBottomTabNavigator({
  About: AboutScreen,
  Resume: ResumeScreen,
  Contact: ContactScreen
},{
  lazy: false,
  tabBarOptions: {
    showLabel: false
  }
});

const StackNavigator = createStackNavigator({ 
  Landing: LandingScreen
});

export default createAppContainer(createSwitchNavigator(
  {
    Landing: StackNavigator,
    App: TabNavigator
  },
  {
    initialRouteName: 'Landing', 
  }
));

// export default createAppContainer(TabNavigator);


// <Text style={styles.subhead}>Name</Text>
// <TextInput style={[styles.bar, {backgroundColor: "#FF6BEB"}]}/>
// <Text style={styles.subhead}>Email</Text>
// <TextInput style={[styles.bar, {backgroundColor: "#89FF77"}]}/>
// <Text style={styles.subhead}>Message</Text>
// <TextInput style={[styles.bar, {backgroundColor: "#FFEF60", height: 220}]}/>

/* <Button 
onPress={() => Communications.web('https://calendly.com/geanieblanco')}
text="Book a Meeting"
style={[{backgroundColor: '#89FF77'}]}/> */