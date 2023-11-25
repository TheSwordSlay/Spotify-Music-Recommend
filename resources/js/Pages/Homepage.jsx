import { Link } from "@inertiajs/react";
import {useForm} from "@inertiajs/react";

export default function Homepage() {
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

    function submit(e) {
        e.preventDefault()
        get(route('hitungWP', data, {
            _method: 'get'
        }));
      }

    return(
        <div>
            <p className="text-center text-6xl mt-40 font-black">Spotify Songs Recommendation</p>
            <p className="text-center text-4xl mt-10 font-bold text-green-600">Let us help you find the perfect songs</p>
            <div className="flex justify-center">
                <button className="btn btn-success mt-6" onClick={()=>document.getElementById('my_modal_1').showModal()}>Search</button>
            </div>

            <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
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
                    <button className="btn">Submit</button>
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Cancel</button>
                    </form>
                    </div>

                </form>
            </div>
            </dialog>

        </div>
    )
}