const app = getApp()

function getBookings() {
  return wx.getStorageSync(app.globalData.storageKeys.bookings) || []
}

function saveBookings(bookings) {
  wx.setStorageSync(app.globalData.storageKeys.bookings, bookings)
}

function createBooking(payload) {
  const bookings = getBookings()
  const booking = {
    id: `b_${Date.now()}`,
    status: "待确认",
    createdAt: new Date().toISOString(),
    ...payload
  }
  bookings.unshift(booking)
  saveBookings(bookings)
  return booking
}

function updateBookingStatus(id, status) {
  const bookings = getBookings().map((item) => {
    if (item.id !== id) return item
    return {
      ...item,
      status
    }
  })
  saveBookings(bookings)
  return bookings
}

module.exports = {
  getBookings,
  createBooking,
  updateBookingStatus
}
