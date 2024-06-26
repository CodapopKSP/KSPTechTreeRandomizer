const techTreeContent = `
TechTree
{
	RDNode
	{
		id = start
		title = #autoLOC_501020 //#autoLOC_501020 = Start
		description = #autoLOC_501021 //#autoLOC_501021 = The technology we started out with.
		cost = 0
		hideEmpty = False
		nodeName = node0_start
		anyToUnlock = False
		icon = RDicon_start
		pos = -2568,1199,0
		scale = 0.6
	}
	RDNode
	{
		id = basicRocketry
		title = #autoLOC_501022 //#autoLOC_501022 = Basic Rocketry
		description = #autoLOC_501023 //#autoLOC_501023 = How hard can Rocket Science be anyway?
		cost = 5
		hideEmpty = False
		nodeName = node1_basicRocketry
		anyToUnlock = False
		icon = RDicon_rocketry-basic
		pos = -2385,1257,0
		scale = 0.6
		Parent
		{
			parentID = start
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = engineering101
		title = #autoLOC_501024 //#autoLOC_501024 = Engineering 101
		description = #autoLOC_501025 //#autoLOC_501025 = How hard can Aerospace Engineering be anyway?
		cost = 5
		hideEmpty = False
		nodeName = node1_engineering101
		anyToUnlock = False
		icon = RDicon_emgineering101
		pos = -2385,1142.3,0
		scale = 0.6
		Parent
		{
			parentID = start
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = survivability
		title = #autoLOC_501026 //#autoLOC_501026 = Survivability
		description = #autoLOC_501027 //#autoLOC_501027 = The art and science of landing and walking away from it.
		cost = 15
		hideEmpty = False
		nodeName = node2_survivability
		anyToUnlock = False
		icon = RDicon_survivability
		pos = -2209,975,0
		scale = 0.6
		Parent
		{
			parentID = engineering101
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = stability
		title = #autoLOC_501028 //#autoLOC_501028 = Stability
		description = #autoLOC_501029 //#autoLOC_501029 = Reaching for the stars starts with keeping our spacecraft pointed generally in the right direction.
		cost = 18
		hideEmpty = False
		nodeName = node2_stability
		anyToUnlock = True
		icon = RDicon_stability
		pos = -2170,1201,0
		scale = 0.6
		Parent
		{
			parentID = engineering101
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = basicRocketry
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = generalRocketry
		title = #autoLOC_501030 //#autoLOC_501030 = General Rocketry
		description = #autoLOC_501031 //#autoLOC_501031 = More engines, more fuel, more ambitious ideas.
		cost = 20
		hideEmpty = False
		nodeName = node2_generalRocketry
		anyToUnlock = False
		icon = RDicon_rocketry-general
		pos = -2128,1438,0
		scale = 0.6
		Parent
		{
			parentID = basicRocketry
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = aviation
		title = #autoLOC_501032 //#autoLOC_501032 = Aviation
		description = #autoLOC_501033 //#autoLOC_501033 = The art and science of keeping heavier-than-air objects aloft for extended periods of time.
		cost = 45
		hideEmpty = False
		nodeName = node3_aviation
		anyToUnlock = True
		icon = RDicon_aerospaceTech
		pos = -1946,1201,0
		scale = 0.6
		Parent
		{
			parentID = stability
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = basicScience
		title = #autoLOC_501034 //#autoLOC_501034 = Basic Science
		description = #autoLOC_501035 //#autoLOC_501035 = We are going to ask all the big questions of the Universe... eventually. For now, we're starting with these.
		cost = 45
		hideEmpty = False
		nodeName = node3_basicScience
		anyToUnlock = False
		icon = RDicon_scienceTech
		pos = -1946,846.9,0
		scale = 0.6
		Parent
		{
			parentID = survivability
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = flightControl
		title = #autoLOC_501036 //#autoLOC_501036 = Flight Control
		description = #autoLOC_501037 //#autoLOC_501037 = Tumbling out of control may be fun, but our engineers insist there's more to rocket science than that.
		cost = 45
		hideEmpty = False
		nodeName = node3_flightControl
		anyToUnlock = True
		icon = RDicon_control-flight-advanced
		pos = -1946,1051.4,0
		scale = 0.6
		Parent
		{
			parentID = survivability
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = stability
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = advRocketry
		title = #autoLOC_501038 //#autoLOC_501038 = Advanced Rocketry
		description = #autoLOC_501039 //#autoLOC_501039 = A new step ahead in rocket technology.
		cost = 45
		hideEmpty = False
		nodeName = node3_advRocketry
		anyToUnlock = False
		icon = RDicon_rocketry-advanced
		pos = -1946,1551,0
		scale = 0.6
		Parent
		{
			parentID = generalRocketry
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = generalConstruction
		title = #autoLOC_501040 //#autoLOC_501040 = General Construction
		description = #autoLOC_501041 //#autoLOC_501041 = New equipment to help out in keeping things stable, especially useful when the size of the spacecraft defies the current bounds of sanity.
		cost = 45
		hideEmpty = False
		nodeName = node3_generalConstruction
		anyToUnlock = True
		icon = RDicon_construction-general
		pos = -1946,1355,0
		scale = 0.6
		Parent
		{
			parentID = stability
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = generalRocketry
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = propulsionSystems
		title = #autoLOC_501042 //#autoLOC_501042 = Propulsion Systems
		description = #autoLOC_501043 //#autoLOC_501043 = A positively different approach to existing trends in rocketry. These small, lightweight propulsion systems may not seem as exciting, but they might prove just as useful.
		cost = 90
		hideEmpty = False
		nodeName = node4_propulsionSystems
		anyToUnlock = False
		icon = RDicon_propulsionSystems
		pos = -1723,1551,0
		scale = 0.6
		Parent
		{
			parentID = advRocketry
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = spaceExploration
		title = #autoLOC_501044 //#autoLOC_501044 = Space Exploration
		description = #autoLOC_501045 //#autoLOC_501045 = To boldly go where no green man has gone before.
		cost = 90
		hideEmpty = False
		nodeName = node4_spaceExploration
		anyToUnlock = False
		icon = RDicon_evaTech
		pos = -1723,963.9,0
		scale = 0.6
		Parent
		{
			parentID = basicScience
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = advFlightControl
		title = #autoLOC_501046 //#autoLOC_501046 = Advanced Flight Control
		description = #autoLOC_501047 //#autoLOC_501047 = The latest advancements in keeping the correct end of the ship pointing towards where you want it to go.
		cost = 90
		hideEmpty = False
		nodeName = node4_advFlightControl
		anyToUnlock = False
		icon = RDicon_control-flight
		pos = -1723,1051.4,0
		scale = 0.6
		Parent
		{
			parentID = flightControl
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = landing
		title = #autoLOC_501048 //#autoLOC_501048 = Landing
		description = #autoLOC_501049 //#autoLOC_501049 = Our Engineers are nothing if not optimistic.
		cost = 90
		hideEmpty = False
		nodeName = node4_landing
		anyToUnlock = True
		icon = RDicon_landing
		pos = -1723,1142.4,0
		scale = 0.6
		Parent
		{
			parentID = flightControl
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = aviation
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = aerodynamicSystems
		title = #autoLOC_501050 //#autoLOC_501050 = Aerodynamics
		description = #autoLOC_501051 //#autoLOC_501051 = New breakthroughs from C7 Aerospace allow for new types of craft to be built. We're looking into hiring some of their engineers as well.
		cost = 90
		hideEmpty = False
		nodeName = node4_aerodynamicSystems
		anyToUnlock = True
		icon = RDicon_aerodynamicSystems
		pos = -1723,1243,0
		scale = 0.6
		Parent
		{
			parentID = aviation
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = generalConstruction
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = electrics
		title = #autoLOC_501052 //#autoLOC_501052 = Electrics
		description = #autoLOC_501053 //#autoLOC_501053 = We did know about electricity before inventing space flight. The big breakthrough here was combining the two.
		cost = 90
		hideEmpty = False
		nodeName = node4_electrics
		anyToUnlock = True
		icon = RDicon_electrics
		pos = -1723,711.1,0
		scale = 0.6
		Parent
		{
			parentID = basicScience
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = heavyRocketry
		title = #autoLOC_501054 //#autoLOC_501054 = Heavy Rocketry
		description = #autoLOC_501055 //#autoLOC_501055 = The next logical step for rocketry technology is to just go bigger.
		cost = 90
		hideEmpty = False
		nodeName = node4_heavyRocketry
		anyToUnlock = False
		icon = RDicon_rocketry-heavy
		pos = -1723,1635,0
		scale = 0.6
		Parent
		{
			parentID = advRocketry
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = fuelSystems
		title = #autoLOC_501056 //#autoLOC_501056 = Fuel Systems
		description = #autoLOC_501057 //#autoLOC_501057 = Advancements towards a better understanding of how fuel flows through a rocket.
		cost = 90
		hideEmpty = False
		nodeName = node4_fuelSystems
		anyToUnlock = True
		icon = RDicon_fuelSystems
		pos = -1723,1470.2,0
		scale = 0.6
		Parent
		{
			parentID = advRocketry
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = generalConstruction
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = advConstruction
		title = #autoLOC_501058 //#autoLOC_501058 = Advanced Construction
		description = #autoLOC_501059 //#autoLOC_501059 = New advances in construction make it possible to build larger than ever before.
		cost = 90
		hideEmpty = False
		nodeName = node4_advConstruction
		anyToUnlock = False
		icon = RDicon_construction-advanced
		pos = -1723,1355,0
		scale = 0.6
		Parent
		{
			parentID = generalConstruction
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = miniaturization
		title = #autoLOC_501060 //#autoLOC_501060 = Miniaturization
		description = #autoLOC_501061 //#autoLOC_501061 = These aren't your standard hobby miniature models. We've been assured they look good enough to actually fly.
		cost = 90
		hideEmpty = False
		nodeName = node4_miniaturization
		anyToUnlock = True
		icon = RDicon_miniaturization
		pos = -1723,846.9,0
		scale = 0.6
		Parent
		{
			parentID = basicScience
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = actuators
		title = #autoLOC_501062 //#autoLOC_501062 = Actuators
		description = #autoLOC_501063 //#autoLOC_501063 = Perfecting the art of making things mobile, without the explicit use of explosives. Our engineers assure us, this is actually a good thing.
		cost = 160
		hideEmpty = False
		nodeName = node5_actuators
		anyToUnlock = True
		icon = RDicon_construction-specialized
		pos = -1519,1355,0
		scale = 0.6
		Parent
		{
			parentID = advConstruction
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = commandModules
		title = #autoLOC_501064 //#autoLOC_501064 = Command Modules
		description = #autoLOC_501065 //#autoLOC_501065 = Flight control technology has evolved far enough that we feel we can honestly say pilots are in command now.
		cost = 160
		hideEmpty = False
		nodeName = node5_commandModules
		anyToUnlock = True
		icon = RDicon_commandmodules
		pos = -1520,1020.4,0
		scale = 0.6
		Parent
		{
			parentID = spaceExploration
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = advFlightControl
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = heavierRocketry
		title = #autoLOC_501066 //#autoLOC_501066 = Heavier Rocketry
		description = #autoLOC_501067 //#autoLOC_501067 = There may be an upper limit to how large a rocket can be built, but we're not there yet.
		cost = 160
		hideEmpty = False
		nodeName = node5_heavierRocketry
		anyToUnlock = True
		icon = RDicon_rocketry-heavier
		pos = -1519,1635,0
		scale = 0.6
		Parent
		{
			parentID = heavyRocketry
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = precisionEngineering
		title = #autoLOC_501068 //#autoLOC_501068 = Precision Engineering
		description = #autoLOC_501069 //#autoLOC_501069 = Precise engineering techniques allow for construction of ever smaller parts.
		cost = 160
		hideEmpty = False
		nodeName = node5_precisionEngineering
		anyToUnlock = True
		icon = RDicon_engineering-precision
		pos = -1519,846.9,0
		scale = 0.6
		Parent
		{
			parentID = miniaturization
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = electrics
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = advExploration
		title = #autoLOC_501070 //#autoLOC_501070 = Advanced Exploration
		description = #autoLOC_501071 //#autoLOC_501071 = They are Self-Deploying Astronaut Mobility Enhancement Devices, I don't know what you mean by "ladders".
		cost = 160
		hideEmpty = False
		nodeName = node5_advExploration
		anyToUnlock = True
		icon = RDicon_exploration-advanced
		pos = -1519,963.9,0
		scale = 0.6
		Parent
		{
			parentID = spaceExploration
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = specializedControl
		title = #autoLOC_501072 //#autoLOC_501072 = Specialized Control
		description = #autoLOC_501073 //#autoLOC_501073 = A new state-of-the-art in control technology.
		cost = 160
		hideEmpty = False
		nodeName = node5_specializedControl
		anyToUnlock = True
		icon = RDicon_control-large
		pos = -1521,1082.2,0
		scale = 0.6
		Parent
		{
			parentID = advFlightControl
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = advLanding
		title = #autoLOC_501074 //#autoLOC_501074 = Advanced Landing
		description = #autoLOC_501075 //#autoLOC_501075 = Further advances in landing devices, allowing for more controlled descents and a much higher number of parts still attached to the ship after touchdown.
		cost = 160
		hideEmpty = False
		nodeName = node5_advLanding
		anyToUnlock = False
		icon = RDicon_landing-advanced
		pos = -1519,1142.4,0
		scale = 0.6
		Parent
		{
			parentID = landing
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = supersonicFlight
		title = #autoLOC_501076 //#autoLOC_501076 = Supersonic Flight
		description = #autoLOC_501077 //#autoLOC_501077 = A new line of aircraft parts that allow for unprecedented maneuverability and speed.
		cost = 160
		hideEmpty = False
		nodeName = node5_supersonicFlight
		anyToUnlock = True
		icon = RDicon_flight-supersonic
		pos = -1521,1278,0
		scale = 0.6
		Parent
		{
			parentID = aerodynamicSystems
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = advFuelSystems
		title = #autoLOC_501078 //#autoLOC_501078 = Adv. Fuel Systems
		description = #autoLOC_501079 //#autoLOC_501079 = Advanced Advancements towards a better understanding of how fuel flows through a rocket.
		cost = 160
		hideEmpty = False
		nodeName = node5_advFuelSystems
		anyToUnlock = True
		icon = RDicon_fuelSystems-advanced
		pos = -1519,1470.2,0
		scale = 0.6
		Parent
		{
			parentID = propulsionSystems
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = fuelSystems
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = advElectrics
		title = #autoLOC_501080 //#autoLOC_501080 = Advanced Electrics
		description = #autoLOC_501081 //#autoLOC_501081 = We're fairly certain no one will ever need more than 64kw of power for anything.
		cost = 160
		hideEmpty = False
		nodeName = node5_advElectrics
		anyToUnlock = False
		icon = RDicon_electrics-advanced
		pos = -1519,711.1,0
		scale = 0.6
		Parent
		{
			parentID = electrics
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = specializedConstruction
		title = #autoLOC_501082 //#autoLOC_501082 = Specialized Construction
		description = #autoLOC_501083 //#autoLOC_501083 = Specialized construction techniques provide new ways of attaching things together, and detaching things on purpose.
		cost = 160
		hideEmpty = False
		nodeName = node5_specializedConstruction
		anyToUnlock = True
		icon = RDicon_automation
		pos = -1519,1412,0
		scale = 0.6
		Parent
		{
			parentID = advConstruction
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = precisionPropulsion
		title = #autoLOC_501084 //#autoLOC_501084 = Precision Propulsion
		description = #autoLOC_501085 //#autoLOC_501085 = Any level of precision achieved in controlling the sustained explosion inside a rocket engine is nothing short of remarkable. It might be quite expensive, too.
		cost = 160
		hideEmpty = False
		nodeName = node5_precisionPropulsion
		anyToUnlock = False
		icon = RDicon_propulsion-precision
		pos = -1520.1,1551,0
		scale = 0.6
		Parent
		{
			parentID = propulsionSystems
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = advAerodynamics
		title = #autoLOC_501086 //#autoLOC_501086 = Advanced Aerodynamics
		description = #autoLOC_501087 //#autoLOC_501087 = Advances in fluid dynamics research technology have allowed development of a new set of streamlined aircraft components, And also these parts here.
		cost = 160
		hideEmpty = False
		nodeName = node5_advAerodynamics
		anyToUnlock = True
		icon = RDicon_aerodynamics-advanced
		pos = -1519,1207,0
		scale = 0.6
		Parent
		{
			parentID = aerodynamicSystems
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = heavyLanding
		title = #autoLOC_501088 //#autoLOC_501088 = Heavy Landing
		description = #autoLOC_501089 //#autoLOC_501089 = A good landing is one where you walk away from it. A great landing is one where you get to use the aircraft again.
		cost = 300
		hideEmpty = False
		nodeName = node6_heavyLanding
		anyToUnlock = False
		icon = RDicon_motors-experimental
		pos = -1309,1142.4,0
		scale = 0.6
		Parent
		{
			parentID = advLanding
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = scienceTech
		title = #autoLOC_501090 //#autoLOC_501090 = Scanning Tech
		description = #autoLOC_501091 //#autoLOC_501091 = Why wonder about what's over the next hill when you can wonder about what's under it?
		cost = 300
		hideEmpty = False
		nodeName = node6_advScience
		anyToUnlock = True
		icon = RDicon_telescope
		pos = -1309,963.9,0
		scale = 0.6
		Parent
		{
			parentID = advExploration
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = precisionEngineering
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = unmannedTech
		title = #autoLOC_501092 //#autoLOC_501092 = Unmanned Tech
		description = #autoLOC_501093 //#autoLOC_501093 = Warning: May contain traces of sentience.
		cost = 300
		hideEmpty = False
		nodeName = node6_unmannedTech
		anyToUnlock = True
		icon = RDicon_unmanned-advanced
		pos = -1309,846.9,0
		scale = 0.6
		Parent
		{
			parentID = precisionEngineering
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = nuclearPropulsion
		title = #autoLOC_501094 //#autoLOC_501094 = Nuclear Propulsion
		description = #autoLOC_501095 //#autoLOC_501095 = Nuclear engines don't burn fuel, they totally annihilate it. We just hope it doesn't begin any conflicts.
		cost = 300
		hideEmpty = False
		nodeName = node6_nuclearPropulsion
		anyToUnlock = False
		icon = RDicon_propulsion-nuclear
		pos = -1309,1551,0
		scale = 0.6
		Parent
		{
			parentID = advFuelSystems
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = heavierRocketry
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = advMetalworks
		title = #autoLOC_501096 //#autoLOC_501096 = Advanced MetalWorks
		description = #autoLOC_501097 //#autoLOC_501097 = These new construction techniques allow for craft designs that were considered insane not too long ago... and still are. But they're now possible!
		cost = 300
		hideEmpty = False
		nodeName = node6_advMetalWorks
		anyToUnlock = True
		icon = RDicon_metalworks-advanced
		pos = -1309,1412,0
		scale = 0.6
		Parent
		{
			parentID = specializedConstruction
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = fieldScience
		title = #autoLOC_501098 //#autoLOC_501098 = Field Science
		description = #autoLOC_501099 //#autoLOC_501099 = Freedom to roam as far as curiosity will take you, or as long as batteries last.
		cost = 300
		hideEmpty = False
		nodeName = node6_fieldScience
		anyToUnlock = True
		icon = RDicon_science-field
		pos = -1309,1067,0
		scale = 0.6
		Parent
		{
			parentID = advLanding
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = advExploration
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = highAltitudeFlight
		title = #autoLOC_501100 //#autoLOC_501100 = High Altitude Flight
		description = #autoLOC_501101 //#autoLOC_501101 = New breakthroughs in engine and intake development to enable flying through the upper reaches of the atmosphere.
		cost = 300
		hideEmpty = False
		nodeName = node6_highAltitudeFlight
		anyToUnlock = True
		icon = RDicon_flight-highAltitude
		pos = -1310,1278,0
		scale = 0.6
		Parent
		{
			parentID = supersonicFlight
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = largeVolumeContainment
		title = #autoLOC_501102 //#autoLOC_501102 = Large Volume Containment
		description = #autoLOC_501103 //#autoLOC_501103 = Maximize the payload capacity of your spacecraft by maximizing the size of your spacecraft.
		cost = 300
		hideEmpty = False
		nodeName = node6_largeVolumeContainment
		anyToUnlock = True
		icon = RDicon_largeVolumeContainment
		pos = -1309,1470.2,0
		scale = 0.6
		Parent
		{
			parentID = advFuelSystems
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = specializedConstruction
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = composites
		title = #autoLOC_501104 //#autoLOC_501104 = Composites
		description = #autoLOC_501105 //#autoLOC_501105 = Lightweight and strong! and don't worry, we're sure the glue will dry off in no time.
		cost = 300
		hideEmpty = False
		nodeName = node6_composites
		anyToUnlock = False
		icon = RDicon_composites
		pos = -1309,1355,0
		scale = 0.6
		Parent
		{
			parentID = specializedConstruction
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = electronics
		title = #autoLOC_501106 //#autoLOC_501106 = Electronics
		description = #autoLOC_501107 //#autoLOC_501107 = Hopefully these won't become obsolete in the next couple of months.
		cost = 300
		hideEmpty = False
		nodeName = node6_electronics
		anyToUnlock = True
		icon = RDicon_electronics
		pos = -1309,777.6,0
		scale = 0.6
		Parent
		{
			parentID = precisionEngineering
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = advElectrics
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = largeElectrics
		title = #autoLOC_501108 //#autoLOC_501108 = High-Power Electrics
		description = #autoLOC_501109 //#autoLOC_501109 = Maximize your energy production and storage potential by maximizing the size of the electrical components on your vessels.
		cost = 300
		hideEmpty = False
		nodeName = node6_largeElectrics
		anyToUnlock = False
		icon = RDicon_electrics-large
		pos = -1309,711.1,0
		scale = 0.6
		Parent
		{
			parentID = advElectrics
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = heavyAerodynamics
		title = #autoLOC_501110 //#autoLOC_501110 = Heavy Aerodynamics
		description = #autoLOC_501111 //#autoLOC_501111 = Advances in construction technology enabled new breakthroughs in aerospace materials.
		cost = 300
		hideEmpty = False
		nodeName = node6_heavyAerodynamics
		anyToUnlock = True
		icon = RDicon_aerospaceTech2
		pos = -1310,1207,0
		scale = 0.6
		Parent
		{
			parentID = advAerodynamics
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = ionPropulsion
		title = #autoLOC_501112 //#autoLOC_501112 = Ion Propulsion
		description = #autoLOC_501113 //#autoLOC_501113 = Turns out, it's not science fiction.
		cost = 550
		hideEmpty = False
		nodeName = node7_ionPropulsion
		anyToUnlock = False
		icon = RDicon_propulsion-ion
		pos = -1118,905.2,0
		scale = 0.6
		Parent
		{
			parentID = scienceTech
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = unmannedTech
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = hypersonicFlight
		title = #autoLOC_501114 //#autoLOC_501114 = Hypersonic Flight
		description = #autoLOC_501115 //#autoLOC_501115 = Push your aircraft to the upper limits of airspeed and sanity.
		cost = 550
		hideEmpty = False
		nodeName = node7_hypersonicFlight
		anyToUnlock = True
		icon = RDicon_flight-hypersonic
		pos = -1118,1278,0
		scale = 0.6
		Parent
		{
			parentID = highAltitudeFlight
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = nanolathing
		title = #autoLOC_501116 //#autoLOC_501116 = Nanolathing
		description = #autoLOC_501117 //#autoLOC_501117 = Despite the threatening appearance of the green metablobs shot out of the Nanolathing Injectors, none can argue the fact that Kerbals have indeed developed technologies at least just as dangerous as this one.
		cost = 550
		hideEmpty = True
		nodeName = node7_nanolathing
		anyToUnlock = True
		icon = RDicon_generic
		pos = -1118,1406,0
		scale = 0.6
		Parent
		{
			parentID = advMetalworks
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = advUnmanned
		title = #autoLOC_501118 //#autoLOC_501118 = Advanced Unmanned Tech
		description = #autoLOC_501119 //#autoLOC_501119 = Improvements in remote control technology for a new generation of probe designs.
		cost = 550
		hideEmpty = False
		nodeName = node7_advUnmanned
		anyToUnlock = True
		icon = RDicon_unmannedTech
		pos = -1118,846.9,0
		scale = 0.6
		Parent
		{
			parentID = unmannedTech
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = metaMaterials
		title = #autoLOC_501120 //#autoLOC_501120 = Meta-Materials
		description = #autoLOC_501121 //#autoLOC_501121 = An advancement in spacecraft construction so revolutionary, you won't even mind that its naming was wildly inaccurate.
		cost = 550
		hideEmpty = False
		nodeName = node7_metaMaterials
		anyToUnlock = True
		icon = RDicon_metamaterials
		pos = -1118,1355,0
		scale = 0.6
		Parent
		{
			parentID = composites
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = veryHeavyRocketry
		title = #autoLOC_501122 //#autoLOC_501122 = Very Heavy Rocketry
		description = #autoLOC_501123 //#autoLOC_501123 = While ever-larger rockets may not be the answer every time, for all other times, we've developed these.
		cost = 550
		hideEmpty = False
		nodeName = node7_veryHeavyRocketry
		anyToUnlock = True
		icon = RDicon_rocketry-veryHeavy
		pos = -1118,1635,0
		scale = 0.6
		Parent
		{
			parentID = largeVolumeContainment
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = heavierRocketry
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = advScienceTech
		title = #autoLOC_501124 //#autoLOC_501124 = Advanced Science Tech
		description = #autoLOC_501125 //#autoLOC_501125 = Scientific advancements allow new advanced technologies for advancing Science.
		cost = 550
		hideEmpty = False
		nodeName = node7_advScienceTech
		anyToUnlock = True
		icon = RDicon_scienceTech-advanced
		pos = -1118,963.9,0
		scale = 0.6
		Parent
		{
			parentID = scienceTech
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = fieldScience
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = advancedMotors
		title = #autoLOC_501126 //#autoLOC_501126 = Advanced Motors
		description = #autoLOC_501127 //#autoLOC_501127 = Wheel technology is just rolling along now. You could even say our engineers are on a roll with it.
		cost = 550
		hideEmpty = False
		nodeName = node7_advancedMotors
		anyToUnlock = False
		icon = RDicon_motors-advanced
		pos = -1118,1067,0
		scale = 0.6
		Parent
		{
			parentID = fieldScience
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = specializedElectrics
		title = #autoLOC_501128 //#autoLOC_501128 = Specialized Electrics
		description = #autoLOC_501129 //#autoLOC_501129 = Experience the warm glow of the latest in electrical technology. Figuratively, of course, and maybe also quite literally as well. Actually, try to avoid direct exposure.
		cost = 550
		hideEmpty = False
		nodeName = node7_specializedElectrics
		anyToUnlock = True
		icon = RDicon_electrics-specialized
		pos = -1118,711.1,0
		scale = 0.6
		Parent
		{
			parentID = largeElectrics
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = highPerformanceFuelSystems
		title = #autoLOC_501130 //#autoLOC_501130 = High-Performance Fuel Systems
		description = #autoLOC_501131 //#autoLOC_501131 = Massive engines require massive fuel storage solutions.
		cost = 550
		hideEmpty = False
		nodeName = node7_highPerformanceFuelSystems
		anyToUnlock = True
		icon = RDicon_fuelSystems-highPerformance
		pos = -1118,1470.2,0
		scale = 0.6
		Parent
		{
			parentID = largeVolumeContainment
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = experimentalAerodynamics
		title = #autoLOC_501132 //#autoLOC_501132 = Experimental Aerodynamics
		description = #autoLOC_501133 //#autoLOC_501133 = Winged flight technology is soaring to unprecedented heights. It could even be said that it's properly taking off now.
		cost = 550
		hideEmpty = False
		nodeName = node7_experimentalAerodynamics
		anyToUnlock = True
		icon = RDicon_aerodynamics-heavy
		pos = -1120,1207,0
		scale = 0.6
		Parent
		{
			parentID = heavyAerodynamics
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = automation
		title = #autoLOC_501134 //#autoLOC_501134 = Automation
		description = #autoLOC_501135 //#autoLOC_501135 = We can't think of anything that could go wrong with letting an experimental AI handle every aspect of a mission.
		cost = 550
		hideEmpty = False
		nodeName = node7_automation
		anyToUnlock = True
		icon = RDicon_robotics
		pos = -1118,777.6,0
		scale = 0.6
		Parent
		{
			parentID = unmannedTech
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = electronics
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = aerospaceTech
		title = #autoLOC_501136 //#autoLOC_501136 = Aerospace Tech
		description = #autoLOC_501137 //#autoLOC_501137 = The absolute cutting-edge in aerospace technology. Quite literally, some of those edges are very sharp. Handle with care.
		cost = 1000
		hideEmpty = False
		nodeName = node8_aerospaceTech
		anyToUnlock = True
		icon = RDicon_aerodynamics-experimental
		pos = -956,1278,0
		scale = 0.6
		Parent
		{
			parentID = hypersonicFlight
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = largeUnmanned
		title = #autoLOC_501138 //#autoLOC_501138 = Large Probes
		description = #autoLOC_501139 //#autoLOC_501139 = The rumours of probe-led world domination are greatly exaggerated.
		cost = 1000
		hideEmpty = False
		nodeName = node8_largeUnmanned
		anyToUnlock = True
		icon = RDicon_probes-large
		pos = -952,846.9,0
		scale = 0.6
		Parent
		{
			parentID = advUnmanned
			lineFrom = RIGHT
			lineTo = LEFT
		}
		Parent
		{
			parentID = automation
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = experimentalScience
		title = #autoLOC_501140 //#autoLOC_501140 = Experimental Science
		description = #autoLOC_501141 //#autoLOC_501141 = Explore novel fields of science that we didn't even know were there.
		cost = 1000
		hideEmpty = False
		nodeName = node8_experimentalScience
		anyToUnlock = False
		icon = RDicon_science-experimental
		pos = -952,963.9,0
		scale = 0.6
		Parent
		{
			parentID = advScienceTech
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = experimentalMotors
		title = #autoLOC_501142 //#autoLOC_501142 = Experimental Motors
		description = #autoLOC_501143 //#autoLOC_501143 = The latest breakthroughs that are driving motor technology forwards, and in reverse, and steering too.
		cost = 1000
		hideEmpty = True
		nodeName = node8_experimentalMotors
		anyToUnlock = False
		icon = RDicon_generic
		pos = -952,1067,0
		scale = 0.6
		Parent
		{
			parentID = advancedMotors
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
	RDNode
	{
		id = experimentalElectrics
		title = #autoLOC_501144 //#autoLOC_501144 = Experimental Electrics
		description = #autoLOC_501145 //#autoLOC_501145 = The very latest in electrical systems technology. Our engineers are buzzing with excitement over it. They also seem to glow in the dark now. Fascinating!
		cost = 1000
		hideEmpty = False
		nodeName = node8_experimentalElectrics
		anyToUnlock = False
		icon = RDicon_electrics-experimental
		pos = -952,711.1,0
		scale = 0.6
		Parent
		{
			parentID = specializedElectrics
			lineFrom = RIGHT
			lineTo = LEFT
		}
	}
}`