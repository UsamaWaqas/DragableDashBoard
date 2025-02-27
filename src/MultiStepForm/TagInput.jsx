import React, { useState,useEffect } from "react";
import { Trash2 } from "lucide-react"; // Delete icon
import { TextField, InputAdornment, IconButton } from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import BadgeIcon from "@mui/icons-material/Badge";

const TagInput = ({ setIsFormFilled }) => {
  const [devices, setDevices] = useState([
      { id: Date.now(), devEUI: "", name: "", location: "", tag: "" },
    ]);

    const addDevice = () => {
      setDevices([...devices, { id: Date.now(), devEUI: "", name: "", location: "", tag: "" }]);
    };

    const removeDevice = (id) => {
      if (devices.length > 1) {
        setDevices(devices.filter((device) => device.id !== id));
      }
    };

    const handleInputChange = (id, field, value) => {
      setDevices((prevDevices) =>
        prevDevices.map((device) =>
          device.id === id ? { ...device, [field]: value } : device
        )
      );
    };

     useEffect(() => {
        const allFilled = devices.every((device) =>
          Object.entries(device).every(([key, val]) =>
            key === "id" || (typeof val === "string" && val.trim() !== "")
          )
        );
        setIsFormFilled(allFilled);
      }, [devices, setIsFormFilled]);

  return (
    <div>
      {/* Table */}
      <div className="mt-4 border border-gray-200 overflow-hidden rounded-lg shadow-sm">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">DevEUI</th>
              <th className="p-3">Name</th>
              <th className="p-3">Location</th>
              <th className="p-3">Tags</th>
              <th className="p-3"></th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {devices.map((device) => (
              <tr key={device.id} className="border-t-1 border-gray-200">
                <td className="p-3">
                  {/* DevEUI Input with Fingerprint Icon */}
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="DevEUI"
                    value={device.devEUI}
                    onChange={(e) => handleInputChange(device.id, "devEUI", e.target.value)}
                    InputProps={{
                      sx: { height: "40px" },
                      startAdornment: (
                        <InputAdornment position="start">
                          <FingerprintIcon sx={{ fontSize: 18 }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </td>
                <td className="p-3">
                  {/* Name Input with Badge Icon */}
                  <TextField
                    fullWidth
                    variant="outlined"
                    label = "Name"
                    value={device.name}
                    onChange={(e) => handleInputChange(device.id, "name", e.target.value)}
                  
                    InputProps={{
                      sx: { height: "40px" },
                      startAdornment: (
                        <InputAdornment position="start">
                          <BadgeIcon   sx={{ fontSize: 15 }}  />
                        </InputAdornment>
                      ),
                    }}
                  />
                </td>
                <td className="p-3">
                
                  <TextField fullWidth 
                  label="Location"
                  value={device.location}
                  onChange={(e) => handleInputChange(device.id, "location", e.target.value)}
                  variant="outlined"    
                  InputProps={{
                    sx: { height: "40px" },
                    
                  }}
                  InputLabelProps={{
                   shrink : true,
                
                  }}
                
                  
                  />
                </td>
                <td className="p-3">
                  <div className="flex gap-2">
                    {/* Tags Input */}
                    <TextField
                      variant="outlined"
                      label="Add tag"
                      value={device.tag}
                    onChange={(e) => handleInputChange(device.id, "tag", e.target.value)}
                      InputProps={{
                        sx: { height: "40px",width: 150,  },
                        
                      }}
                      InputLabelProps={{
                        shrink : true
                      }}
                    
                    />
                    <button className="border-1 border-gray-200 p-2 rounded-lg w-[50px] h-[3] hover:bg-gray-100">
                      Add
                    </button>
                  </div>
                </td>
                <td className="p-3">
                  {devices.length > 1 && (
                    <IconButton onClick={() => removeDevice(device.id)} color="error">
                      <Trash2 size={18} />
                    </IconButton>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ➕ Add Another Device Button */}
      <div
        onClick={addDevice}
        className="mt-3 bg-white shadow-sm hover:bg-gray-100 w-fit h-fit p-2 rounded-lg border border-gray-200 cursor-pointer"
      >
        <div className="text-[#374151]">+ Add Another Device</div>
      </div>
    </div>
  );
};

export default TagInput;