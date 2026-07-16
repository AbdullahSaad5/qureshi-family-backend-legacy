const express = require("express");
const router = express.Router();
const familyController = require("../Controllers/familyController");

// router.post("/signup", familyController.signup);

// router.post("/login", familyController.login);

router.post("/members", familyController.createPerson);

router.put("/members/:userID", familyController.updatePerson);

router.delete("/members/:id", familyController.deletePerson);

router.get("/members/:id", familyController.getPersonById);

router.get("/members", familyController.getFamilyTrees);

router.get("/getAllMembers", familyController.getAllPersons);

router.get("/getPendingReq", familyController.getPendingChildAdditionRequests);

router.get("/counter", familyController.getCounter);

router.post("/counter/:no", familyController.postCounter);

router.post("/addPerson", familyController.addPerson);

router.post("/members/:parentId/children/:childId", familyController.addChildById);

router.put("/addChildApprov/:childID", familyController.childAdditionRequest);
router.put("/addChildDec/:childID", familyController.childAddRequestDecline);


router.post("/addChild", familyController.addChild);

router.post("/makePublicFigure/:personId", familyController.makePublicFigure);

router.get("/getAllPublicFigures", familyController.getAllPublicFigures);

router.get("/adminGetTreeById/:id", familyController.adminGetFamilyTreeById);
router.get("/getTreeById/:id", familyController.updatedGetFamilyTreeById);

router.get("/searchbyname/:name", familyController.searchPersonByName);

router.get("/getFamilyDetails/:id", familyController.getPersonWithFamily);

router.get("/searchbyusername/:name", familyController.searchUserByName);

router.get("/getAncestorChain/:id", familyController.getAncestorChain);



router.get("/openSearch", familyController.openSearch);

router.post("/addSpouse", familyController.addSpouse);

router.get("/search", familyController.searchPerson);

module.exports = router;
