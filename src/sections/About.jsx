
import { Code2,Lightbulb,Rocket,Users,MonitorSmartphone } from "lucide-react";
const highlights =[
    {icon:Code2,
    title:"clean code",
    description:"I write clean, maintainable code that is easy to read and understand."},
    {icon:MonitorSmartphone,
    title:"responsive design",
    description:"My websites are fully responsive and work on all devices."},
    {icon:Rocket,
        title:"performance optimization",
        description:"I optimize performance to ensure fast loading times and smooth user experience."},
        {icon:Lightbulb,
            title:"problem solving",
            description:"I am a creative problem solver who can find solutions to complex challenges."},
            {icon:Users,
                title:"collaboration",
                description:"I am a team player who can collaborate effectively with designers, developers, and stakeholders."
            }
        
    ];

export const  About = ()=>{
    return(
        <section  id="about" className="py-32 relative overflow-hidden ">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 item-center">
                    {/* left section */}
                    <div className="space-y-6">
                        <div className="animate-fade-in">
                                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase "> About Me</span>
                            
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold leading-tight animate-fade-in animation-delay-100 text-primary ">
                                Software Engineer
                                <span className="font-serif italic font-normal text-white"> focused on Django, React, REST APIs, and security-driven</span>  development.
                            </h2>
                            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                                <p>
                                    I’m a passionate Software Engineer with a strong focus
                                     on backend-driven web development using Django and
                                      Django REST Framework, combined with modern frontend 
                                      technologies like React. I enjoy designing scalable systems, 
                                      building clean APIs, and connecting them with responsive, 
                                      user-friendly interfaces. I’m especially interested in 
                                      how real-world applications are structured, secured, and 
                                      optimized for performance and maintainability.
                                </p>
                                <p>
                                    Beyond web development, I actively explore
                                     Linux environments—particularly Kali Linux—and 
                                     cybersecurity concepts, including system boot processes, 
                                     networking, and secure application design. I’m also expanding
                                      my skills in AI and machine learning, aiming to integrate intelligent
                                       features into secure web systems. I believe in continuous learning, 
                                       writing clean code, and building software that is not only functional, 
                                       but reliable, efficient, and future-ready.
                                </p>
                            </div>
                            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300  ">
                                <p className="text-lg font-medium italic text-foreground">
                                    My mission is to build secure, scalable, and 
                                    intelligent software solutions that solve real-world problems.
                                     I aim to continuously grow as a software engineer by combining
                                      strong backend development, modern frontend design, and security-focused
                                       practices, while contributing meaningful and reliable systems to the tech
                                        community.
                                </p>
                            </div>
                      </div>
                    {/* right section */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item,index) =>(
                            <div key={index} className="glass p-6 rounded-2xl animate-fade-in " style={{animationDelay:`${(index + 1) *100}ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 ">
                                     <item.icon  className="w-6 h-6 text-primary"/>
                                 </div>  
                                 <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                 <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </section>    )
};