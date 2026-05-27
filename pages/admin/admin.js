const { getBookings, updateBookingStatus } = require("../../utils/booking")

Page({
  data: {
    bookings: []
  },

  onShow() {
    this.refresh()
  },

  refresh() {
    this.setData({
      bookings: getBookings()
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
