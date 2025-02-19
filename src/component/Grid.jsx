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
import InputField from "./InputField";
import DeviceWidget from "./DeviceWidget";
import TankWidget from "./TankWidget"
import MyModal from "./MyModel";
import DeviceData from "./Widgets/DeviceData";
import { Link } from "react-router-dom";

const Grid = () => {
  const gridRef = useRef(null);
  const gridInstance = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [popupData, setPopupData] = useState({ name: "", companyName: "", Age: "" });
  const [tempWidget, setTempWidget] = useState(null);
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState("devices");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (!gridRef.current) return;

    const savedItems = JSON.parse(localStorage.getItem("gridItems")) || [];
    setItems(savedItems);

    if (!gridInstance.current) {
      gridInstance.current = GridStack.init(
          { float: true, cellHeight: 100 },
          gridRef.current
      );

      savedItems.forEach((widget) => {
        gridInstance.current.addWidget({
          id: widget.id,
          x: widget.x,
          y: widget.y,
          w: widget.w,
          h: widget.h,
          content: renderWidgetContent(widget.widgetType),
        });
      });

    }
    console.log("sitems".savedItems)
    gridInstance.current.on("change", (_, updatedItems) => {
      const newItems = updatedItems.map((el) => {
        // Make sure gsId exists
        let id = el.el.getAttribute("gs-id") || el.el.dataset.gsId;
        id = id ? Number(id) : null;

        if (!id) {
          console.warn("Missing gsId in item:", el.el);
          return null;
        }

        // Find the existing item to retain widgetType
        const existingItem = items.find((item) => item.id === id) || {};

        return {
          id,
          x: el.x,
          y: el.y,
          w: el.w,
          h: el.h,
          widgetType: existingItem.widgetType || null,
        };
      }).filter(Boolean);

      // Use functional setState to update the items
      setItems((prevItems) => {
        const updatedItems = prevItems.map((item) => {
          const updatedItem = newItems.find((newItem) => newItem.id === item.id);
          return updatedItem || item;
        });

        const finalItems = [
          ...updatedItems,
          ...newItems.filter((newItem) => !updatedItems.some((item) => item.id === newItem.id)),
        ];

        // Save updated items to localStorage
        localStorage.setItem("gridItems", JSON.stringify(finalItems));
        return finalItems;
      });
    });
  }, []);

  const handleDragStart = (e, widget, widgetType) => {
    e.dataTransfer.setData("widget", JSON.stringify({...widget, widgetType}));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const widgetData = JSON.parse(e.dataTransfer.getData("widget"));
    if (!widgetData.widgetType) {
      console.error("Dropped widget has no type!", widgetData);
      return;
    }
    setTempWidget({
      id: Date.now(),
      x: 0,
      y: 0,
      w: widgetData.w,
      h: widgetData.h,
      widgetType: widgetData.widgetType,
    });
    setShowModal(true);
  };

  const handleModalSubmit = () => {
    const newWidget = {
      id: tempWidget.id,
      x: tempWidget.x,
      y: tempWidget.y,
      w: tempWidget.w,
      h: tempWidget.h,
      widgetType: tempWidget.widgetType,
    };
    setItems((prevItems) => {
      const updatedItems = [...prevItems, newWidget];
      localStorage.setItem("gridItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
    gridInstance.current.addWidget({
      id: `${newWidget.id}`,
      x: newWidget.x,
      y: newWidget.y,
      w: newWidget.w,
      h: newWidget.h,
      content: renderWidgetContent(newWidget.widgetType),
    });
    setShowModal(false);
  };

  const renderWidgetContent = (widgetType) => {
    console.log("wtype",widgetType)
    switch (widgetType) {
      case "deviceData":
        return <div>Hellow</div>;
      case "tankLevel":
        return <TankLevel />;
      case "value":
        return <Value />;
      case "status":
        return <Status />;
      case "onlineStatus":
        return <OnlineStatus />;
      default:
        return null;
    }
  };
  console.log("wdata",items)

  return (
      <>
        <nav>
          <Link to="/devices" className="bg-gray-700 text-white">Devices</Link>
        </nav>

        <div className="app relative">
          {/* Main Content */}
          <div className="container box-border m-0 p-0 min-w-full mt-8 border-1 border-[#eee] flex">
            <div
                className="grid-stack p-[10px] bg-[#f0f0f0] flex-1 border-[1px] border-[#ccc] min-h-[500px]"
                ref={gridRef}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
            >
              {/* GridStack will handle the rendering of widgets */}
            </div>

            {/* Sidebar */}
            {isSidebarOpen && (
                <div className="sidebar w-[319px] text-center  border-1 border-[#eee] flex flex-col p-[10px] bg-[#ffff]">
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
                        className={`flex-1  py-2 ${
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
                                className="widget flex font-bold mb-[10px] p-[10px] bg-[#eee] cursor-move"
                                draggable
                                onDragStart={(e) => handleDragStart(e, { w: 3, h: 2 })}
                            >
                              <Smartphone size={20} className="mr-8" /> Real-time Data
                            </div>
                            <div
                                className="widget flex font-bold mb-[10px] p-[10px] bg-[#eee] cursor-move"
                                draggable
                                onDragStart={(e) =>
                                    handleDragStart(e, { w: 3, h: 2 }, "deviceData")
                                }
                            >
                              <Database size={20} className="mr-8" /> Device Data
                              (Default)
                            </div>
                            <div
                                className="widget flex font-bold mb-[10px] p-[10px] bg-[#eee] cursor-move"
                                draggable
                                onDragStart={(e) =>
                                    handleDragStart(e, { w: 3, h: 2 }, "tankLevel")
                                }
                            >
                              <Gauge size={20} className="mr-8" /> Tank / Level
                            </div>
                            <div
                                className="widget flex font-bold mb-[10px] p-[10px] bg-[#eee] cursor-move"
                                draggable
                                onDragStart={(e) =>
                                    handleDragStart(e, { w: 3, h: 2 }, "value")
                                }
                            >
                              <BarChart2 size={20} className="mr-8" /> Value
                            </div>
                            <div
                                className="widget flex font-bold mb-[10px] p-[10px] bg-[#eee] cursor-move"
                                draggable
                                onDragStart={(e) =>
                                    handleDragStart(e, { w: 3, h: 2 }, "status")
                                }
                            >
                              <Signal size={20} className="mr-8" /> Status
                            </div>
                            <div
                                className="widget flex font-bold mb-[10px] p-[10px] bg-[#eee] cursor-move"
                                draggable
                                onDragStart={(e) =>
                                    handleDragStart(e, { w: 3, h: 2 }, "onlineStatus")
                                }
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
        </div>

        <MyModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            popupData={popupData}
            setPopupData={setPopupData}
            handleModalSubmit={handleModalSubmit}
        />
        {/*   { <DeviceWidget isOpen={showModal} onClose={() => setShowModal(false)} popupData={popupData} setPopupData={setPopupData} handleModalSubmit={handleModalSubmit} />*/}
        {/*}*/}
        {/*  { <TankWidget isOpen={showModal} onClose={() => setShowModal(false)} popupData={popupData} setPopupData={setPopupData} handleModalSubmit={handleModalSubmit} />*/}
        {/*}*/}
        {/* { <ToggleButton isOpen={showModal} onClose={() => setShowModal(false)} popupData={popupData} setPopupData={setPopupData} handleModalSubmit={handleModalSubmit} />
      }  */}
        {/* { <ToggleButton isOpen={showModal} onClose={() => setShowModal(false)} popupData={popupData} setPopupData={setPopupData} handleModalSubmit={handleModalSubmit} />
      }  */}
        {/* { <ToggleButton isOpen={showModal} onClose={() => setShowModal(false)} popupData={popupData} setPopupData={setPopupData} handleModalSubmit={handleModalSubmit} />
      }  */}
        {/* { <ToggleButton isOpen={showModal} onClose={() => setShowModal(false)} popupData={popupData} setPopupData={setPopupData} handleModalSubmit={handleModalSubmit} />
      }  */}
      </>
  );
};

export default Grid;