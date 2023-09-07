import React from "react"
import { Chrono } from "react-chrono";
import { DataItem } from "../data/data";

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
  data: DataItem[];
}

function formatDateTime(dateTimeString: string) {
  const parsedDate = new Date(dateTimeString);
  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
  const day = String(parsedDate.getDate()).padStart(2, '0');
  const hours = String(parsedDate.getHours()).padStart(2, '0');
  const minutes = String(parsedDate.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function Timeline({ data }: TimelineProps) {
  const s3_url = process.env.REACT_APP_S3_URL;
  const transformedData = data.map((item) => ({
    title: item.images.length > 0 ? formatDateTime(item.images[0].CreateDate) : "", // images 배열이 비어있는 경우 빈 문자열을 넣음
    cardSubtitle: item.record.recordValue,
    media: {
      type: "IMAGE",
      source: {
        url: `${s3_url}/${item.images[0].imageName}`, // 여기에 이미지 URL을 넣어주세요.
      },
    },
  }));

  return (
    <div style={{ width: "400px" }}>
      <Chrono items={transformedData} mode="VERTICAL" />
    </div>
  )
}

export default Timeline;