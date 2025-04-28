import { useState, useEffect } from "react";
import snoopy from "../assets/img/snoopy.png";
import green from "../assets/img/green.png";
import Confetti from "react-confetti";

export const HiddenRoute = () => {
  const [pass, setPass]     = useState("");
  const [ok, setOk]         = useState(false);
  const [bg, setBg]         = useState(snoopy);
  const [fading, setFading] = useState(false);
  const secret = process.env.REACT_APP_HIDDEN_ROUTE_ACCESS_KEY;

  const submit = e => {
    e.preventDefault();
    if (pass === secret) setOk(true);
    else {
      alert("🐾 Oops! Wrong passcode.");
      setPass("");
    }
  };

  // cross-fade when ok flips to true
  useEffect(() => {
    if (!ok) return;
    setFading(true);                  // start fade-out
    const t = setTimeout(() => {
      setBg(green);                // swap image
      setFading(false);               // fade-back in
    }, 700);                          // match your duration below
    return () => clearTimeout(t);
  }, [ok]);

  return (
    <div
      className={`
        min-h-screen flex items-center justify-center
        bg-center bg-cover
        transition-opacity duration-700
        ${fading ? "opacity-0" : "opacity-100"}
      `}
      style={{ backgroundImage: `url(${bg})` }}
    >
      {ok && <Confetti recycle={false} numberOfPieces={1000} />}

      <div className="w-full max-w-sm mx-4 bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-xl p-8 text-center">
        {!ok ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Shh… It’s a Secret!
            </h2>
            <form onSubmit={submit} className="space-y-4">
              <input
                type="password"
                value={pass}
                onChange={e => setPass(e.target.value)}
                placeholder="Enter Snoopy’s key"
                className="w-full px-4 py-2 rounded-lg border-2 border-red-400 text-black focus:outline-none focus:ring-2 focus:ring-red-300"
              />
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
              >
                Unlock the Doghouse
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
              🏠 Welcome Home!
            </h2>
            <p className="text-gray-700 mb-6">
              You’ve found Snoopy’s secret hideout!
            </p>
          </>
        )}
      </div>
    </div>
  );
};
