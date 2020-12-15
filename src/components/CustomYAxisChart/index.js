import React from 'react'
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { View } from 'react-native'

function AxesExample(props){
    const { chartDimensions: { height = 0, width = 0} } = props;

    const data = [ 0, 10, 2, 3, 5, 1, 2, 12]

    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight  = 0

    return (
        <View style={{ height, padding: 6, flexDirection: 'row', backgroundColor: "transparent" }}>
            <YAxis
                data={data}
                style={{ height }}
                contentInset={verticalContentInset}
                svg={axesSvg}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={data}
                    contentInset={verticalContentInset}
                    svg={{ stroke: 'rgba(172,220,139, 1)', strokeWidth: 6, }}
                >
                    <Grid/>
                </LineChart>
                
            </View>
        </View>
    )
}


export default AxesExample
