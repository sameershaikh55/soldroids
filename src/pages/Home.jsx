import React from "react";
import { useHooks } from "../Hooks/useHooks";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Home = () => {
	const { isOpen, OnClick } = useHooks();

	return (
		<>
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<Header ClickEvent={OnClick} isOpen={isOpen} />
			<Hero />
			<div className="body_container">
				<About />
				<br />
				<Roadmap />
				<Team />
				<Faq />
				<Footer />
			</div>
		</>
	);
};

export default Home;
