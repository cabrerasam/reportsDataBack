import express from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { createAreaRouter } from './routes/users/areas.js'
import { createRegionRouter } from './routes/users/regions.js'
import { createRoleRouter } from './routes/users/roles.js'
import { createUserRouter } from './routes/users/users.js'
import { createSpecialRouter } from './routes/reports/specials.js'
import { createSundayRouter } from './routes/reports/sundays.js'
import { createAlertRouter } from './routes/reports/alerts.js'
import { createMonitoringRouter } from './routes/reports/monitoring.js'
import { createWeeklyRouter } from './routes/reports/weekly.js'
import { createNgoWeeklyRouter } from './routes/reports/ngoWeekly.js'
import { createLoginRouter } from './routes/login/login.js'
import cookieParser from 'cookie-parser'
import { createIssueRouter } from './routes/reports/issues.js'
import { createAdminSubjectRouter } from './routes/admin/subjects.js'
import { createAdminReportRouter } from './routes/admin/reports.js'
export const createApp = ({
  areaModel,
  regionModel,
  roleModel,
  userModel,
  specialModel,
  sundayModel,
  alertModel,
  monitoringModel,
  weeklyModel,
  ngoWeeklyModel,
  loginModel,
  issueModel,
  adminSubjectModel,
  adminReportModel
}) => {
  const PORT = process.env.PORT ?? 1234
  const app = express()
  app.disable('x-powered-by')
  app.use(express.json())
  app.use(cookieParser())
  app.use(corsMiddleware())
  app.use('/uploads', express.static('uploads'))

  app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.sendStatus(204) // Respuesta sin contenido
  })

  // ROUTES
  app.use('/areas', createAreaRouter({ areaModel }))
  app.use('/regions', createRegionRouter({ regionModel }))
  app.use('/roles', createRoleRouter({ roleModel }))
  app.use('/users', createUserRouter({ userModel }))
  app.use('/specials', createSpecialRouter({ specialModel }))
  app.use('/sundays', createSundayRouter({ sundayModel }))
  app.use('/alerts', createAlertRouter({ alertModel }))
  app.use('/monitoring', createMonitoringRouter({ monitoringModel }))
  app.use('/weekly', createWeeklyRouter({ weeklyModel }))
  app.use('/ngoweekly', createNgoWeeklyRouter({ ngoWeeklyModel }))
  app.use('/login', createLoginRouter({ loginModel }))
  app.use('/issues', createIssueRouter({ issueModel }))
  app.use('/admin/subjects', createAdminSubjectRouter({ adminSubjectModel }))
  app.use('/admin/reports', createAdminReportRouter({ adminReportModel }))

  app.use((req, res) => {
    res.status(404).send('<h1>404</h1>')
  })

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`server listening on port ${PORT}`)
  })
}
