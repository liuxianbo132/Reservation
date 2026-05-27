const {
  getBookings,
  updateBookingStatus,
  deleteBooking: removeBooking
} = require("../../utils/booking")

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
  },

  deleteBooking(event) {
    const { id } = event.currentTarget.dataset
    wx.showModal({
      title: "删除预约",
      content: "删除后本地记录不可恢复，确定删除吗？",
      confirmText: "删除",
      confirmColor: "#B42318",
      success: (res) => {
        if (!res.confirm) return
        removeBooking(id)
        this.refresh()
        wx.showToast({ title: "已删除", icon: "success" })
      }
    })
  }
})
