import express from 'express'
import parser from 'body-parser'
import morgan from 'morgan'
import { router } from '@app/router'

export class App {
    public readonly app : express.Application

    constructor () {
      this.app = express()
      this.middlewares()
      this.routers()
    }

    private middlewares () {
      this.app.use(parser.json())
      this.app.use(morgan('common'))
    }

    private routers () {
      this.app.use(router)
    }
}

export const app = new App().app
