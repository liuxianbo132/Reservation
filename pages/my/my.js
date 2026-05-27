const { getBookings } = require("../../utils/booking")

Page({
  data: {
    bookings: []
  },

  onShow() {
    this.setData({
      bookings: getBookings()
    })
  },

  goHome() {
    wx.switchTab({
      url: "/pages/home/home"
    })
  }
})
