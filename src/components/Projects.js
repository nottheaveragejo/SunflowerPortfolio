import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Apple from "./Apple"
import ScriptFlip from "./ScriptFlip"
import AOPAI from "./AOPAI"
import BuublMaps from "./BuublMaps"
import Teariffic from "./Teariffic"
import Portfolio from "./Porfolio"

	const Projects = () => {

		return(
			<div className="projectContainer">
			<div>
				<h1 className="ProjectsName">What I've done</h1>
			</div>
					  <div className="test">
							<div className="t">
							<h3>Portfolio</h3>
							<Portfolio></Portfolio>
							</div>
							<div className="t">◕ ꒳ ◕✿</div>
							<div className="t">◠‿◠✿</div>
							<div  className="t">　◕‿◕✿</div>
							<div className="t">
								<h3 className="projectName">Apple Crumble</h3>
								<Apple></Apple>
							</div>
							<div className="t">◕ ワ ◕✿</div>
							<div className="t">ᅌʊᅌ✿</div>
							<div className="t">˵◕ ɔ ◕˵✿</div>
							<div  className="t">ꈍ ˬ ꈍ✿</div>
							<div className="t">
								<h3 className="projectName">ScriptFlip</h3>
							<ScriptFlip></ScriptFlip>
							</div>
							<div className="t">
								<h3 className="projectName">AOPAI</h3>
								<AOPAI></AOPAI>
							</div>
							<div className="t">（✿ ͡◕ ᴗ◕)つ━━✫・*。</div>
							<div className="t">◕ ワ ◕✿</div>
							<div  className="t">ᅌʊᅌ✿</div>
							<div className="t">
								<h3 className="projectName">Buubl Maps</h3>
								<BuublMaps></BuublMaps>
							</div>
							<div className="t">
								<h3 className="projectName">Teariffic</h3>
								<Teariffic></Teariffic>
							</div>
						</div>
			</div>
		)
//	}
}

export default Projects
