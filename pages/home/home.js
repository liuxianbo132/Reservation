const { venues } = require("../../utils/data")

Page({
  data: {
    venues
  },

  goVenue(event) {
    const { id } = event.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/venue/venue?id=${id}`
    })
  }
})
