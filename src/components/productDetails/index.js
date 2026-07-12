import Alloy20Pipes from "./Alloy20Pipes";
import Alloy28Coils from "./Alloy28Coils";
import Alloy28Pipes from "./Alloy28Pipes";
import Alloy28RoundBars from "./Alloy28RoundBars";
import Alloy28Sheets from "./Alloy28Sheets";
import Alloy28Wires from "./Alloy28Wires";
import CopperNickel7030Pipes from "./CopperNickel7030Pipes";
import CopperNickelPipes from "./CopperNickel9010Pipes";
import CopperNickel9010Pipes from "./CopperNickel9010Pipes";
import CopperNickelCoils from "./CopperNickelCoils";
import CopperNickelRoundBars from "./CopperNickelRoundBars";
import CopperNickelSheets from "./CopperNickelSheets";
import CopperNickelWires from "./CopperNickelWires";
import DuplexSteelCoils from "./DuplexSteelCoils";
import DuplexSteelRoundBars from "./DuplexSteelRoundBars";
import DuplexSteelS31803S32205 from "./DuplexSteelS31803S32205";
import DuplexSteelSheets from "./DuplexSteelSheets ";
import DuplexSteelWires from "./DuplexSteelWires";
import DuplexSuperDuplexPipes from "./DuplexSuperDuplexPipes";
import HastelloyB2Pipes from "./HastelloyB2Pipes";
import HastelloyB3Pipes from "./HastelloyB3Pipes";
import HastelloyC2000C59C4HN from "./HastelloyC2000C59C4HN";
import HastelloyC22Pipes from "./HastelloyC22Pipes";
import HastelloyC276Pipes from "./HastelloyC276Pipes";
import HastelloyCoils from "./HastelloyCoils ";
import HastelloyPipes from "./HastelloyPipes";
import HastelloyRoundBars from "./HastelloyRoundBars";
import HastelloySheets from "./HastelloySheets ";
import HastelloyWires from "./HastelloyWires ";
import HighPerformanceAlloyCoils from "./HighPerformanceAlloyCoils";
import HighPerformanceAlloyPipes from "./HighPerformanceAlloyPipes";
import HighPerformanceAlloyPlates from "./HighPerformanceAlloyPlates ";
import HighPerformanceAlloyRoundBars from "./HighPerformanceAlloyRoundBars";
import HighPerformanceAlloySheets from "./HighPerformanceAlloySheets";
import HighPerformanceAlloyWires from "./HighPerformanceAlloyWires";
import IncloneyWires from "./IncloneyWires";
import Incoloy800DS330Pipes from "./Incoloy800DS330Pipes";
import Incoloy800H800HTPipes from "./Incoloy800H800HTPipes";
import Incoloy825Pipes from "./Incoloy825Pipes";
import IncoloyCoils from "./IncoloyCoils";
import IncoloyPipes from "./IncoloyPipes";
import IncoloyRoundBars from "./IncoloyRoundBars";
import IncoloySheets from "./IncoloySheets";
import Inconel600Pipes from "./Inconel600Pipes";
import Inconel601Pipes from "./Inconel601Pipes";
import Inconel625Pipes from "./Inconel625Pipes";
import Inconel690Pipes from "./Inconel690Pipes";
import Inconel718Pipes from "./Inconel718Pipes";
import InconelCoils from "./InconelCoils";
import InconelPipes from "./InconelPipes";
import InconelRoundBars from "./InconelRoundBars";
import InconelSheets from "./InconelSheets";
import InconelWires from "./InconelWires";
import InconelX750Pipes from "./InconelX750Pipes";
import Monel400Coils from "./Monel400Coils";
import Monel400Pipes from "./Monel400Pipes";
import Monel400Sheets from "./Monel400Sheets";
import MonelPipes from "./MonelPipes";
import MonelRoundBars from "./MonelRoundBars";
import MonelWires from "./MonelWires ";
import NickelAlloy200201Pipes from "./NickelAlloy200201Pipes";
import NickelAlloy200Coils from "./NickelAlloy200Coils";
import NickelAlloy200RoundBars from "./NickelAlloy200RoundBars";
import NickelAlloy200Sheets from "./NickelAlloy200Sheets";
import NickelAlloy200Wires from "./NickelAlloy200Wires";
import NickelAlloyPipes from "./NickelAlloyPipes";
import SMO254Pipes from "./SMO254Pipes";
import SpecialAlloyCoils from "./SpecialAlloyCoils";
import SpecialAlloyRoundBars from "./SpecialAlloyRoundBars";
import SpecialAlloySheets from "./SpecialAlloySheets";
import SpecialAlloyWires from "./SpecialAlloyWires ";
import StainlessSteel304304LPipes from "./StainlessSteel304304LPipes";
import StainlessSteel310SPipes from "./StainlessSteel310SPipes";
import StainlessSteel316Pipes from "./StainlessSteel316316LPipes";
import StainlessSteel316316LPipes from "./StainlessSteel316316LPipes";
import StainlessSteel317LPipes from "./StainlessSteel317LPipes";
import StainlessSteel321Pipes from "./StainlessSteel321Pipes";
import StainlessSteel904LPipes from "./StainlessSteel904LPipes";
import StainlessSteelCoils from "./StainlessSteelCoils";
import StainlessSteelPipes from "./StainlessSteelPipes";
import StainlessSteelPlates from "./StainlessSteelPlates";
import StainlessSteelRoundBars from "./StainlessSteelRoundBars";
import StainlessSteelSheets from "./StainlessSteelSheets";
import StainlessSteelWires from "./StainlessSteelWires";
import SuperDuplexS32750F53 from "./SuperDuplexS32750F53";
import SuperDuplexS32760F55 from "./SuperDuplexS32760F55";
import TitaniumCoils from "./TitaniumCoils";
import TitaniumGrade2Grade5Pipes from "./TitaniumGrade2Grade5Pipes";
import TitaniumPlates from "./TitaniumPlates ";
import TitaniumRoundBars from "./TitaniumRoundBars";
import TitaniumSheets from "./TitaniumSheets";
import TitaniumWires from "./TitaniumWires";

