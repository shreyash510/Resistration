import React, {useState} from "react";

const Resister = () => {
    const [user, setUser] = useState({});

    const handleInput=(event)=>{
        setUser((prev)=>{
            return {...prev,[event.target.name]:event.target.value}
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.info(user);
    }
    return (
        <>

            <div className="container my-4 shadow p-3 mb-5 bg-body rounded">
                <center><h1 className="p-4">Staff Attribute</h1></center>
                <form  className="row g-3">
                    <div className="col-md-7">
                        <label className="form-label">Name</label>
                        <input type="text" onChange={handleInput}  className="form-control" name="name" placeholder="Enter your name.." />
                    </div>
                    <div className="col-md-5">
                        <label className="form-label">Member Id</label>
                        <input type="text" onChange={handleInput}  className="form-control" name="id" placeholder="xxxx-xxxx" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email"  onChange={handleInput} className="form-control" name="email" placeholder="youremail@gmail.com" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Address </label>
                        <input type="text" onChange={handleInput}  className="form-control" name="address" placeholder="Enter your current Address..." />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Mobile</label>
                        <input type="text" onChange={handleInput}  className="form-control" name="mobile" placeholder="xxxxx xxxxx" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Aadhar No.</label>
                        <input type="text" onChange={handleInput}  className="form-control" name="aadhar" placeholder="xxxx xxxx xxxx xxxx" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Pan</label>
                        <input type="text" onChange={handleInput}  className="form-control" name="pan" placeholder="xxxx xxxx xxxx xxxx" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Date of Joining</label>
                        <input type="date" onChange={handleInput}  className="form-control" name="jdate" placeholder="dd/mm/yyyy" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Date of leaving</label>
                        <input type="date" onChange={handleInput}  className="form-control" name="ldate" placeholder="dd/mm/yyyy" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Amount</label>
                        <input type="text" onChange={handleInput}  className="form-control" name="amount" placeholder="xxxxxx/-" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Incentive</label>
                        <input type="text" onChange={handleInput}  className="form-control" name="inputCity" placeholder="Incentive" />
                    </div>

                    <div className="p-4 col-auto">
                        <label className="px-4 form-label">Payment Method</label>
                        <select   className="p-1  form-select" name="autoSizingSelect">
                            <option name="pmethod" onChange={handleInput}  selected>Choose...</option>
                            <option value="Daily">Daily</option>
                            <option value="Monthly">Monthly</option>

                        </select>
                    </div>

                    <div className="p-4 col-auto">
                        <label className="px-4 form-label">State</label>
                        <select  className="p-1  form-select" name="autoSizingSelect">
                            <option name="state" onChange={handleInput}  selected>Choose...</option>
                            <option value="Working">Working</option>
                            <option value="Left">Left</option>
                        </select>
                    </div>

                    <div className="col-12">
                        <center><button onClick={handleSubmit} className="px-5 py-2 btn btn-primary">Sign in</button></center>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Resister;