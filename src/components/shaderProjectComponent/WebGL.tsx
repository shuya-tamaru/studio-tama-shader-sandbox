import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import React from "react";
import SoapBubble from "../../shaderProjects/SoapBubble/SoapBubble";

const Wave = dynamic(() => import("../../shaderProjects/Wave/Wave"));
const CsmWave = dynamic(() => import("../../shaderProjects/Csm_Wave/CsmWave"));
const Clipping = dynamic(
  () => import("../../shaderProjects/dynamic-clipping-tool/Clipping")
);
const Gpgpu = dynamic(() => import("../../shaderProjects/Gpgpu/Gpgpu"));
const JellyMorph = dynamic(
  () => import("../../shaderProjects/Jelly_Morph/JellyMorph")
);

export default function WebGL() {
  const pathname = usePathname();
  const slug = pathname.split("/")[1];

  const renderComponent = () => {
    switch (slug) {
      case "wave":
        return <Wave />;
      case "csm_wave":
        return <CsmWave />;
      case "dynamic-clipping-tool":
        return <Clipping />;
      case "gpgpu":
        return <Gpgpu />;
      case "jelly_morph":
        return <JellyMorph />;
      case "soap_bubble":
        return <SoapBubble />;
      default:
        return <div>Not Found</div>;
    }
  };

  return <>{renderComponent()}</>;
}
