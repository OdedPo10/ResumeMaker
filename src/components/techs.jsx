import { useForm } from "react-hook-form";
import Select from "react-select";

import { useNavigate } from "react-router-dom";

let wereTogo = true;

const optionsLanguag = [
  { value: "sql", label: "sql" },
  { value: "java", label: "java" },
  { value: "pyton", label: "pyton" },
  { value: "html", label: "html" },
];



const Techs = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      linkdinLink: "",
      githubLink: "",
      best: '',
      seconed: ''
    },
  });

  return (
    <form
      onSubmit={handleSubmit((links) => {
        props.handleLinks(links);
        reset();
        if (wereTogo) {
          wereTogo = !wereTogo;
          navigate("/final");
        }

        else
          navigate("/techs");
      })}
    >

     
        <div id="containerTechs" className="shadow-sm p-3 mt-3 mb-5 bg-body rounded">

          <div class="form-control mt-2">

            <div class="form-group ">
              <label>Pick your best technolagis(up to5)</label>
              <Select
                options={optionsLanguag}
                isMulti
                onChange={(picks) => props.handleBesttechs(picks)}
              />
            </div>
            <div class="form-group ">
              <label class="form-label">Pick your experty level</label>
              <input   {...register("best")} type="range" class="form-range "  ></input>
            </div>
          </div>


          <div class="form-control mt-2">
            <div class="form-group ">
              <label>Pick your seconed best technolagis(up to5)</label>
              <Select
                options={optionsLanguag}
                isMulti
                onChange={(picks) => props.handleSeconedtechs(picks)}
              />
            </div>
            <div class="form-group ">
              <label class="form-label">Pick your experty level</label>
              <input {...register("seconed")} type="range" class="form-range " ></input>
            </div>
          </div>

          <div class="form-control mt-2">
            <div class="form-group ">
              <label>Pick the rest of your skills(no limit)</label>
              <Select
                options={optionsLanguag}
                isMulti
                onChange={(picks) => props.handleRestofTechs(picks)}
              />
            </div>
          </div>




          <div className="form-group mt-1">
            <label>Linkdin link</label>
            <input
              {...register("linkdinLink")}
              className="form-control"
              type="text"
            ></input>
          </div>

          <div className="form-group mt-1">
            <label>Git hub link</label>
            <input
              {...register("githubLink")}
              className="form-control"
              type="text"
            ></input>
          </div>

          <button type="submit" className="btn btn-dark mt-2">
            next
          </button>
        </div>
      
    </form >


  );
};

let changepath = () => {
  wereTogo = !wereTogo;
}


export default Techs;
