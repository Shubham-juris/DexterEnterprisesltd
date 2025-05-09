import { useState, useEffect } from 'react';
import { Home, Search, Users, Award, BarChart2, Code, Mail, Menu, X, ChevronRight, ArrowRight, CheckCircle, Globe, TrendingUp } from 'lucide-react';

// Create Router
const routes = {
  home: () => <HomePage />,
  services: () => <ServicesPage />,
  about: () => <AboutPage />,
  contact: () => <ContactPage />
};

// Main App Component
export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigate = (route) => {
    setCurrentRoute(route);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar navigate={navigate} currentRoute={currentRoute} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      {routes[currentRoute]()}
      <Footer navigate={navigate} />
    </div>
  );
}

// Navbar Component
function Navbar({ navigate, currentRoute, mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md py-3 transition-all duration-300 ease-in-out">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="font-bold text-2xl">
              <span className="text-black">DexterEnterprises</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink title="Home" route="home" currentRoute={currentRoute} navigate={navigate} />
            <NavLink title="Services" route="services" currentRoute={currentRoute} navigate={navigate} />
            <NavLink title="About Us" route="about" currentRoute={currentRoute} navigate={navigate} />
            <NavLink title="Contact" route="contact" currentRoute={currentRoute} navigate={navigate} />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all">
              Get Started
            </button>
          </div>
          
          {/* Mobile menuun menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-2 px-4">
            <div className="flex flex-col space-y-3">
              <MobileNavLink title="Home" route="home" currentRoute={currentRoute} navigate={navigate} />
              <MobileNavLink title="Services" route="services" currentRoute={currentRoute} navigate={navigate} />
              <MobileNavLink title="About Us" route="about" currentRoute={currentRoute} navigate={navigate} />
              <MobileNavLink title="Contact" route="contact" currentRoute={currentRoute} navigate={navigate} />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ title, route, currentRoute, navigate }) {
  return (
    <button
      onClick={() => navigate(route)}
      className={`font-medium transition-colors ${
        currentRoute === route ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
      }`}
    >
      {title}
    </button>
  );
}

function MobileNavLink({ title, route, currentRoute, navigate }) {
  return (
    <button
      onClick={() => navigate(route)}
      className={`font-medium transition-colors py-2 ${
        currentRoute === route ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
      }`}
    >
      {title}
    </button>
  );
}

// Home Page Component
function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <CTASection />
    </div>
  );
}

// Hero Section Component
function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Empowering Your Business Growth
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto md:mx-0">
            Dexter Enterprises provides comprehensive business solutions to help your company thrive in the digital landscape.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-white text-blue-700 hover:text-blue-800 font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center">
              Get Started <ChevronRight size={20} className="ml-1" />
            </button>
            <button className="border border-blue-100 text-white hover:bg-blue-700 font-medium px-6 py-3 rounded-md transition-all flex items-center justify-center">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}></div>
    </section>
  );
}

// Services Section Component
function Services() {
  const services = [
    {
      icon: <Globe size={40} />,
      title: "Website Growth",
      description: "Boost your online presence with our strategic website growth solutions tailored to your business needs."
    },
    {
      icon: <Search size={40} />,
      title: "SEO Support",
      description: "Increase your visibility and organic traffic with our proven SEO strategies and techniques."
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Business Strategy",
      description: "Get expert guidance on business development and strategic planning to achieve sustainable growth."
    },
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description: "Create stunning, functional websites with our professional web development services."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of services to help your business grow and succeed in today's competitive market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 text-blue-600 font-medium flex items-center">
                Learn More <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section Component
function Features() {
  const features = [
    {
      title: "Expert Team",
      description: "Our team of experienced professionals is dedicated to delivering exceptional results for your business."
    },
    {
      title: "Customized Solutions",
      description: "We create tailored strategies that address your unique business challenges and goals."
    },
    {
      title: "Proven Results",
      description: "Our track record speaks for itself, with numerous success stories from satisfied clients."
    },
    {
      title: "Continuous Support",
      description: "We provide ongoing support to ensure your business continues to grow and evolve."
    },
    {
      title: "Data-Driven Approach",
      description: "Our strategies are backed by comprehensive data analysis and industry insights."
    },
    {
      title: "Innovative Techniques",
      description: "We stay ahead of the curve by implementing the latest tools and strategies in digital marketing."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what sets Dexter Enterprises apart from the competition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section Component
function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Working with Dexter Enterprises transformed our online presence completely. Our website traffic increased by 200% in just three months!"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowFast",
      content: "The SEO support we received was exceptional. The team is professional, knowledgeable, and truly cares about our success."
    },
    {
      name: "Emma Rodriguez",
      role: "Founder, Innovation Co.",
      content: "Their business strategy consultation gave us the roadmap we needed to scale our operations efficiently. Highly recommended!"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it — see what our clients have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="mr-1">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section Component
function CTASection() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to grow your business?</h2>
            <p className="mt-2 text-blue-100">
              Get in touch with us today to discuss how we can help you achieve your business goals.
            </p>
          </div>
          <div>
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all flex items-center">
              Contact Us <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Page Component
function ServicesPage() {
  const serviceCategories = [
    {
      title: "Website Growth",
      icon: <Globe size={48} className="text-blue-600" />,
      description: "Comprehensive solutions to help your website attract more visitors and convert them into customers.",
      services: [
        "Website Audit & Optimization",
        "Content Strategy & Creation",
        "Conversion Rate Optimization",
        "User Experience Enhancement",
        "Performance Optimization"
      ]
    },
    {
      title: "SEO Support",
      icon: <Search size={48} className="text-blue-600" />,
      description: "Expert SEO services to improve your search engine rankings and increase organic traffic.",
      services: [
        "Keyword Research & Strategy",
        "On-page SEO Optimization",
        "Off-page SEO & Link Building",
        "Technical SEO Audit",
        "Local SEO Optimization"
      ]
    },
    {
      title: "Business Strategy",
      icon: <BarChart2 size={48} className="text-blue-600" />,
      description: "Strategic business planning to help you achieve sustainable growth and success.",
      services: [
        "Market Research & Analysis",
        "Competitive Analysis",
        "Growth Strategy Development",
        "Business Process Optimization",
        "Strategic Partnership Planning"
      ]
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp size={48} className="text-blue-600" />,
      description: "Comprehensive digital marketing solutions to boost your online presence and reach your target audience.",
      services: [
        "Social Media Marketing",
        "Email Marketing Campaigns",
        "Pay-Per-Click Advertising",
        "Content Marketing",
        "Analytics & Reporting"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of services designed to help your business grow and succeed in today's competitive market.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-16">
          {serviceCategories.map((category, index) => (
            <div key={index} className="service-category">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center md:items-start">
                  <div className="mb-4">{category.icon}</div>
                  <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
                  <p className="text-gray-600 text-center md:text-left">{category.description}</p>
                </div>
                <div className="md:w-2/3 bg-gray-50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-6">What We Offer:</h3>
                  <ul className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                        <span className="ml-3">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all flex items-center">
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Need a Custom Solution?</h2>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
              We understand that every business is unique. Contact us today to discuss your specific needs.
            </p>
            <button className="mt-8 bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// About Page Component
function AboutPage() {
  const team = [
    {
      name: "John Dexter",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in digital marketing and business strategy, John founded Dexter Enterprises to help businesses achieve their full potential."
    },
    {
      name: "Emily Chen",
      role: "SEO Specialist",
      bio: "Emily brings 8 years of SEO expertise, having previously worked with Fortune 500 companies to optimize their online presence and search rankings."
    },
    {
      name: "Michael Rodriguez",
      role: "Web Development Lead",
      bio: "Michael leads our web development team with 10+ years of experience in creating custom, high-performing websites for businesses of all sizes."
    },
    {
      name: "Sarah Johnson",
      role: "Business Strategy Consultant",
      bio: "Sarah's background in business consulting helps our clients develop strategic plans that drive sustainable growth and success."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Learn more about Dexter Enterprises and our mission to help businesses thrive in the digital landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2015, Dexter Enterprises began with a simple mission: to help businesses navigate the increasingly complex digital landscape and achieve sustainable growth.
            </p>
            <p className="text-gray-700 mb-4">
              What started as a small consulting firm has now grown into a comprehensive business solutions provider with a team of experts dedicated to delivering exceptional results for our clients.
            </p>
            <p className="text-gray-700">
              We believe in a personalized approach to business growth, understanding that each client has unique challenges and goals. This philosophy has allowed us to build long-lasting relationships with our clients based on trust, transparency, and results.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-200 rounded-lg h-full flex items-center justify-center">
              <div className="text-center p-8">
                <Award size={64} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Our Values</h3>
                <ul className="space-y-2 text-left max-w-md mx-auto">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                    <span className="ml-3"><strong>Excellence:</strong> We strive for excellence in everything we do.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                    <span className="ml-3"><strong>Innovation:</strong> We embrace innovative solutions to complex problems.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                    <span className="ml-3"><strong>Integrity:</strong> We operate with honesty and transparency.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                    <span className="ml-3"><strong>Client-Centric:</strong> Our clients' success is our success.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={36} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                <p className="text-blue-600 text-center mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Page Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team to learn how we can help your business grow.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-all">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">123 Business Avenue, Suite 200</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Users size={24} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-4">Schedule a free consultation with our team to discuss your business needs.</p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-md transition-all">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer({ navigate }) {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="text-blue-400 font-bold text-2xl mb-4">
              Dexter<span className="text-white">Enterprises</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering businesses with innovative solutions for sustainable growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443  Ascendant-colored l.890h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate('home')} className="text-gray-400 hover:text-white">Home</button>
              </li>
              <li>
                <button onClick={() => navigate('about')} className="text-gray-400 hover:text-white">About Us</button>
              </li>
              <li>
                <button onClick={() => navigate('services')} className="text-gray-400 hover:text-white">Services</button>
              </li>
              <li>
                <button onClick={() => navigate('contact')} className="text-gray-400 hover:text-white">Contact</button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Website Growth</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">SEO Support</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Business Strategy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Digital Marketing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Web Development</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="ml-3 text-gray-400">info@dexterenterprises.com</span>
              </li>
              <li className="flex items-start">
                <Home size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="ml-3 text-gray-400">123 Business Avenue, Suite 200<br />New York, NY 10001</span>
              </li>
              <li className="flex items-start">
                <Users size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="ml-3 text-gray-400">(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dexter Enterprises Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}