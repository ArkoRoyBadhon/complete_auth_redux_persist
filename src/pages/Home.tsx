import { useGetUserQuery } from "../redux/features/user/userApi";
import { setUser } from "../redux/features/user/userSlice";
import { useAppDispatch } from "../redux/hook";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const { data: userData, isSuccess } = useGetUserQuery(undefined);

  useEffect(() => {
    if (isSuccess && userData?.data) {
      dispatch(setUser(userData.data.email));
    }
  }, [isSuccess, userData, dispatch]);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default Home;