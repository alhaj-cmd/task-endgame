import Gradute1 from '../../assets/image/gradute/gradute1.avif';
import Gradute2 from '../../assets/image/gradute/gradute2.avif';
import Gradute3 from '../../assets/image/gradute/gradute3.avif';
import Gradute4 from '../../assets/image/gradute/gradute4.avif';
import Gradute5 from '../../assets/image/gradute/gradute5.avif';
import Gradute6 from '../../assets/image/gradute/gradute6.avif';

const Gallery = () => {
    return (
        <div className='my-6'>
            <h2 className='text-2xl text-center my-2'>Graduate Gallery</h2>
            <div className='grid grid-cols-3 gap-3'>
                <div className="card w-full h-48 bg-base-100 shadow-xl">
                    <figure><img src={Gradute1} alt="Shoes" /></figure>

                </div>
                <div className="card w-full h-56 bg-base-100 shadow-xl">
                    <figure><img src={Gradute2} alt="Shoes" /></figure>

                </div>
                <div className="card w-full h-48 bg-base-100 shadow-xl">
                    <figure><img src={Gradute3} alt="Shoes" /></figure>

                </div>
                <div className="card w-full h-56 bg-base-100 shadow-xl">
                    <figure><img src={Gradute4} alt="Shoes" /></figure>

                </div>
                <div className="card w-full h-56 bg-base-100 shadow-xl">
                    <figure><img src={Gradute5} alt="Shoes" /></figure>

                </div>
                <div className="card w-full h-56 bg-base-100 shadow-xl">
                    <figure><img src={Gradute6} alt="Shoes" /></figure>

                </div>
            </div>
        </div>
    );
};

export default Gallery;