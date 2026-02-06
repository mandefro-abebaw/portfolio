const navLinks = [
    {href:"#about",label:"About"},
    {href:"#project",label:"Project"},
    {href:"#experiance",label:"Experiance"},
    {href:"#testimonials",label:"Testimonials"},
    {href:"#contact",label:"Contact"},

];


export const Navbar = () =>{
    return(<header  className="fixed top-0 left-0 right-0 bg-transparent py-5">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-light hover:text-primary">PM<span>.</span></a>
            {/*desktop nav */}   
            <div>   
                <div>
                    {navLinks.map((link,index)=>(
                        <a href={link.href} key ={index}>{link.label}</a>
                    ))}
                </div>

            </div>

        </nav>

    </header>);
            
    

    
};