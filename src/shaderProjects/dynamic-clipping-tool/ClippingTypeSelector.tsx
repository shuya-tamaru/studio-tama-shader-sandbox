import {
  Box,
  Center,
  Icon,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiHolosphere } from "react-icons/gi";
import { PiCubeThin } from "react-icons/pi";
import { PiGridFour } from "react-icons/pi";
import { themeColor } from "../../styles/cssPallet";
import { IconType } from "react-icons";
import useClippingSelector, { ClippingType } from "./store/useClippingSelector";
import { gradientBg } from "../../styles/cssPaletShader";

export default function ClippingTypeSelector() {
  return (
    <Center h="50px" w={"140px"} position={"absolute"} bottom={0}>
      <IconComponent
        icon={GiHolosphere}
        label="Sphere"
        clippingType={ClippingType.SPHERE}
      />
      <IconComponent
        icon={PiCubeThin}
        label="Box"
        clippingType={ClippingType.BOX}
      />
      <IconComponent
        icon={PiGridFour}
        label="Planes"
        clippingType={ClippingType.PLANES}
      />
    </Center>
  );
}

const IconComponent = ({
  icon,
  label,
  clippingType,
}: {
  icon: IconType;
  label: string;
  clippingType: ClippingType;
}) => {
  const setClippingType = useClippingSelector((state) => state.setClippingType);

  const handleSelector = () => {
    setClippingType(clippingType);
  };

  return (
    <Tooltip label={label} hasArrow placement="top-start">
      <Box>
        <Icon
          as={icon}
          sx={iconStyle}
          _hover={{ opacity: 0.5 }}
          onClick={handleSelector}
        />
      </Box>
    </Tooltip>
  );
};

const iconStyle = {
  color: "#fff",
  boxSize: 8,
  ml: "5px",
  cursor: "pointer",
};
