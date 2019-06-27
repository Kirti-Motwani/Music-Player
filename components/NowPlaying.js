
import React,{Component} from 'react';
import { Platform,View,StyleSheet,Text,Image } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {MaterialIcons} from "@expo/vector-icons";

import Colors from "../constants/Colors";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

export default class NowPlaying extends Component{
    constructor(props){
        super(props);
        this.state = {
            progress: 0.3
        }
    }
    render(){
        return(
            <LinearGradient colors={[Colors.accentGradientStart , Colors.accentGradientEnd]}
                            start={[0,0]}
                            end={[1,1]}
                            style={styles.nowPlayingContainer}>
                {/*Progress Bar*/}
                <View style = {[styles.progressbar,{width: responsiveWidth(this.state.progress * 100)}]}/>
                {/*End of Progress Bar*/}

                <View style={styles.controlContainer}>
                    <View style ={styles.songContainer}>
                        <Image source = {{uri: "https://images.genius.com/f505234629c96e699d905f231080ac6d.1000x1000x1.jpg"}}
                               style = {styles.albumArt}
                        />
                        <View style = {styles.infoContainer}>
                            <Text style = {styles.songTitle}>Demons</Text>
                            <Text style ={styles.albumText}>Night Vision - Imagine Dragons </Text>
                        </View>
                    </View>
                    <MaterialIcons name = {'play-arrow'} color={Colors.headingColor} size = {responsiveFontSize(6)}/>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    nowPlayingContainer:{
        height: responsiveHeight(10),
    },
    progressbar:{
        height: responsiveHeight(0.4),
        backgroundColor: Colors.headingColor,
        borderRadius: responsiveWidth(1)

    },
    controlContainer:{
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(6),
        alignItems: 'center'
    },
    songContainer:{
        // alignSelf: 'stretch',
        // alignItems: 'center',
        flexDirection: 'row',
    },
    albumArt:{
        width: responsiveHeight(7),
        height: responsiveHeight(7),
        borderRadius: responsiveHeight(1),
        marginRight: responsiveWidth(5),

    },
    infoContainer:{
        justifyContent: 'center',
    },
    songTitle:{
        fontFamily: 'fira-regular',
        color: Colors.headingColor,
        fontSize: responsiveFontSize(2.3),
        marginBottom: responsiveHeight(0.3),

    },
    albumText:{
        fontFamily: 'fira-regular',
        color: Colors.greyColor,
        fontSize: responsiveFontSize(1.7)
    }
});