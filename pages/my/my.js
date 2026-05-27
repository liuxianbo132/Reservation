const { getBookings } = require("../../utils/booking")

Page({
  data: {
    bookings: [],
    isEmpty: true,
    hasBookings: false
  },

  onShow() {
    const bookings = getBookings()
    this.setData({
      bookings,
      isEmpty: bookings.length === 0,
      hasBookings: bookings.length > 0
    })
  },

  goHome() {
    wx.switchTab({
      url: "/pages/home/home"
    })
  }
})
