import React, { useState, useEffect } from 'react';
import { SuitIcon, DressIcon, ShirtIcon, ScissorsIcon, StarIcon, PhoneIcon, MapPinIcon, MenuIcon, XIcon, ChevronLeftIcon, ChevronRightIcon, WhatsAppIcon } from './components/icons';

const Header: React.FC<{ whatsappUrl: string }> = ({ whatsappUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-100/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="font-display text-2xl font-bold" style={{color: 'var(--primary-color)'}}>Hendro Collections</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#layanan" onClick={(e) => scrollToSection(e, 'layanan')} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Layanan</a>
              <a href="#galeri" onClick={(e) => scrollToSection(e, 'galeri')} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Galeri</a>
              <a href="#tentang" onClick={(e) => scrollToSection(e, 'tentang')} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Tentang</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="neumo-button text-sm font-semibold px-5 py-2" style={{color: 'var(--primary-color)'}}>Hubungi Kami</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-gray-900 focus:outline-none p-2 neumo-button">
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden neumo-card m-2">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#layanan" onClick={(e) => scrollToSection(e, 'layanan')} className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Layanan</a>
            <a href="#galeri" onClick={(e) => scrollToSection(e, 'galeri')} className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Galeri</a>
            <a href="#tentang" onClick={(e) => scrollToSection(e, 'tentang')} className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Tentang</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block text-white text-center font-semibold px-3 py-2 mt-2 rounded-md text-base" style={{backgroundColor: 'var(--primary-color)'}}>Hubungi Kami</a>
          </div>
        </div>
      )}
    </header>
  );
};

const FloatingWhatsApp: React.FC<{ url: string }> = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 p-4 rounded-full neumo-button text-green-500 hover:text-green-600"
    aria-label="Hubungi via WhatsApp"
  >
    <WhatsAppIcon className="h-8 w-8" />
  </a>
);

