/* eslint-disable  @typescript-eslint/ban-ts-comment*/
import MovieDetails from "@/components/MovieDetails/MovieDetails";
import {useEffect, useState} from "react";
import MovieList from "@/components/MovieList/MovieList";
import {MovieProvider} from "@/contexts/MovieContext";
import {Helmet} from 'react-helmet';

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    // @ts-ignore
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (

    <MovieProvider>
      <Helmet>
        <title>Movie explorer</title>
        <meta name="description" content="This is a description of my page"/>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
      </Helmet>
      <div className="flex flex-col max-h-screen">
        <div className="navbar bg-base-100 justify-between pr-8">
          <a className="btn btn-ghost text-3xl">Movie Explorer</a>
          <input type="checkbox" value="synthwave" className="toggle theme-controller" onClick={toggleTheme}/>
        </div>
        <div className="p-4 flex gap-8">
          <MovieList className={"w-[200px] md:w-[300px] lg:w-[400px] flex-shrink-0"}/>
          <MovieDetails className={"flex-grow"}/>
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
