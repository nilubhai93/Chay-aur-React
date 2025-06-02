import React from 'react'

function card({username, btn="view profile"}) {
    return (
        <div class="relative h-[409px] w-[300px] rounded-md ">
            <img src="https://images.pexels.com/photos/32148476/pexels-photo-32148476/free-photo-of-close-up-of-pink-zephyranthes-flower-blooming.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="AirMax Pro" class="w-full h-full rounded-md object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
                <h1 class="text-lg font-semibold text-white">{username}</h1>
                <p class="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Excepturi, debitis?
                </p>
                <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    {btn}
                </button>
            </div>
        </div>
    )
}

export default card




