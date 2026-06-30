import { Outlet } from "react-router-dom";
import PublicHeader from "../components/PublicHeader";

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PublicHeader />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
