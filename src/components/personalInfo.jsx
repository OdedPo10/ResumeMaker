import { useForm } from "react-hook-form";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "hebrew", label: "hebrew" },
  { value: "english", label: "english" },
  { value: "russian", label: "russian" },
  { value: "arabic", label: "arabic" },
];

const PersonalInfo = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      wills: "",
      firstName: "",
      lastName: "",
      mail: "",
      phoneNumber: "",
      adress:""

    },
  });
  return (
    <div id="backround" >
      <div id="container" className="shadow-sm p-3 mb-5 bg-body rounded">
        <form
          onSubmit={handleSubmit((data) => {
            props.handlePersonalInfo(data);
            reset();
            navigate("/about");
          })}
        >
          <h3 className="mb-2 mt-1 mt-2">Personal informaition</h3>
          <div class="form-control mb-3">
            <div class="form-group ">
              <label className="mb-2 mt-1 mt-2">wills</label>
              <input
                {...register("wills")}
                type="text"
                class="form-control"
                placeholder="My dream is to become.."
              ></input>
            </div>

            <div class="row">
              <div class="col">
                <div class="form-group ">
                  <label className="mb-2 mt-1 mt-2">First name</label>
                  <input
                    {...register("firstName", { required: "this is required" })}
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  ></input>
                </div>
              </div>


              <div class="col">
                <div class="form-group">
                  <label className="mb-2 mt-1 mt-2">Last name</label>
                  <input
                    {...register("lastName", { required: "this is required" })}
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <div class="form-control mb-3">
            <div class="form-group">
              <label className="mb-2 mt-1 mt-2">Email</label>
              <input
                {...register("phoneNumber", { required: "this is required" })}
                type="email"
                class="form-control"
                placeholder="example@example.com"
              ></input>
            </div>


            <div class="row">
              <div class="col">
              
            <div class="form-group ">
              <label className="mb-2 mt-1 mt-2">Phone number</label>
              <input
                {...register("mail")}
                type="text"
                class="form-control"
                id="inputCity"
                placeholder="0523351768"
              ></input>
            </div>
            </div>

          <div class="col"> 
            <div class="form-group ">
              <label className="mb-2 mt-1 mt-2">Adress</label>
              <input
                {...register("adress")}
                type="text"
                class="form-control"
                placeholder="104 central park st"
              ></input>
              </div>
            </div>
            </div>
          </div>



          <div class="form-control">
            <label className="mb-2 mt-1 mt-2">Speaking language</label>
            <Select
              options={options}
              isMulti
              onChange={(seleced) => props.handlePersonalInfo_Multis(seleced)}
            />
          </div>

          <button type="submit" class="btn btn-dark mt-3">
            continue
          </button>
        </form>
      </div >
    </div >
  );
};

export default PersonalInfo;
