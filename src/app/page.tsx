"use client";

import { useEffect, useState } from "react";
import {
  Wrench,
  Menu,
  Zap,
  Flame,
  PhoneCall,
  Settings,
  Award,
  ClipboardCheck,
  GraduationCap,
  Check,
  ArrowRight,
  Clock,
  Star,
  Quote,
  Truck,
  MapPin,
  Navigation,
  Wallet,
  Banknote,
  Smartphone,
  MessageSquare,
  Send,
  CreditCard,
  ShieldCheck,
  User,
  Mail,
  ChevronRight,
  BatteryCharging,
  Disc,
  Activity,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [year, setYear] = useState(2024);

  // Contact form state
  const [status, setStatus] = useState<{ text: string; className: string }>({
    text: "",
    className: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());

    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll(".animate-on-scroll");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const promoItems = [
    "50% Off All Jobs",
    "Free Diagnostic With Same-Day Service",
    "20+ Years ASE-Certified Expertise",
    "No Tow Fees — We Come To You",
    "Same-Day Mobile Service Available",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    try {
      const formData = new FormData(form);
      const response = await fetch(
        "https://zgnpmogdjnnhpwewavnr.supabase.co/functions/v1/contact-form-submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            projectId: "017ef750-07e9-43e7-bec7-f63e92c7262a",
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setStatus({
          text: "Message sent successfully!",
          className: "text-sm text-green-600",
        });
        form.reset();
      } else {
        setStatus({
          text: data.error || "Failed to send message.",
          className: "text-sm text-red-600",
        });
      }
    } catch {
      setStatus({
        text: "Network error. Please try again.",
        className: "text-sm text-red-600",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      id="lp-root"
      className="flex flex-col w-full overflow-x-hidden bg-[#111827]"
    >
      {/* ===================== HEADER ===================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#111827]/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        {/* Continuous promo marquee / ticker */}
        <div className="marquee-wrap relative overflow-hidden bg-gradient-to-r from-[#dc2626] via-[#ef4444] to-[#f59e0b] border-b border-white/10">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((dup) => (
              <div
                key={dup}
                className="flex items-center shrink-0"
                aria-hidden={dup === 1}
              >
                {promoItems.map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-6 py-1.5 text-white text-xs sm:text-sm font-bold uppercase tracking-widest font-['Barlow',sans-serif]"
                  >
                    <Flame className="w-4 h-4 shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#"
            className="text-2xl font-black text-[#f9fafb] tracking-tight uppercase flex items-center gap-2 font-['Barlow',sans-serif]"
          >
            <Wrench className="w-6 h-6 text-[#dc2626]" />
            High Tech <span className="text-[#dc2626]">Auto Services</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[#f9fafb] font-medium text-sm tracking-wide font-['Inter',sans-serif]">
            <a
              href="#services"
              className="hover:text-[#f59e0b] transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-[#f59e0b] transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="hover:text-[#f59e0b] transition-colors duration-200"
            >
              Reviews
            </a>
            <a
              href="#areas-payments"
              className="hover:text-[#f59e0b] transition-colors duration-200"
            >
              Service Areas
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-[#dc2626] hover:bg-[#ef4444] text-white rounded font-bold transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] transform hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="lg:hidden text-[#f9fafb] hover:text-[#dc2626] transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#111827] border-b border-white/10 absolute w-full shadow-2xl">
            <nav className="flex flex-col px-6 py-4 gap-4 text-[#f9fafb] font-medium font-['Inter',sans-serif]">
              <a
                href="#services"
                onClick={closeMenu}
                className="block py-2 hover:text-[#f59e0b] transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="block py-2 hover:text-[#f59e0b] transition-colors"
              >
                About
              </a>
              <a
                href="#testimonials"
                onClick={closeMenu}
                className="block py-2 hover:text-[#f59e0b] transition-colors"
              >
                Reviews
              </a>
              <a
                href="#areas-payments"
                onClick={closeMenu}
                className="block py-2 hover:text-[#f59e0b] transition-colors"
              >
                Service Areas
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block py-3 mt-2 text-center bg-[#dc2626] rounded font-bold text-white shadow-lg"
              >
                Get a Quote
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ===================== HERO ===================== */}
      <section
        id="hero"
        className="relative pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-32 bg-[#111827] overflow-hidden min-h-[90vh] flex items-center"
      >
        {/* Dynamic Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-[#dc2626] rounded-full blur-[140px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-[25rem] h-[25rem] bg-[#f59e0b] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#dc2626]/10 border border-[#dc2626]/30 text-[#ef4444] font-bold text-xs sm:text-sm uppercase tracking-widest font-['Inter',sans-serif]">
                <Zap className="w-4 h-4" />
                Fast Mobile Mechanic Service
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#f9fafb] leading-[1.1] uppercase font-['Barlow',sans-serif]">
                Car Broke Down? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc2626] via-[#ef4444] to-[#f59e0b]">
                  Don&apos;t Tow It.
                </span>{" "}
                <br />
                We Come To You!
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-['Inter',sans-serif]">
                Skip the expensive shop prices and tow fees! High Tech Auto
                Services brings 20+ years of ASE-Certified expertise
                directly to your driveway. Honest pricing, fast service.
              </p>

              {/* Promo Callout Box */}
              <div className="bg-white/5 border border-[#dc2626]/40 backdrop-blur-sm rounded-xl p-5 sm:p-6 flex items-start gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)] max-w-xl">
                <div className="bg-gradient-to-br from-[#dc2626] to-[#f59e0b] p-3 rounded-lg shrink-0 shadow-lg">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[#f59e0b] font-black text-xl md:text-2xl uppercase tracking-wide font-['Barlow',sans-serif]">
                    50% Off All Jobs!
                  </h3>
                  <p className="text-[#f9fafb] font-medium mt-1 font-['Inter',sans-serif]">
                    <span className="text-[#ef4444] font-bold">
                      + FREE Diagnostic
                    </span>{" "}
                    with same-day service. Limited time offer.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#dc2626] hover:bg-[#ef4444] text-white rounded font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transform hover:-translate-y-1 font-['Inter',sans-serif]"
                >
                  <PhoneCall className="w-5 h-5" />
                  Request Service Now
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 hover:border-[#f59e0b] text-[#f9fafb] hover:text-[#f59e0b] rounded font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 font-['Inter',sans-serif]"
                >
                  <Settings className="w-5 h-5" />
                  View Our Services
                </a>
              </div>
            </div>

            {/* Hero Image / Visual */}
            <div className="lg:col-span-5 relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-[#0a0f18]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/20 to-transparent z-10"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-mechanic.png"
                alt="ASE-Certified mobile mechanic repairing a car engine directly in a customer's driveway"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Trust Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-[#111827]/80 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 shadow-xl transform transition-transform group-hover:-translate-y-2">
                <div className="bg-[#f59e0b] p-3 rounded-full shrink-0">
                  <Award className="w-6 h-6 text-[#111827]" />
                </div>
                <div>
                  <p className="text-[#f9fafb] font-black text-lg uppercase tracking-wide font-['Barlow',sans-serif]">
                    20+ Years Experience
                  </p>
                  <p className="text-sm text-gray-300 font-medium font-['Inter',sans-serif]">
                    ASE-Certified Master Technician
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section
        id="services"
        className="py-20 md:py-28 lg:py-32 bg-[#111827] text-[#f9fafb] font-['Inter',sans-serif] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dc2626] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-[#ef4444] font-bold tracking-widest uppercase text-sm mb-3">
              Our Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-['Barlow',sans-serif] mb-6">
              Full Service Auto Repair.
              <br />
              <span className="text-[#dc2626]">Without The Tow.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We bring the shop to your driveway. From basic maintenance to
              complex engine swaps, get dealer-level service at a fraction of the
              cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Service 1 */}
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl hover:border-[#dc2626] transition-all duration-300 group animate-on-scroll overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-[#0a0f18]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/service-brakes.png"
                  alt="Mobile mechanic performing brake service on car in customer driveway"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-[#dc2626]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#dc2626] transition-colors duration-300">
                  <Wrench className="text-[#dc2626] group-hover:text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-['Barlow',sans-serif] mb-3">
                  Full Service Maintenance
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Brakes, batteries, tune-ups, and fluid changes handled right
                  where your car sits. Fast and reliable.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div
              className="bg-gray-800/40 border border-gray-700/50 rounded-2xl hover:border-[#dc2626] transition-all duration-300 group animate-on-scroll overflow-hidden"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="relative h-48 overflow-hidden bg-[#0a0f18]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/service-electrical.png"
                  alt="Mechanic using OBD diagnostic scanner on vehicle electrical system"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-[#dc2626]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#dc2626] transition-colors duration-300">
                  <Zap className="text-[#dc2626] group-hover:text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-['Barlow',sans-serif] mb-3">
                  Advanced Electrical
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Complex wiring issues, alternator replacements, and computer
                  diagnostics solved with precision.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div
              className="bg-gray-800/40 border border-gray-700/50 rounded-2xl hover:border-[#dc2626] transition-all duration-300 group animate-on-scroll overflow-hidden"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative h-48 overflow-hidden bg-[#0a0f18]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/service-engine.png"
                  alt="Mobile mechanic working on car engine in residential driveway"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-[#dc2626]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#dc2626] transition-colors duration-300">
                  <Settings className="text-[#dc2626] group-hover:text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-['Barlow',sans-serif] mb-3">
                  Engine &amp; Trans Swaps
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Major mechanical overhauls done efficiently. We handle the
                  heavy lifting so you don&apos;t have to.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-800/40 border border-gray-700/50 p-8 rounded-2xl hover:border-[#dc2626] transition-all duration-300 group animate-on-scroll">
              <div className="w-14 h-14 bg-[#dc2626]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#dc2626] transition-colors duration-300">
                <ClipboardCheck className="text-[#dc2626] group-hover:text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-['Barlow',sans-serif] mb-3">
                Pre-Purchase Inspections
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Buying a used car? We&apos;ll inspect it top to bottom before
                you hand over your hard-earned cash.
              </p>
            </div>

            {/* Service 5 */}
            <div
              className="bg-gray-800/40 border border-gray-700/50 p-8 rounded-2xl hover:border-[#dc2626] transition-all duration-300 group animate-on-scroll md:col-span-2 lg:col-span-2"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-14 h-14 shrink-0 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center group-hover:bg-[#f59e0b] transition-colors duration-300">
                  <GraduationCap className="text-[#f59e0b] group-hover:text-white w-7 h-7" />
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-[#f59e0b]/20 text-[#f59e0b] rounded-full text-xs font-bold uppercase tracking-wide mb-2">
                    Unique Offering
                  </div>
                  <h3 className="text-xl font-bold font-['Barlow',sans-serif] mb-2">
                    DIY Training Available
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Want to learn how to fix it yourself? Our team provides
                    hands-on, over-the-shoulder training so you can master your
                    own vehicle&apos;s maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section
        id="about"
        className="py-20 md:py-28 lg:py-32 bg-[#1a2332] text-[#f9fafb] font-['Inter',sans-serif] border-y border-gray-800"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative animate-on-scroll">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#dc2626] to-[#ef4444] rounded-3xl opacity-20 blur-lg"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-mechanic.png"
                alt="Experienced ASE-Certified mobile mechanic repairing a car engine in a customer driveway"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[3/2] border border-gray-700"
              />

              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#111827] p-6 rounded-2xl border border-gray-700 shadow-xl flex items-center gap-4">
                <div className="bg-[#f59e0b] text-[#111827] w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl font-['Barlow',sans-serif]">
                  20+
                </div>
                <div>
                  <p className="font-bold font-['Barlow',sans-serif] text-lg">
                    Years Experience
                  </p>
                  <p className="text-sm text-gray-400">ASE-Certified Pro</p>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold font-['Barlow',sans-serif] mb-6 leading-tight">
                Skip the Expensive Shop Prices.{" "}
                <span className="text-[#dc2626]">Get Honest Work.</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Traditional auto shops charge massive markups just to cover their
                overhead. High Tech Auto Services eliminates the
                middleman, bringing 20+ years of ASE-Certified expertise directly
                to you.
              </p>

              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[#dc2626]/20 p-1 rounded-full">
                    <Check className="w-5 h-5 text-[#dc2626]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-['Barlow',sans-serif]">
                      Fast &amp; Honest Pricing
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Save hundreds compared to brick-and-mortar dealerships.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[#dc2626]/20 p-1 rounded-full">
                    <Check className="w-5 h-5 text-[#dc2626]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-['Barlow',sans-serif]">
                      Zero Towing Fees
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Car broke down? Don&apos;t tow it. We come to your location.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[#dc2626]/20 p-1 rounded-full">
                    <Check className="w-5 h-5 text-[#dc2626]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-['Barlow',sans-serif]">
                      Guaranteed Workmanship
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Done right the first time, right in front of your eyes.
                    </p>
                  </div>
                </li>
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#ef4444] text-white px-8 py-4 rounded-xl font-bold font-['Barlow',sans-serif] text-lg transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
              >
                Get a Free Quote Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROMO ===================== */}
      <section
        id="promo"
        className="py-24 md:py-32 relative bg-[#111827] text-[#f9fafb] font-['Inter',sans-serif] overflow-hidden flex items-center justify-center"
      >
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/promo-tools.png"
            alt="Professional mechanic tools and diagnostic equipment background"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-[#111827]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-[#f59e0b]/20 border border-[#f59e0b]/50 text-[#f59e0b] px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm mb-8">
            <Flame className="w-4 h-4" />
            Limited Time Offer
            <Flame className="w-4 h-4" />
          </div>

          <h2 className="text-5xl md:text-7xl font-black font-['Barlow',sans-serif] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
            50% OFF <span className="text-[#dc2626]">ALL JOBS!</span>
          </h2>

          <p className="text-2xl md:text-3xl font-medium mb-10 text-gray-200">
            ➕ <span className="text-[#f59e0b] font-bold">FREE</span> Diagnostic
            with same-day service!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-[#dc2626] hover:bg-[#ef4444] text-white px-10 py-5 rounded-xl font-bold font-['Barlow',sans-serif] text-xl transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-6 h-6" />
              Claim Offer &amp; Book Now
            </a>
            <p className="text-sm text-gray-400 mt-4 sm:mt-0 sm:ml-4 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Slots filling up fast
            </p>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section
        id="testimonials"
        className="py-20 md:py-28 lg:py-32 bg-[#1a2332] text-[#f9fafb] font-['Inter',sans-serif]"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-['Barlow',sans-serif] mb-4">
              Five-Star Mobile Service
            </h2>
            <p className="text-lg text-gray-400">
              Don&apos;t just take our word for it. See what your neighbors are
              saying.
            </p>
          </div>

          {/* Feature Image Banner */}
          <div className="relative mb-16 rounded-3xl overflow-hidden border border-gray-800 animate-on-scroll group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/testimonials-van.png"
              alt="High Tech Auto Services mobile mechanic van parked roadside while mechanic repairs customer car engine with tools"
              className="w-full h-64 md:h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-4 md:gap-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#dc2626]/20 border border-[#dc2626]/50 text-[#ef4444] font-bold text-xs sm:text-sm uppercase tracking-widest">
                  <Truck className="w-4 h-4" />
                  On-Site Repairs
                </div>
                <div className="flex items-center gap-2 text-[#f59e0b] font-bold">
                  <Star className="w-5 h-5 fill-[#f59e0b]" />
                  <span>5.0 Rated by 200+ Customers</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-4xl font-black font-['Barlow',sans-serif] text-white mt-4 uppercase leading-tight">
                We Bring The Shop{" "}
                <span className="text-[#dc2626]">To Your Driveway</span>
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Review 1 */}
            <div className="bg-[#111827] p-8 md:p-10 rounded-3xl border border-gray-800 relative animate-on-scroll">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-800 opacity-50" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]"
                  />
                ))}
              </div>
              <p className="text-xl italic text-gray-300 mb-8 leading-relaxed">
                &quot;Saved me hundreds! I got a quote from a local shop that was
                astronomical. They came out the same day, diagnosed the issue
                for free, and fixed it for half the price. Truly honest
                work.&quot;
              </p>
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/review-marcus.png"
                  alt="Customer Marcus T smiling"
                  className="w-14 h-14 rounded-full border-2 border-[#dc2626] object-cover"
                />
                <div>
                  <h4 className="font-bold font-['Barlow',sans-serif] text-lg">
                    Marcus T.
                  </h4>
                  <p className="text-sm text-[#f59e0b]">Fort Lauderdale, FL</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div
              className="bg-[#111827] p-8 md:p-10 rounded-3xl border border-gray-800 relative animate-on-scroll"
              style={{ transitionDelay: "100ms" }}
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-800 opacity-50" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]"
                  />
                ))}
              </div>
              <p className="text-xl italic text-gray-300 mb-8 leading-relaxed">
                &quot;The team fixed my alternator right in my driveway after the
                car died. I didn&apos;t have to pay for a tow truck, and they were
                completely transparent about the parts and labor. Highly
                recommend!&quot;
              </p>
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/review-elena.png"
                  alt="Customer Elena R smiling"
                  className="w-14 h-14 rounded-full border-2 border-[#dc2626] object-cover"
                />
                <div>
                  <h4 className="font-bold font-['Barlow',sans-serif] text-lg">
                    Elena R.
                  </h4>
                  <p className="text-sm text-[#f59e0b]">Hollywood, FL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICE AREAS & PAYMENTS ===================== */}
      <section
        id="areas-payments"
        className="py-20 md:py-28 lg:py-32 bg-[#111827] text-[#f9fafb] font-['Inter',sans-serif] border-t border-gray-800"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Service Areas */}
            <div className="bg-[#1a2332] p-8 md:p-12 rounded-3xl border border-gray-800 animate-on-scroll">
              <div className="w-16 h-16 bg-[#dc2626]/10 rounded-2xl flex items-center justify-center mb-8">
                <MapPin className="text-[#dc2626] w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold font-['Barlow',sans-serif] mb-6">
                Where We Service
              </h3>
              <p className="text-gray-400 mb-8">
                We bring the garage to you. If you&apos;re in our service zone,
                we&apos;ll be there fast.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "North Miami",
                  "Hallandale",
                  "Hollywood",
                  "Ft Lauderdale",
                  "Pompano",
                  "Tamarac",
                ].map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 bg-[#111827] p-4 rounded-xl border border-gray-800"
                  >
                    <Navigation className="w-4 h-4 text-[#dc2626]" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div
              className="bg-[#1a2332] p-8 md:p-12 rounded-3xl border border-gray-800 animate-on-scroll"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-2xl flex items-center justify-center mb-8">
                <Wallet className="text-[#f59e0b] w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold font-['Barlow',sans-serif] mb-6">
                Easy Payments
              </h3>
              <p className="text-gray-400 mb-8">
                We make it simple to pay once the job is done right. No hidden
                fees.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#111827] p-4 rounded-xl border border-gray-800">
                  <Banknote className="w-5 h-5 text-[#f59e0b]" />
                  <span className="font-medium">Cash</span>
                </div>
                <div className="flex items-center gap-3 bg-[#111827] p-4 rounded-xl border border-gray-800">
                  <Smartphone className="w-5 h-5 text-[#f59e0b]" />
                  <span className="font-medium">Zelle</span>
                </div>
                <div className="flex items-center gap-3 bg-[#111827] p-4 rounded-xl border border-gray-800">
                  <Send className="w-5 h-5 text-[#f59e0b]" />
                  <span className="font-medium">Venmo</span>
                </div>
                <div className="flex items-center gap-3 bg-[#111827] p-4 rounded-xl border border-gray-800">
                  <CreditCard className="w-5 h-5 text-[#f59e0b]" />
                  <span className="font-medium">Credit/Debit</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#dc2626]/10 border border-[#dc2626]/30 rounded-xl flex items-start gap-4">
                <ShieldCheck className="text-[#dc2626] w-6 h-6 shrink-0 mt-1" />
                <p className="text-sm text-gray-300">
                  All transactions are secure. You only pay when the diagnostic
                  is complete and you approve the repair plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section
        id="contact"
        className="relative py-24 lg:py-32 bg-[#111827] overflow-hidden text-[#f9fafb] font-['Inter']"
      >
        {/* Massive Blurred Accent Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div
            className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#dc2626]/20 blur-[120px] animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute -bottom-[20%] -left-[10%] w-[700px] h-[700px] rounded-full bg-[#f59e0b]/10 blur-[150px] animate-pulse"
            style={{ animationDuration: "10s" }}
          ></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="animate-on-scroll visible">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <Zap className="w-5 h-5 text-[#f59e0b]" />
                <span className="text-sm font-semibold tracking-wide uppercase text-[#f59e0b]">
                  Immediate Roadside Assistance
                </span>
              </div>

              <h2 className="font-['Barlow'] text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] uppercase">
                Skip the tow.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc2626] to-[#ef4444]">
                  We come to you.
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
                Whether you&apos;re stuck in your driveway or stranded in a
                parking lot, High Tech Auto Services brings 20+ years of ASE-Certified expertise
                directly to your location. Get your <strong>FREE Diagnostic</strong>{" "}
                with any repair today.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#dc2626]/10 flex items-center justify-center flex-shrink-0 border border-[#dc2626]/20">
                    <PhoneCall className="w-6 h-6 text-[#dc2626]" />
                  </div>
                  <div>
                    <h4 className="font-['Barlow'] font-bold text-xl mb-1">
                      Call for Immediate Dispatch
                    </h4>
                    <a
                      href="tel:+19547956070"
                      className="text-2xl font-extrabold text-white hover:text-[#dc2626] transition-colors font-['Barlow'] block"
                    >
                      (954) 795-6070
                    </a>
                    <p className="text-gray-400">
                      Available for same-day service across South Florida.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#dc2626]/10 flex items-center justify-center flex-shrink-0 border border-[#dc2626]/20">
                    <MessageSquare className="w-6 h-6 text-[#dc2626]" />
                  </div>
                  <div>
                    <h4 className="font-['Barlow'] font-bold text-xl mb-1">
                      Text Us for a Quick Reply
                    </h4>
                    <a
                      href="sms:+19547956070"
                      className="text-2xl font-extrabold text-white hover:text-[#dc2626] transition-colors font-['Barlow'] block"
                    >
                      (954) 795-6070
                    </a>
                    <p className="text-gray-400">
                      Prefer texting? Send us your issue and we&apos;ll respond fast.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0 border border-[#f59e0b]/20">
                    <MapPin className="w-6 h-6 text-[#f59e0b]" />
                  </div>
                  <div>
                    <h4 className="font-['Barlow'] font-bold text-xl mb-1">
                      Service Areas
                    </h4>
                    <p className="text-gray-400">
                      North Miami, Hallandale, Hollywood, Fort Lauderdale,
                      Pompano &amp; Tamarac.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="relative animate-on-scroll visible">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#dc2626] to-[#f59e0b] rounded-3xl blur opacity-20"></div>

              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl p-8 md:p-10">
                <h3 className="font-['Barlow'] text-3xl font-bold mb-2">
                  Get a Free Quote
                </h3>
                <p className="text-gray-400 mb-8 text-sm">
                  Fill out the details below and we&apos;ll hit you back with an
                  honest estimate—fast.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full pl-11 pr-4 py-4 bg-[#111827]/60 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full pl-11 pr-4 py-4 bg-[#111827]/60 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition-all duration-300"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">
                      Vehicle Issue
                    </label>
                    <div className="relative">
                      <div className="absolute top-4 left-4 pointer-events-none">
                        <Wrench className="h-5 w-5 text-gray-500" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full pl-11 pr-4 py-4 bg-[#111827]/60 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Year, Make, Model & what's going on with the car?"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-8 bg-gradient-to-r from-[#dc2626] to-[#ef4444] hover:from-[#ef4444] hover:to-[#dc2626] text-white font-['Barlow'] font-bold text-lg uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{submitting ? "Sending..." : "Send Request"}</span>
                    {!submitting && <ArrowRight className="w-5 h-5" />}
                  </button>

                  <div className="text-center mt-4">
                    <p className={status.className}>{status.text}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-[#0a0f18] text-gray-400 py-16 border-t border-white/5 font-['Inter'] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <a href="#" className="inline-flex items-center gap-2 mb-6 group">
                <div className="w-10 h-10 bg-[#dc2626] rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <span className="font-['Barlow'] text-2xl font-extrabold text-white uppercase tracking-tight">
                  High Tech <span className="text-[#dc2626]">Auto Services</span>
                </span>
              </a>
              <p className="text-sm leading-relaxed mb-6 pr-4">
                Skip the expensive shop prices. We bring 20+ years of
                ASE-Certified auto repair expertise directly to your driveway.
                Fast, honest, and reliable.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#dc2626] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#dc2626] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#dc2626] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h4 className="font-['Barlow'] text-white font-bold text-lg mb-6 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#dc2626] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" /> Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#dc2626] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" /> About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#promo"
                    className="hover:text-[#dc2626] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" /> Special Offers
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-[#dc2626] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" /> Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#dc2626] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" /> Get a Quote
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4 className="font-['Barlow'] text-white font-bold text-lg mb-6 uppercase tracking-wider">
                Top Services
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <BatteryCharging className="w-4 h-4 text-[#f59e0b]" />
                  <span>Advanced Electrical</span>
                </li>
                <li className="flex items-center gap-3">
                  <Disc className="w-4 h-4 text-[#f59e0b]" />
                  <span>Brakes &amp; Rotors</span>
                </li>
                <li className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-[#f59e0b]" />
                  <span>Engine Diagnostics</span>
                </li>
                <li className="flex items-center gap-3">
                  <Wrench className="w-4 h-4 text-[#f59e0b]" />
                  <span>Pre-Purchase Inspections</span>
                </li>
                <li className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-[#f59e0b]" />
                  <span>1-on-1 DIY Training</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="font-['Barlow'] text-white font-bold text-lg mb-6 uppercase tracking-wider">
                Contact Us
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" />
                  <span>
                    Serving North Miami, Hallandale, Hollywood, Ft. Lauderdale,
                    Pompano &amp; Tamarac
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-[#dc2626] flex-shrink-0" />
                  <a
                    href="tel:+19547956070"
                    className="font-bold text-white hover:text-[#dc2626] transition-colors"
                  >
                    (954) 795-6070
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#dc2626] flex-shrink-0" />
                  <span>Same-Day Service Available</span>
                </li>
                <li className="flex items-center gap-3 mt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-2 border-2 border-[#dc2626] text-[#dc2626] hover:bg-[#dc2626] hover:text-white rounded-lg font-bold transition-colors w-full text-center"
                  >
                    Request Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {year} High Tech Auto Services. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" /> ASE-Certified
              </span>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
