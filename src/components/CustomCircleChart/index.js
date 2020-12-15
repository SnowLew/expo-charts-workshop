import React from 'react'
import { ActivityIndicator,  Text, View, Dimensions } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts'
 
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function CustomCircleChart(props){
    const { circleDimensions: { height = 0, width = 0 }, 
    circleData, 
    yAxis= 0.30, 
    fontSize= 12, 
    stroke = 2.5, 
    subString = null,
    subStringFontsize = 12,
    scalarMode = false } = props;

    const { progress, color } = circleData;

    if(height == 0 && width == 0) {
        return <ActivityIndicator size="small" color="blue"/>
    }

    let finalWidth = width+50;
    let finalHeight = height+50;

    return (
        <View style={{ maxHeight: finalHeight, maxWidth: finalWidth }}>
          <ProgressCircle 
            style={{ height, finalWidth }} 
            progress={progress} 
            progressColor={color}    
            strokeWidth={stroke}
            animate
            />
            <Text style={{ 
                textAlign: 'center',
                marginTop: height*yAxis*-2.2, 
                fontSize: scalarMode ? fontSize : fontSize*yAxis*height*0.02,
                fontWeight: "600"
            }}>
            {`${Math.floor(progress*100)}%`}
            </Text>
            {subString && (
            <Text style={{ 
                textAlign: 'center', 
                fontSize: subStringFontsize*yAxis*height*0.017,
                fontWeight: "600"
            }}>
                {`${subString ? subString : null}`}
            </Text>
            )}
           
        </View> 
    )
}

export default CustomCircleChart