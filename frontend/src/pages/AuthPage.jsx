import { useRecoilValue } from "recoil"
import LoginCard from "../componets/LoginCard"
import SignupCard from "../componets/SignUpCard"
import authScreenAtom from "../atoms/authAtom"

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  console.log(authScreenAtom)
  return (
    <>
      {authScreenState === "login" ? <LoginCard /> : <SignupCard />}
    </>
  )
}

export default AuthPage