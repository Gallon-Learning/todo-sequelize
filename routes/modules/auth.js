// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 相關 packages
const passport = require('passport')

// 定義路由
router.get('/facebook', passport.authenticate('facebook', {
    scope: ['email', 'public_profile']
}))

router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/users/login'
}))

// 匯出路由模組
module.exports = router