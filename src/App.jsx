import { useState, useEffect } from "react";
import {
  Home,
  Search,
  Users,
  Award,
  BarChart2,
  Code,
  Mail,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Globe,
  TrendingUp,
  Link,
} from "lucide-react";
import logo from "../src/assets/logo/logo.jpg";
import home from "./assets/home/home.webp";

// Create Router
const routes = {
  home: () => <HomePage />,
  services: () => <ServicesPage />,
  about: () => <AboutPage />,
  contact: () => <ContactPage />,
};

// Main App Component
export default function App() {
  const [currentRoute, setCurrentRoute] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = (route) => {
    setCurrentRoute(route);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar
        navigate={navigate}
        currentRoute={currentRoute}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md py-3 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button onClick={() => navigate("home")} className="block w-32">
              <img
                src={logo}
                alt="Dexter Enterprises Logo"
                className="w-full h-auto"
              />
            </button>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              title="Home"
              route="home"
              currentRoute={currentRoute}
              navigate={navigate}
            />
            <NavLink
              title="Services"
              route="services"
              currentRoute={currentRoute}
              navigate={navigate}
            />
            <NavLink
              title="About Us"
              route="about"
              currentRoute={currentRoute}
              navigate={navigate}
            />
            <NavLink
              title="Contact"
              route="contact"
              currentRoute={currentRoute}
              navigate={navigate}
            />
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
              <MobileNavLink
                title="Home"
                route="home"
                currentRoute={currentRoute}
                navigate={navigate}
              />
              <MobileNavLink
                title="Services"
                route="services"
                currentRoute={currentRoute}
                navigate={navigate}
              />
              <MobileNavLink
                title="About Us"
                route="about"
                currentRoute={currentRoute}
                navigate={navigate}
              />
              <MobileNavLink
                title="Contact"
                route="contact"
                currentRoute={currentRoute}
                navigate={navigate}
              />
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
        currentRoute === route
          ? "text-blue-600"
          : "text-gray-600 hover:text-blue-600"
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
        currentRoute === route
          ? "text-blue-600"
          : "text-gray-600 hover:text-blue-600"
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
      <CTASection />
    </div>
  );
}

