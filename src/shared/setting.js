export const authEndpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
export const scope = 'https://www.googleapis.com/auth/youtube.readonly';
export const client_id = "371801345710-lbkti4gbimgmi9firvfrg3id459nj6v5.apps.googleusercontent.com";
export const redirectUrl = 'http://localhost:3000/';

const accessUrl = `${authEndpoint}?scope=${scope}&include_granted_scopes=true&response_type=token&redirect_uri=${redirectUrl}&client_id=${client_id}`;
export default accessUrl;
