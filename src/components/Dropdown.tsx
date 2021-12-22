import { Menu, Transition } from "@headlessui/react";
import { Fragment, SVGProps, useEffect, useState } from "react";
import Avatar from "../../public/avatar.png";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import api from "utils/lib/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Logout } from "store/actions/userAction";

const Dropdown = () => {
  const [isHover, settoggleHover] = useState(false);
  const dispatch = useDispatch();
  const [me, setMe] = useState<{ firstName: string; lastName: string } | null>(
    null
  );

  const toggleHoverMenu = () => {
    if (isHover) settoggleHover(!isHover);
  };
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/");
  }, []);
  useEffect(() => {
    setMe(JSON.parse(localStorage.getItem("me") || "{}"));
  }, []);

  return (
    <div className="flex h-full items-center z-20">
      <Menu as="div" className="">
        <Menu.Button className="flex items-center bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <Image
            src={Avatar}
            width={32}
            height={32}
            className="rounded-full border"
            alt="Avatar"
          />
          <span
            className="ml-2 font-semibold text-primary-linkColor"
            onClick={toggleHoverMenu}
          >
            {me?.firstName}&nbsp;{me?.lastName}
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {/* <Link href="/">
                <a className="py-2 px-4 flex items-center hover:bg-primary-hoverColorDropdown">
                  <Settings className="mr-2 w-5 h-5 " />
                  <span className="text-primary-linkColor font-semibold">
                    Configuration
                  </span>
                </a>
              </Link> */}

            <form
              method="POST"
              className="rounded-xl transition-all hover:bg-primary-hoverColorDropdown"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(Logout(router));
              }}
            >
              <button
                type="submit"
                className="py-2 px-4 w-full text-primary-linkColor font-semibold flex"
              >
                <span className="mr-2 w-5 h-5">
                  <FontAwesomeIcon icon="sign-out-alt" />
                </span>
                <span>Logout</span>
              </button>
            </form>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

function Settings(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="gray"
    >
      <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
    </svg>
  );
}
function LogOut(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="gray"
    >
      <path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z" />
    </svg>
  );
}

export default Dropdown;
