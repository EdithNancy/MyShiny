import Button from '../../components/Button/Button';
import Frame from '../../components/Frame/Frame';
import Header from '../../components/Header/Header';
import { images } from '../../constants';

export default function Home() {
    return (
        <>
            <Header />
            <Frame>
                <div className="items-center justify-between gap-20 md:flex">
                    <div className="flex flex-col gap-10">
                        <p className="text-h4 font-poppinExtraBold">
                            Repérez vos besoins, on s’occupe du reste, avec les
                            meilleurs talents
                        </p>
                        <div>
                            <Button>Faire le test</Button>
                        </div>
                    </div>
                    <div className="">
                        <img src={images.podcast} alt="" sizes="contain" />
                    </div>
                </div>
            </Frame>
        </>
    );
}
