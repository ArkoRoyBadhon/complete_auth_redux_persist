/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { GiBookmark } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useLogOutMutation } from "../redux/features/user/userApi";
import { setUser } from "../redux/features/user/userSlice";

const Navbar = () => {
  const [wishlist, setWishlist] = useState(false);
  const [runningbook, setRunningbook] = useState(false);
  const [SubMenu, setSubMenu] = useState(false);
  const dispatch = useAppDispatch();
  const [logOut] = useLogOutMutation();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { user } = useAppSelector((state) => state.persisted.auth);
  console.log("ACTIVE USER", user);

  const handleLogout = async () => {
    await logOut(undefined);
    dispatch(setUser(null))
  };

  return (
    <div className="w-full border-b-2 shadow-sm">
      <div className="mx-5 md:mx-[100px] flex justify-between items-center gap-8 md:gap-20 py-5">
        <div className="w-[20%] h-full">
          {/* <img className="w-16 h-10" src={booklogo} alt="logo" /> */}
        </div>
        <div className="w-[80%] h-full flex justify-between items-center">
          <div className="">
            <ul className="flex gap-2 md:gap-10">
              <li className="font-bold text-[12px] md:text-[16px] cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="font-bold text-[12px] md:text-[16px] cursor-pointer">
                <Link to="/note">Note</Link>
              </li>
              {user && (
                <li className="font-bold text-[12px] md:text-[16px] cursor-pointer">
                  <Link to="/addbook">Add New Book</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="hidden md:block">
            <ul className="flex md:gap-5 justify-center">
              <Link to="/wishlist">
                <li
                  onMouseOver={() => setWishlist(true)}
                  onMouseOut={() => setWishlist(false)}
                  className="mt-1 mr-5 cursor-pointer relative"
                >
                  <AiOutlineShoppingCart size={22} />
                  <div className="absolute bg-green-400 w-5 rounded-full flex justify-center items-center -top-5 -left-2">
                    {/* {wishData.total} */}
                  </div>
                  <div
                    className={`${
                      wishlist
                        ? "absolute bg-slate-300 w-20 p-1 rouneded-md -bottom-10 -left-6"
                        : "hidden"
                    }`}
                  >
                    Wish List
                  </div>
                </li>
              </Link>
              <Link to="/continueread">
                <li
                  onMouseOver={() => setRunningbook(true)}
                  onMouseOut={() => setRunningbook(false)}
                  className="mt-1 mr-5 cursor-pointer relative"
                >
                  <GiBookmark size={22} />
                  <div className="absolute bg-green-400 w-5 rounded-full flex justify-center items-center -top-5 -left-2">
                    {/* {readlist.total} */}
                  </div>
                  <div
                    className={`${
                      runningbook
                        ? "absolute bg-slate-300 w-20 p-1 rouneded-md -bottom-17 -left-6"
                        : "hidden"
                    }`}
                  >
                    Read List
                  </div>
                </li>
              </Link>
              {/* {userData?.success === true ? ( */}
              {user ? (
                <li className="font-bold text-[12px] md:text-[16px] cursor-pointer">
                  <Link onClick={() => handleLogout()} to="/">
                    Log Out
                  </Link>
                </li>
              ) : (
                <>
                  <li className="font-bold text-[16px] cursor-pointer">
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li className="font-bold text-[16px] cursor-pointer">
                    <Link to="/login">Log In</Link>
                  </li>
                </>
              )}

              <li className="cursor-pointer">
                <BiSolidUserCircle size={26} />
              </li>
            </ul>
          </div>
          <div
            onMouseOver={() => setSubMenu(true)}
            onMouseOut={() => setSubMenu(false)}
            className="md:hidden relative"
          >
            <div className="cursor-pointer ">
              <BiSolidUserCircle size={30} />
            </div>
            <div
              className={`absolute top-10 -left-64 bg-gray-200 w-[80vw] py-5 rounded-md ${
                SubMenu ? "" : "hidden"
              }`}
            >
              <div className="md:hidden">
                <ul className="flex gap-2 justify-center">
                  <Link to="/wishlist">
                    <li
                      onMouseOver={() => setWishlist(true)}
                      onMouseOut={() => setWishlist(false)}
                      className="mt-1 mr-5 cursor-pointer relative"
                    >
                      <AiOutlineShoppingCart size={22} />
                      <div className="absolute bg-green-400 w-5 rounded-full flex justify-center items-center -top-5 -left-2">
                        {/* {wishData.total} */}
                      </div>
                      <div
                        className={`${
                          wishlist
                            ? "absolute bg-slate-300 w-20 p-1 rouneded-md -bottom-10 -left-6"
                            : "hidden"
                        }`}
                      >
                        Wish List
                      </div>
                    </li>
                  </Link>
                  <Link to="/continueread">
                    <li
                      onMouseOver={() => setRunningbook(true)}
                      onMouseOut={() => setRunningbook(false)}
                      className="mt-1 mr-5 cursor-pointer relative"
                    >
                      <GiBookmark size={22} />
                      <div className="absolute bg-green-400 w-5 rounded-full flex justify-center items-center -top-5 -left-2">
                        {/* {readlist.total} */}
                      </div>
                      <div
                        className={`${
                          runningbook
                            ? "absolute bg-slate-300 w-20 p-1 rouneded-md -bottom-17 -left-6"
                            : "hidden"
                        }`}
                      >
                        Read List
                      </div>
                    </li>
                  </Link>
                  {user ? (
                    <li className="font-bold text-[12px] md:text-[16px] cursor-pointer">
                      <Link to="/">Log Out</Link>
                    </li>
                  ) : (
                    <>
                      <li className="font-bold text-[16px] cursor-pointer">
                        <Link to="/signup">Sign Up</Link>
                      </li>
                      <li className="font-bold text-[16px] cursor-pointer">
                        <Link to="/login">Log In</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
