const { getBookings, updateBookingStatus } = require("../../utils/booking")

Page({
  data: {
    bookings: [],
    isEmpty: true,
    hasBookings: false
  },

  onShow() {
    this.refresh()
  },

  refresh() {
    const bookings = getBookings()
    this.setData({
      bookings,
      isEmpty: bookings.length === 0,
      hasBookings: bookings.length > 0
    })
  },

  confirmBooking(event) {
    updateBookingStatus(event.currentTarget.dataset.id, "已确认")
    this.refresh()
    wx.showToast({ title: "已确认", icon: "success" })
  },

  cancelBooking(event) {
    updateBookingStatus(event.currentTarget.dataset.id, "已取消")
    this.refresh()
    wx.showToast({ title: "已取消", icon: "none" })
  }
})
