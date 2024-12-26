import Header from '../../components/Header/Header';
import { Link, Outlet } from 'react-router-dom';

export default function Survey() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center gap-5 m-10">
                <h1 className="text-h3 ">Questionnaire!!!</h1>
                <div className="flex flex-col items-center justify-center gap-1">
                    <Link
                        to="client"
                        className="text-secondary font-poppinExtraBold hover:opacity-100 opacity-80 hover:font-poppinRegular"
                    >
                        Questionnaire Client
                    </Link>
                    <Link
                        to="freelance"
                        className="text-secondary font-poppinExtraBold hover:opacity-100 opacity-80 hover:font-poppinRegular"
                    >
                        Questionnaire Freelance
                    </Link>
                </div>
                <Outlet />
            </div>
        </>
    );
}
