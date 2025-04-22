import { Router } from 'express'
import { IntermediateController } from '../../controllers/intermediate/intermediate.js'

export const createIntermediateRouter = ({ intermediateModel }) => {
  const intermediateRouter = Router()

  const intermediateController = new IntermediateController({ intermediateModel })
  // INDIVIDUALS DIARIES
  intermediateRouter.get('/individualDiaries', intermediateController.getIndividualDiaries)
  intermediateRouter.post('/individualDiaries', intermediateController.createIndividualDiaries)
  intermediateRouter.delete('/individualDiaries/:id', intermediateController.deleteIndividualDiaries)
  // INDIVIDUALS MONITORING
  intermediateRouter.get('/individualMonitoring', intermediateController.getIndividualMonitoring)
  intermediateRouter.post('/individualMonitoring', intermediateController.createIndividualMonitoring)
  intermediateRouter.delete('/individualMonitoring/:id', intermediateController.deleteIndividualMonitoring)
  // INDIVIDUALS ALERT
  intermediateRouter.get('/individualAlert', intermediateController.getIndividualAlert)
  intermediateRouter.post('/individualAlert', intermediateController.createIndividualAlert)
  intermediateRouter.delete('/individualAlert/:id', intermediateController.deleteIndividualAlert)
  // INDIVIDUALS WEEKLY
  intermediateRouter.get('/individualWeekly', intermediateController.getIndividualWeekly)
  intermediateRouter.post('/individualWeekly', intermediateController.createIndividualWeekly)
  intermediateRouter.delete('/individualWeekly/:id', intermediateController.deleteIndividualWeekly)
  // INDIVIDUALS NGO WEEKLY
  intermediateRouter.get('/individualNgoWeekly', intermediateController.getIndividualNgoWeekly)
  intermediateRouter.post('/individualNgoWeekly', intermediateController.createIndividualNgoWeekly)
  intermediateRouter.delete('/individualNgoWeekly/:id', intermediateController.deleteIndividualNgoWeekly)
  // INDIVIDUALS SUNDAY
  intermediateRouter.get('/individualSunday', intermediateController.getIndividualSunday)
  intermediateRouter.post('/individualSunday', intermediateController.createIndividualSunday)
  intermediateRouter.delete('/individualSunday/:id', intermediateController.deleteIndividualSunday)
  // COLLECTIVES DIARIES
  intermediateRouter.get('/collectiveDiaries', intermediateController.getCollectiveDiaries)
  intermediateRouter.post('/collectiveDiaries', intermediateController.createCollectiveDiaries)
  intermediateRouter.delete('/collectiveDiaries/:id', intermediateController.deleteCollectiveDiaries)
  // COLLECTIVES MONITORING
  intermediateRouter.get('/collectiveMonitoring', intermediateController.getCollectiveMonitoring)
  intermediateRouter.post('/collectiveMonitoring', intermediateController.createCollectiveMonitoring)
  intermediateRouter.delete('/collectiveMonitoring/:id', intermediateController.deleteCollectiveMonitoring)
  // COLLECTIVES ALERT
  intermediateRouter.get('/collectiveAlert', intermediateController.getCollectiveAlert)
  intermediateRouter.post('/collectiveAlert', intermediateController.createCollectiveAlert)
  intermediateRouter.delete('/collectiveAlert/:id', intermediateController.deleteCollectiveAlert)
  // COLLECTIVES WEEKLY
  intermediateRouter.get('/collectiveWeekly', intermediateController.getCollectiveWeekly)
  intermediateRouter.post('/collectiveWeekly', intermediateController.createCollectiveWeekly)
  intermediateRouter.delete('/collectiveWeekly/:id', intermediateController.deleteCollectiveWeekly)
  // COLLECTIVES NGO WEEKLY
  intermediateRouter.get('/collectiveNgoWeekly', intermediateController.getCollectiveNgoWeekly)
  intermediateRouter.post('/collectiveNgoWeekly', intermediateController.createCollectiveNgoWeekly)
  intermediateRouter.delete('/collectiveNgoWeekly/:id', intermediateController.deleteCollectiveNgoWeekly)
  // COLLECTIVES SUNDAY
  intermediateRouter.get('/collectiveSunday', intermediateController.getCollectiveSunday)
  intermediateRouter.post('/collectiveSunday', intermediateController.createCollectiveSunday)
  intermediateRouter.delete('/collectiveSunday/:id', intermediateController.deleteCollectiveSunday)

  return intermediateRouter
}
