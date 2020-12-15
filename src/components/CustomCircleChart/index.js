import React from 'react'
import { ActivityIndicator,  Text, View  } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts'
 
function CustomCircleChart(props){
    const { circleDimensions: { height = 0, width = 0 }, 
    circleData, 
    yAxis= 0.30, 
    fontSize= 12, 
    stroke = 2.5, 
    subString = null,
    subStringFontsize = 12 } = props;

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
                marginTop: -height+height*yAxis, 
                fontSize,
                fontWeight: "600"
            }}>
            {`${Math.floor(progress*100)}%`}
            </Text>
            {subString && (
            <Text style={{ 
                textAlign: 'center', 
                fontSize: subStringFontsize,
                fontWeight: "600"
            }}>
                {`${subString ? subString : null}`}
            </Text>
            )}
           
        </View> 
    )
}

export default CustomCircleChart