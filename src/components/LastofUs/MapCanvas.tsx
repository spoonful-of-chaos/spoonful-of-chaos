import { useSettings } from "@/context/settings.context";

import { useRef } from "react";

export const MapCanvas = () => {
  const { state, dispatch } = useSettings();

  const canvasRef = useRef<HTMLDivElement>();
  const canvasDraw = useRef<any>();



  return (
    <div>
      <canvas id="mapCanvas" height={10} width={10} className="border-2 border-white" />
    </div>
  )
}