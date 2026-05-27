# 后端数据库接入路线

这个项目当前使用 `wx.setStorageSync` 做本地模拟数据，适合新手先把页面和流程跑通。

正式上线推荐先使用微信云开发数据库，不需要自己买服务器，也不需要一开始配置 MySQL。

## 推荐方案：微信云开发

1. 在微信公众平台注册小程序，拿到真实 AppID。
2. 用真实 AppID 重新导入项目。
3. 在微信开发者工具里打开“云开发”。
4. 创建云环境，记下环境 ID。
5. 在云数据库里创建集合：
   - `venues`：场地
   - `bookings`：预约
   - `users`：用户
   - `admins`：管理员
6. 给数据库设置权限。新手阶段可以先用开发环境测试，正式发布前再收紧权限。

## 数据表示例

`venues`：

```json
{
  "name": "一号篮球场",
  "type": "篮球",
  "location": "体育中心东侧",
  "price": 80,
  "openTime": "09:00-21:00",
  "capacity": "半场/全场",
  "image": "/assets/venues/basketball.png",
  "enabled": true
}
```

`bookings`：

```json
{
  "venueId": "v001",
  "venueName": "一号篮球场",
  "date": "2026-05-27",
  "slot": "09:00-10:00",
  "contactName": "四百五老大",
  "phone": "13800000000",
  "remark": "两个人",
  "status": "待确认",
  "createdAt": "2026-05-27T08:00:00.000Z"
}
```

## 小程序端读取数据库示例

```js
const db = wx.cloud.database()

db.collection("venues")
  .where({ enabled: true })
  .get()
  .then((res) => {
    this.setData({
      venues: res.data
    })
  })
```

## 小程序端新增预约示例

```js
const db = wx.cloud.database()

db.collection("bookings").add({
  data: {
    venueId,
    venueName,
    date,
    slot,
    contactName,
    phone,
    remark,
    status: "待确认",
    createdAt: new Date()
  }
})
```

## 以后再升级：Python + MySQL

等第一版小程序跑通后，再考虑 Python + MySQL：

1. Python 写后端接口，比如 FastAPI。
2. MySQL 保存场地和预约数据。
3. 小程序通过 `wx.request` 调用你的后端接口。
4. 服务器需要 HTTPS 域名，并在微信公众平台配置合法 request 域名。

这条路线更自由，但新手阶段配置更多，所以建议第二阶段再做。
