import React from 'react'
import { ResponsiveLine } from "@nivo/line";

import { subMonths, startOfMonth, differenceInDays } from 'date-fns';


export default function Price({ data }) {
  console.log("🚀 ~ Price ~ data:", data)


  return (
    <div style={{ height: 400 }}>
       <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 80, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -45,
        legend: 'Date',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Price',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      enableGridX={false}
      enableGridY={false}
      colors={{ scheme: 'nivo' }}
      lineWidth={3}
      enablePoints={true}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderColor={{ from: 'serieColor' }}
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
