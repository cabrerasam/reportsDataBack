import { Router } from 'express'
import { IssueController } from '../../controllers/reports/issues.js'

export const createIssueRouter = ({ issueModel }) => {
  const issuesRouter = Router()

  const issuesController = new IssueController({ issueModel })

  issuesRouter.get('/', issuesController.getAll)
  issuesRouter.get('/:id', issuesController.getById)
  issuesRouter.post('/', issuesController.create)
  issuesRouter.delete('/:id', issuesController.delete)
  issuesRouter.put('/:id', issuesController.update)

  return issuesRouter
}
