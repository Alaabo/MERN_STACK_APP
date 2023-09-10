import Express from 'express';

import {getFacility , newFacility , getAllFacilityByWillaya , getAllFacility ,updateFacility,deleteFacility } from "../controller/facilityController.js"

const facilityRouter = Express.Router()

facilityRouter.get("/find" , getFacility)
facilityRouter.get("/all" , getAllFacility)
facilityRouter.get("/:id" , getAllFacilityByWillaya)
facilityRouter.post("/new" , newFacility)
facilityRouter.post("/update/:id" , updateFacility )
facilityRouter.post("/delete/:id", deleteFacility)
export default facilityRouter