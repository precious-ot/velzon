import logo from "./Assets/logo-light.png"


export default function Footer(){
    const year: number = new Date().getFullYear();

    return(
        <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:gap-5 lg:grid-cols-4 gap-8 bg-neutral-950 px-20 py-20 place-items-top">
            <div>
               <img className="w-30 pt-2" src={logo} alt="logo"/>
               <p className="text-neutral-500 mt-5 text-start">Premium Multipurpose Admin & Dashboard Template</p>
               <p className="text-neutral-500 mt-5 text-start">You can build any type of web application like eCommerce, CRM, CMS, Project 
                management apps, Admin Panels, etc using Velzon.</p>
                <footer className="text-neutral-500 mt-5 text-start">{year} &copy; Velzon - Themesbrand</footer>
            </div>
            <div>
                <h1 className="text-2xl text-neutral-200 font-semibold">Company</h1>
                <ul className="mt-5">
                    <li className="mb-2"><a className="text-neutral-500 text-start">About Us</a></li>
                    <li className="mb-2"><a className="text-neutral-500 text-start">Gallery</a></li>
                    <li className="mb-2"><a className="text-neutral-500 text-start">Projects</a></li>
                    <li className="mb-2"><a className="text-neutral-500 text-start">Projects</a></li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl text-neutral-200 font-semibold">Apps Pages</h1>
                <ul className="mt-5">
                    <li className="mb-2"><a className="text-neutral-500 text-start">Calendar</a></li>
                    <li className="mb-2"><a className="text-neutral-500 text-start">Mailbox</a></li>
                    <li className="mb-2"><a className="text-neutral-500 text-start">Chat</a></li>
                    <li className="mb-2"><a className="text-neutral-500 text-start">Deals</a></li>
                    <li className="mb-2"><a className="text-neutral-500 text-start">Kanban Board</a></li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl text-neutral-200 font-semibold">Support</h1>
                <ul className="mt-5">
                    <li className="mb-2"><a className="text-neutral-500 text-start">FAQ</a></li>
                    <li className="mb-2"><a className="text-neutral-500 text-start">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}