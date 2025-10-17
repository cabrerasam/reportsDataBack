import { Router } from 'express'
import { IssueController } from '../../controllers/reports/issues.js'

export const createIssueRouter = ({ issueModel }) => {
  const issueRouter = Router()

  const issueController = new IssueController({ issueModel })

  issueRouter.get('/', issueController.getAll)
  issueRouter.post('/', issueController.create)
  issueRouter.delete('/:id', issueController.delete)
  issueRouter.put('/:id', issueController.update)

  return issueRouter
}
