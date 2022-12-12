import { useForm } from "react-hook-form";

const Educaition = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      school: "",
      degree: "",
      filed: "",
      Sdate: "",
      Edate: "",
      description: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        props.handleEducaition(data);
        reset();
      })}
    >
      <div className="form-group">
        <label>School Name</label>
        <input
          {...register("school", { required: "this is required" })}
          className="form-control"
          type="text"
        ></input>
        <p>{errors.school?.message}</p>
      </div>

      <div className="form-group">
        <label>Degree</label>
        <input
          {...register("degree", { required: "this is required" })}
          className="form-control"
          type="text"
        ></input>
        <p>{errors.degree?.message}</p>
      </div>

      <div className="form-group">
        <label>Field of Study</label>
        <input
          {...register("filed", { required: "this is required" })}
          className="form-control"
          type="text"
        ></input>
        <p>{errors.filed?.message}</p>
      </div>

      <div className="form-group">
        <label>Start Date</label>
        <input
          {...register("Sdate")}
          className="form-control"
          type="date"
        ></input>
      </div>

      <div className="form-group">
        <label>End Date</label>
        <input
          {...register("Edate")}
          className="form-control"
          type="date"
        ></input>
      </div>

      <div className="form-group">
        <label>Describe</label>
        <textarea
          {...register("description", { required: "this is required" })}
          className="form-control"
          rows="5"
        ></textarea>
        <p>{errors.description?.message}</p>
      </div>

      <button type="submit" className="btn btn-dark mt-2">
        next
      </button>
    </form>
  );
};

export default Educaition;
