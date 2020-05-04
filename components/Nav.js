import { useContext, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "react-feather";

const Nav = () => {
  return (
    <nav className="bg-app-300 fixed w-full px-3 py-6 z-10">
      <div className="max-w-6xl flex mx-auto">
        <div className="flex-auto flex -mx-3">
          <Link href="/">
            <a className="inline-flex ml-3 sm:mr-6">
              <div
                className="sm:mr-1"
                dangerouslySetInnerHTML={{
                  __html: require("../img/cil_fridge.svg?include"),
                }}
              />
              <h2 className="font-normal not-italic text-app-500 text-lg sm:inline-block my-auto">
                <span className="">Los</span>
                <span className="font-bold">Imanes</span>
                <span className="">DeTu</span>
                <span className="font-bold ">Refri</span>
                <span className="font-normal leading-normal not-italic text-app-500 text-sm">
                  &nbsp;en&nbsp;
                </span>
                <span className="font-normal leading-normal not-italic text-app-500 text-sm">
                  Lima
                </span>
              </h2>
            </a>
          </Link>

          {/*<Dropdown
              items={[
                { href: "/", label: "Lima" },
                { href: "/", label: "Chorrillos" },
              ]}
              label={"Lima"}
            />*/}
        </div>
        <div className="-mx-3">
          <div className="flex flex-col mx-3">
            <Link href="/register" as="/lima/registro">
              <a className="font-normal leading-normal not-italic text-app-500 text-sm">
                Agrega tu restaurante
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

const Dropdown = ({ align, items, label }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      {showDropdown && (
        <div
          onClick={() => setShowDropdown(false)}
          className="fixed inset-0 z-10"
        />
      )}
      <div className="flex flex-col font-normal leading-normal not-italic text-app-500 text-sm">
        <button
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          className="inline-flex items-center font-medium"
        >
          {label}
          <ChevronDown
            style={{ transform: "translateY(1px)" }}
            className="text-navy-light ml-2"
          />
        </button>
        <div className="relative">
          <AnimatePresence>
            {showDropdown && (
              <motion.ul
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 8 }}
                exit={{ opacity: 0, y: 0 }}
                className={
                  (align ? align + " " : "left-0 ") +
                  "absolute top-0 z-20 w-48 bg-sand-light border border-sand"
                }
              >
                {items.map(({ href, label }) => (
                  <li key={label} className="w-full">
                    <Link href={href}>
                      <a
                        onClick={() => setShowDropdown(false)}
                        className="group flex font-medium px-3 py-4  bg-app-300"
                      >
                        {label}
                        <span className="flex-auto text-right text-sand-light group-hover:text-navy-light transition-color duration-150 ease-in-out">
                          ⟶
                        </span>
                      </a>
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
