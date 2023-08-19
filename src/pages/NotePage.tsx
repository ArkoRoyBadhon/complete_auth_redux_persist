import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateNoteMutation } from "../redux/features/notes/noteApi";
import { useAppSelector } from "../redux/hook";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface Iinput {
  title: string;
  description: string;
  category: string;
  image: string;
}

const NotePage = () => {
  const { register, handleSubmit } = useForm<Iinput>();
  const [createNote] = useCreateNoteMutation();
  const { user } = useAppSelector((state) => state.persisted.auth);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Iinput> = (data) => {
    const jsonData = {
      title: data.title,
      description: data.description,
      category: data.category,
    };

    const userInfo = {
      data: jsonData,
    };

    createNote(userInfo);
    console.log(userInfo);
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="">
      <div className="flex justify-center items-center mt-10">
        <form
          style={{ boxShadow: "0 2px 8px rgba(0.2, 0.4, 0.2, 0.4)" }}
          className=" w-[450px] py-10 px-5 rounded-md mx-3 md:mx-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-2xl font-bold text-center text-blue-600 mb-10">
            Create Note
          </h3>
          <div className="">
            <label htmlFor="firstName">Title</label>
            <br />
            <input
              type="text"
              {...register("title")}
              placeholder="Title"
              className="border border-blue-300 p-2 rounded-md my-2 w-full outline-blue-300"
            />
          </div>
          <div className="">
            <label htmlFor="firstName">Description</label>
            <br />
            <input
              type="text"
              {...register("description")}
              placeholder="description"
              className="border border-blue-300 p-2 rounded-md my-2 w-full outline-blue-300"
            />
          </div>
          <div className="">
            <label htmlFor="firstName">Category</label>
            <br />
            <input
              type="text"
              {...register("category")}
              placeholder="Category"
              className="border border-blue-300 p-2 rounded-md my-2 w-full outline-blue-300"
            />
          </div>
          <input
            className="bg-blue-400 w-full mt-5 py-2 rounded-md text-white font-bold hover:bg-blue-500"
            type="submit"
            value="Create Note"
          />
        </form>
      </div>
    </div>
  );
};

export default NotePage;
