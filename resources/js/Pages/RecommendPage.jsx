import { useEffect } from "react";
import { useState } from 'react';
import {useForm} from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RecommendPage(props) {
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
            <p className="text-center font-bold text-5xl mt-7 mb-3">Songs based on your preference</p>
                <div className="flex justify-center mb-7">
                    <button className="btn btn-success mt-6" onClick={()=>document.getElementById('my_modal_2').showModal()}>Search again</button>
                </div>
            {props.songs.map((data, i) =>
            <div key={i} className="my-4 px-20" data-aos="fade-left" data-aos-once="true">
                <iframe style={{borderRadius : '12px'}} src={"https://open.spotify.com/embed/track/"+data.track_id+"?utm_source=generator"} width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            )}

            <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                {!loading ? 
                <>
                <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Masukkan bobot dan tipe kriteria</h3>

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