// Hero Section Component
function Hero() {
  return (
    <section
      className="relative bg-cover bg-center pt-32 pb-20 md:pt-40 md:pb-28"
      style={{ backgroundImage: `url(${home})` }}
    >
      <div className="bg-black/50 absolute inset-0 z-0" />{" "}
      {/* Optional dark overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Empowering Your Business Growth
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto md:mx-0">
            Dexter Enterprises provides comprehensive business solutions to help
            your company thrive in the digital landscape.
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
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      ></div>
    </section>
  );
}

// Services Section Component
function Services() {
  const services = [
    {
      icon: <Globe size={40} />,
      title: "Website Growth",
      description:
        "Boost your online presence with our strategic website growth solutions tailored to your business needs.",
    },
    {
      icon: <Search size={40} />,
      title: "SEO Support",
      description:
        "Increase your visibility and organic traffic with our proven SEO strategies and techniques.",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Business Strategy",
      description:
        "Get expert guidance on business development and strategic planning to achieve sustainable growth.",
    },
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description:
        "Create stunning, functional websites with our professional web development services.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of services to help your business grow and
            succeed in today's competitive market.
          </p>
        </div>

        <div className="flex  flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all w-full md:w-[45%] lg:w-[22%]"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
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
      description:
        "Our team of experienced professionals is dedicated to delivering exceptional results for your business.",
    },
    {
      title: "Customized Solutions",
      description:
        "We create tailored strategies that address your unique business challenges and goals.",
    },
    {
      title: "Proven Results",
      description:
        "Our track record speaks for itself, with numerous success stories from satisfied clients.",
    },
    {
      title: "Continuous Support",
      description:
        "We provide ongoing support to ensure your business continues to grow and evolve.",
    },
    {
      title: "Data-Driven Approach",
      description:
        "Our strategies are backed by comprehensive data analysis and industry insights.",
    },
    {
      title: "Innovative Techniques",
      description:
        "We stay ahead of the curve by implementing the latest tools and strategies in digital marketing.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>
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
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
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

// CTA Section Component
function CTASection() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to grow your business?
            </h2>
            <p className="mt-2 text-blue-100">
              Get in touch with us today to discuss how we can help you achieve
              your business goals.
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
      description:
        "Comprehensive solutions to help your website attract more visitors and convert them into customers.",
      services: [
        "Website Audit & Optimization",
        "Content Strategy & Creation",
        "Conversion Rate Optimization",
        "User Experience Enhancement",
        "Performance Optimization",
      ],
    },
    {
      title: "SEO Support",
      icon: <Search size={48} className="text-blue-600" />,
      description:
        "Expert SEO services to improve your search engine rankings and increase organic traffic.",
      services: [
        "Keyword Research & Strategy",
        "On-page SEO Optimization",
        "Off-page SEO & Link Building",
        "Technical SEO Audit",
        "Local SEO Optimization",
      ],
    },
    {
      title: "Business Strategy",
      icon: <BarChart2 size={48} className="text-blue-600" />,
      description:
        "Strategic business planning to help you achieve sustainable growth and success.",
      services: [
        "Market Research & Analysis",
        "Competitive Analysis",
        "Growth Strategy Development",
        "Business Process Optimization",
        "Strategic Partnership Planning",
      ],
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp size={48} className="text-blue-600" />,
      description:
        "Comprehensive digital marketing solutions to boost your online presence and reach your target audience.",
      services: [
        "Social Media Marketing",
        "Email Marketing Campaigns",
        "Pay-Per-Click Advertising",
        "Content Marketing",
        "Analytics & Reporting",
      ],
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of services designed to help your business
              grow and succeed in today's competitive market.
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
                  <p className="text-gray-600 text-center md:text-left">
                    {category.description}
                  </p>
                </div>
                <div className="md:w-2/3 bg-gray-50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-6">What We Offer:</h3>
                  <ul className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-blue-600 flex-shrink-0 mt-1"
                        />
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
            <h2 className="text-3xl font-bold text-white">
              Need a Custom Solution?
            </h2>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
              We understand that every business is unique. Contact us today to
              discuss your specific needs.
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
  return (
    <div className="pt-24 pb-16">
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Learn more about Dexter Enterprises and our mission to help
              businesses thrive in the digital landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2015, Dexter Enterprises began with a simple mission:
              to help businesses navigate the increasingly complex digital
              landscape and achieve sustainable growth.
            </p>
            <p className="text-gray-700 mb-4">
              What started as a small consulting firm has now grown into a
              comprehensive business solutions provider with a team of experts
              dedicated to delivering exceptional results for our clients.
            </p>
            <p className="text-gray-700">
              We believe in a personalized approach to business growth,
              understanding that each client has unique challenges and goals.
              This philosophy has allowed us to build long-lasting relationships
              with our clients based on trust, transparency, and results.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-200 rounded-lg h-full flex items-center justify-center">
              <div className="text-center p-8">
                <Award size={64} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Our Values</h3>
                <ul className="space-y-2 text-left max-w-md mx-auto">
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-blue-600 flex-shrink-0 mt-1"
                    />
                    <span className="ml-3">
                      <strong>Excellence:</strong> We strive for excellence in
                      everything we do.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-blue-600 flex-shrink-0 mt-1"
                    />
                    <span className="ml-3">
                      <strong>Innovation:</strong> We embrace innovative
                      solutions to complex problems.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-blue-600 flex-shrink-0 mt-1"
                    />
                    <span className="ml-3">
                      <strong>Integrity:</strong> We operate with honesty and
                      transparency.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-blue-600 flex-shrink-0 mt-1"
                    />
                    <span className="ml-3">
                      <strong>Client-Centric:</strong> Our clients' success is
                      our success.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Page Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team to learn how we can help your business
              grow.
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
                <label htmlFor="name" className="block mb-1 font-medium">
                  Full Name
                </label>
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
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email Address
                </label>
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
                <label htmlFor="subject" className="block mb-1 font-medium">
                  Subject
                </label>
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
                <label htmlFor="message" className="block mb-1 font-medium">
                  Message
                </label>
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
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-all"
              >
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
                    <p className="text-gray-600">
                      #209-215,main st NW , Slave lake ,AB TOG 2A1
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Users size={24} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+1 587-839-4791</p>
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
              <p className="mb-4">
                Schedule a free consultation with our team to discuss your
                business needs.
              </p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-md transition-all">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[450px] mt-10">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps?q=%23209-215+Main+St+NW,+Slave+Lake,+AB+T0G+2A1,+Canada&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
              Empowering businesses with innovative solutions for sustainable
              growth and success.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/dexter_enterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.056 1.97.24 2.428.403a4.924 4.924 0 011.675 1.09 4.924 4.924 0 011.09 1.675c.163.458.347 1.258.403 2.428.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.056 1.17-.24 1.97-.403 2.428a4.924 4.924 0 01-1.09 1.675 4.924 4.924 0 01-1.675 1.09c-.458.163-1.258.347-2.428.403-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.056-1.97-.24-2.428-.403a4.924 4.924 0 01-1.675-1.09 4.924 4.924 0 01-1.09-1.675c-.163-.458-.347-1.258-.403-2.428-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.056-1.17.24-1.97.403-2.428a4.924 4.924 0 011.09-1.675 4.924 4.924 0 011.675-1.09c.458-.163 1.258-.347 2.428-.403 1.265-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.332.012 7.053.07 5.775.128 4.674.308 3.75.614a7.913 7.913 0 00-2.89 1.636A7.913 7.913 0 00.614 5.25c-.306.924-.486 2.025-.544 3.303C.012 8.741 0 9.15 0 12s.012 3.259.07 4.547c.058 1.278.238 2.379.544 3.303a7.913 7.913 0 001.636 2.89 7.913 7.913 0 002.89 1.636c.924.306 2.025.486 3.303.544 1.288.058 1.697.07 4.547.07s3.259-.012 4.547-.07c1.278-.058 2.379-.238 3.303-.544a7.913 7.913 0 002.89-1.636 7.913 7.913 0 001.636-2.89c.306-.924.486-2.025.544-3.303.058-1.288.07-1.697.07-4.547s-.012-3.259-.07-4.547c-.058-1.278-.238-2.379-.544-3.303a7.913 7.913 0 00-1.636-2.89A7.913 7.913 0 0020.25.614c-.924-.306-2.025-.486-3.303-.544C15.259.012 14.85 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>

              {/* Website */}
              <a
                href="https://dexterenterprises.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Website</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12s4.477 10 10 10 10-4.484 10-10S17.523 2 12 2zm.25 17.93v-2.046c-1.527-.07-2.59-.548-3.361-1.3-.87-.848-1.339-2.12-1.452-3.584h1.785c.104 1.053.405 1.79.94 2.306.523.506 1.252.794 2.088.861V8.769c-1.293.104-2.306.57-3.027 1.408-.694.812-1.072 1.946-1.16 3.29H5.38c.104-2.018.736-3.683 1.918-4.867C8.48 7.4 10.16 6.706 12.25 6.622V4.077C16.555 4.384 19.43 7.548 19.43 12c0 4.452-2.875 7.616-7.18 7.93z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("home")}
                  className="text-gray-400 hover:text-white"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("about")}
                  className="text-gray-400 hover:text-white"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("services")}
                  className="text-gray-400 hover:text-white"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("contact")}
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Website Growth
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  SEO Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Business Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Web Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="ml-3 text-gray-400">
                  Dexterenterprises0302@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <Home size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="ml-3 text-gray-400">
                  #209-215,main st NW , Slave lake ,AB TOG 2A1
                  
                 
                </span>
              </li>
              <li className="flex items-start">
                <Users size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="ml-3 text-gray-400">+1 587-839-4791</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dexter Enterprises Ltd. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
