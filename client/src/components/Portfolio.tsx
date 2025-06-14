import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  Download, 
  Mail, 
  ExternalLink, 
  Github, 
  Linkedin,
  ChevronDown,
  Code,
  Server,
  Bolt,
  Brain,
  MapPin,
  Clock,
  GraduationCap,
  Rocket
} from "lucide-react";

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Manideep_Daram_Resume.pdf';
    link.download = 'Manideep_Daram_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openEmailContact = () => {
    window.location.href = 'mailto:manideepdaram@gmail.com?subject=Let\'s Work Together&body=Hi Manideep,%0D%0A%0D%0AI came across your portfolio and would like to discuss a potential opportunity.%0D%0A%0D%0ABest regards';
  };

  const projects = [
    {
      name: "SS MART",
      description: "Retail frontend project for a local mart business",
      liveUrl: "https://ss-mart-frontend.vercel.app",
      githubUrl: "https://github.com/0535MANIDEEP/ss-mart-frontend",
      image: "/assets/ssmart.jpg",
      tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"]
    },
    {
      name: "AI Scam Detector",
      description: "OCR + AI-powered fraud detection tool",
      liveUrl: "https://scam-detector-frontend.vercel.app",
      githubUrl: "https://github.com/0535MANIDEEP/ai-scam-detector",
      image: "/assets/ai-scam.jpg",
      tags: ["FastAPI", "MongoDB", "Hugging Face", "React"]
    }
  ];

  const skills = {
    frontend: [
      { name: "React.js", rating: 5 },
      { name: "Tailwind CSS", rating: 5 },
      { name: "HTML5", rating: 5 },
      { name: "JavaScript", rating: 4 }
    ],
    backend: [
      { name: "FastAPI", rating: 4 },
      { name: "MongoDB", rating: 4 }
    ],
    tools: [
      { name: "GitHub", rating: 5 },
      { name: "Vercel", rating: 5 },
      { name: "Figma", rating: 4 },
      { name: "Postman", rating: 4 }
    ],
    ai: [
      { name: "OpenAI", rating: 3 },
      { name: "Hugging Face", rating: 3 }
    ]
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-600"}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-netflix-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isNavbarScrolled 
          ? 'bg-netflix-black/95 backdrop-blur-md' 
          : 'bg-gradient-to-b from-netflix-black/90 to-transparent backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold netflix-red">
              Manideep Daram
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'projects', 'skills', 'experience', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="hover:text-red-500 transition-colors duration-200 capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-red-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden bg-netflix-dark/95 backdrop-blur-md absolute top-16 left-0 right-0 shadow-lg transform transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
          <div className="px-4 py-6 space-y-4">
            {['home', 'projects', 'skills', 'experience', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block hover:text-red-500 transition-colors duration-200 capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/ssmart.jpg" 
            alt="SS MART project interface showcasing modern e-commerce design" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-netflix-black/80 via-netflix-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black/80 via-transparent to-netflix-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center lg:text-left max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block">Manideep Daram</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium">
                Frontend Developer | React | Tailwind | FastAPI
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl">
                Open to remote opportunities, immediately available to join
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={downloadResume}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-md transition-all duration-200 hover:scale-105 shadow-lg inline-flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </Button>
              <Button 
                onClick={openEmailContact}
                variant="outline"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-md transition-all duration-200 hover:scale-105 border border-white/30 inline-flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="space-y-8">
              <div className="flex justify-center space-x-6 animate-float">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <Server className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
              <div className="flex justify-center space-x-6 animate-float" style={{animationDelay: '1s'}}>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <Bolt className="w-8 h-8 text-orange-500" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <Brain className="w-8 h-8 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 lg:py-24 bg-netflix-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl">Explore my latest work in web development, from e-commerce platforms to AI-powered applications.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-netflix-dark border-white/10 overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 group">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={`${project.name} interface`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to placeholder image if project image fails to load
                      e.currentTarget.src = `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-netflix-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <Button
                        asChild
                        className="bg-red-600 hover:bg-red-700 text-white text-sm"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/30 text-sm"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-opacity-20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20"
            >
              <a href="https://github.com/0535MANIDEEP" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 lg:py-24 bg-netflix-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Technical Skills</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Building modern, fast, and scalable web applications with cutting-edge technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-netflix-black/50 border-white/10 hover:border-red-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Code className="w-10 h-10 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Frontend</h3>
                </div>
                <div className="space-y-3">
                  {skills.frontend.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span>{skill.name}</span>
                      <div className="flex">
                        {renderStars(skill.rating)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-netflix-black/50 border-white/10 hover:border-red-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Server className="w-10 h-10 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Backend</h3>
                </div>
                <div className="space-y-3">
                  {skills.backend.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span>{skill.name}</span>
                      <div className="flex">
                        {renderStars(skill.rating)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-netflix-black/50 border-white/10 hover:border-red-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Bolt className="w-10 h-10 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Tools</h3>
                </div>
                <div className="space-y-3">
                  {skills.tools.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span>{skill.name}</span>
                      <div className="flex">
                        {renderStars(skill.rating)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-netflix-black/50 border-white/10 hover:border-red-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Brain className="w-10 h-10 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">AI & ML</h3>
                </div>
                <div className="space-y-3">
                  {skills.ai.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span>{skill.name}</span>
                      <div className="flex">
                        {renderStars(skill.rating)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 lg:py-24 bg-netflix-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Professional Experience</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Building real-world applications and contributing to meaningful projects</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-netflix-dark border-white/10 overflow-hidden shadow-2xl hover:border-red-500/50 transition-colors">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">Frontend Developer Intern</h3>
                    <p className="text-xl text-red-500 font-semibold mb-2">Crystalline Software Technologies</p>
                    <div className="flex items-center text-gray-400 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Hyderabad, India</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-semibold">Dec 2023 – June 2024 (6 months)</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>Built responsive web interfaces using React.js and Tailwind CSS</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>Integrated RESTful APIs and collaborated with backend team</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>Used GitHub for version control and Vercel for deployment</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>Participated in agile sprints and contributed to real client UI components</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-netflix-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">About Me</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate Frontend Developer with a <span className="netflix-red font-medium">BTech in CSE from VJIT with 8.53 CGPA</span>, 
                  passionate about performance-focused frontend systems.
                </p>
                <p>
                  As a <span className="text-white font-medium">quick learner</span>, I'm continuously shipping full-stack projects 
                  and have a keen interest in <span className="netflix-red font-medium">AI-integrated apps and scalable UI frameworks</span>.
                </p>
                <p>
                  During my internship at <span className="text-white font-medium">Crystalline Software Technologies</span>, 
                  I gained valuable industry experience and honed my skills in building fast, scalable UIs using React and FastAPI.
                </p>
                <p>
                  I'm particularly interested in <span className="netflix-red font-medium">remote work opportunities</span> 
                  where I can contribute to impactful technology projects and collaborate with diverse, talented teams from around the world.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold netflix-red">6</div>
                  <div className="text-sm text-gray-400">Months Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold netflix-red">10+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold netflix-red">8.53</div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold netflix-red">24/7</div>
                  <div className="text-sm text-gray-400">Availability</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500/20 to-transparent p-8 rounded-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                  alt="Professional developer headshot" 
                  className="w-full max-w-sm mx-auto rounded-xl shadow-2xl"
                />
                
                <div className="flex justify-center space-x-4 mt-6">
                  <div className="bg-red-500/20 backdrop-blur-sm p-3 rounded-lg border border-red-500/30">
                    <GraduationCap className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="bg-blue-500/20 backdrop-blur-sm p-3 rounded-lg border border-blue-500/30">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="bg-green-500/20 backdrop-blur-sm p-3 rounded-lg border border-green-500/30">
                    <Rocket className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-netflix-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Ready to bring your ideas to life? I'm available for remote opportunities and exciting projects.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-netflix-black/50 border-white/10 hover:border-red-500/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a href="mailto:manideepdaram@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  manideepdaram@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-netflix-black/50 border-white/10 hover:border-red-500/50 transition-colors">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-400">Hyderabad, India</p>
                <p className="text-sm text-gray-500">Available for remote work</p>
              </CardContent>
            </Card>
            
            <Card className="bg-netflix-black/50 border-white/10 hover:border-red-500/50 transition-colors md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Availability</h3>
                <p className="text-gray-400">Immediately Available</p>
                <p className="text-sm text-gray-500">Open to join full-time</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center space-y-8">
            <div className="flex justify-center space-x-6">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 rounded-full p-4 transition-all duration-200 hover:scale-110"
              >
                <a href="https://github.com/0535MANIDEEP" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 rounded-full p-4 transition-all duration-200 hover:scale-110"
              >
                <a href="https://linkedin.com/in/manideep-daram" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={openEmailContact}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 rounded-full p-4 transition-all duration-200 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </Button>
            </div>
            
            <div>
              <Button 
                onClick={downloadResume}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-md transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-netflix-black border-t border-white/10 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Manideep Daram. All rights reserved.</p>
              <p className="text-sm netflix-red font-medium mt-1">Open to work — remote only</p>
            </div>
            <div className="flex space-x-6 text-sm">
              {['home', 'projects', 'skills', 'experience', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-400 hover:text-white transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
