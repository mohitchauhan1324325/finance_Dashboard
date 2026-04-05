import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const RoleSwitcher = () => {
  const { role, setRole } = useContext(AppContext);

  return (
    <div className="flex justify-end">
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default RoleSwitcher;