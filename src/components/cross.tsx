interface SidebarProps {
    handleSidebar: () => void;
}

export default function Cross({handleSidebar}:SidebarProps){
    return <div 
    onClick={handleSidebar}
    className="cursor-pointer h-full flex items-center p-2 bg-[#9acd32] rounded-full">
        <svg fill="#000000" 
        height="20px" 
        width="20px" 
        version="1.1" 
        id="Capa_1" 
        xmlns="http://www.w3.org/2000/svg"  
        viewBox="0 0 490 490" >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> 
                </g>
        </svg>
    </div>
}