const { findVenue } = require("../../utils/data")

Page({
  data: {
    venue: null
  },

  onLoad(query) {
    this.setData({
      venue: findVenue(query.id)
    })
  },

  goBook() {
    wx.navigateTo({
      url: `/pages/book/book?id=${this.data.venue.id}`
    })
  }
})
