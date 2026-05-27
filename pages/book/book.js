const { findVenue, timeSlots } = require("../../utils/data")
const { createBooking } = require("../../utils/booking")

function formatDate(date) {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, "0")
  const day = `${date.getDate()}`.padStart(2, "0")
  return `${year}-${month}-${day}`
}

Page({
  data: {
    venue: null,
    timeSlots,
    today: "",
    date: "",
    selectedSlot: "",
    contactName: "",
    phone: "",
    remark: ""
  },

  onLoad(query) {
    const today = formatDate(new Date())
    this.setData({
      venue: findVenue(query.id),
      today,
      date: today,
      selectedSlot: timeSlots[0]
    })
  },

  onDateChange(event) {
    this.setData({
      date: event.detail.value
    })
  },

  chooseSlot(event) {
    this.setData({
      selectedSlot: event.currentTarget.dataset.slot
    })
  },

  onNameInput(event) {
    this.setData({
      contactName: event.detail.value
    })
  },

  onPhoneInput(event) {
    this.setData({
      phone: event.detail.value
    })
  },

  onRemarkInput(event) {
    this.setData({
      remark: event.detail.value
    })
  },

  submitBooking() {
    const { venue, date, selectedSlot, contactName, phone, remark } = this.data

    if (!contactName.trim()) {
      wx.showToast({ title: "请填写联系人", icon: "none" })
      return
    }

    if (!/^1\d{10}$/.test(phone)) {
      wx.showToast({ title: "请填写正确手机号", icon: "none" })
      return
    }

    createBooking({
      venueId: venue.id,
      venueName: venue.name,
      venueType: venue.type,
      date,
      slot: selectedSlot,
      contactName,
      phone,
      remark
    })

    wx.showToast({
      title: "预约已提交",
      icon: "success"
    })

    setTimeout(() => {
      wx.switchTab({
        url: "/pages/my/my"
      })
    }, 700)
  }
})
