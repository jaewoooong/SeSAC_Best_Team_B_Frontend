export interface IDataItem {
  image: string[];
  record: string[];
}

export interface Image {
  // 이미지 관련 속성들을 정의하세요. 예를 들면:
  url?: string;  // 이곳에 실제 속성을 추가하세요
  createdAt?: string;
  updatedAt?: string;
  // 여기에 다른 필요한 속성들을 추가하세요
}

export interface Record {
  createdAt: string;
  images: Image[];
  kakaoId: string;
  recordId: number;
  recordValue: string;
  updatedAt: string;
}
export interface data {
  key: string;
  data: Record; // 또는 적절한 타입을 사용합니다.
}

// export const dummyData: IDataItem[] = [
//   {
//     image: ["20230829_152711.jpg", "20230829_152711.jpg"],
//     record:
//       "소담스러운 있는 길지 이상 방황하였으며, 하여도 피다. 청춘이 같은 광야에서 용감하고 있으랴? 우는 얼마나 이것이야말로 앞이 스며들어 동력은 되는 그리하였는가? 그들의 듣기만 봄날의 날카로우나 우리의 철환하였는가? 천지는 같은 인생을 낙원을 어디 인간이 있을 위하여 보라. 청춘의 보이는 뛰노는 그들에게 목숨이 봄바람이다. 관현악이며, 뛰노는 이상 사라지지 이것은 것이다. 피어나기 있음으로써 불어 살 할지니, 놀이 위하여서. 인간은 얼음과 우는 시들어 옷을 역사를 같으며, 사막이다. 대한 곧 우리는 있는 같이, 이것이다.",
//   },
//   {
//     image: ["image3.jpg", "image4.jpg"],
//     record: "Record 2",
//   },
//   {
//     image: ["image5.jpg", "image6.jpg"],
//     record: "Record 3",
//   },
//   {
//     image: ["image7.jpg", "image8.jpg"],
//     record: "Record 4",
//   },
// ];
