import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer flex justify-center py-10 border-b bg-main-blue text-base-content border-base-300">
        <div className="wrapper grid gap-2">
          <h1 className="text-3xl font-bold text-center text-main-orange">დაგვიკავშირდით</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="თქვენი ელ. ფოსტა"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="თქვენი სრული სახელი და გვარი"
              />
            </label>
          </div>
          <div className="w-full">
            <textarea
              className="textarea textarea-bordered w-full text-lg h-64"
              placeholder="თქვენი მესიჯი"
            ></textarea>
          </div>
        </div>
      </footer>
      <footer className="footer flex justify-center bg-main-blue py-10">
        <div className="wrapper grid grid-cols-2 lg:grid-cols-4 gap-8">
          <nav className="flex flex-col">
            <h6 className="font-bold mb-4 text-left text-xl text-main-orange">ვებსაიტი</h6>
            <div className="flex flex-col gap-2">
              <Link
                to="/services"
                className="text-main-white hover:text-main-orange font-bold text-md text-left"
              >
                მთავარი
              </Link>
              <Link
                to="/services"
                className="text-main-white hover:text-main-orange font-bold text-md text-left"
              >
                ჩვენ შესახებ
              </Link>
              <Link
                to="/services"
                className="text-main-white hover:text-main-orange font-bold text-md text-left"
              >
                უსაფრთხოების პოლიტიკა
              </Link>
              <Link
                to="/services"
                className="text-main-white hover:text-main-orange font-bold text-md text-left"
              >
                მომსახურების პირობები
              </Link>
            </div>
          </nav>
          <nav className="flex flex-col">
            <h6 className="font-bold mb-4 text-left text-xl text-main-orange">სერვისები</h6>
            <div className="flex flex-col gap-2">
              <Link
                to="/services"
                className="text-main-white hover:text-main-orange font-bold text-md text-left"
              >
                კონსულტაცია
              </Link>
              <Link
                to="/services"
                className="text-main-white hover:text-main-orange font-bold text-md text-left"
              >
                ვებ დეველოპმენტი
              </Link>
              <Link
                to="/services"
                className="text-main-white hover:text-main-orange font-bold text-md text-left"
              >
                მობაილ დეველოპმენტი
              </Link>
              <Link
                to="/services"
                className="text-main-white hover:text-main-orange font-bold text-md text-left"
              >
                ზოგადი დეველოპმენტი
              </Link>
            </div>
          </nav>
          <nav className="flex flex-col">
            <h6 className="font-bold mb-4 text-left text-xl text-main-orange">პროექტები</h6>
            <div className="flex flex-col gap-2">
              <Link
                to="/services"
                className="text-main-white hover:text-main-orange font-bold text-md text-left"
              >
                ყველა სერვისები
              </Link>
              <Link
                to="/services"
                className="text-main-white hover:text-main-orange font-bold text-md text-left"
              >
                Matka.ge
              </Link>
              <Link
                to="/services"
                className="text-main-white hover:text-main-orange font-bold text-md text-left"
              >
                Ghostwriter.ge
              </Link>
            </div>
          </nav>
          <nav className="flex flex-col">
            <h6 className="font-bold mb-4 text-left text-xl text-main-orange">კარიერა</h6>
            <div className="flex flex-col gap-2">
              <Link
                to="/services"
                className="text-main-white hover:text-main-orange font-bold text-md text-left"
              >
                ვაკანსიები
              </Link>
              <Link
                to="/services"
                className="text-main-white hover:text-main-orange font-bold text-md text-left"
              >
                LinkedIn
              </Link>
              <Link
                to="/services"
                className="text-main-white hover:text-main-orange font-bold text-md text-left"
              >
                კონტაქტი
              </Link>
              <Link
                to="/services"
                className="text-main-white hover:text-main-orange font-bold text-md text-left"
              >
                LinkedIn
              </Link>
            </div>
          </nav>
        </div>
      </footer>
      <footer className="footer py-4 border-t text-base-content border-base-300 flex flex-row justify-center items-center bg-white">
        <div className="wrapper flex flex-col lg:flex-row justify-between items-center">
          <aside className="items-center flex flex-col lg:flex-row justify-between">
            <img
              src={process.env.PUBLIC_URL + "/images/tally-logo.png"}
              alt="Logo Footer"
              className="h-12"
            />
            <p className="ml-4">
              tally © იმედდასაყრდნობი ტექ გადაწყვეტილებები 2023-წლიდან.
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <Link to={"/"} className="hover:text-main-orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </Link>
              <Link to={"/"} className="hover:text-main-orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </Link>
              <Link to={"/"} className="hover:text-main-orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
