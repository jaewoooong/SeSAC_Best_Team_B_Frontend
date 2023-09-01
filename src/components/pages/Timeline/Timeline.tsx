import React from "react"
import { Chrono } from "react-chrono";

interface item {
    title: string;
    cardSubtitle: string;
    media: {
      type: string;
      source: {
        url: string;
      };
    };
}
  
interface TimelineProps {
    items: item[];
}

function Timeline({ items }: TimelineProps) {

  return (
    <div style={{ width: "400px" }}>
          <Chrono items={items} mode="HORIZONTAL" />
          <Chrono items={items} mode="VERTICAL" />
          <Chrono items={items} mode="VERTICAL_ALTERNATING"/>
    </div>
  )
}

export default Timeline;