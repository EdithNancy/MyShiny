import Frame from '../../components/Frame/Frame';
import Header from '../../components/Header/Header';
import { images } from '../../constants';

export default function Error() {
    return (
        <div>
            <Header />
            <Frame>
                <div className="flex flex-col items-center justify-center gap-6">
                    <p className="text-h1 font-poppinExtraBold">Oups...</p>
                    <img
                        src={images.error}
                        alt=""
                        sizes="cover"
                        className="object-container w-[250px] h-[250px]"
                    />
                    <p className="text-h1 font-poppinExtraBold">
                        Il semblerait qu’il y ait un problème
                    </p>
                </div>
            </Frame>
        </div>
    );
}
