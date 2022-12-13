import { useForm } from "react-hook-form";

import { useNavigate, Link } from "react-router-dom";


let wereTogo = false;

const Experience = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      jobTitle: "",
      employer: "",
      Sdate: "",
      Edate: "",
      description: "",
    },
  });

  return (
  
      <div id="container" className="shadow-sm p-3 mt-3 mb-5 bg-body rounded">
        <form
          onSubmit={handleSubmit((data) => {
            props.handleXP(data);
            reset();
            if (wereTogo==true) {
              wereTogo = !wereTogo;
              navigate("/ex");
            }
            else
              navigate("/educaition");
          })}

        >
          <h3 className="mb-4 mt-1 mt-1">Work Expirience</h3>
          <div class="row">
            <div class="col">
              <div className="form-group">

                <label>Job title</label>
                <input
                  {...register("jobTitle", { required: "this is required" })}
                  className="form-control"
                  type="text"
                ></input>
                <p>{errors.jobTitle?.message}</p>
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label>Employer</label>
                <input
                  {...register("employer", { required: "this is required" })}
                  className="form-control"
                  type="text"
                ></input>
                <p>{errors.employer?.message}</p>
              </div>
            </div>
          </div>


          <div class="row">
            <div class="col">
              <div className="form-group">
                <label>Start Date</label>
                <input
                  {...register("Sdate")}
                  className="form-control"
                  type="date"
                ></input>
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label>End Date</label>
                <input
                  {...register("Edate")}
                  className="form-control"
                  type="date"
                ></input>
              </div>
            </div>
          </div>

          <div className="form-group mt-4">
            <label>Describe</label>
            <textarea
              {...register("description", { required: "this is required" })}
              className="form-control"
              rows="6"
            ></textarea>
            <p>{errors.description?.message}</p>
          </div>

          <button onClick={() => changepath()}  className="btn btn-dark mt-2 me-3">add another</button>
          <button type="submit" className="btn btn-dark mt-2">
            next
          </button>
        </form>
      </div>
 
  );
};
let changepath = () => {
  wereTogo = !wereTogo;
}

export default Experience;
