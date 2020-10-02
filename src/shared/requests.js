const api_key = "AIzaSyDaAf9sPuwYuWVvLMT-ny1QKR_yW7ODPO4";

const requests = {
    playlists: `https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCqrILQNl5Ed9Dz6CGMyvMTQ&maxResults=50&key=${api_key}`,
    subscriptions: `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=${api_key}`,
    activities: `https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=100&key=${api_key}`
};

export default requests;
