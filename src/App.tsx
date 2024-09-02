import SideBar from "@/components/SideBar/SideBar";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar items={["Home", "About", "Contact"]}/>
    </div>
  )
}

export default App
