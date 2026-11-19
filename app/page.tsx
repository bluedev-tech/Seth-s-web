"use client";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import {
  EnvelopeIcon,
  TiktokLogoIcon,
  WhatsappLogoIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import bgImage from "../public/bgImage.jpg";
import founderImage from "../public/Seth.jpeg";
import one from "../public/Trades/one.jpeg";
import two from "../public/Trades/two.jpeg";
import three from "../public/Trades/three.jpeg";
import four from "../public/Trades/four.jpeg";
import five from "../public/Trades/five.jpeg";
import six from "../public/Trades/six.jpeg";
import seven from "../public/Trades/seven.jpeg";
import "@/app/home.css";
export default function Home() {
  const trades = [
    {
      id: 1,
      image: one,
      description: "USD/JPY trade with a 50 pip profit",
    },
    {
      id: 2,
      image: two,
      description: "EUR/USD trade with a 30 pip profit",
    },
    {
      id: 3,
      image: three,
      description: "GBP/USD trade with a 40 pip profit",
    },
    {
      id: 4,
      image: four,
      description: "AUD/USD trade with a 25 pip profit",
    },
    {
      id: 5,
      image: five,
      description: "USD/CAD trade with a 35 pip profit",
    },
    {
      id: 6,
      image: six,
      description: "NZD/USD trade with a 20 pip profit",
    },
    {
      id: 7,
      image: seven,
      description: "USD/CHF trade with a 45 pip profit",
    },
  ];

  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    let scrollEndTimer: ReturnType<typeof setTimeout> | undefined;

    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollEndTimer) clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(() => setIsScrolling(false), 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (scrollEndTimer) clearTimeout(scrollEndTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="inset-0 z-10"
      style={{ position: "relative", width: "100%" }}
    >
      <Image
        src={bgImage}
        alt="Background"
        sizes="100vw"
        fill
        priority
        style={{ zIndex: -1, position: "absolute", top: 0, left: 0 }}
        className="object-cover object-center"
      />
      <div
        className="navbar flex h-15 items-center px-10"
        style={{
          transform: isScrolling ? "translateY(-100%)" : "translateY(0)",
          opacity: isScrolling ? 0 : 1,
          pointerEvents: "auto",
          transition: "transform 300ms ease, opacity 300ms ease",
        }}
      >
        <div className="left flex-1">
          <div className="logo">SETH'S FX</div>
        </div>
        <nav
          className="right max-md:flex md:hidden cursor-pointer"
          aria-label="Main navigation"
        >
          {isOpen ? (
            <button type="button">
              <XIcon size={24} onClick={() => setIsOpen(false)} />
            </button>
          ) : (
            <button type="button" className="p-2">
              <ListIcon size={24} onClick={() => setIsOpen(true)} />
            </button>
          )}
        </nav>
        <nav className="right max-md:hidden" aria-label="Main navigation">
          <div className="flex" style={{ gap: 10 }}>
            <a href="#overview" className="ln">
              Overview
            </a>
            <a href="#trades" className="ln">
              Trades
            </a>
            <a href="#contact" className="ln">
              Contact Us
            </a>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="midMenu md:hidden w-full flex flex-col gap-5 p-5 rounded-lg fixed z-1000">
          {isOpen && (
            <ul className="flex flex-col">
              <li className="mln">
                <a href="#overview">Overview</a>
              </li>
              <li className="mln">
                <a href="#trades">Trades</a>
              </li>
              <li className="mln">
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          )}
        </div>
      )}
      <div
        className="body"
        style={{
          position: "relative",
          paddingTop: "80px",
        }}
      >
        <div className="container flex flex-col">
          <div className="header" id="overview">
            <h1 className="platName max-md:text-xl md:text-4xl">
              LEARN TO TRADE WITH SETH DENNIS
            </h1>
          </div>
          <div
            className="founder flex max-md:flex-col max-md:justify-center max-md:align-center"
            style={{ marginBottom: 100 }}
          >
            <div
              className="founderImage justify-center align-center"
              style={{ flex: 1, display: "flex", justifyContent: "center" }}
            >
              <Image
                priority
                src={founderImage}
                alt="Founder"
                width={300}
                height={300}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div
              className="founderText"
              style={{ flex: 1, display: "flex", justifyContent: "center" }}
            >
              <div
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.5",
                  textAlign: "justify",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                ​Seth Dennis is a professional forex trader and technical
                analyst specializing in institutional price delivery models,
                including Smart Money Concepts (SMC), market structure shifts,
                and liquidity dynamics. ​Beginning his trading journey in 2023,
                Seth adopted a rigorous, highly technical approach to the
                financial markets rather than relying on lagging retail
                indicators. By focusing on market structure, order blocks, fair
                value gaps (FVG), liquidity sweeps, and change of character
                (CHoCH) models, he treats trading as a discipline of precision,
                risk management, and probability. ​With a strong foundation in
                analytical problem-solving and technical execution, Seth
                specializes in trading volatile instruments like XAUUSD (Gold)
                and BTCUSD, navigating lower-timeframe price action setups with
                structured frameworks. Beyond his technical analysis, he is
                dedicated to breaking down complex institutional concepts into
                clear, actionable frameworks for traders looking to master
                modern price action.
                <a
                  href="https://t.me/tradewithsethdennis"
                  target="_blank"
                  title="Join Seth's Telegram Community"
                  rel="noopener noreferrer"
                  className="ln"
                >
                  <button
                    className="tele bg-blue-400 h-15 flex items-center justify-center"
                    style={{
                      cursor: "pointer",
                      borderRadius: "25px",
                      padding: 20,
                      marginTop: 20,
                    }}
                  >
                    JOIN OUR TELEGRAM COMMUNITY
                  </button>
                </a>
              </div>
            </div>
          </div>
          <h3 className="text-center max-md:text-xl md:text-4xl" id="trades">
            CHECK OUT SOME OF OUR TRADES
          </h3>
          <div className="trades flex flex-wrap gap-5 w-auto h-auto px-5 py-5 items-center justify-center">
            {trades.map((item) => (
              <div key={item.id} className=" pack bg-mist-900 w-100 px-5 py-3">
                <div className="w-90 h-50 relative">
                  <Image
                    className="tPic"
                    src={item.image}
                    alt="tradeImage"
                    loading="lazy"
                  />
                </div>
                <div className="desc">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="contactUs py-20 flex flex-col" id="contact">
          <h3 className="max-md:text-base md:text-4xl font-bold text-center">
            CONTACT US VIA OUR SOCIAL MEDIA ACCOUNTS
          </h3>
          <div className="flex gap-10 items-center justify-center mt-10 flex-wrap">
            <a
              className="sLink"
              href="mailto:sethdennis33@gmail.com?subject=Show of Interest to Learn Forex Trading&body=Hello Seth Dennis, I am interested in learning forex trading. Please provide me with more information about your courses and how I can get started."
              target="_blank"
              title="Contact us via Email"
              rel="noopener noreferrer"
            >
              <EnvelopeIcon size={24} />
              sethdennis33@gmail.com
            </a>
            <a
              className="sLink"
              href="https://www.tiktok.com/@bigmeech005"
              target="_blank"
              title="Visit our Tiktok Page"
              rel="noopener noreferrer"
            >
              <TiktokLogoIcon size={24} />
              Our Tiktok Page
            </a>
            <a
              className="sLink"
              href="https://www.instagram.com/bigmeech005"
              target="_blank"
              rel="noopener noreferrer"
              title="Contact us on Instagram"
            >
              <InstagramLogoIcon size={24} />
              Our Instagram Page
            </a>
            <a
              className="sLink"
              href="https://chat.whatsapp.com/DkdndToCiiVGHvPGx791LI?s=cl&p=a&iam=2"
              target="_blank"
              rel="noopener noreferrer"
              title="Contact us on WhatsApp"
            >
              <WhatsappLogoIcon size={24} />
              Our WhatsApp Group
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
