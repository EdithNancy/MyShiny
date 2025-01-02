import Header from '../../components/Header/Header';
import Frame from '../../components/Frame/Frame';
import { images } from '../../constants';

export default function NoMatch() {
    return (
        <div>
            <Header />
            <Frame>
                <div className="flex flex-col items-center justify-center gap-6">
                    <p className="text-h1 font-poppinExtraBold">Dommage...</p>
                    <img
                        src={images.skills}
                        alt=""
                        sizes="cover"
                        className="object-container w-[250px] h-[250px]"
                    />
                    <p className="text-h1 font-poppinExtraBold">
                        Il semblerait que vous n’ayez besoin d’aucune compétence
                    </p>
                </div>
            </Frame>
        </div>
    );
}
