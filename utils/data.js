const venues = [
  {
    id: "v001",
    name: "一号篮球场",
    type: "篮球",
    location: "体育中心东侧",
    price: 80,
    openTime: "09:00-21:00",
    capacity: "半场/全场",
    image: "/assets/venues/basketball.png",
    description: "适合日常训练、朋友组局和小型比赛，夜间灯光开放。"
  },
  {
    id: "v002",
    name: "羽毛球 A 馆",
    type: "羽毛球",
    location: "综合馆二楼",
    price: 45,
    openTime: "08:00-22:00",
    capacity: "单片场地",
    image: "/assets/venues/badminton.png",
    description: "木地板场地，配备休息区，适合单打和双打预约。"
  },
  {
    id: "v003",
    name: "多功能会议室",
    type: "会议",
    location: "行政楼三楼",
    price: 120,
    openTime: "09:00-18:00",
    capacity: "20 人",
    image: "/assets/venues/meeting.png",
    description: "配备投影、白板和无线网络，适合社团会议和小型培训。"
  }
]

const timeSlots = [
  "09:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "14:00-15:00",
  "15:00-16:00",
  "16:00-17:00",
  "19:00-20:00",
  "20:00-21:00"
]

function findVenue(id) {
  return venues.find((item) => item.id === id)
}

module.exports = {
  venues,
  timeSlots,
  findVenue
}
