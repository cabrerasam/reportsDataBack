import { createApp } from './app.js'
import { SpecialModel } from './models/reports/special.js'
import { SundayModel } from './models/reports/sunday.js'
import { AlertModel } from './models/reports/alert.js'
import { AreaModel } from './models/users/area.js'
import { RegionModel } from './models/users/region.js'
import { RoleModel } from './models/users/role.js'
import { UserModel } from './models/users/user.js'
import { MonitoringModel } from './models/reports/monitoring.js'
import { WeeklyModel } from './models/reports/weekly.js'
import { NgoWeeklyModel } from './models/reports/ngoWeekly.js'
import { LoginModel } from './models/login/login.js'
import { IssueModel } from './models/reports/issues.js'
import { AdminSubjectModel } from './models/admin/subjects.js'
import { AdminReportModel } from './models/admin/reports.js'
createApp({
  areaModel: AreaModel,
  regionModel: RegionModel,
  roleModel: RoleModel,
  userModel: UserModel,
  specialModel: SpecialModel,
  sundayModel: SundayModel,
  alertModel: AlertModel,
  monitoringModel: MonitoringModel,
  weeklyModel: WeeklyModel,
  ngoWeeklyModel: NgoWeeklyModel,
  loginModel: LoginModel,
  issueModel: IssueModel,
  adminSubjectModel: AdminSubjectModel,
  adminReportModel: AdminReportModel
})
