const REST_API_KEY: any = process.env.REACT_APP_KAKAO_REST_API_KEY;
const REDIRECT_URI: any = process.env.REACT_APP_KAKAO_REDIRECT_URI;

export const KAKAO_AUTH_URL: string = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=profile_nickname,account_email`;