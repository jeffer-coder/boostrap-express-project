import { Request, Response } from 'express'

class Bootstrap {
  public index (req:Request, res: Response) {
    res.status(200).send('bootstrap.index()')
  }
}

export const bootstrap = new Bootstrap()
