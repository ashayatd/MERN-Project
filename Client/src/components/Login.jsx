const [Username, setUsername] = useState('');
const [Password, setPassword] = useState('');
const loginUser = async ()=>{}

export default function Login() {

  return (
    <div>
      <div>
      <h2>Welcome !</h2>
      <h2>Sign in to </h2>
      <p>Lorem Ipsum is simply </p>
      <h2>Username</h2>
      <input onChange={(e)=>{setUsername(e.target.value)}} value={Username}/>
      <h2>Password</h2>
      <input onChange={(e)=>{setPassword(e.target.value)}} value={Password} type="password"/>
      <input type="checkbox"/><p>Rememebr me</p>
      <p>Forgot Password ?</p>
      <button>Login</button>
      <p>Don`t have an Account?  <span>Register</span></p>
      </div>
      <div>
        <img src='https://i.ibb.co/5YCbHPH/small-team-discussing-ideas-2194220-0-1.png'/>
      </div>
    </div>
  )
}