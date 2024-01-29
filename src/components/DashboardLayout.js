import  { useState } from 'react';
import SideBar from './SideBar';

function DashboardLayout({children}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen">
    <div className=" hidden md:block md:fixed md:left-0 top-0 bottom-0 md:w-1/5 bg-gray-800 text-black overflow-y-auto">
      <SideBar />
    </div>
    <main className="md:ml-64 flex justify-center w-full p-4 bg-gray-100 flex-1">
      {children}
    </main>
  </div>
  
  );
}

export default DashboardLayout;
