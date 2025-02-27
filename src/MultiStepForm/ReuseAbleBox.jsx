import React from 'react'

function ReuseAbleBox({ Heading, Paragraph, isSelected, onClick }) {
  return (
    <div>
      <div  onClick={onClick} className={`w-[250px] p-4 flex flex-col  cursor-pointer h-[100px] border-2 rounded-xl transition-all  border-[#eee] ${ isSelected ? "border-blue-500 " : "border-gray-300 bg-white"}`}>
          <h1 className="font-bold">{Heading}</h1>
          <p className="text-[#6b7280]">{Paragraph}</p>
        </div>
    </div>
  )
}

export default ReuseAbleBox
