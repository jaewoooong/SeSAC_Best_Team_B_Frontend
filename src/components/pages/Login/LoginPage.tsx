import { KAKAO_AUTH_URL } from "./Auth";

const LoginPage = () => {
  return (
    <div>
      <a href={KAKAO_AUTH_URL}>
          <div>
            <button>Login with Kakao</button>
          </div>
      </a>
    </div>
  );
};

export default LoginPage;