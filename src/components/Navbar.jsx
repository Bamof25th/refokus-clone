import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-zinc-900 py-3 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <img
          className=""
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        />
        <div className="links gap-14 flex ml-20 ">
          {["Home", "Culture", "Work", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[2px] h-7 bg-zinc-800 " key="i++"></span>
            ) : (
              <a className="text-sm items-center flex gap-1" href="#" key="i++">
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full "
                  ></span>
                )}

                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button/>
    </div>
  );
};

export default Navbar;
