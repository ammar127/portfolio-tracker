import React from 'react'
import { ResponsiveLine } from "@nivo/line";
export default function Price({ data }) {
 console.log("🚀 ~ Price ~ data:", data)
 
 const highestPoint = data.reduce((max, series) => {
  const maxInSeries = Math.max(...series.data.map(d => d.y));
  return maxInSeries > max.value ? { value: maxInSeries, data: series.data.find(d => d.y === maxInSeries) } : max;
}, { value: -Infinity, data: null });

// Create a marker for the highest point
const highestValueMarker = {
  axis: 'y',
  value: highestPoint.value,
  lineStyle: { stroke: 'red', strokeWidth: 2 },
  legend: `Highest Value: ${highestPoint.value}`,
  legendPosition: 'top-right',
  legendOrientation: 'vertical',
};
  return (
    <div style={{ height: 400 }}>
      <ResponsiveLine
      markers={[highestValueMarker]}
        data={data}
        margin={{ top: 50, right: 110, bottom: 80, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 10,
          legend: 'Date',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Value',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        enableGridX={false}
        enableGridY={false}

        lineWidth={3}
        enablePoints={true}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderColor={{ from: 'color' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        enableArea={true}
        areaOpacity={0}
        enableSlices="x"
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  )
}
