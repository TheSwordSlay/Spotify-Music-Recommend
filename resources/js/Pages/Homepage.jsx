import { Link } from "@inertiajs/react";
import {useForm} from "@inertiajs/react";
import { useState } from 'react';
import { useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from "@/Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Homepage(props) {
    console.log(props)
    const { data, setData, get, processing, errors } = useForm({
        tempo: 0,
        tempoType: "",
        accousticness: 0,
        accousticnessType: "",
        speechiness: 0,
        speechinessType: "",
        loudness: 0,
        loudnessType: "",
        instrumentalness: 0,
        instrumentalnessType: "",
        energy: 0,
        energyType: "",
        valence: 0,
        valenceType: "",
        danceability: 0,
        danceabilityType: "",
        duration: 0,
        durationType: "",
    })

    const [loading, setLoading] = useState(false);

    function submit(e) {
        e.preventDefault()
        setLoading(true)
        get(route('hitungWP', data, {
            _method: 'get'
        }));
      }

      useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div>
            <Navbar></Navbar>
            <div className="absolute bg-[url('/img/background-music.jpg')] opacity-50 h-full w-full z-0">

            </div>
            {!(loading) ? 
            <>
                <div className="bg-gradient-to-b from-stone-800/80 from-10% to-stone-900/80 rounded-3xl mb-20 mt-20 mx-36 z-10 relative" data-aos="fade-up" data-aos-duration="800">
                    <p className="text-center text-5xl font-black pt-10 mx-5">Spotify Songs Recommender</p>
                    <p className="text-center text-4xl mt-10 font-bold text-green-600 mx-5">Let us help you find the perfect songs</p>
                    <div className="flex justify-center pb-10">
                        <button className="btn btn-success mt-6" onClick={()=>document.getElementById('my_modal_2').showModal()}>Search</button>
                    </div>
                </div>

                <div className="mt-10 py-3 px-3 bg-gradient-to-b from-stone-900 from-10% to-stone-950 base-100 rounded-tr-3xl rounded-tl-3xl relative">
                <p className="text-center text-5xl font-black pt-6 mb-10">Popular Songs</p>

                    <div className="mx-8 mb-10" data-aos="fade-up">

                    <OwlCarousel className='owl-theme' loop margin={10} items="3" autoplay={false} autoplayTimeout="2500" autoplayHoverPause={true}>
                        <div className="item px-3">
                            <iframe style={{borderRadius : '12px'}} src={"https://open.spotify.com/embed/track/"+props.popularSongs[0].track_id+"?utm_source=generator&theme=0"} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="item px-3">
                            <iframe style={{borderRadius : '12px'}} src={"https://open.spotify.com/embed/track/"+props.popularSongs[1].track_id+"?utm_source=generator&theme=0"} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="item px-3">
                            <iframe style={{borderRadius : '12px'}} src={"https://open.spotify.com/embed/track/"+props.popularSongs[2].track_id+"?utm_source=generator&theme=0"} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="item px-3">
                            <iframe style={{borderRadius : '12px'}} src={"https://open.spotify.com/embed/track/"+props.popularSongs[3].track_id+"?utm_source=generator&theme=0"} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="item px-3">
                            <iframe style={{borderRadius : '12px'}} src={"https://open.spotify.com/embed/track/"+props.popularSongs[4].track_id+"?utm_source=generator&theme=0"} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="item px-3">
                            <iframe style={{borderRadius : '12px'}} src={"https://open.spotify.com/embed/track/"+props.popularSongs[5].track_id+"?utm_source=generator&theme=0"} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="item px-3">
                            <iframe style={{borderRadius : '12px'}} src={"https://open.spotify.com/embed/track/"+props.popularSongs[6].track_id+"?utm_source=generator&theme=0"} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="item px-3">
                            <iframe style={{borderRadius : '12px'}} src={"https://open.spotify.com/embed/track/"+props.popularSongs[7].track_id+"?utm_source=generator&theme=0"} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="item px-3">
                            <iframe style={{borderRadius : '12px'}} src={"https://open.spotify.com/embed/track/"+props.popularSongs[8].track_id+"?utm_source=generator&theme=0"} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="item px-3">
                            <iframe style={{borderRadius : '12px'}} src={"https://open.spotify.com/embed/track/"+props.popularSongs[9].track_id+"?utm_source=generator&theme=0"} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>

                    </OwlCarousel>
                    </div>

                </div>
            </>
            : 
            <></>}


            <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                {!loading ? 
                <>
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Masukkan bobot dan tipe kriteria</h3>
                {/* <p className="py-4">Press ESC key or click the button below to close</p> */}

                <form onSubmit={submit}>
                    <label className="label py-4">
                        <span className="label-text">Tempo</span>
                    </label>
                    <div className="flex">
                        <input type="number" placeholder="Nilai bobot tempo" className="input input-bordered input-secondary w-full max-w-xs" defaultValue={0} onChange={e => setData('tempo', e.target.value)} min={0}/>
                        <select className="select select-secondary w-full max-w-xs mx-2" onChange={e => setData('tempoType', e.target.value)}>
                            <option disabled selected value={0}>Pilih tipe kriteria</option>
                            <option value={1}>Benefit</option>
                            <option value={-1}>Cost</option>
                            <option value={0}>Irrelevant</option>
                        </select>
                    </div>

                    <label className="label py-4">
                        <span className="label-text">Accousticness</span>
                    </label>
                    <div className="flex">
                        <input type="number" placeholder="Nilai bobot accousticness" className="input input-bordered input-secondary w-full max-w-xs" defaultValue={0} onChange={e => setData('accousticness', e.target.value)} min={0}/>
                        <select className="select select-secondary w-full max-w-xs mx-2" onChange={e => setData('accousticnessType', e.target.value)}>
                            <option disabled selected value={0}>Pilih tipe kriteria</option>
                            <option value={1}>Benefit</option>
                            <option value={-1}>Cost</option>
                            <option value={0}>Irrelevant</option>
                        </select>
                    </div>

                    <label className="label py-4">
                        <span className="label-text">Speechiness</span>
                    </label>
                    <div className="flex">
                        <input type="number" placeholder="Nilai bobot accousticness" className="input input-bordered input-secondary w-full max-w-xs" defaultValue={0} onChange={e => setData('speechiness', e.target.value)} min={0}/>
                        <select className="select select-secondary w-full max-w-xs mx-2" onChange={e => setData('speechinessType', e.target.value)}>
                            <option disabled selected value={0}>Pilih tipe kriteria</option>
                            <option value={1}>Benefit</option>
                            <option value={-1}>Cost</option>
                            <option value={0}>Irrelevant</option>
                        </select>
                    </div>

                    <label className="label py-4">
                        <span className="label-text">Loudness</span>
                    </label>
                    <div className="flex">
                        <input type="number" placeholder="Nilai bobot Loudness" className="input input-bordered input-secondary w-full max-w-xs" defaultValue={0} onChange={e => setData('loudness', e.target.value)} min={0}/>
                        <select className="select select-secondary w-full max-w-xs mx-2" onChange={e => setData('loudnessType', e.target.value)}>
                            <option disabled selected value={0}>Pilih tipe kriteria</option>
                            <option value={1}>Benefit</option>
                            <option value={-1}>Cost</option>
                            <option value={0}>Irrelevant</option>
                        </select>
                    </div>

                    <label className="label py-4">
                        <span className="label-text">Instrumentalness</span>
                    </label>
                    <div className="flex">
                        <input type="number" placeholder="Nilai bobot instrumentalness" className="input input-bordered input-secondary w-full max-w-xs" defaultValue={0} onChange={e => setData('instrumentalness', e.target.value)} min={0}/>
                        <select className="select select-secondary w-full max-w-xs mx-2" onChange={e => setData('instrumentalnessType', e.target.value)}>
                            <option disabled selected value={0}>Pilih tipe kriteria</option>
                            <option value={1}>Benefit</option>
                            <option value={-1}>Cost</option>
                            <option value={0}>Irrelevant</option>
                        </select>
                    </div>

                    <label className="label py-4">
                        <span className="label-text">Energy</span>
                    </label>
                    <div className="flex">
                        <input type="number" placeholder="Nilai bobot energy" className="input input-bordered input-secondary w-full max-w-xs" defaultValue={0} onChange={e => setData('energy', e.target.value)} min={0}/>
                        <select className="select select-secondary w-full max-w-xs mx-2" onChange={e => setData('energyType', e.target.value)}>
                            <option disabled selected value={0}>Pilih tipe kriteria</option>
                            <option value={1}>Benefit</option>
                            <option value={-1}>Cost</option>
                            <option value={0}>Irrelevant</option>
                        </select>
                    </div>

                    <label className="label py-4">
                        <span className="label-text">Valence</span>
                    </label>
                    <div className="flex">
                        <input type="number" placeholder="Nilai bobot valence" className="input input-bordered input-secondary w-full max-w-xs" defaultValue={0} onChange={e => setData('valence', e.target.value)} min={0}/>
                        <select className="select select-secondary w-full max-w-xs mx-2" onChange={e => setData('valenceType', e.target.value)}>
                            <option disabled selected value={0}>Pilih tipe kriteria</option>
                            <option value={1}>Benefit</option>
                            <option value={-1}>Cost</option>
                            <option value={0}>Irrelevant</option>
                        </select>
                    </div>

                    <label className="label py-4">
                        <span className="label-text">Danceability</span>
                    </label>
                    <div className="flex">
                        <input type="number" placeholder="Nilai bobot danceability" className="input input-bordered input-secondary w-full max-w-xs" defaultValue={0} onChange={e => setData('danceability', e.target.value)} min={0}/>
                        <select className="select select-secondary w-full max-w-xs mx-2" onChange={e => setData('danceabilityType', e.target.value)}>
                            <option disabled selected value={0}>Pilih tipe kriteria</option>
                            <option value={1}>Benefit</option>
                            <option value={-1}>Cost</option>
                            <option value={0}>Irrelevant</option>
                        </select>
                    </div>

                    <label className="label py-4">
                        <span className="label-text">Duration</span>
                    </label>
                    <div className="flex">
                        <input type="number" placeholder="Nilai bobot duration" className="input input-bordered input-secondary w-full max-w-xs" defaultValue={0} onChange={e => setData('duration', e.target.value)} min={0}/>
                        <select className="select select-secondary w-full max-w-xs mx-2" onChange={e => setData('durationType', e.target.value)}>
                            <option disabled selected value={0}>Pilih tipe kriteria</option>
                            <option value={1}>Benefit</option>
                            <option value={-1}>Cost</option>
                            <option value={0}>Irrelevant</option>
                        </select>
                    </div>

                    <div className="modal-action">
                    <button className="btn btn-success">Search</button>
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-error">Cancel</button>
                    </form>
                    </div>

                </form>
                </> 
                : 
                <div>
                    <p className="text-center font-bold text-lg">Loading...</p>
                    <div className="mt-3 flex justify-center">
                        <span className="loading loading-spinner loading-md"></span>
                    </div>
                </div>
                }

            </div>
            </dialog>

        </div>
    )
}