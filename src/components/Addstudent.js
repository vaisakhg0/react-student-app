import React from 'react'

const Addstudent = () => {
  return (
    <div><div className="container">
    <div className="row">
        <div className="col">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Rollno</label>
                    <input type="number" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Admnno</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">University reg no</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">College</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success">Register</button>
                </div>
            </div>
        </div>
    </div>
</div></div></div>
  )
}

export default Addstudent