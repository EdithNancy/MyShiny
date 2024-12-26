import { useState } from 'react';
import { icons, images } from '../../constants';
import Button from '../Button/Button';

export default function Header() {
    const [open, setOpen] = useState(false);

    const Links = [
        { name: 'Accueil', link: '/' },
        { name: 'Profils', link: '/survey' },
    ];
    return (
        <header className="top-0 ">
            <div className="">
                <div className="w-full">
                    <div className="md:flex md:justify-between md:mx-10 md:z-auto md:py-2">
                        <div className="flex items-center cursor-pointer ">
                            <img
                                className="max-w-50"
                                src={images.logo}
                                alt=""
                                sizes="cover"
                            />
                        </div>
                        <div
                            onClick={() => setOpen(!open)}
                            className="absolute cursor-pointer size-8 md:hidden top-4 right-10"
                        >
                            <img src={open ? icons.close : icons.menu} alt="" />
                        </div>

                        <ul
                            className={`absolute left-0 items-center w-full py-2 pl-10 md:flex md:space-x-10 md:pb-0 md:static md:w-auto md:p-0  bg-secondary md:bg-transparent transition-all duration-700 ease-in ${
                                open
                                    ? 'top-20 opacity-100'
                                    : 'top-[-490px] opacity-0 md:opacity-100 '
                            } `}
                        >
                            {Links.map((text) => (
                                <li key={text.name} className="py-5 md:py-0">
                                    <a
                                        className="relative text-white md:text-tertiary text-h1 font-poppinRegular group"
                                        href={text.link}
                                    >
                                        {text.name}
                                        <span className="absolute left-0 w-0 h-1 transition-all bg-white md:bg-secondary -bottom-2 group-hover:w-full duration:300"></span>
                                    </a>
                                </li>
                            ))}
                            <div className="py-5">
                                <Button style={'bg-white text-black'}>
                                    Faire le text
                                </Button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
