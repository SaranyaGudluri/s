// "use client"
// import React, { useEffect } from 'react'
// import Image from 'next/image'
// import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
// import { usePathname } from 'next/navigation'


// function SideNav() {
//     const MenuList=[
//         {
//             name: 'Home',
//             icon: Home,
//             path: '/dashboard'
//         },

//         {
//             name: 'History',
//             icon: FileClock,
//             path: '/dashboard/history'
//         },
//         {
//             name: 'Billing',
//             icon: WalletCards,
//             path: '/dashboard/billing'
//         },
//         {
//             name: 'Setting',
//             icon: Settings,
//             path: '/dashboard/settings'
//         },
//     ]

//     const path = usePathname();
//     useEffect(()=>{
//         console.log(path)
//     },[])

//   return (
//     <div className='h-screen p-5 shadow-sm border bg-white'>
//         <div className='flex justify-center border-b'>
//             <Image src={'/logo.svg'} alt='logo' width={50} height={50}/>
//         </div>
//         <hr className='my-3 border'/>
//         <div className='mt-3'>
//             {MenuList.map((menu,index)=>(
//                 <div className={`flex gap-2 mb-2 p-3
//                 hover:bg-primary hover:text-white rounded-lg
//                 cursor-pointer items-center'
//                 ${path==menu.path && 'bg-primary text-white'}
//                 `}>
//                     <menu.icon className='h-6  w-6'/>
//                     <h2>{menu.name}</h2>
//                 </div>
//             ))}
//         </div>

//     </div>
//   )
// }

// export default SideNav


"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Book, FileClock, Home, Pen, Settings, WalletCards } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';  // Import Link

function SideNav() {
    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'Quiz',
            icon: Book,
            path: '/dashboard/quiz'
        },
        {
            name: 'Assess',
            icon: Pen,
            path: '/dashboard/assess'
        },
        // {
        //     name: 'History',
        //     icon: FileClock,
        //     path: '/dashboard/history'
        // },
        // {
        //     name: 'Billing',
        //     icon: WalletCards,
        //     path: '/dashboard/billing'
        // },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/settings'
        },
    ];

    const path = usePathname();
    useEffect(() => {
        console.log(path);
    }, [path]); // Add path as a dependency

    return (
        <div className='h-screen p-5 shadow-sm border bg-white'>
            <div className='flex justify-center border-b'>
                <Image src={'/logo.svg'} alt='logo' width={50} height={50} />
            </div>
            <hr className='my-3 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <Link key={index} href={menu.path}> {/* Wrap in Link */}
                        <div className={`flex gap-2 mb-2 p-3
                        hover:bg-blue-600 hover:text-white rounded-lg
                        cursor-pointer items-center
                        ${path === menu.path ? 'bg-blue-600 text-white' : ''}  // Use conditional classes properly
                        `}>
                            <menu.icon className='h-6 w-6' />
                            <h2>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SideNav;
