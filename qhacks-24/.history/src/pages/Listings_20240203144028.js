import React from "react";

export default function Listings() {
    const exampleData = [
        {
            condition: ["checked", "", "", ""],
            description: "Test 2",
            postalcode: "K7L 0E7",
            price: "80",
            title: "Test"
        },
        {
            condition: ["", "checked", "", ""],
            description: "zazas",
            postalcode: "K7L 1E1",
            price: "8000",
            title: "Test title"
        },
    ];

    const sellerName = "Clown LMAO CHANGE THIS LATER";

    function getCondition(info) {
        let name = "";
        let index = -1;
        for (let i = 0; i < info.length; i++) {
            if (info[i] !== '') {
                index = i;
                break;
            }
        }
        const conditions = ["Brand New", "Like New", "Lightly Used", "Used"];
        if (index >= 0) {
            name = conditions[index];
        }
        return name;
    }

    const listingCards = exampleData.map((data) => {
        return (
            <div className="flex justify-between m-[20px]">
                <div 
                    className="w-full h-[100px] bg-[#f7f7f7] flex items-center"
                >
                    <img src="/images/logo.png" alt="placeholder" className="h-[80%]"/>
                    <div className='h-full w-full p-[10px] relative'>
                        <p className="font-jose font-bold tracking-tight h-[25%]">{data.title}</p>
                        <p className="font-jose text-[12px] tracking-tight">Condition: {getCondition(data.condition)}</p>
                        <p className="font-jose text-[12px] relative top-[-3px] tracking-tight">Seller: {sellerName}</p>
                        <p className="font-jose text-[12px] relative top-[-7px] tracking-tight">Location: {data.postalcode}</p>
                        <p className="font-jose text-[20px] relative top-[-20px] text-[#237515] float-right tracking-tight">Price: ${data.price}</p>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div 
            className="flex h-[100dvh]"
        >
            <div
                className=" w-1/5 border-r-[1px] border-[#aaaaaa70]"
            >
                Filter part
            </div>
            <div
                className="w-4/5"
            >
                <div className="flex justify-between m-[20px]">
                    <div 
                        className="w-full h-[100px] bg-[#f7f7f7] flex items-center"
                    >
                        <button
                            className="border-[6px] border-[#ff9d2b] w-full h-full text-3xl font-normal text-[#616272] bg-[#ffedd8]"
                        >
                            + Add Your Listings Here!
                        </button>
                    </div>
                </div>
                {listingCards}
            </div>
        </div>
    )

}