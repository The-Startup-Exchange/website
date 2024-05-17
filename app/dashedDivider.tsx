const DashedDivider = () => {
  return (
    <div className="flex flex-row w-full items-start justify-start">
        <div className="border-t mt-0.5 border-dashed border-[#353535] w-[2.85%] h-[5px]"></div>
        <div className="w-[5px] h-[5px] bg-[#fff]"></div>
        <div className="border-t mt-0.5 border-dashed border-[#353535] w-[94%] h-[5px]"></div>
        <div className="w-[5px] h-[5px] bg-[#fff]"></div>
        <div className="border-t mt-0.5 border-dashed border-[#353535] w-[2.85%] h-[5px]"></div>
    </div>
  )
}

export default DashedDivider

