import { images } from '../../constants';

export default function Header() {
    return (
        <header className="top-0 ">
            <nav className="flex items-center justify-between mx-10">
                <div className="cover">
                    <img
                        className="max-w-50"
                        src={images.logo}
                        alt=""
                        sizes="cover"
                    />
                </div>
                <div className="flex items-center">
                    <div className="space-x-10 ">
                        <a href="" className=" text-tertiary font-montsMedium">
                            Accueil
                        </a>
                        <a href="" className=" text-tertiary font-montsMedium">
                            Profils
                        </a>
                        <button
                            type="button"
                            className="p-1 px-5 font-bold text-white rounded-3xl font-montsExtraBold bg-secondary"
                        >
                            Faire le texte
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
