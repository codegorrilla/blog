import Sidebar from "@/components/AdminComponents/Sidebar";
import ToastProvider from "@/components/AdminComponents/ToastProvider";

export default function Layout({ children }) {
  return (
    <div className="p-6 sm:p-12 flex gap-6">
      <ToastProvider />
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
          <h3 className="font-main text-sm text-gray-400 font-bold">
            Admin panel
          </h3>
          <p className="w-12 h-12 bg-black rounded-full text-white flex items-center justify-center">
            AD
          </p>
        </div>
        <div className="p-6 sm:p-12 flex gap-6">{children}</div>
      </div>
    </div>
  );
}
