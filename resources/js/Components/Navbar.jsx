import { Link } from "@inertiajs/react"
export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 drop-shadow-md">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">Music Recommender</a>
                </div>
                <div className="navbar-center flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Homepage</Link></li>
                    <li><a onClick={()=>document.getElementById('my_modal_2').showModal()}>Search</a></li>
                    <li><a onClick={()=>document.getElementById('my_modal_3').showModal()}>Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">More</a>
                </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
            <div className="modal-box relative max-w-full w-10/12 mx-4">
                <h3 className="font-bold text-lg mb-6 text-center text-2xl">Meet Our Team</h3>
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                <div className="grid grid-cols-3 gap-4">

                    <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="h-56"><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shirin Nur Fadhillah</h2>
                        <p>NIM : 09021282126109</p>

                    </div>
                    </div>
                    
                    <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="h-56"><img src="/img/avatar_fiqri.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Muhammad Rizalul Fiqri S. D.</h2>
                        <p>NIM : 09021282126114</p>

                    </div>
                    </div>

                    <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="h-56"><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Haji Risky</h2>
                        <p>NIM : 09021282126067</p>

                    </div>
                    </div>

                </div>
            </div>

            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            </dialog>
        </>
    )
}