const App: React.FC = () => {
  const whatsappUrl = 'https://wa.me/6281226018467?text=Halo,%20saya%20tertarik%20untuk%20menggunakan%20jasa%20Hendro%20Collections.';

  const services = [
    { icon: <SuitIcon />, title: "Jas & Setelan Pria", description: "Jahitan jas presisi untuk acara formal, bisnis, dan pernikahan dengan bahan berkualitas." },
    { icon: <DressIcon />, title: "Gaun & Kebaya", description: "Desain dan jahitan gaun pesta, kebaya modern, dan busana wanita yang elegan dan anggun." },
    { icon: <ShirtIcon />, title: "Seragam Kantor & Sekolah", description: "Pembuatan seragam kantor, sekolah, atau komunitas dengan desain custom, rapi, dan nyaman." },
    { icon: <ScissorsIcon />, title: "Permak & Modifikasi", description: "Ubah ukuran dan model pakaian Anda agar pas sempurna dengan hasil permak kualitas butik." },
  ];

  // Untuk mengupdate galeri, cukup tambahkan atau ubah data di dalam array di bawah ini.
  // 'src' adalah link gambar, dan 'title' adalah deskripsi singkatnya.
  const galleryImages = [
    { src: "https://picsum.photos/seed/jaspria/600/800", title: "Setelan Jas Pria" },
    { src: "https://picsum.photos/seed/kebayapengantin/600/800", title: "Kebaya Pengantin" },
    { src: "https://picsum.photos/seed/seragamkantor/800/600", title: "Seragam Kantor" },
    { src: "https://picsum.photos/seed/gaunpesta/600/800", title: "Gaun Pesta" },
    { src: "https://picsum.photos/seed/seragamsekolah/800/600", title: "Seragam Sekolah" },
    { src: "https://picsum.photos/seed/batikmodern/600/800", title: "Batik Modern" },
  ];

  const testimonials = [
    { name: "Budi Santoso", role: "Pengusaha", quote: "Jas buatan Hendro Collections benar-benar pas di badan. Kualitas jahitannya tidak diragukan lagi, sangat rapi dan detail. Sangat direkomendasikan!", image: "https://picsum.photos/seed/person1/100/100" },
    { name: "Anisa Putri", role: "Pegawai BUMN", quote: "Saya membuat seragam kantor di sini dan hasilnya memuaskan. Bahannya adem, modelnya modern, dan yang paling penting, selesai tepat waktu.", image: "https://picsum.photos/seed/person2/100/100" },
    { name: "Rina & Adi", role: "Pasangan Pengantin", quote: "Terima kasih Hendro Collections sudah membuat gaun dan jas pernikahan kami. Semuanya sempurna dan membuat hari spesial kami semakin berkesan.", image: "https://picsum.photos/seed/person3/100/100" },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  
  const activeTestimonial = testimonials[currentTestimonial];

  return (
    <div className="bg-slate-100 text-gray-700">
      <Header whatsappUrl={whatsappUrl} />
      <FloatingWhatsApp url={whatsappUrl} />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/tailorshop/1920/1080')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 p-6 text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-4 animate-fade-in" style={{color: 'white'}}>Keahlian Menjahit Selama Puluhan Tahun</h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in">Mewujudkan Pakaian Impian Anda dengan Kualitas dan Presisi Terbaik di Cilacap.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="neumo-button bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Konsultasi via WhatsApp
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="layanan" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-display font-bold sm:text-4xl">Layanan Profesional Kami</h2>
              <p className="mt-4 text-lg text-gray-600">Dari setelan formal hingga permak, kami hadir untuk Anda.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div key={index} className="p-8 neumo-card text-center">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full neumo-inset mx-auto mb-6" style={{color: 'var(--primary-color)'}}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-base text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="tentang" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-display font-bold sm:text-4xl">Warisan Kualitas Sejak Dulu</h2>
              <p className="mt-4 text-lg text-gray-600">
                Hendro Collections bukan sekadar penjahit, melainkan perwujudan dedikasi dan seni yang diwariskan dari generasi ke generasi. Kami berkomitmen menjaga standar kualitas tertinggi.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Kami memadukan teknik tradisional yang presisi dengan sentuhan modern untuk menghasilkan busana yang tidak hanya pas di badan, tapi juga merefleksikan kepribadian Anda.
              </p>
            </div>
            <div className="order-1 md:order-2 neumo-card p-2">
              <img src="https://picsum.photos/seed/craft/800/600" alt="Penjahit sedang bekerja" className="rounded-xl w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeri" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold sm:text-4xl">Galeri Karya Kami</h2>
              <p className="mt-4 text-lg text-gray-600">Beberapa contoh hasil karya yang telah kami selesaikan.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {galleryImages.map((item, index) => (
                <div key={index} className="neumo-card p-2 group overflow-hidden">
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500" />
                   <p className="text-center font-semibold mt-4">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold sm:text-4xl">Apa Kata Pelanggan Kami</h2>
              <p className="mt-4 text-lg text-gray-600">Kepuasan Anda adalah prioritas utama kami.</p>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button onClick={prevTestimonial} className="p-3 neumo-button rounded-full -ml-4 md:-ml-12" aria-label="Previous testimonial" style={{color: 'var(--primary-color)'}}>
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
              </div>
              
              <div key={currentTestimonial} className="p-8 neumo-card transition-opacity duration-500 ease-in-out animate-fade-in">
                <div className="flex items-center mb-6">
                  <img className="h-16 w-16 rounded-full object-cover mr-4" src={activeTestimonial.image} alt={activeTestimonial.name} />
                  <div>
                    <p className="font-bold">{activeTestimonial.name}</p>
                    <p className="text-sm text-gray-600">{activeTestimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="text-yellow-400" />)}
                </div>
                <blockquote className="text-gray-600 italic">"{activeTestimonial.quote}"</blockquote>
              </div>
              
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button onClick={nextTestimonial} className="p-3 neumo-button rounded-full -mr-4 md:-mr-12" aria-label="Next testimonial" style={{color: 'var(--primary-color)'}}>
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentTestimonial === index ? 'bg-amber-800' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontak" className="py-20 bg-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold sm:text-4xl">Hubungi Kami</h2>
              <p className="mt-4 text-lg text-gray-600">
                Siap untuk memiliki pakaian yang dibuat khusus untuk Anda? Kunjungi kami atau hubungi untuk konsultasi gratis.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="neumo-inset p-3 rounded-full mr-4 flex-shrink-0" style={{color: 'var(--primary-color)'}}><MapPinIcon className="h-6 w-6" /></div>
                  <p className="pt-2">Jl. Ganggeng Barat, Bendungan, Mertasinga, Kec. Cilacap Utara, Kabupaten Cilacap, Jawa Tengah 53232</p>
                </div>
                <div className="flex items-center">
                   <div className="neumo-inset p-3 rounded-full mr-4 flex-shrink-0" style={{color: 'var(--primary-color)'}}><PhoneIcon className="h-6 w-6" /></div>
                  <p>0812-2601-8467</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="tel:081226018467" className="w-full sm:w-auto text-center neumo-button font-bold py-3 px-6 rounded-full" style={{color: 'var(--primary-color)'}}>
                  Telepon Sekarang
                </a>
                <a href="https://www.google.com/maps/place/Hendro+Collections/data=!4m2!3m1!1s0x0:0x1d97bf6499054fd6?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center neumo-button font-bold py-3 px-6 rounded-full" style={{color: 'var(--primary-color)'}}>
                  Lihat Peta
                </a>
              </div>
            </div>
            <div className="w-full h-80 md:h-full neumo-inset p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15810.150495370335!2d109.022359!3d-7.697529!3m2!1i1024!i768!4f13.1!3m3!1m2!1s0x2e6512cc7351659b%3A0x1d97bf6499054fd6!2sHendro%20Collections!5e0!3m2!1sen!2sid!4v1689234567890!5m2!1sen!2sid"
                width="100%"
                height="100%"
                className="rounded-xl"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Hendro Collections"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hendro Collections. All Rights Reserved.</p>
          <p className="text-sm text-gray-400 mt-1">Dibuat dengan ❤️ di Cilacap</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
