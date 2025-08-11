import React from "react";

interface VirtuesDiagramProps {
  width?: string;
  height?: string;
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
  fillOpacity?: number;
  showLabels?: boolean;
  labels?: {
    love?: string;
    humility?: string;
    temperance?: string;
    kindness?: string;
    patience?: string;
    diligence?: string;
    justice?: string;
    charity?: string;
    hope?: string;
  };
}

const VirtuesDiagram: React.FC<VirtuesDiagramProps> = ({
  width = "210mm",
  height = "297mm",
  strokeColor = "#000000",
  strokeWidth = 1.39153,
  fillColor = "#d30e53",
  fillOpacity = 0,
  showLabels = false,
  labels = {
    love: "love",
    humility: "humility",
    temperance: "temperance",
    kindness: "kindness",
    patience: "patience",
    diligence: "diligence",
    justice: "justice",
    charity: "charity",
    hope: "hope",
  },
}) => {
  const rectStyle = {
    fill: fillColor,
    fillOpacity: fillOpacity,
    stroke: strokeColor,
    strokeWidth: strokeWidth,
    strokeDasharray: "none",
    strokeOpacity: 1,
  };

  const pathStyle = {
    fill: fillColor,
    fillOpacity: fillOpacity,
    stroke: strokeColor,
    strokeWidth: 0.723965,
    strokeDasharray: "none",
    strokeOpacity: 1,
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 210 297"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Octagon (Love) */}
      <g>
        <path
          style={pathStyle}
          d="M 91.869213,50.898126 91.671534,88.951184 64.624178,115.71898 26.57112,115.5213 -0.19667464,88.473944 0.00100485,50.420886 27.048361,23.653091 l 38.053058,0.19768 z"
          transform="matrix(1.9586479,-0.00669184,0.00669184,1.9586479,14.756559,12.316323)"
        />
        {showLabels && (
          <text
            x="105"
            y="95"
            fontSize="10"
            fill={strokeColor}
            textAnchor="middle"
          >
            {labels.love}
          </text>
        )}
      </g>

      {/* Humility Rectangle */}
      <g>
        <rect
          style={rectStyle}
          width="73.784874"
          height="73.78447"
          x="68.179382"
          y="58.557209"
        />
        {showLabels && (
          <text
            x="105"
            y="99"
            fontSize="8"
            fill={strokeColor}
            textAnchor="middle"
          >
            {labels.humility}
          </text>
        )}
      </g>

      {/* Temperance Rectangle */}
      <g>
        <rect
          style={rectStyle}
          width="73.784874"
          height="73.78447"
          x="120.9129"
          y="111.85594"
        />
        {showLabels && (
          <text
            x="157.8"
            y="152"
            fontSize="8"
            fill={strokeColor}
            textAnchor="middle"
          >
            {labels.temperance}
          </text>
        )}
      </g>

      {/* Kindness Rectangle */}
      <g>
        <rect
          style={rectStyle}
          width="73.784874"
          height="73.78447"
          x="67.880394"
          y="164.58694"
        />
        {showLabels && (
          <text
            x="104.8"
            y="205"
            fontSize="8"
            fill={strokeColor}
            textAnchor="middle"
          >
            {labels.kindness}
          </text>
        )}
      </g>

      {/* Patience Rectangle */}
      <g>
        <rect
          style={rectStyle}
          width="73.784874"
          height="73.78447"
          x="15.164192"
          y="111.42274"
        />
        {showLabels && (
          <text
            x="52"
            y="151.5"
            fontSize="8"
            fill={strokeColor}
            textAnchor="middle"
          >
            {labels.patience}
          </text>
        )}
      </g>

      {/* Diligence Rectangle (Rotated) */}
      <g>
        <rect
          style={rectStyle}
          width="73.720474"
          height="73.719765"
          x="-67.497978"
          y="89.78022"
          transform="matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)"
        />
        {showLabels && (
          <text
            x="52"
            y="99"
            fontSize="8"
            fill={strokeColor}
            textAnchor="middle"
          >
            {labels.diligence}
          </text>
        )}
      </g>

      {/* Justice Rectangle (Rotated) */}
      <g>
        <rect
          style={rectStyle}
          width="73.720474"
          height="73.719765"
          x="-14.611883"
          y="142.43987"
          transform="matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)"
        />
        {showLabels && (
          <text
            x="105"
            y="152"
            fontSize="8"
            fill={strokeColor}
            textAnchor="middle"
          >
            {labels.justice}
          </text>
        )}
      </g>

      {/* Charity Rectangle (Rotated) */}
      <g>
        <rect
          style={rectStyle}
          width="73.720474"
          height="73.719765"
          x="-67.055756"
          y="194.72874"
          transform="matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)"
        />
        {showLabels && (
          <text
            x="52"
            y="205"
            fontSize="8"
            fill={strokeColor}
            textAnchor="middle"
          >
            {labels.charity}
          </text>
        )}
      </g>

      {/* Hope Rectangle (Rotated) */}
      <g>
        <rect
          style={rectStyle}
          width="73.720474"
          height="73.719765"
          x="-119.79039"
          y="142.29362"
          transform="matrix(0.70855192,-0.7056587,0.70565195,0.70855861,0,0)"
        />
        {showLabels && (
          <text
            x="157.8"
            y="99"
            fontSize="8"
            fill={strokeColor}
            textAnchor="middle"
          >
            {labels.hope}
          </text>
        )}
      </g>
    </svg>
  );
};

export default VirtuesDiagram;
