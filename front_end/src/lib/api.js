import axios from 'axios';
// import queryString from 'query-string';

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://api.afdaspace.com:443' : 'http://localhost:3000';

export const login = (id, expires_in) => axios.post(`/api/auth/login`, { id, expires_in });
export const join = (authId, nick, sex, birthDate) => axios.post(`/api/auth/join`, { authId, nick, sex, birthDate });
export const checkJWT = (token) => axios.post(`/api/auth/checkJWT`, {token});

export const getProfile = (id) => axios.get(`/api/user/${id}/profile`);
export const updateProfileCard = (id, nick, introduction) => axios.patch(`/api/user/${id}/profile`, { nick, introduction });
export const getUserContentList = (type, id) => axios.get(`/api/user/${id}/${type}`);
export const postUserDiagnosis = (id, data) => axios.post(`/api/user/${id}/diagnosis`, { data });
export const postUserSymptom = (id, symptomId) => axios.post(`/api/user/${id}/symptom`, { symptomId });
export const postUserMedicine = (id, medicineId) => axios.post(`/api/user/${id}/medicine`, { medicineId });
export const postUserMedicineDosage = (id, data) => axios.post(`/api/user/${id}/medicineDosageData`, { data });
export const postUserMedicinePurpose = (id, data) => axios.post(`/api/user/${id}/medicinePurposeData`, { data });
export const postUserMedicineEvaluation = (id, data) => axios.post(`/api/user/${id}/medicineEvaluationData`, { data });

export const getContent = (type, id) => axios.get(`/api/${type}/${id}`);
export const deleteContent = (type, id) => axios.delete(`/api/${type}/${id}`);
export const getDiagnosisList = () => axios.get(`/api/diagnosis`);
export const getSymptomList = () => axios.get(`/api/symptom`);
export const getMedicineList = () => axios.get(`/api/medicine`);
export const getContentCommentList = (type, id) => axios.get(`/api/${type}/${id}/comment`);
export const getContentSymptomList = (type, id) => axios.get(`/api/${type}/${id}/symptom`);
export const getContentMedicineList = (type, id) => axios.get(`/api/${type}/${id}/medicine`);

export const getDiagnosisSummaryChartData = (diagnosisId) => axios.get(`/api/chart/diagnosisSummary?diagnosisId=${diagnosisId}`);
export const getDiagnosisMedicineChartData = (diagnosisId) => axios.get(`/api/chart/diagnosisMedicine?diagnosisId=${diagnosisId}`);
export const getMedicineSummaryChartData = (medicineId) => axios.get(`/api/chart/medicineSummary?medicineId=${medicineId}`);

export const getStationList = () => axios.get(`/api/station`);



export const getPostList = (userId) => axios.get(`/api/post?userId=${userId}`);
