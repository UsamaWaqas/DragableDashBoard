import React, { useEffect, useRef, useState } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import {
  CirclePlus,
  LockKeyholeOpen,
  Share2,
  Trash2,
  X,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Database,
  Signal,
  BarChart2,
  Wifi,
  Gauge
} from "lucide-react";
import "./Style.css";
import InputField from "./Utils/InputField";
import MyModal from "./MyModel";

const Grid = () => {
  const gridRef = useRef(null);
  const gridInstance = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [popupData, setPopupData] = useState({ name: "", companyName: "", Age: "" });
  const [tempWidget, setTempWidget] = useState(null);
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("gridItems");
    return saved ? JSON.parse(saved) : [];
  });
  const [activeTab, setActiveTab] = useState("devices");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (!gridRef.current) return;
    if (!gridInstance.current) {
      gridInstance.current = GridStack.init(
        { float: true, cellHeight: 100 },
        gridRef.current
      );
      setTimeout(() => {
        const savedItems = JSON.parse(localStorage.getItem("gridItems")) || [];
        savedItems.forEach((widget) => {
          gridInstance.current.addWidget({
            id: widget.id,
            x: widget.x,
            y: widget.y,
            w: widget.w,
            h: widget.h,
            content: widget.content 
          });
        });
        setItems(savedItems);
      }, 0);
    }
    gridInstance.current.on("change", (_, updatedItems) => {
      const newItems = updatedItems.map((el) => ({
        id: Number(el.el.dataset.gsId),
        x: el.x,
        y: el.y,
        w: el.w,
        h: el.h,
        content: el.el.querySelector(".grid-stack-item-content").innerText
      }));
      localStorage.setItem("gridItems", JSON.stringify(newItems));
      setItems(newItems);
    });
  }, []);

  const handleDragStart = (e, widget) => {
    e.dataTransfer.setData("widget", JSON.stringify(widget));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const widgetData = JSON.parse(e.dataTransfer.getData("widget"));
    setTempWidget({
      id: Date.now(),
      x: 0,
      y: 0,
      w: widgetData.w,
      h: widgetData.h
    });
    setShowModal(true);
  };

  const handleModalSubmit = () => {
    const newWidget = {
      id: Date.now(),
      x: 0,
      y: 0,
      w: tempWidget.w,
      h: tempWidget.h,
      content: `Name: ${popupData.name}, Company: ${popupData.companyName} Age:${popupData.Age}`
    };
    setItems((prevItems) => {
      const updatedItems = [...prevItems, newWidget];
      localStorage.setItem("gridItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
    gridInstance.current.addWidget({
      id: newWidget.id,
      x: newWidget.x,
      y: newWidget.y,
      w: newWidget.w,
      h: newWidget.h,
      content: newWidget.content
    });
    setPopupData({ name: "", companyName: "" ,Age:""});
    setShowModal(false);
  };

  return (
    <div className="app relative">
      {/* Toolbar */}
      {/* <div className="flex w-auto border-2 border-amber-500 h-[60px] justify-between">
        <button className="h-[52px] border-2 border-[#ebebeb] items-center w-[40px]">
          <CirclePlus />
        </button>
        <div className="flex w-[171px] p-3 h-[55px]">
          <button className="bg-[#ebebeb] w-[52px] pt-2 pb-4 ml-1 h-[40px]">
            <LockKeyholeOpen />
          </button>
          <button className="bg-[#ebebeb] w-[52px] pt-2 pb-4 ml-1 h-[40px]">
            <Share2 />
          </button>
          <button className="bg-[#ebebeb] w-[52px] pt-2 pb-4 ml-1 h-[40px]">
            <Trash2 />
          </button>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="container box-border m-0 p-0 min-w-full mt-8 border-1 border-[#eee] flex">
        <div
          className="grid-stack p-[10px] bg-[#f0f0f0] flex-1 border-[1px] border-[#ccc] min-h-[500px]"
          ref={gridRef}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        />

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="sidebar w-[319px] text-center  border-1 border-[#eee]  flex flex-col p-[10px] bg-[#ffff]">
            <div className="flex justify-between border-b-1 border-gray-200 mb-2">
              <button
                className={`flex-1 py-2 ${
                  activeTab === "devices"
                    ? "bg-white text-[#0c7cd5] border-b-[1px] border-[#0c7cd5]"
                    : ""
                }`}
                onClick={() => setActiveTab("devices")}
              >
                Devices
              </button>
              <button
                className={`flex-1 py-2 ${
                  activeTab === "widgets"
                    ? "bg-white text-[#0c7cd5] border-b-[1px] border-[#0c7cd5]"
                    : ""
                }`}
                onClick={() => setActiveTab("widgets")}
              >
                Widgets
              </button>
            </div>

            <div className="flex flex-col gap-[10px]">
              {activeTab === "devices" && (
                <>
                  <input
                    type="text"
                    placeholder="  Device Name, ID or Type"
                    className="border-1 border-[#eee] rounded-sm pr-[40px] pb-[10px]"
                  />
                  <div
                    className="device mb-[10px] font-bold p-[10px] bg-[#eee] cursor-move"
                    draggable
                    onDragStart={(e) =>
                      handleDragStart(e, { name: "Device A", w: 3, h: 2 })
                    }
                  >
                    Device1
                  </div>
                  <div
                    className="device mb-[10px] font-bold p-[10px] bg-[#eee] cursor-move"
                    draggable
                    onDragStart={(e) =>
                      handleDragStart(e, { name: "Device B", w: 3, h: 3 })
                    }
                  >
                    Device2
                  </div>
                  <div
                    className="device mb-[10px] font-bold p-[10px] bg-[#eee] cursor-move"
                    draggable
                    onDragStart={(e) =>
                      handleDragStart(e, { name: "Device B", w: 3, h: 3 })
                    }
                  >
                    Device3
                  </div>
                </>
              )}

              {activeTab === "widgets" && (
                <>
                  <div className="">
                    <div
                      className="widget flex  font-bold mb-[10px] p-[10px] bg-[#eee] cursor-move"
                      draggable
                      onDragStart={(e) => handleDragStart(e, { w: 3, h: 2 })}
                    >
                      <Smartphone size={20} className="mr-8" /> Real-time Data
                    </div>
                    <div
                      className="widget flex font-bold mb-[10px] p-[10px] bg-[#eee] cursor-move"
                      draggable
                      onDragStart={(e) => handleDragStart(e, { w: 3, h: 2 })}
                    >
                      <Database size={20} className="mr-8" /> Device Data
                      (Default)
                    </div>
                    <div
                      className="widget flex  font-bold mb-[10px] p-[10px] bg-[#eee] cursor-move"
                      draggable
                      onDragStart={(e) => handleDragStart(e, { w: 3, h: 2 })}
                    >
                      <Gauge size={20} className="mr-8" /> Tank / Level
                    </div>
                    <div
                      className="widget flex font-bold mb-[10px] p-[10px] bg-[#eee] cursor-move"
                      draggable
                      onDragStart={(e) => handleDragStart(e, { w: 3, h: 2 })}
                    >
                      <BarChart2 size={20} className="mr-8" /> Value
                    </div>
                    <div
                      className="widget flex  font-bold mb-[10px] p-[10px] bg-[#eee] cursor-move"
                      draggable
                      onDragStart={(e) => handleDragStart(e, { w: 3, h: 2 })}
                    >
                      <Signal size={20} className="mr-8" /> Status
                    </div>
                    <div
                      className="widget flex  font-bold mb-[10px] p-[10px] bg-[#eee] cursor-move"
                      draggable
                      onDragStart={(e) => handleDragStart(e, { w: 3, h: 2 })}
                    >
                      <Wifi size={20} className="mr-8" /> Online Status
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        <button
          className="absolute bottom-4 mr-12 right-0 z-10 bg-blue-500 transition-transform duration-300 text-white p-4 rounded-full shadow-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>

      { <MyModal isOpen={showModal} onClose={() => setShowModal(false)} popupData={popupData} setPopupData={setPopupData} handleModalSubmit={handleModalSubmit} />
    }
    </div>
  );
};

export default Grid;