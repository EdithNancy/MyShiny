import Header from '../../components/Header/Header';
import { images } from '../../constants';

export default function Profile() {
    const teacher = () => [
        {
            name: 'Jane Doe',
            fonction: 'UX Designer',
            image: images.profil,
        },
        {
            name: 'Alexandra Dupont',
            fonction: 'Développeur frontend',
            image: images.profil,
        },
        {
            name: 'Devops',
            fonction: 'Jeanne Biche',
            image: images.profil,
        },
        {
            name: 'UX Designer',
            fonction: 'Lauren Ipsum',
            image: images.profil,
        },
    ];
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center gap-8">
                <p className="text-center text-h2 font-poppinMedium">
                    Trouvez votre prestataire
                </p>
                <p className="text-center text-tertiary text-h1 font-poppinMedium">
                    Chez Shiny nous réunissons les meilleurs profils pour vous.
                </p>
                <div className="flex items-center justify-center my-10">
                    <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
                        {teacher().map((teacher) => {
                            return (
                                <div
                                    key={teacher.name}
                                    className="duration-150 transform shadow-lg cursor-pointer hover:shadow-xl bg-fourthly rounded-2xl hover:scale-105"
                                >
                                    <div className="gap-10 px-12 py-5 ">
                                        <div className="pb-5 text-start font-poppinRegular text-h1 text-secondary">
                                            {teacher.name}
                                        </div>
                                        <img src={teacher.image} alt="" />
                                        <div className="pt-5 text-center font-poppinRegular text-h1">
                                            {teacher.fonction}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <p></p>
            </div>
        </div>
    );
}
