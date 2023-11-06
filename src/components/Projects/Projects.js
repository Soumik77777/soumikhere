import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import alphaCen from "../../Assets/Projects/alpha_centauri.png";
import BHL from "../../Assets/Projects/bhl.png";
import cee from "../../Assets/Projects/cee.png";
import ceres from "../../Assets/Projects/ceres.png";
import CMB from "../../Assets/Projects/cmb.png";
import ensembleRF from "../../Assets/Projects/ensemble_rf.png";
import fault from "../../Assets/Projects/fault.png";
import mlAtmo from "../../Assets/Projects/ml_atmo.png";
import Venus from "../../Assets/Projects/venus.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        {/*
        <p style={{ color: "white" }}>
          Here are few projects I've worked on recently.
        </p>
        */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              header="Astrophysics, Stellar Evolution"
              imgPath={cee}
              title="Common Envelope Evolution on the Asymptotic Giant Branch: Towards Building a Simple Model"
              subtitle="M.Sc. Dissertation Project, 2022-Now"
              description="Common Envelope (CE) is a significant yet poorly understood process in the evolution of binary star systems. Observing CE directly is practically impossible due to its short duration, and simulating it computationally poses challenges due to computational demands and the diverse nature of binary systems undergoing CE. This research focuses on analyzing a simulated binary system, with an Asymptotic Giant Branch (AGB) star as the primary core and a companion star of equal mass. The simulation extends for approximately 40 orbital revolutions, although a stationary orbit is not achieved. The study investigates the drag force exerted by gas particles on the secondary mass and compares it to previous simulation-based works. Additionally, the torque applied to both stars by the gas medium is calculated and analyzed. Furthermore, the research evaluates the torque exerted by a certain percentage of gas and determines the amount of gas required to achieve a comparable torque to the total torque. The study then aims to model the torque exerted on the stars by treating the bulk of gas inside the equidensity surface as a homogeneous and prolate ellipsoidal body. By parameterizing the ellipsoid and obtaining the semi-axes (A, B, C) and the lag angle between the binary system axis and the major axis of the ellipsoid ($\Delta \phi$), the torque applied to both stars within the bulk of gas is calculated from the potential energy inside the fitted ellipsoid. The calculated torque is found to be consistent with the torque calculated from the drag force. Moreover, an expression for the binary separation is developed and successfully modeled within the timescale of evolution."
              
              islink = {true}
              linktext= "M.Sc. Dissertation"
              link= "https://drive.google.com/file/d/15JPmTKjMHtcsx8o5kLTbEWiae_Y7AgbY/view?usp=sharing"

              islink2={false}
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              header="Planetary Science"
              imgPath={ceres}
              title="Pre-processing and Analysis of hyper-spectral images of Asteroid Ceres acquired by the NASA Dawn/VIR"
              subtitle="Semester Project, 2021-2022"

              description="The spectral signal data of a planetary body is a combination of signals resulting from both surface scattering and thermal emission. When examining the Visible and Infrared Spectrometer (VIR) data from NASA's Dawn mission for asteroid Ceres, it's observed that the thermal component significantly influences the reflectance spectrum in the longer near-infrared wavelengths. To isolate the surface scattering from the thermal component, various factors need to be taken into account, including radiometric calibration, correction of artifacts, and the determination of both emissivity and local surface temperature. A thermal correction model based on Clark's method of linear interpolation has been developed. The determination of emissivity at each pixel involves applying Kirchhoff's law to non-absorption wavelength regions spanning approximately 1.7 μm to 2.49 μm. Surface temperature is then determined by fitting the difference between the thermally uncorrected data and the projection of the non-absorption region toward longer wavelengths. Subsequently, each spectrum is corrected by subtracting an equivalent blackbody emission curve with specified emissivity and temperature. After applying thermal correction to the hyperspectral data, photometric correction is carried out using the Hapke's disk-resolved radiative transfer model to eliminate contributions resulting from in-flight observations of the surface in different viewing geometries. In the initial assessment of its photometric properties, Hapke's disk-resolved model is used, which includes parameters such as single-scattering albedo (ω), a single-term Henyey-Greenstein (HG1) phase function, multiple scattering with the Chandrasekhar function, and the shadow hiding opposition effect (SHOE)"

              islink={true}
              link="https://drive.google.com/file/d/1AZq2QUGHLe27vQVAitS7toUONRsDfZ6D/view?usp=drive_link"
              linktext="Report"

              islink2={true}
              linktext2="IPSC, 2022"
              link2 = "https://drive.google.com/file/d/1s4ojwrDV6fdNUkuWJcc8mlPDqreebLKv/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              header="Atmospheric Science, Machine Learning"
              imgPath={mlAtmo}
              title="Retrieving Pressure-Temperature and Water Vapour Profiles in Earth’s Atmosphere from INSAT 3DR Data"
              subtitle="Course Assignment, 2023"

              description="Current methods of retrieving atmospheric profiles using satellite data involves  certain physical assumptions subjected to initial conditions and boundary. In our project, we want to use machine learning to model the relation between brightness temperature (BT), which can be directly obtained from real time satellite data, with actual pressure-temperature (PT) and water vapor (wv) profiles. We used 25000 different PT and WV profiles from ECMWF data library and corresponding BT arrays along with latitude and longitude as two other parameters. We found out that the models based on Random Forest Regressor and Multilayer Perceptron (MLP), a supervised neural network based model, works best for our data. After tuning the hyperparameters, Random Forest reaches accuracies of $97.24\%$ and $82.05\%$ respectively for PT and WV profiles, when trained separately. However, it also tends to overfit the data. In case of MLP, the accuracies for predicting PT and WV profiles are respectively $92.2\%$ and $81.7\%$, with much less of a risk of overfitting."

              islink = {true}
              link="https://drive.google.com/file/d/1k7-tIxmLcxW-yFxoFOxcUvQM2uc7TRZY/view?usp=drive_link"
              linktext="Report"

              islink2={false}
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              header="Plantary science"
              imgPath={Venus}
              title="Surface Properties of Maxwell Montes region of Venus using Arecibo Dual-Polarization Radar Data"
              subtitle="Summer Internship, 2022"

              description="We analyse S-band radar data of Venusian Surface obtained by ground based Arecibo Observatory to interpret the interrelation of radar-echoes in two orthogonal polarization states. We focus our area of interest to Maxwell Montes, the highest and steepest mountain range of Venus, which is also associated with possibilities of finding a past water-rich environment. We compare the $\sigma_{OC}$ - $\sigma_{SC}$ relation with different parts of Maxwell and then with other highlands, impact meltflows, radar-bright craters and associated radar-dark parabolas. An analysis of $\sigma_{OC}$ - $\sigma_{SC}$ trends suggest a greater surface rock population and lower effective electric permittivity in northern and southern radar-bright parts of Maxwell. Further we use the data from Magellan mission (1990-1994) for surface emissivity and planetary radius to find a general relation between the two and Circular Polarization Ratio."

              islink = {true}
              link="https://drive.google.com/file/d/1dyikUe0zmtW8LnqGRJ1YR6_S4eWPXk9H/view?usp=drive_link"
              linktext="Report"

              islink2={true}
              linktext2= "VEXAG, 2022"
              link2= "https://ui.adsabs.harvard.edu/abs/2022LPICo2688.8014B/abstract"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              header="Machine Learning, Ensemble Learning"
              imgPath={ensembleRF}
              title="Ensemble Learning: Bagging and Boosting"
              subtitle="Reading Project, 2023"

              description="In machine learning, ensemble learning methods are techniques used to combine multiple learning algorithms to obtain better predictive performance than could be obtained from any of the constituent learning algorithms alone. It works on the hypothesis that certain models do well in one aspect of the data, while others do well in modeling another. The idea is to leverage the strengths of different models and reduce their individual weaknesses. There are different types of ensemble learning, each with its own approach to combining models. The most common types are bagging, boosting, and stacking. In bagging, multiple models are trained on different subsets of the training data, which reduces the variance by averaging the predictions of the individual models. Boosting, on the other hand, focuses on reducing bias by sequentially training models on misclassified instances."

              islink = {true}
              link="https://www.niser.ac.in/~smishra/teach/cs460/23cs460/lectures/lec20.pdf"
              linktext="Slides"

              islink2={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              header="Astrophysics, Stellar Accretion"
              imgPath={BHL}
              title="Bondi-Hoyle-Lyttleton accretion onto and dynamical friction drag exerted on a moving body"
              subtitle="Reading Project, 2022"

              description="Accretion of gaseous matter onto a moving body is a phenomenon of huge importance in stellar astronomy. It is a key feature in both formation and evolution of celestial bodies. The rate, at which a point mass moving through a uniform gas cloud accretes mass, was first studied and calculated by F. Hoyle and R. A. Lyttleton (1939, 1940). The problem is later investigated by H. Bondi and F. Hoyle (1944) and H. Bondi (1951) and the accretion model has been named after all three of them. As our knowledge in the field of stellar evolution expanded with time, Bondi-Hoyle-Lyttleton (BHL) accretion model has been adapted and incorporated for a vast number of complex systems. In the original works of Bondi, Hoyle and Lyttleton, a star, taken as a point mass, moves through a gas cloud, uniform and free of self-gravity, and attracts a bulk of mass to concentrate behind it. Some of the gas then can be accreted to the point mass. However, this calculation doesn't account for the gravitational force exerted by the bulk on the point mass in a direction opposite to its motion. This force, namely 'drag force', was first considered by Chandrasekhar (1943) and studied in many other literatures in later times."

              islink = {true}
              link="https://soumik77777.github.io/projects/P463_reading_project_BHL_accretion/main.html"
              linktext="Website"

              islink2={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              header="Cosmology"
              imgPath={CMB}
              title="Hubble Space Telescope Project and determination of Hubble parameter"
              subtitle="Reading Project, 2021"

              description="Named after astronomer Edwin Hubble, the Hubble Space Telescope is a large, space-based observatory, launched by the space shuttle Discovery in 1990. Over the course of five astronaut servicing missions, cutting-edge scientific instruments have been added to the telescope which have grown Hubble’s capabilities immensely in its over 30 years of operation. The HST’s discoveries have revolutionized astronomy. Observations of Cepheid variables in nearby galaxies allowed the first accurate determination of Hubble’s constant, which is the rate of the universe’s expansion. The HST photographed young stars with disks that will eventually become planetary systems. The Hubble Deep Field, a photograph of about 1,500 galaxies, revealed galactic evolution over nearly the entire history of the universe. Within the solar system, the HST was also used to discover Hydra and Nix, two moons of the dwarf planet Pluto. Hubble has made more than 1.4 million observations over the course of its lifetime. Over 18,000 peer-reviewed science papers have been published on its discoveries, and every current astronomy textbook includes contributions from the observatory."

              islink = {true}
              link="https://drive.google.com/file/d/110GlIGv7b6jmuUq-AbgW82ncNEUfO_mo/view?usp=drive_link"
              linktext="Report"

              islink2={true}
              link2="https://drive.google.com/file/d/1hG7oj0Un9eQq0JNkNisAfOj1s0U2zoly/view?usp=drive_link"
              linktext2="Slides"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              header="Seismology, Numerical Physics"
              imgPath={fault}
              title="Solving a system of fluid-induced fault slip"
              subtitle="Course Assignment Project, 2022"

              description="The action of injecting fluid into the subsurface level of Earth is often followed by a number of earthquake events in the area. The fluid goes to the subsurface level and starts to move in radially outward direction in a region where there is already a damage zone in the rock. The host rock has a low permeability and high elastic modulus compared to the fault damage zone. The pore pressure behaves as a radial function, decreasing as we move away from the center of the borehole but increasing over time. This pore-pressure influence has the effect of decreasing the normal stress. The concept of normal stress is essential as it impacts the frictional resistance to sliding. This resistance is a product of two factors: the frictional coefficient and normal stress. Additionally, there's a background shear traction that comes into play at the boundary between the damage zone and the host rock. This traction facilitates the growth of a rupture shape that's elliptical in nature and follows the major axis, aligning with the slip direction. We solve the force balance equation with Gauss-Chebyshev quadrature of Type II."

              islink = {true}
              link="https://drive.google.com/file/d/1RL3p16f1zgA2jHoEhz3E-9ylbjO4vVY-/view?usp=drive_link"
              linktext="Report"

              islink2={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              header="Astrophysics, Celestial Mechanics"
              imgPath={alphaCen}
              title="Study of gravity bound 3-body system using orbital dynamics and intensity interferometry"
              subtitle="Summer Internship, 2019"

              description="Possible exoplanets orbiting Alpha Centauri A & B (a Cen A, a Cen B) are of considerable interest of late. Both simulation type and observational close scrutiny of this star system is underway. Zhao et. al. (2017) have analysed existing data and have found that the masses of possible Earth-like exoplanets in the habitable zones (HZ) of these stars would be in the range of <50 M_earth (< 10 M_earth) for a Cen A (a Cen B). We have developed an efficient orbit integration code (in open source SciLab) using the Leap-Frog Algorithm and have employed it to simulate a 3-body system in a Cen star system (with a Cen A, a Cen B and an exoplanet (alpha Cen A a) orbiting the former star). The planet-star mass ratios (M_p/M_s) have been kept in the range of ~10-10^5 (in line with the results of Zhao et. al., 2017). The gravitational coupling produces characteristic wobbles in the orbits of both the stars. Further efforts to develop a method to facilitate experimental detection of such small wobbles in the star orbits using Earth-based telescopes has to be performed."
              
              islink={true}
              linktext= "ICFP, 2019"
              link="https://drive.google.com/file/d/1vEX01qzCnFw9InDCv3lwANbgfC7TYPYa/view?usp=drive_link"

              islink2={false}

            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
