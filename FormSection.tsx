// "use client"
// import React, { useState } from 'react'
// import { TEMPLATE } from '../../_components/TemplateListSection';
// import Image from 'next/image';
// import { Textarea } from '@/components/ui/textarea';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

// interface PROPS{
//     selectedTemplate?:TEMPLATE;
//     userFormInput:any
// }
// function FormSection({selectedTemplate, userFormInput}:PROPS) {
//     const [formData, setFormData]=useState<any>();
    
//     const handleInputChange=(event:any)=>{
//         const {name,value}=event.target;
//         setFormData({...formData,[name]:value})
//     }

//     const onSubmit=(e:any)=>{
//         e.preventDefault();
//         userFormInput(formData)
//     }

//   return (
//     <div className= 'p-5 shadow-md border rounded-lg bg-white'>
//         {/* @ts-ignore*/}
//         <Image src={selectedTemplate?.icon}
//         alt='icon' width={70} height={70}/> 
//         <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
//         <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>
    
//         <form className='mt-6' onSubmit={onSubmit}>
//             {selectedTemplate?.form?.map((item,index)=>(
//                 <div className='my-2 flex flex-col gap-2 mb-7'>
//                     <label className='font-bold'>{item.label}</label>
//                     {item.field == 'input' ?
//                         <Input name={item.name} required={item?.requires}
//                         onChange={handleInputChange}/>
//                         :item.field == 'textarea' ?
//                         <Textarea name={item.name} required={item?.requires}
//                         onChange={handleInputChange}/> : null
//                     }
//                 </div>
//             ))}
//             <Button type="submit" className='w-full py-6'>Generate Content</Button>
//         </form>
//     </div>
//   )
// }

// export default FormSection


// "use client"
// import React, { useState } from 'react';
// import { TEMPLATE } from '../../_components/TemplateListSection';
// import Image from 'next/image';
// import { Textarea } from '@/components/ui/textarea';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

// interface PROPS {
//     selectedTemplate?: TEMPLATE;
//     userFormInput: any;
// }

// function FormSection({ selectedTemplate, userFormInput }: PROPS) {
//     const [formData, setFormData] = useState<any>({});

//     const handleInputChange = (event: any) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const onSubmit = (e: any) => {
//         e.preventDefault();
//         userFormInput(formData);
//     };

//     return (
//         <div className='p-5 shadow-md border rounded-lg bg-white'>
//             {/* @ts-ignore */}
//             <Image 
//                 src={selectedTemplate?.icon} 
//                 alt='icon' 
//                 width={70} 
//                 height={70} 
//             />
//             <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
//             <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

//             <form className='mt-6' onSubmit={onSubmit}>
//                 {selectedTemplate?.form?.map((item, index) => (
//                     <div className='my-2 flex flex-col gap-2 mb-7' key={index}>
//                         <label className='font-bold'>{item.label}</label>

//                         {/* Dropdown Field */}
//                         {item.field === 'dropdown' && (
//                             <select 
//                                 name={item.name}
//                                 required={item?.requires} 
//                                 onChange={handleInputChange}
//                                 className="border rounded p-2"
//                             >
//                                 <option value="">Select {item.label}</option>
//                                 {item.options.map((option: any, i: number) => (
//                                     <option key={i} value={option.value}>
//                                         {option.label}
//                                     </option>
//                                 ))}
//                             </select>
//                         )}
//                     </div>
//                 ))}
//                 <Button type="submit" className='w-full py-6'>Generate Content</Button>
//             </form>
//         </div>
//     );
// }

// export default FormSection;


"use client"
import React, { useState } from 'react';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Image from 'next/image';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput: any,
    loading:boolean
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
    const [formData, setFormData] = useState<any>({});

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        userFormInput(formData);
    };

    return (
        <div className='p-5 shadow-md border rounded-lg bg-white'>
            {/* @ts-ignore */}
            <Image 
                src={selectedTemplate?.icon || '/fallback-icon.png'} 
                alt='icon' 
                width={70} 
                height={70} 
            />
            <h2 className='font-bold text-2xl mb-2 text-blue-600'>{selectedTemplate?.name}</h2>
            <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

            <form className='mt-6' onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div className='my-2 flex flex-col gap-2 mb-7' key={index}>
                        <label className='font-bold'>{item.label}</label>

                        {/* Input Field */}
                        {item.field === 'input' && (
                            <Input 
                                name={item.name} 
                                required={item?.requires} 
                                onChange={handleInputChange}
                            />
                        )}

                        {/* Textarea Field */}
                        {item.field === 'textarea' && (
                            <Textarea 
                                name={item.name} 
                                required={item?.requires} 
                                onChange={handleInputChange}
                            />
                        )}

                        {/* Dropdown Field */}
                        {item.field === 'dropdown' && (
                            <select 
                                name={item.name} 
                                required={item?.requires} 
                                onChange={handleInputChange} 
                                className="border rounded p-2"
                            >
                                <option value="">Choose an option</option>
                                {item.options.map((option: any, i: number) => (
                                    <option key={i} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>
                ))}
                <Button type="submit" 
                className='w-full py-6'
                disabled={loading}
                >
                    {loading&&<Loader2Icon className='animate-spin'/>}
                    Generate Content</Button>
            </form>
        </div>
    );
}

export default FormSection;
