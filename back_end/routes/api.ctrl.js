const router = require('express').Router();

router.use('/auth', require('./auth/auth.ctrl'));
router.use('/user', require('./user/user.ctrl'));
router.use('/post', require('./post/post.ctrl'));
router.use('/diagnosis', require('./diagnosis/diagnosis.ctrl'));
router.use('/diagnosisData', require('./diagnosisData/diagnosisData.ctrl'));
router.use('/symptom', require('./symptom/symptom.ctrl'));
router.use('/symptomData', require('./symptomData/symptomData.ctrl'));
router.use('/medicine', require('./medicine/medicine.ctrl'));
router.use('/center', require('./center/center.ctrl'));
router.use('/station', require('./station/station.ctrl'));

module.exports = router;