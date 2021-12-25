import express from 'express'
import { bootstrap } from '@controllers/bootstrap.controller'

class Router {
    public router : express.Router

    constructor () {
      this.router = express.Router()
      this.controllers()
    }

    private controllers () {
      this.router.get('/bootstrap', bootstrap.index)
    }
}

export const router = new Router().router
