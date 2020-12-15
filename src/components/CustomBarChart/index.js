import React, { PureComponent } from 'react'
import { Svg, G, Line, Rect } from 'react-native-svg'
import * as d3 from 'd3'
import { ActivityIndicator, View, Text } from 'react-native'


function CustomBarChart(props) {
    const { chartData, chartDimensions: { height = 0, width = 0} } = props;
    const GRAPH_BAR_WIDTH = 21.5

    if(height == 0 && width == 0) {
        return <ActivityIndicator size="small" color='blue' />
    }   

    const xDomain = chartData.map((item, index) => index)
    const xRange = [0, width]
    const yDomain = [0, d3.max(chartData, d => d.value)]
    const yRange = [0, height]

    const x = d3.scalePoint()
      .domain(xDomain)
      .range(xRange)
      .padding(1)

    const y = d3.scaleLinear()
      .domain(yDomain)
      .range(yRange)

    return (
    <View style={{ backgroundColor: "transparent", flex: 1}}>
        <Svg width={width} height={height}>
          <G y={height}>
            {chartData.map((item, index) => (
              <Rect
                key={index}
                x={x(index) - (GRAPH_BAR_WIDTH / 1)}
                y={y(item.value) * -1}
                rx={2.5}                
                width={GRAPH_BAR_WIDTH}
                height={y(item.value)}
                fill={item.svg.fill}
              />
            ))}
          </G>
        </Svg>
    </View>)
}

export default CustomBarChart
