import React from "react";
import Hinata from "../../assets//hinata.jpg";

const CSS = () => {
  return (
    <>
      {/* //! Using "absolute" Path */}
      <section className="bg-blue-600 h-screen w-full flex justify-center items-center">
        <h1 className="bg-mist-300 font-extrabold text-[150px] mb-4 rounded-l-2xl">
          Hinata Hyuga
        </h1>

        <div className="border-4 rounded-3xl border-pink-400">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af6462a3-eb08-4db7-a1c5-251b43da22f4/dhy719a-70a24eaa-4300-4f54-8131-09177f7a0403.png/v1/fit/w_828,h_1100,q_70,strp/_chibi_hinata_hyuga_by_yiksnapix_dhy719a-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9hZjY0NjJhMy1lYjA4LTRkYjctYTFjNS0yNTFiNDNkYTIyZjQvZGh5NzE5YS03MGEyNGVhYS00MzAwLTRmNTQtODEzMS0wOTE3N2Y3YTA0MDMucG5nIiwiaGVpZ2h0IjoiPD0xMTk1Iiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiIvd20vYWY2NDYyYTMtZWIwOC00ZGI3LWExYzUtMjUxYjQzZGEyMmY0L3lpa3NuYXBpeC00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.M7YWxsIi5XKWetk5nBiy0sV_GXOF5idvJgkYxIBK-V8"
            alt="Hinata"
            className="h-67 rounded-2xl"
          />
        </div>
      </section>

      {/* //! Using "public" Path */}
      <section className="bg-violet-600 h-screen w-full flex justify-center items-center">
        <h1 className="bg-mist-300 font-extrabold text-[150px] mb-4 rounded-l-2xl">
          Hinata Hyuga
        </h1>

        <div className="border-4 rounded-3xl border-pink-400">
          <img
            src="images/hinata.jpg"
            alt="Hinata"
            className="h-67 rounded-2xl"
          />
        </div>
      </section>

      {/* //! using "import" Path */}
      <section className="bg-pink-900 h-screen w-full flex justify-center items-center">
        <h1 className="bg-mist-300 font-extrabold text-[150px] mb-4 rounded-l-2xl">
          Hinata Hyuga
        </h1>

        <div className="border-4 rounded-3xl border-pink-400">
          <img src={Hinata} alt="Hinata" className="h-67 rounded-2xl" />
        </div>
      </section>
    </>
  );
};

export default CSS;
