import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Login Details:", form);

    setStatus(
      "Login form submitted. Connect your authentication service to verify your account."
    );
  };

  return (
    <section className="login-section [width:100%] [min-height:650px] [padding:65px_0] [background:#f8faff] [display:flex] [align-items:center] [justify-content:center] [font-family:'Poppins',_sans-serif] max-[650px]:[padding:35px_0]">

      <div className="login-container [width:85%] [max-width:1100px] [min-height:490px] [margin:auto] [display:grid] [grid-template-columns:1fr_1fr] [background:#ffffff] [border-radius:18px] [box-shadow:0_12px_40px_rgba(6,_1,_69,_0.08)] [overflow:hidden] max-[850px]:[width:90%] max-[650px]:[width:90%] max-[650px]:[grid-template-columns:1fr]">

        {/* Left Side - Login Form */}
        <div className="login-left [padding:45px_40px] [display:flex] [flex-direction:column] [justify-content:center] max-[850px]:[padding:35px_25px] max-[650px]:[padding:35px_25px]">

          <div className="login-heading [text-align:center] [margin-bottom:25px] [&_h1]:[font-size:25px] [&_h1]:[color:#171d2b] [&_h1]:[margin-bottom:8px] [&_p]:[font-size:13px] [&_p]:[color:#687084] [&_p]:[margin-bottom:10px]">
            <h1>Welcome Back</h1>

            <p>
              Start your journey with us. Don't have an account?
            </p>

            <Link to="/signup" className="signup-link [color:#1683d8] [font-size:14px] [font-weight:600] [text-decoration:none] [&:hover]:[color:#060145] [&:hover]:[text-decoration:underline]">
              Sign up
            </Link>
          </div>

          <form className="login-form [display:flex] [flex-direction:column] [&_>label]:[font-size:13px] [&_>label]:[font-weight:500] [&_>label]:[color:#252b38] [&_>label]:[margin-bottom:8px] [&_>input]:[width:100%] [&_>input]:[height:46px] [&_>input]:[padding:12px] [&_>input]:[margin-bottom:20px] [&_>input]:[border:1px_solid_#c6ccd5] [&_>input]:[border-radius:8px] [&_>input]:[outline:none] [&_>input]:[font-family:inherit] [&_>input]:[font-size:13px] [&_>input]:[color:#171d2b] [&_>input]:[background:#ffffff] [&_>input]:[transition:0.3s] [&_>input:focus]:[border-color:#1683d8] [&_>input:focus]:[box-shadow:0_0_0_3px_rgba(22,_131,_216,_0.10)]" onSubmit={handleSubmit}>

            {/* Email */}
            <label htmlFor="login-email">
              Email
            </label>

            <input
              id="login-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />

            {/* Password */}
            <label htmlFor="login-password">
              Password
            </label>

            <input
              id="login-password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />

            {/* Remember and Forgot Password */}
            <div className="login-options [display:flex] [justify-content:space-between] [align-items:center] [margin:0_0_20px]">

              <label className="remember-option [display:flex] [align-items:center] [gap:7px] [font-size:12px] [color:#4d5665] [cursor:pointer] [&_input]:[accent-color:#1683d8] [&_input]:[width:15px] [&_input]:[height:15px]">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                />

                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot-link [border:none] [background:transparent] [color:#1683d8] [font-family:inherit] [font-size:12px] [font-weight:600] [cursor:pointer]"
                onClick={() =>
                  setStatus(
                    "Please contact support to reset your password."
                  )
                }
              >
                Forgot password?
              </button>

            </div>

            {/* Sign In */}
            <button type="submit" className="signin-button [width:100%] [height:47px] [border:none] [border-radius:8px] [background:linear-gradient(_100deg,_#0878e8,_#1497dc_)] [color:#ffffff] [font-family:inherit] [font-size:13px] [font-weight:600] [cursor:pointer] [transition:0.3s] [&:hover]:[background:#060145] [&:hover]:[transform:translateY(-2px)]">
              Sign in to your account
            </button>

            <div className="login-divider [display:flex] [align-items:center] [gap:12px] [margin:17px_0] [color:#555e6c] [font-size:12px] [&::before]:[content:''] [&::before]:[flex:1] [&::before]:[height:1px] [&::before]:[background:#e0e4eb] [&::after]:[content:''] [&::after]:[flex:1] [&::after]:[height:1px] [&::after]:[background:#e0e4eb]">
              <span>OR</span>
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="google-button [width:100%] [height:47px] [display:flex] [align-items:center] [justify-content:flex-start] [gap:12px] [padding:0_13px] [border:1px_solid_#c6ccd5] [border-radius:8px] [background:#ffffff] [color:#343b47] [font-family:inherit] [font-size:13px] [cursor:pointer] [transition:0.3s] [&:hover]:[background:#f5f8fc] [&:hover]:[border-color:#1683d8]"
              onClick={() =>
                setStatus(
                  "Google sign-in will be available after authentication is configured."
                )
              }
            >
              <span className="google-icon [font-size:19px] [font-weight:700] [color:#4285f4]">G</span>
              Sign in with Google
            </button>

            {status && (
              <p className="login-status [margin-top:15px] [font-size:12px] [line-height:1.6] [color:#1746a2]">
                {status}
              </p>
            )}

          </form>

        </div>

        {/* Right Side - Image Space */}
        <div className="login-right [padding:25px] [display:flex] [align-items:center] [justify-content:center] [background:#ffffff] max-[850px]:[padding:18px] max-[650px]:[padding:0_25px_25px]">

          <div className="login-image [width:100%] [height:100%] [min-height:400px] [background:transparent] [border-radius:12px] [overflow:hidden] max-[650px]:[min-height:200px]">
            {/* Add your image here later */}
          </div>

        </div>

      </div>

    </section>
  );
}