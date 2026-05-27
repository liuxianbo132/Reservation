const { getBookings, deleteBooking: removeBooking } = require("../../utils/booking")

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

  deleteBooking(event) {
    const { id } = event.currentTarget.dataset
    wx.showModal({
      title: "删除预约",
      content: "确定要删除这条预约记录吗？",
      confirmText: "删除",
      confirmColor: "#B42318",
      success: (res) => {
        if (!res.confirm) return
        removeBooking(id)
        this.refresh()
        wx.showToast({ title: "已删除", icon: "success" })
      }
    })
  },

  goHome() {
    wx.switchTab({
      url: "/pages/home/home"
    })
  }
})
