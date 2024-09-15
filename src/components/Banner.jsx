import React from "react";
import { Button, Link } from "react-ui-essentials";
import { ColouredIcons } from "react-ui-essentials-icons";
const { GithubInvertocat } = ColouredIcons;
const Banner = () => {
  return (
    <div className="font-sans  max-w-100 max-h-96 px-2 py-6 h-1/3 bg-teal-400">
      <div className="flex justify-between items-center border-b-2 p-2">
        <div>
          <Link to="/">
            <p className="text-2xl font-semibold text-white">
              Ultimate Cheat Sheets
            </p>
          </Link>
        </div>
        <div>
          <Link
            to="https://github.com/RaviTeja884781/ulimateCheatSheets"
            target="_blank"
          >
            <Button variant="light">
              <Button.Icon>
                <GithubInvertocat width="20px" height="20px" />
              </Button.Icon>
            </Button>
          </Link>
        </div>
      </div>
      <div className="my-12 flex flex-col justify-items-center items-center columns-auto  p-2">
        <p className="text-5xl font-semibold p-2 text-white">
          Ultimate Cheat Sheets For All
        </p>
        <p className="text-lg p-2 text-white">
          Welcome the ultimate repository of sheets and quick references
          meticulously crafted by the open community boost your productivity.
        </p>
      </div>
    </div>
  );
};

export default Banner;
