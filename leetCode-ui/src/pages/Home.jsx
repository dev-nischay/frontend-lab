import { Card } from "../components/Card";
import { FilterandSort } from "../components/FilterSort";
import { List } from "../components/List";
import { Sidebar } from "../components/SideBar";
export default () => {
  return (
    <>
      <Card />
      <div className="flex flex-col mt-6 gap-4 pb-10  lg:flex-1 lg:max-w-[45rem]">
        <FilterandSort />
        <List />
      </div>
    </>
  );
};
