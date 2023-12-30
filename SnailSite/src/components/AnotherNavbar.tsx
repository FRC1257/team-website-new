import { Collapse } from "flowbite";
import type { CollapseOptions, CollapseInterface, InstanceOptions } from "flowbite";

const AnotherNavbar = () => {
  // set the target element that will be collapsed or expanded (eg. navbar menu)
  const targetEl: HTMLElement = document.getElementById("targetEl");

  // optionally set a trigger element (eg. a button, hamburger icon)
  const triggerEl: HTMLElement = document.getElementById("triggerEl");

  // optional options with default values and callback functions
  const options: CollapseOptions = {
    onCollapse: () => {
      console.log("element has been collapsed");
    },
    onExpand: () => {
      console.log("element has been expanded");
    },
    onToggle: () => {
      console.log("element has been toggled");
    },
  };

  // instance options object
  const instanceOptions: InstanceOptions = {
    id: "targetEl",
    override: true,
  };

  /*
   * $targetEl: required
   * $triggerEl: optional
   * options: optional
   * instanceOptions: optional
   */
  const collapse: CollapseInterface = new Collapse(
    targetEl,
    triggerEl,
    options,
    instanceOptions
  );

  // show the target element
  collapse?.expand();

  return (
    <div className="block bg-red-500 w-[1440px]">
      <button
        type="button"
        id="triggerEl"
        aria-expanded="false"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Trigger collapse
      </button>

      <div id="targetEl" className="hidden">
        <ul className="w-48 rounded-lg  border border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
          <li className="w-full rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600">
            Profile
          </li>
          <li className="w-full border-b border-gray-200 px-4 py-2 dark:border-gray-600">
            Settings
          </li>
          <li className="w-full border-b border-gray-200 px-4 py-2 dark:border-gray-600">
            Messages
          </li>
          <li className="w-full rounded-b-lg px-4 py-2">Download</li>
        </ul>
      </div>
    </div>
  );
};

export default AnotherNavbar;
