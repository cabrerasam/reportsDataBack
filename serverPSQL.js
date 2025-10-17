import { createApp } from './app.js'
import { AreaModel } from './models/users/area.js'
import { RegionModel } from './models/users/region.js'
import { RoleModel } from './models/users/role.js'
import { UserModel } from './models/users/user.js'
import { ReportModel } from './models/reports/report.js'
import { WeeklyModel } from './models/reports/weekly.js'
import { LoginModel } from './models/login/login.js'
import { AdminSubjectModel } from './models/admin/subjects.js'
import { AdminReportModel } from './models/admin/reports.js'
import { IssueModel } from './models/reports/issues.js'
createApp({
  areaModel: AreaModel,
  regionModel: RegionModel,
  roleModel: RoleModel,
  userModel: UserModel,
  reportModel: ReportModel,
  weeklyModel: WeeklyModel,
  loginModel: LoginModel,
  adminSubjectModel: AdminSubjectModel,
  adminReportModel: AdminReportModel,
  issueModel: IssueModel
})
