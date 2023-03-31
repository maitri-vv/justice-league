import React, { useEffect, useState } from "react";

// import { useRouter } from "next/router";
import { newsletter } from "@/urls";
import { useRouter } from "next/router";

// import newsletter from "@/backend/models/newsletter";
// import { DatePicker } from '@/components/DatePicker'
const Contactus = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  useEffect(() => {
    document.title = "Justice League Newsletter";
  }, []);
  const [input, setInput] = useState({
    email: "",
    name: "",
    complain: " ",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.email === "" || input.name === "") {
      setError("Email and Name Required");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    const res = await fetch(newsletter, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
    // let {resp} = await axios.post(UserLogin , input)
    const data = await res.json();
    console.log(data);
    if (data.success) {
      let authToken = data.authToken;
      localStorage.setItem("authToken", authToken);
      router.push("/");
    } else {
      setError(data.msg);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="min-h-screen text-white hero bg-base-200"  style={{ backgroundImage: `url("/images/complain.png")` }}>
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Register Your Complaint here!
            </h1>
            <h3 className="py-6 text-2xl font-semibold">
            Please describe the impact of the incident on you or others involved. This can help us understand the severity of the situation and take appropriate action.
            </h3>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
            <div className="card-body">
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-date">Date</span>
                </label>
                <input type="date" placeholder="Date" className="input input-bordered" />
              </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required onChange={(e) => handleChange(e)}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  required onChange={(e) => handleChange(e)}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Complaint</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Complaint"
                  name="complain"
                  required onChange={(e) => handleChange(e)}
                  className="h-32 text-black resize-none input input-bordered"
                />
              </div>
              <div className="mt-6 form-control">
                <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
