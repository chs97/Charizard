const path = require('path')

const env = process.env.APP_ENV || 'prod'

const STATICDOMAIN = env === 'prod' ? '.' : ''