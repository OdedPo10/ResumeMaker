import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";



const About = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      about: "",
    },
  });


  return (
    
      <div id="container" className="shadow-sm p-3 mt-3 mb-5 bg-body rounded">
        <form
          onSubmit={handleSubmit((data) => {
            props.handleAbout(data);
            reset();
            navigate("/ex");

          })}
        >
          <div className="form-group">
            <label>Tell us about your self</label>
            <textarea
              {...register("about", { required: "this is required" })}
              className="form-control"
              rows="5"
              placeholder="tell us about your life story , the recomended amout of wards is not more than 100!"
            ></textarea>
            <p>{errors.about?.message}</p>
          </div>



          <button type="submit" className="btn btn-dark mt-2">
            continue
          </button>
        </form>
      </div>
 
  );
};

export default About;
