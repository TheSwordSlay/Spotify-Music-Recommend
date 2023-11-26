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
                    <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">More</a>
                </div>
            </div>
        </>
    )
}