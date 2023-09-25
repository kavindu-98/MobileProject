
import React from 'react'
import {
    View,  
    Text,
    ImageBackground,
    Image,
    ScrollView,
    Button,
    // Section,
    FlatList
} from 'react-native';

import{
    COLORS,
    FONTS,
    SIZES,
    icons,
    images,
    dummyData

} from "../constants";

const Cards = ({imageUri}) => {

        return (
            <View style={{ height: 165, width: 240, marginLeft: 30 }}>
            <View style={{ flex: 2 }}>
                <Image source={imageUri} 
                
                style={{
                    flex: 1, width: null, height: null, resizeMode: 'cover'
                }}
                />

            </View>
            <View style={{ flex: 1 }}>
                <Image />

            </View>

        </View>
        )
    }

export default Cards;