import request from "./request"
import "../mock/mock"
let qs = require("qs")

export function login(data) {
  return request({
    url: "/login",
    data: qs.stringify(data)
  })
}

export function getData() {
  return request({
    url: "/data"
  })
}
