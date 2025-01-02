import { useState } from 'react';
import Frame from '../../components/Frame/Frame';
import Header from '../../components/Header/Header';
import { images } from '../../constants';
export default function ProfileDetails() {
    const skills = [
        {
            id: 1,
            name: 'react',
            info: 'React est une bibliothèque pour des interfaces utilisateurs web et natives. Construisez des interfaces utilisateurs à partir de briques individuelles...',
        },
        {
            id: 2,
            name: 'php',
            info: 'PHP est un des langages de programmation informatique le plus simple à utiliser au monde et surtout accessible à tous pour créer des sites et pages web dynamiques grâce à des frameworks. ',
        },
        {
            id: 3,
            name: 'java',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle. ',
        },
    ];
    const [hoveredSkill, setHoveredSkill] = useState(null);
    return (
        <div>
            <Header />
            <Frame>
                <div className="flex items-center justify-center">
                    <div className="flex flex-row items-center gap-20">
                        <div>
                            <img src={images.profil} alt="" />
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <p className="text-h2 font-poppinMedium">
                                Jane Doe
                            </p>
                            <p className="text-sm text-right font-poppinRegular text-tertiary">
                                Paris, France
                            </p>
                            <p className="mb-2 text-h1 font-poppinMedium">
                                Développeuse Fullstack
                            </p>

                            <div className="flex gap-5">
                                {skills.map((skill) => {
                                    return (
                                        <>
                                            <div
                                                onMouseEnter={() => {
                                                    setHoveredSkill(skill.id);
                                                }}
                                                onMouseLeave={() => {
                                                    setHoveredSkill(null);
                                                }}
                                                className="relative flex flex-row px-5 py-1 border-2 border-opacity-50 rounded-lg shadow-md border-secondary "
                                                key={skill.id}
                                            >
                                                {skill.name}
                                            </div>
                                            {hoveredSkill === skill.id && (
                                                <div
                                                    key={`tooltip-${skill.id}`}
                                                    className="absolute w-5/12 p-2 mt-10 text-sm text-white rounded-lg shadow-md bg-secondary"
                                                >
                                                    {console.log(skill.id)}
                                                    {skill.info}
                                                </div>
                                            )}
                                        </>
                                    );
                                })}
                            </div>
                            <p className="flex items-center gap-2 mt-2 text-h1 font-poppinRegular">
                                <span className="block w-2 h-2 bg-green-600 rounded-3xl"></span>
                                Disponible maintenant
                            </p>
                            <span className="text-h2 font-poppinMedium">
                                550 € / jour
                            </span>
                        </div>
                    </div>
                </div>
            </Frame>
        </div>
    );
}
