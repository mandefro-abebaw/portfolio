import {Button} from "@/components/Button";
import {ArrowRight,Download,Linkedin,Github,Instagram,Twitter,ChevronDown,} from "lucide-react";  
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton"; 
import { FaTelegramPlane } from "react-icons/fa";


const skills =[
    "Django",
    "DjangoRESTFramework",
    "React",
    "KaliLinux",
    "Git&GitHub",
    "Figma",
    "Python",
    "javascript",
    "PostgreSQL",
    "BashScripting",
    "Networking",

];      

export const Hero = ()=>{
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* background image */}
            <div className="absolute inset-0"> 
                <img src="/backgroun.png"  alt = "Hero-image" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 from-background/20 via-background/80 to-background"  />
                 </div>

                 {/* Green dot */}
                 <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(30)].map((_,i)=>(<div className="absolute w-1.5 h-1.5 rounded-full opacity-60" style ={{
                        backgroundColor:"#20B2A6",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() *20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() *5}s`,

                    }}/>))}
                 </div>
                 {/* content */}
                 <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                     <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* left coloumn -text content */}
                        <div className="space-y-8">
                            <div className="animate-fade-in">
                              <span className="inline-flex items-center gap-2 px-4 py-4 rounded-full glass text-sm text-primary"> 
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse " />Software Engineer
                                </span>
                            </div>
                            {/* heading */}
                            <div className="space-y-4">
                             <h1 className="text-sxl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                    Crafting <span className="text-primary glow-text">digital</span>
                                <br />
                                expriences with
                                <br />
                                <span className="font-serif italic font-normal text-white">Precision.</span> 
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                I am a software developer with strong experience in
                                building modern web applications using Django and 
                                Django REST Framework for secure and scalable backends,
                                combined with React for responsive and interactive user interfaces.
                                I work comfortably with REST APIs, handling authentication, data flow, 
                                and integration between frontend and backend systems. I also have hands-on 
                                experience with Kali Linux for security awareness, scripting, and system-level
                                understanding. For version control and team collaboration, I use Git and GitHub 
                                effectively, following clean commit and branching practices. Additionally, I have 
                                a good eye for design and usability, using Figma to understand UX principles, create 
                                wireframes, and translate designs into clean, user-friendly interfaces.

                            </p>
                          </div>
                          {/* call to action buttons */}
                          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact Me<ArrowRight />

                            </Button>
                            <AnimatedBorderButton><Download className="w-5 h-5 mr-2" /> Download CV</AnimatedBorderButton>  
                            
                          </div>
                          {/* social links */}
                          <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow: </span>
                            {[{icon:Github,href:"https://github.com/mandefro-abebaw"},
                            {icon:FaTelegramPlane,href:"https://t.me/Siparia"},
                            {icon:Linkedin,href:"https://www.linkedin.com/mandefro-abebaw"},
                            {icon:Instagram,href:"#"},
                             {icon:Twitter,href:"https://twitter.com/manirmas6532new"},
                            ].map((social,index)=>(<a key={index} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">{<social.icon />}</a>))}
                          </div>


                        </div>
                         {/* right coloumn - profile image     */}
                         <div className="relative animate-fade-in animation-delay-300">
                            {/* profile image */}
                            <div className="relative max-w-md mx-auto">
                                <div
                                        className="absolute inset-0 
                                    rounded-3xl   
                                    from-primary/30 via-transparent 
                                    to-primary/10 blur-2xl animate-pulse-glow"
                                    /> 
                                <div className="relative glass rounded-3xl p-2 glow-border">
                                    <img src="/profile.jpg" alt="Mandefro Abebaw" className="w-full h-150 object-cover rounded-2xl animate-fade-in animation-delay-500" />
                                    {/* the floating badge */}
                                    <div className="absolute -bottom-4 -right-2 glass rounded-xl px-4 py-3 animate-float">
                                        <div className="flex items-center gap-3" >
                                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-sm font-medium">Available for work</span>
                                        </div>
                                    </div>
                                    {/*the stat badge*/ }    
                                    <div className="absolute -top-4 -left-4  glass rounded-xl px-4 py-4 animate-float animation-delay-500">
                                        <div className="text-2xl   font-bold text-primary">2+</div>
                                        <div className="text-xs text-muted-foreground">Month Exp</div>
                                    </div>  
                                 </div>
                            </div>
                         </div>
                     </div>

                     {/* skills section */}
                   
                        <div className="mt-20 animate-fade-in animation-delay-600">
                            <p className="text-sm text-muted-foreground mb-6 text-center"> Technologies I Work With</p>
                            <div className="relative overflow-hidden"  > 
                                <div className="flex animate-marquee">
                                    {[...skills,...skills].map((skill,index) =>(
                                        <div key ={index} className="flex px-8 py-4"> <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span></div>
                                    ))}

                                </div>
                            </div>

                        </div>
                     
                        
                     
                 </div>

                            <div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 
                    animate-fade-in animation-delay-800"
                    >
                        <a
                        href="#about"
                        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                        >
                        <span className="text-xs uppercase tracking-wider">Scroll</span>
                        <ChevronDown className="w-6 h-6 animate-bounce" />
                        </a>
                    </div>

        </section>
    )
};