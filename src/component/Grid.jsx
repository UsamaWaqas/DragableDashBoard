import React, { useEffect, useRef, useState } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import {
  CirclePlus,
  LockKeyholeOpen,
  Share2,
  Trash2,
  X,
    Droplet,
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
import WaterLeak from "./Widgets/WaterLeak.jsx";
import Status from "./Widgets/Status.jsx";
import MyModal from "./MyModel";
import OnlineStatus from "./Widgets/OnlineStatus.jsx"
import DeviceData from "./Widgets/DeviceData";
import TankLevel from "./Widgets/TankLevel.jsx";
import Value from "./Widgets/Value.jsx"
import TemperatureDevice from "./Widgets/TemperatureDevice.jsx"
import { Link } from "react-router-dom";
import { createRoot } from 'react-dom/client';

const Grid = () => {
  const gridRef = useRef(null);
  const gridInstance = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [popupData, setPopupData] = useState({ name: "", companyName: "", Age: "" });
  const [tempWidget, setTempWidget] = useState(null);
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState("devices");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  let timeStampId
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
        const widgetContent = InitialRenderWidgetContent(widget.widgetType);
        const widgetElement = document.createElement("div");
        widgetElement.innerHTML = widgetContent;
        widgetElement.setAttribute("id", widget.id);
        widgetElement.setAttribute("gs-x", widget.x);
        widgetElement.setAttribute("gs-y", widget.y);
        widgetElement.setAttribute("gs-w", widget.w);
        widgetElement.setAttribute("gs-h", widget.h);

        const placeholder = document.createElement("div");
        placeholder.className = "widget-content";
        widgetElement.appendChild(placeholder);

        gridInstance.current.makeWidget(widgetElement);

        const root = createRoot(placeholder);
        switch (widget.widgetType) {
          case "deviceData":
            root.render(<div className="widget-content"><DeviceData /></div>);
            break;
          case "tankLevel":
            root.render(<div className="widget-content"><TankLevel /></div>);
            break;
          case "value":
            root.render(<div className="widget-content"><Value /></div>);
            break;
          case "status":
            root.render(<div className="widget-content"><Status /></div>);
            break;
          case "onlineStatus":
            root.render(<div className="widget-content"><OnlineStatus /></div>);
            break;
          case "waterLeak":
            root.render(<div className="widget-content"><WaterLeak /></div>);
            break;
          case "temperatureDevice":
            root.render(<div className="widget-content"><TemperatureDevice /></div>);
            break;
          default:
            root.render(<div className="widget-content">Default Widget</div>);
        }

      });

    }

    gridInstance.current.on("change", (_, passedUpdatedItems) => {
      console.log("Change Event Fired - Items:", passedUpdatedItems);
      setItems((prevItems) => {
      const newItems = passedUpdatedItems.map((el) => {
        // Make sure gsId exists
        let id = el?.id || el.el?.getAttribute("id");
        id = id ? Number(id) : null;
        console.log("Processing item with ID:", id);

        if (isNaN(id)) {
          console.error("Invalid ID:", el.id);
          return null;
        }

        // Find the existing item to retain widgetType
        const existingItem = prevItems.find((item) => item.id === id) || {};

        return {
          id,
          x: el.x,
          y: el.y,
          w: el.w,
          h: el.h,
          widgetType: existingItem.widgetType || null,
        };
      }).filter(Boolean);
        console.log("New Items:", newItems);
      // Use functional setState to update the items

        const updatedItems = prevItems.map((item) => {
          const updatedItem = newItems.find((newItem) => newItem.id === item.id);
          return updatedItem || item;
        });

        const finalItems = [
          ...updatedItems,
          ...newItems.filter((newItem) => !updatedItems.some((item) => item.id === newItem.id)),
        ];
        console.log("Final Updated State:", finalItems);
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
    const widgetContent = SubmitRenderWidgetContent(newWidget.widgetType);
    const widgetElement = document.createElement("div");
    widgetElement.innerHTML = widgetContent;
    widgetElement.setAttribute("id", `${newWidget.id}`);
    widgetElement.setAttribute("gs-x", newWidget.x);
    widgetElement.setAttribute("gs-y", newWidget.y);
    widgetElement.setAttribute("gs-w", newWidget.w);
    widgetElement.setAttribute("gs-h", newWidget.h);

    gridInstance.current.makeWidget(widgetElement);
    // Render the React component into the widget
    console.log("wE",widgetElement)
    const placeholder = widgetElement.querySelector(`#${timeStampId}`);
    console.log("pc",placeholder)
    if (placeholder) {
      const root = createRoot(placeholder);
      switch (newWidget.widgetType) {
        case "deviceData":
          root.render(<div className="widget-content"><DeviceData /></div>);
          break;
        case "tankLevel":
          root.render(<div className="widget-content"><TankLevel /></div>);
          break;
        case "value":
          root.render(<div className="widget-content"> <Value /></div>);
          break;
        case "status":
          root.render(<div className="widget-content"><Status /></div>);
          break;
        case "onlineStatus":
          root.render(<div className="widget-content"><OnlineStatus /></div>);
          break;
        case "waterLeak":
          root.render(<div className="widget-content"><WaterLeak /></div>);
          break;
        case "temperatureDevice":
          root.render(<div className="widget-content"><TemperatureDevice /></div>);
          break;
        default:
          root.render(<div className="widget-content">Default Widget</div>);
      }
    }

    setShowModal(false);
  };

  const SubmitRenderWidgetContent = (widgetType) => {
    console.log("wtype", widgetType);
    timeStampId = `widget-${Date.now()}`; // Unique ID for the widget
    switch (widgetType) {
      case "deviceData":
        return `<div id="${timeStampId}" class="widget-content"></div>`;
      case "tankLevel":
        return `<div id="${timeStampId}" class="widget-content"></div>`;
      case "value":
        return `<div id="${timeStampId}" class="widget-content"></div>`;
      case "status":
        return `<div id="${timeStampId}" class="widget-content"></div>`;
      case "onlineStatus":
        return `<div id="${timeStampId}" class="widget-content"></div>`;
      case "waterLeak":
        return `<div id="${timeStampId}" class="widget-content"></div>`;
      case "temperatureDevice":
        return `<div id="${timeStampId}" class="widget-content"></div>`;
      default:
        return `<div id="${timeStampId}" class="widget-content"></div>`;
    }
  };

  const InitialRenderWidgetContent = (widgetType) => {
    console.log("wtype", widgetType);
    timeStampId = `widget-${Date.now()}`; // Unique ID for the widget
    switch (widgetType) {
      case "deviceData":
        return `<div id="${timeStampId}" ></div>`;
      case "tankLevel":
        return `<div id="${timeStampId}"></div>`;
      case "value":
        return `<div id="${timeStampId}"></div>`;
      case "status":
        return `<div id="${timeStampId}"></div>`;
      case "onlineStatus":
        return `<div id="${timeStampId}"></div>`;
      case "waterLeak":
        return `<div id="${timeStampId}"></div>`;
      case "temperatureDevice":
        return `<div id="${timeStampId}"></div>`;
      default:
        return `<div id="${timeStampId}""></div>`;
    }
  };
  console.log("wdata",items)

  return (
      <>
        {/*<nav>*/}
        {/*  <Link to="/devicedata" className="bg-gray-700 text-white">Devices</Link>*/}
        {/*  <Link to="/temperaturedevice" className="ml-2 bg-gray-700 text-white">TemperatureData</Link>*/}
        {/*  <Link to="/tanklevel" className="ml-2 bg-gray-700 text-white">TankLevel</Link>*/}
        {/*  <Link to="/value" className="ml-2 bg-gray-700 text-white">Value</Link>*/}
        {/*  <Link to="/status" className="ml-2 bg-gray-700 text-white">Status</Link>*/}
        {/*  <Link to="/onlinestatus" className="ml-2 bg-gray-700 text-white">OnlineStatus</Link>*/}
        {/*  <Link to="/toggledevice" className="ml-2 bg-gray-700 text-white">ToggleDevice</Link>*/}
        {/*  <Link to="/battery" className="ml-2 bg-gray-700 text-white">Battery</Link>*/}
        {/*  <Link to="/meter" className="ml-2 bg-gray-700 text-white">Meter</Link>*/}
        {/*  <Link to="/signal" className="ml-2 bg-gray-700 text-white">Signal-Strngth</Link>*/}
        {/*  <Link to="/waterleak" className="ml-2 bg-gray-700 text-white">WaterLeak</Link>*/}
        {/*</nav>*/}
        {/*<h5>Devices:</h5>*/}
        {/*<nav>*/}
        {/*  <Link to="/energyconsumptionStatus" className="bg-gray-700 text-white">Energy consumtion status</Link>*/}
        {/*  <Link to="/acceleration" className="ml-2 bg-gray-700 text-white">Acceleration</Link>*/}
        {/*  <Link to="/moisture" className="ml-2 bg-gray-700 text-white">Moisture</Link>*/}
        {/*  <Link to="/humidity" className="ml-2 bg-gray-700 text-white">Humidity</Link>*/}
        {/*  <Link to="/reed" className="ml-2 bg-gray-700 text-white">Reed Switch</Link>*/}
        {/*  <Link to="/reedcount" className="ml-2 bg-gray-700 text-white">Reed Switch Count</Link>*/}
        {/*  <Link to="/Devicebattery" className="ml-2 bg-gray-700 text-white">DeviceBattery</Link>*/}
        {/*  <Link to="/relaycontrol" className="ml-2 bg-gray-700 text-white">Relay Control</Link>*/}
        {/*  <Link to="/energyconsumptionmeter" className="ml-2 bg-gray-700 text-white">Energy consumtion Meter</Link>*/}
        {/*  <Link to="/ammeter" className="ml-2 bg-gray-700 text-white">Ammeter</Link>*/}
        {/*  <Link to="/voltmeter" className="ml-2 bg-gray-700 text-white">Voltmeter</Link>*/}
        {/*  <Link to="/power" className="ml-2 bg-gray-700 text-white">Power Meter(RealPower)</Link>*/}
        {/*  <Link to="/powerApparent" className="ml-2 bg-gray-700 text-white">Power Meter(Apparent Power)</Link>*/}
        {/*  <Link to="/powerFactor" className="ml-2 bg-gray-700 text-white">Power Factor Meter</Link>*/}
        {/*</nav>*/}

        <div className="app relative">
          {/* Main Content */}
          <div className="container box-border m-0 p-0 min-w-full mt-8 border-1 border-[#eee] flex">
            <div
                className="p-[10px] bg-[#F8F8F8] flex-1 border-[1px] border-[#ccc] min-h-[700px]"
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
                            <div
                                className="widget flex font-bold mb-[10px] p-[10px] bg-[#eee] cursor-move"
                                draggable
                                onDragStart={(e) =>
                                    handleDragStart(e, { w: 3, h: 2 }, "waterLeak")
                                }
                            >
                              <Droplet size={20} className="mr-8" /> Water Leak
                            </div>
                            <div
                                className="widget flex font-bold mb-[10px] p-[10px] bg-[#eee] cursor-move"
                                draggable
                                onDragStart={(e) =>
                                    handleDragStart(e, { w: 3, h: 2 }, "temperatureDevice")
                                }
                            >
                              <Droplet size={20} className="mr-8" /> Temprature Device
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