export const productComponentMap = {
  "high-performance-alloy-pipes": HighPerformanceAlloyPipes,
  "stainless-steel-304-304l-pipes": StainlessSteel304304LPipes,
  "titanium-pipes": TitaniumGrade2Grade5Pipes,
  "alloy-28-pipes": Alloy28Pipes,
  "alloy-20-pipes": Alloy20Pipes,
  "smo-254-pipes": SMO254Pipes,
  "nickel-alloy-200-201-pipes": NickelAlloy200201Pipes,
  "nickel-alloy-pipes": NickelAlloyPipes,
  "monel-400-pipes": Monel400Pipes,
  "monel-pipes": MonelPipes,
  "inconel-x750-pipes": InconelX750Pipes,
  "inconel-718-pipes": Inconel718Pipes,
  "inconel-690-pipes": Inconel690Pipes,
  "inconel-625-pipes": Inconel625Pipes,
  "inconel-601-pipes": Inconel601Pipes,
  "inconel-600-pipes": Inconel600Pipes,
  "inconel-pipes": InconelPipes,
  "incoloy-825-pipes": Incoloy825Pipes,
  "incoloy-800h-800ht-pipes": Incoloy800H800HTPipes,
  "incoloy-800-ds330-pipes": Incoloy800DS330Pipes,
  "incoloy-pipes": IncoloyPipes,
  "stainless-steel-pipes": StainlessSteelPipes,
  "hastelloy-c2000-c59-c4-hn-pipes": HastelloyC2000C59C4HN,
  "hastelloy-b3-pipes": HastelloyB3Pipes,
  "hastelloy-b2-pipes": HastelloyB2Pipes,
  "hastelloy-c22-pipes": HastelloyC22Pipes,
  "hastelloy-c276-pipes": HastelloyC276Pipes,
  "hastelloy-pipes": HastelloyPipes,
  "super-duplex-s32760-pipes": SuperDuplexS32760F55,
  "super-duplex-s32750-pipes": SuperDuplexS32750F53,
  "duplex-s31803-s32205-pipes": DuplexSteelS31803S32205,
  "duplex-super-duplex-pipes": DuplexSuperDuplexPipes,
  "copper-nickel-90-10-pipes": CopperNickel9010Pipes,
  "copper-nickel-70-30-pipes": CopperNickel7030Pipes,
  "copper-nickel-pipes": CopperNickelPipes,
  "stainless-steel-904l-pipes": StainlessSteel904LPipes,
  "stainless-steel-321-pipes": StainlessSteel321Pipes,
  "stainless-steel-317l-pipes": StainlessSteel317LPipes,
  "stainless-steel-316-316l-pipes": StainlessSteel316Pipes,
  "stainless-steel-310s-pipes": StainlessSteel310SPipes,
  "stainless-steel-coils": StainlessSteelCoils,
  "titanium-coils": TitaniumCoils,
  "high-performance-alloy-coils": HighPerformanceAlloyCoils,
  "alloy-28-coils": Alloy28Coils,
  "special-alloy-coils": SpecialAlloyCoils,
  "nickel-alloy-200-201-coils": NickelAlloy200Coils,
  "monel-400-coils": Monel400Coils,
  "inconel-coils": InconelCoils,
  "incoloy-coils": IncoloyCoils,
  "hastelloy-coils": HastelloyCoils,
  "duplex-super-duplex-steel-coils": DuplexSteelCoils,
  "copper-nickel-coils": CopperNickelCoils,
  "titanium-round-bars": TitaniumRoundBars,
  "stainless-steel-round-bars": StainlessSteelRoundBars,
  "high-performance-alloy-round-bars": HighPerformanceAlloyRoundBars,
  "alloy-28-round-bars": Alloy28RoundBars,
  "special-alloy-round-bars": SpecialAlloyRoundBars,
  "nickel-alloy-200-201-round-bars": NickelAlloy200RoundBars,
  "monel-round-bars": MonelRoundBars,
  "inconel-round-bars": InconelRoundBars,
  "incoloy-round-bars": IncoloyRoundBars,
  "hastelloy-round-bars": HastelloyRoundBars,
  "duplex-super-duplex-round-bars": DuplexSteelRoundBars,
  "copper-nickel-round-bars": CopperNickelRoundBars,
  "titanium-wires": TitaniumWires,
  "stainless-steel-wires": StainlessSteelWires,
  "high-performance-alloy-wires": HighPerformanceAlloyWires,
  "alloy-28-wires": Alloy28Wires,
  "special-alloy-wires": SpecialAlloyWires,
  "nickel-alloy-200-201-wires": NickelAlloy200Wires,
  "monel-wires": MonelWires,
  "inconel-wires": InconelWires,
  "incoloy-wires": IncloneyWires,
  "hastelloy-wires": HastelloyWires,
  "duplex-super-duplex-steel-wires": DuplexSteelWires,
  "copper-nickel-wires": CopperNickelWires,
  "titanium-sheets": TitaniumSheets,
  "stainless-steel-sheets": StainlessSteelSheets,
  "high-performance-alloy-sheets": HighPerformanceAlloySheets,
  "alloy-28-sheets": Alloy28Sheets,
  "special-alloy-sheets": SpecialAlloySheets,
  "nickel-alloy-200-201-sheets": NickelAlloy200Sheets,
  "monel-400-sheets": Monel400Sheets,
  "inconel-sheets": InconelSheets,
  "incoloy-sheets": IncoloySheets,
  "hastelloy-sheets": HastelloySheets,
  "duplex-super-duplex-steel-sheets": DuplexSteelSheets,
  "copper-nickel-sheets": CopperNickelSheets,
  "titanium-plates": TitaniumPlates,
  "stainless-steel-plates": StainlessSteelPlates,
  "high-performance-alloy-plates": HighPerformanceAlloyPlates,
};

export const getProductComponent = (slug) => {
  return productComponentMap[slug] || null;
};

export const getProductSlugs = () => {
  return Object.keys(productComponentMap);
};
