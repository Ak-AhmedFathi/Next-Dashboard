"use client";

import Link from "next/link"

import { GraduationCap, Users, BookOpen, Calendar, Phone, Laptop, Lightbulb, Layers } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 text-gray-800">
      {/* Hero Section */}
      <header className="relative w-full h-[100vh] flex items-center justify-center text-center">
        {/* NAV */}
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white bg-opacity-80 backdrop-blur-md shadow-lg z-20">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-blue-500">Future School</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#programs" className="px-2 text-gray-600 hover:text-blue-500 transition">Programs</a>
            <a href="#testimonials" className="px-2 text-gray-600 hover:text-blue-500 transition">Testimonials</a>
            <a href="#contact" className="px-2 text-gray-600 hover:text-blue-500 transition">Contact</a>
            <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">Login</a>
          </div>
          </nav>
       {/* Background Image */}
      <div className="absolute inset-0">
        <div
      className="w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/students-tech.png')", // put your image in public/images/students.jpg
      }}
        />
          {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 to-blue-600/70"></div>
    </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6">
          <GraduationCap className="w-16 h-16 mb-4 mx-auto text-white" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            Welcome to Future School
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl mb-6 text-white drop-shadow">
            Shaping Tomorrow, Today – Empowering Students, Teachers, and Parents.
          </p>
          <a
            href="/login"
            className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-100 transition"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Why Choose Future School Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-500">
          Why Choose Future School?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At Future School, we go beyond traditional education. Our approach combines academic excellence, technology, and real-world skills to prepare students for the challenges of tomorrow.
        </p>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 px-6 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-blue-500">
          Our Programs
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <BookOpen className="w-10 h-10 text-blue-600 mb-3 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Academic Excellence</h3>
            <p className="text-gray-600 text-sm">Building strong foundations with world-class curriculum and teaching methods.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <Laptop className="w-10 h-10 text-blue-600 mb-3 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Technology Integration</h3>
            <p className="text-gray-600 text-sm">Empowering learning with cutting-edge tools and digital platforms.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <Layers className="w-10 h-10 text-blue-600 mb-3 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Collaborative Learning</h3>
            <p className="text-gray-600 text-sm">Encouraging teamwork, problem-solving, and creativity in every classroom.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <Lightbulb className="w-10 h-10 text-blue-600 mb-3 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Leadership Development</h3>
            <p className="text-gray-600 text-sm">Nurturing confident leaders ready to shape the future with integrity and vision.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-blue-500">
          What Our Community Says
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <p className="text-gray-600 mb-4">“Future School has transformed the way my child learns. The teachers are supportive and the environment is inspiring.”</p>
            <p className="font-semibold text-blue-700">— A Parent</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <p className="text-gray-600 mb-4">“As a teacher, I feel empowered with the resources and tools provided to make lessons engaging.”</p>
            <p className="font-semibold text-blue-700">— A Teacher</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <p className="text-gray-600 mb-4">“I love how Future School helps me explore my ideas and work with classmates on exciting projects.”</p>
            <p className="font-semibold text-blue-700">— A Student</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-l-blue-400 border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-blue-700" />
                </div>
                <span className="font-work-sans font-bold text-xl text-foreground">Future School</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering students with innovative education and cutting-edge technology to prepare them for tomorrow &apots; s
                challenges.
              </p>
            </div>

            <div>
              <h3 className="font-work-sans font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#programs" className="text-muted-foreground hover:text-foreground transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#admissions" className="text-muted-foreground hover:text-foreground transition-colors">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-work-sans font-semibold text-foreground mb-4">Contact Info</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>123 Education Street</li>
                <li>Future City, FC 12345</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@futureschool.edu</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Future School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
