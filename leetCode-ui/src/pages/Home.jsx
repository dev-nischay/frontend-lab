import { Card } from "../components/Card";
import { FilterandSort } from "../components/FilterSort";
import { List } from "../components/List";
import { Sidebar } from "../components/SideBar";
export default () => {
  return (
    <>
      <Card />
      <div className="flex flex-col mt-6 gap-4 pb-28">
        <FilterandSort />
        <List />
      </div>
    </>
  );
};
