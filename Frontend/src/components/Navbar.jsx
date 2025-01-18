import { Link, MessageSquare, Settings, User, LogOut } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import React from "react";

const Navbar = () => {
  const { authUser, logout } = useAuthStore();

  return (
    <div>
      <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop:-blur-lg bg-base-100/80">
        <div className="container mx-auto px-4 h-16">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="flex items-center gap-2 hover:opacity-80 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <h1 className="text-lg font-bold">Texty</h1>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link
                to={"/settings"}
                className={`btn btn-sm gap-2 transition-colors`}
              >
                <Settings className="w-5 h-5" />
                <span className="hidden sm:inline">Settings</span>
              </Link>

              {authUser && (
                <>
                  <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                    <User className="w-5 h-5" />
                    <span className="hidden sm:inline">Profile</span>
                  </Link>

                  <button className="flex gap-2 items-center" onClick={logout}>
                    <logout className="w-5 h-5" />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
