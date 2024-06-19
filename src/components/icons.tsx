import type { FC, SVGProps } from "react"

export const Manuscript: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, strokeWidth, color, width, height, fill } = props

	return (
		<svg
			fill={fill || "#000000"}
			width={width || "24"}
			height={height || "24"}
			className={className || ""}
			strokeWidth={strokeWidth || 2}
			color={color || "currentColor"}
			viewBox="0 0 511.999 511.999"
		>
			<path d="M506.895,415.806V96.193c0-4.491-2.001-8.508-5.149-11.234c5.949-8.719,9.435-19.247,9.435-30.576 C511.182,24.396,486.786,0,456.799,0c-29.987,0-54.383,24.396-54.383,54.383c0,11.329,3.486,21.857,9.437,30.577 c-3.149,2.726-5.148,6.742-5.148,11.233v7.611H105.297v-7.611c0-4.491-1.999-8.508-5.148-11.233 c5.951-8.719,9.437-19.248,9.437-30.577C109.584,24.396,85.188,0,55.201,0S0.818,24.396,0.818,54.383 c0,11.329,3.486,21.857,9.435,30.576c-3.149,2.725-5.149,6.743-5.149,11.234v319.613c0,4.491,2.001,8.508,5.149,11.234 c-5.949,8.719-9.435,19.247-9.435,30.576c0,29.987,24.396,54.383,54.383,54.383s54.383-24.396,54.383-54.383 c0-11.329-3.486-21.857-9.437-30.577c3.149-2.726,5.148-6.742,5.148-11.233v-7.611h301.408v7.611 c0,4.491,1.999,8.508,5.148,11.233c-5.951,8.719-9.437,19.248-9.437,30.577c0,29.987,24.396,54.383,54.383,54.383 c29.987,0,54.383-24.396,54.383-54.383c0-11.329-3.486-21.857-9.435-30.576C504.894,424.315,506.895,420.298,506.895,415.806z M55.201,482.269c-13.593,0-24.652-11.059-24.652-24.652c0-13.593,11.059-24.652,24.652-24.652s24.652,11.059,24.652,24.652 C79.853,471.21,68.794,482.269,55.201,482.269z M75.564,396.456v4.485H34.836V111.059h40.728v4.485 c-0.216,1.008-0.336,2.053-0.336,3.126v274.66C75.228,394.403,75.347,395.447,75.564,396.456z M55.201,79.035 c-13.593,0-24.652-11.057-24.652-24.652c0-13.595,11.06-24.652,24.652-24.652c13.593,0,24.652,11.059,24.652,24.652 S68.794,79.035,55.201,79.035z M406.705,241.135H181.671c-8.209,0-14.866,6.655-14.866,14.866s6.657,14.866,14.866,14.866h225.032 v107.598H105.297v-178.21h225.033c8.209,0,14.866-6.655,14.866-14.866c0-8.21-6.657-14.866-14.866-14.866H105.297v-36.986h301.408 V241.135z M456.799,482.269c-13.593,0-24.652-11.059-24.652-24.652c0-13.593,11.059-24.652,24.652-24.652 s24.652,11.059,24.652,24.652C481.451,471.21,470.391,482.269,456.799,482.269z M436.435,115.544v-4.485h40.728V400.94h-40.728 v-4.485c0.216-1.008,0.336-2.053,0.336-3.126V118.67C436.771,117.597,436.652,116.553,436.435,115.544z M456.799,79.035 c-13.593,0-24.652-11.059-24.652-24.652s11.059-24.652,24.652-24.652c13.593,0,24.652,11.059,24.652,24.652 S470.392,79.035,456.799,79.035z" />
			<path d="M385.432,174.879c-0.684-0.684-1.442-1.308-2.26-1.843c-0.803-0.535-1.665-0.996-2.572-1.368 c-0.892-0.372-1.827-0.669-2.778-0.847c-1.918-0.387-3.88-0.387-5.798,0c-0.951,0.178-1.888,0.476-2.78,0.847 c-0.907,0.372-1.768,0.832-2.57,1.368c-0.819,0.535-1.577,1.16-2.261,1.843c-2.765,2.765-4.356,6.6-4.356,10.51 c0,0.966,0.089,1.947,0.281,2.899c0.196,0.95,0.494,1.886,0.865,2.795c0.372,0.892,0.818,1.754,1.368,2.557 c0.535,0.818,1.16,1.576,1.843,2.26c0.684,0.684,1.442,1.308,2.261,1.843c0.803,0.535,1.663,0.996,2.57,1.368 c0.893,0.372,1.828,0.669,2.78,0.847c0.951,0.193,1.933,0.297,2.899,0.297c0.965,0,1.947-0.104,2.899-0.297 c0.951-0.178,1.888-0.476,2.778-0.847c0.907-0.372,1.769-0.832,2.572-1.368c0.818-0.535,1.576-1.159,2.26-1.843 c0.685-0.684,1.31-1.442,1.843-2.26c0.535-0.803,0.996-1.665,1.368-2.557c0.372-0.907,0.654-1.843,0.847-2.795 s0.297-1.933,0.297-2.899C389.789,181.479,388.198,177.644,385.432,174.879z" />
			<path d="M147.584,245.489c-3.449-3.449-8.591-5.038-13.409-4.058c-0.951,0.178-1.888,0.476-2.795,0.847 c-0.893,0.372-1.754,0.832-2.557,1.368c-0.819,0.535-1.577,1.16-2.261,1.843s-1.308,1.442-1.858,2.26 c-0.535,0.803-0.981,1.665-1.353,2.572c-0.372,0.892-0.669,1.828-0.862,2.78c-0.193,0.951-0.281,1.933-0.281,2.899 c0,3.91,1.589,7.745,4.356,10.51c0.684,0.684,1.442,1.308,2.261,1.843c0.803,0.535,1.664,0.996,2.557,1.368 c0.907,0.372,1.843,0.669,2.795,0.847c0.951,0.193,1.933,0.297,2.899,0.297c3.91,0,7.745-1.591,10.509-4.356 c2.765-2.765,4.357-6.6,4.357-10.51C151.941,252.09,150.35,248.254,147.584,245.489z" />
			<path d="M295.624,311.746H171.779c-8.209,0-14.866,6.655-14.866,14.866s6.657,14.866,14.866,14.866h123.845 c8.209,0,14.866-6.655,14.866-14.866S303.833,311.746,295.624,311.746z" />
			<path d="M350.723,316.101c-0.684-0.684-1.442-1.308-2.26-1.843c-0.803-0.535-1.665-0.996-2.558-1.368 c-0.892-0.372-1.827-0.669-2.78-0.847c-1.918-0.387-3.893-0.387-5.811,0c-0.953,0.178-1.889,0.476-2.78,0.847 c-0.893,0.372-1.756,0.832-2.572,1.368c-0.803,0.535-1.576,1.16-2.26,1.843c-2.765,2.765-4.357,6.6-4.357,10.51 c0,0.966,0.104,1.947,0.297,2.899c0.193,0.951,0.476,1.888,0.847,2.78c0.372,0.907,0.832,1.769,1.368,2.572 c0.535,0.818,1.16,1.576,1.843,2.26s1.455,1.308,2.26,1.843c0.818,0.535,1.68,0.996,2.572,1.368 c0.892,0.372,1.827,0.669,2.78,0.847c0.951,0.193,1.933,0.297,2.897,0.297c0.981,0,1.949-0.104,2.914-0.297 c0.953-0.178,1.889-0.476,2.78-0.847c0.893-0.372,1.756-0.832,2.558-1.368c0.818-0.535,1.576-1.16,2.26-1.843 c0.699-0.684,1.308-1.442,1.858-2.26c0.535-0.803,0.996-1.665,1.368-2.572c0.372-0.892,0.654-1.828,0.847-2.78 c0.193-0.951,0.281-1.933,0.281-2.899C355.079,322.702,353.503,318.868,350.723,316.101z" />
		</svg>
	)
}

export const Pray: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, strokeWidth, color, width, height, fill } = props

	return (
		<svg
			fill={fill || "#000000"}
			width={width || "24"}
			height={height || "24"}
			className={className || ""}
			strokeWidth={strokeWidth || 2}
			color={color || "currentColor"}
			viewBox="0 0 64 64"
		>
			<circle cx="40.5" cy="23.5" r="21.5" fill="#e5efef" />
			<path
				d="M54,27.006C54,13.1,30,1.818,30,1.818S6,13.1,6,27.006A25.951,25.951,0,0,0,10.047,41H10V63H50V41h-.047A25.951,25.951,0,0,0,54,27.006Z"
				fill="#816982"
			/>
			<circle cx="36" cy="14" r="1" fill="#fff" />
			<circle cx="15" cy="25" r="1" fill="#fff" />
			<circle cx="46" cy="47" r="1" fill="#fff" />
			<circle cx="38" cy="31" r="1" fill="#fff" />
			<circle cx="11" cy="33" r="1" fill="#fff" />
			<circle cx="18" cy="34" r="1" fill="#fff" />
			<circle cx="15" cy="47" r="1" fill="#fff" />
			<path
				d="M37.243,50.029H32.471l.4-4.587a9.378,9.378,0,0,0-.187-2.855L31,35l-2-9-5-3L20.273,47.311,20,50.994a5.594,5.594,0,0,0,5.23,5.582L32,57,14,60l-3.029,3H37.515A6.485,6.485,0,0,0,44,56.315,6.666,6.666,0,0,0,37.243,50.029Z"
				fill="#6b4f5b"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<path
				d="M27.59,25.911l4.823-1.234-1.838-8.45a5.355,5.355,0,0,0-6.3-3.857h0a5.042,5.042,0,0,0-3.54,6.186L21.893,23.2a4.093,4.093,0,0,0,1.7,2.435"
				fill="#e7d1c4"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<path
				d="M20.9,11.094h7.23A2.071,2.071,0,0,1,30.2,13.166v2.929a0,0,0,0,1,0,0H18.833a0,0,0,0,1,0,0V13.166A2.071,2.071,0,0,1,20.9,11.094Z"
				transform="translate(-2.159 4.975) rotate(-11.102)"
				fill="#6b4f5b"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<path
				d="M42.559,36.463l-6.5,3.035-5.707-7.836c-1.039-1.426-2.786-1.923-3.9-1.11h0c-1.116.813-1.179,2.628-.14,4.054l6.09,8.361c1.451,1.992,3.891,2.686,5.45,1.551l6.421-4.677Z"
				fill="#ffffff"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<path
				d="M44.268,39.841l4.165-3.034a1.412,1.412,0,0,0-1.428-2.42l-4.446,2.076Z"
				fill="#e7d1c4"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="37"
				y1="57"
				x2="35"
				y2="57"
				fill="none"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="43"
				y1="19.463"
				x2="43"
				y2="20.878"
				fill="none"
				stroke="#ffce56"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="43"
				y1="25.122"
				x2="43"
				y2="26.537"
				fill="none"
				stroke="#ffce56"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="39.463"
				y1="23"
				x2="40.878"
				y2="23"
				fill="none"
				stroke="#ffce56"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="45.122"
				y1="23"
				x2="46.537"
				y2="23"
				fill="none"
				stroke="#ffce56"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="6"
				y1="63"
				x2="56"
				y2="63"
				fill="none"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
		</svg>
	)
}

export const Madinah: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, strokeWidth, color, width, height, fill } = props

	return (
		<svg
			fill={fill || "#000000"}
			width={width || "24"}
			height={height || "24"}
			className={className || ""}
			strokeWidth={strokeWidth || 2}
			color={color || "currentColor"}
			viewBox="0 0 64 64"
		>
			<circle cx="25.5" cy="26.5" r="22.5" fill="#edebdc" />
			<path
				d="M25,35.046a8,8,0,1,1,16,0Z"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="4"
				y1="59"
				x2="61"
				y2="59"
				fill="none"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="55"
				y="47.96"
				width="3.958"
				height="11.04"
				fill="#edebdc"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="55"
				y="32"
				width="3.958"
				height="13"
				fill="#e7d1c4"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="54"
				y="37"
				width="6"
				height="3"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<polygon
				points="55 32 59 32 57 18.787 55 32"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<polygon
				points="59 48 55 48 53.859 45 60.224 45 59 48"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="6"
				y="47.96"
				width="3.958"
				height="11.04"
				fill="#edebdc"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="6"
				y="32"
				width="3.958"
				height="13"
				fill="#e7d1c4"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="5"
				y="37"
				width="6"
				height="3"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<polygon
				points="6 32 10 32 8 18.787 6 32"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<polygon
				points="10 48 6 48 4.859 45 11.224 45 10 48"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="46"
				y="37.96"
				width="3.958"
				height="11.04"
				fill="#edebdc"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="46"
				y="22"
				width="3.958"
				height="13"
				fill="#e7d1c4"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="45"
				y="27"
				width="6"
				height="3"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<polygon
				points="46 22 50 22 48 8.787 46 22"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<polygon
				points="50 38 46 38 44.859 35 51.224 35 50 38"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="15"
				y="37.96"
				width="3.958"
				height="11.04"
				fill="#edebdc"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="15"
				y="22"
				width="3.958"
				height="13"
				fill="#e7d1c4"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="14"
				y="27"
				width="6"
				height="3"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<polygon
				points="15 22 19 22 17 8.787 15 22"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<polygon
				points="19 38 15 38 13.859 35 20.224 35 19 38"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="6"
				y="56.064"
				width="52.958"
				height="2.936"
				fill="#e7d1c4"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="15"
				y="47"
				width="35"
				height="12"
				fill="#e7d1c4"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<ellipse
				cx="15.997"
				cy="56.064"
				rx="2.387"
				ry="2.431"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<ellipse
				cx="20.771"
				cy="56.064"
				rx="2.387"
				ry="2.431"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<ellipse
				cx="25.544"
				cy="56.064"
				rx="2.387"
				ry="2.431"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<ellipse
				cx="30.318"
				cy="56.064"
				rx="2.387"
				ry="2.431"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<ellipse
				cx="35.091"
				cy="56.064"
				rx="2.387"
				ry="2.431"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<ellipse
				cx="39.865"
				cy="56.064"
				rx="2.387"
				ry="2.431"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<ellipse
				cx="44.638"
				cy="56.064"
				rx="2.387"
				ry="2.431"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="25"
				y="35"
				width="16"
				height="6"
				fill="#edebdc"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<ellipse
				cx="49.411"
				cy="56.064"
				rx="2.387"
				ry="2.431"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<polygon
				points="40.931 47 38 47 38 41 39.412 39 40.931 41 40.931 47"
				fill="#e7d1c4"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<polygon
				points="27.931 47 25 47 25 41 26.412 39 27.931 41 27.931 47"
				fill="#e7d1c4"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="27.931"
				y="41"
				width="10.069"
				height="6"
				fill="#edebdc"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<path
				d="M30,47a3,3,0,1,1,6,0Z"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="22"
				y="41"
				width="3"
				height="6"
				fill="#edebdc"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect
				x="41"
				y="41"
				width="3"
				height="6"
				fill="#edebdc"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<path
				d="M18.384,47a3.184,3.184,0,0,1,6.365,0Z"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<path
				d="M41,47a3.013,3.013,0,1,1,6.025,0Z"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<path
				d="M27.931,41c0-1.657,2.137-3,4.773-3s4.774,1.343,4.774,3Z"
				fill="#bf7e68"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="33"
				y1="27"
				x2="33"
				y2="24"
				fill="none"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
		</svg>
	)
}

export const Kaaba: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, strokeWidth, color, width, height, fill } = props

	return (
		<svg
			fill={fill || "#000000"}
			width={width || "24"}
			height={height || "24"}
			className={className || ""}
			strokeWidth={strokeWidth || 2}
			color={color || "currentColor"}
			viewBox="0 0 64 64"
		>
			<circle cx="41.5" cy="34.5" r="21.5" fill="#e5efef" />
			<line
				x1="54"
				y1="9"
				x2="54"
				y2="12"
				fill="none"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="54"
				y1="16"
				x2="54"
				y2="19"
				fill="none"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="52"
				y1="14"
				x2="49"
				y2="14"
				fill="none"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="59"
				y1="14"
				x2="56"
				y2="14"
				fill="none"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<circle cx="9" cy="15" r="1" fill="#4c241d" />
			<circle cx="59" cy="28" r="1" fill="#4c241d" />
			<polygon
				points="48 22.571 27 30.143 28 62 48 53.429 48 22.571"
				fill="#6b4f5b"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<polygon
				points="8 23 28 30.143 28 62 8 53.429 8 23"
				fill="#b5a19c"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<polygon
				points="48 40.571 28 49.143 28 57 48 48.429 48 40.571"
				fill="#ffffff"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<polygon
				points="8 22.571 28 31.143 48 22.571 28 14 8 22.571"
				fill="#ffffff"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="38.476"
				y1="34.653"
				x2="48"
				y2="30.571"
				fill="none"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="31.151"
				y1="37.792"
				x2="35.5"
				y2="35.929"
				fill="none"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<polygon
				points="8 40.571 28 49.143 28 57 8 48.429 8 40.571"
				fill="#ffffff"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<polygon
				points="32 60.286 39 57.286 39 39.286 32 42.286 32 60.286"
				fill="#fc8c29"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="28"
				y1="9"
				x2="28"
				y2="5"
				fill="none"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="25"
				y1="11"
				x2="22"
				y2="8"
				fill="none"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="31"
				y1="11"
				x2="34"
				y2="8"
				fill="none"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="48"
				y1="51"
				x2="56"
				y2="51"
				fill="none"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<line
				x1="8"
				y1="51"
				x2="2"
				y2="51"
				fill="none"
				stroke="#4c241d"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
		</svg>
	)
}

export const LibraryColored: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, strokeWidth, color, width, height, fill } = props

	return (
		<svg
			fill={fill || "#000000"}
			width={width || "24"}
			height={height || "24"}
			className={className || ""}
			strokeWidth={strokeWidth || 2}
			color={color || "currentColor"}
			viewBox="0 0 512 512"
		>
			<path fill="#B88353" d="M0,211.862h512V0H0V211.862z" />
			<path
				fill="#DD342E"
				d="M35.31,211.862h52.966V70.621H35.31V211.862z"
			/>
			<path
				fill="#ECBA16"
				d="M194.207,211.862h52.966V35.31h-52.966V211.862z"
			/>
			<path
				fill="#25B99A"
				d="M88.276,211.862h52.966V88.276H88.276V211.862z"
			/>
			<path
				fill="#A2D672"
				d="M141.241,211.862h52.966V70.621h-52.966V211.862z"
			/>
			<path fill="#8C5D37" d="M0,423.724h512V211.862H0V423.724z" />
			<path fill="#B88353" d="M0,512h211.862v-88.276H0V512z" />
			<path fill="#B88353" d="M300.138,512H512v-88.276H300.138V512z" />
			<path
				fill="#8C5D37"
				d="M114.759,467.862c0,4.873-3.955,8.828-8.828,8.828c-4.873,0-8.828-3.955-8.828-8.828 c0-4.873,3.955-8.828,8.828-8.828C110.804,459.034,114.759,462.989,114.759,467.862"
			/>
			<path
				fill="#8C5D37"
				d="M414.897,467.862c0,4.873-3.955,8.828-8.828,8.828s-8.828-3.955-8.828-8.828 c0-4.873,3.955-8.828,8.828-8.828S414.897,462.989,414.897,467.862"
			/>
			<path fill="#8C5D37" d="M211.862,512h88.276v-88.276h-88.276V512z" />
			<path
				fill="#B12621"
				d="M35.31,105.931h52.966v-35.31H35.31V105.931z"
			/>
			<path
				fill="#199172"
				d="M88.276,123.586h52.966v-35.31H88.276V123.586z"
			/>
			<path
				fill="#88C057"
				d="M141.241,105.931h52.966v-35.31h-52.966V105.931z"
			/>
			<path
				fill="#ED8A19"
				d="M194.207,70.621h52.966V35.31h-52.966V70.621z"
			/>
			<path
				fill="#25B99A"
				d="M371.129,189.387l-44.509,22.475L262.408,84.824l47.784-22.855L371.129,189.387z"
			/>
			<path
				fill="#199172"
				d="M310.189,61.968l-47.784,22.855l-15.236-31.859l47.784-22.855L310.189,61.968z"
			/>
			<path
				fill="#25B99A"
				d="M52.966,423.724h70.621V264.828H52.966V423.724z"
			/>
			<path
				fill="#199172"
				d="M52.966,300.138h70.621v-35.31H52.966V300.138z"
			/>
			<path
				fill="#A2D672"
				d="M123.586,423.724h70.621V247.172h-70.621V423.724z"
			/>
			<path
				fill="#88C057"
				d="M123.586,282.483h70.621v-35.31h-70.621V282.483z"
			/>
			<path
				fill="#199172"
				d="M88.276,397.241c-4.882,0-8.828-3.955-8.828-8.828v-52.966c0-4.873,3.946-8.828,8.828-8.828 s8.828,3.955,8.828,8.828v52.966C97.103,393.287,93.158,397.241,88.276,397.241"
			/>
			<path
				fill="#88C057"
				d="M158.897,397.241c-4.882,0-8.828-3.955-8.828-8.828v-70.621c0-4.873,3.946-8.828,8.828-8.828 c4.882,0,8.828,3.955,8.828,8.828v70.621C167.724,393.287,163.778,397.241,158.897,397.241"
			/>
			<path
				fill="#DD342E"
				d="M423.724,423.724H238.345c10.69-16.04,10.69-36.926,0-52.966h185.379 c14.627,0,26.483,11.855,26.483,26.483C450.207,411.869,438.351,423.724,423.724,423.724"
			/>
			<path
				fill="#ECBA16"
				d="M450.207,370.759H264.828c10.69-16.04,10.69-36.926,0-52.966h185.379 c14.627,0,26.483,11.855,26.483,26.483C476.69,358.903,464.834,370.759,450.207,370.759"
			/>
			<path
				fill="#25B99A"
				d="M423.724,317.793H238.345c10.69-16.04,10.69-36.926,0-52.965h185.379 c14.627,0,26.483,11.855,26.483,26.483C450.207,305.938,438.351,317.793,423.724,317.793"
			/>
		</svg>
	)
}

export const PaperAndPen: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, strokeWidth, color, width, height, fill } = props

	return (
		<svg
			fill={fill || "#000000"}
			width={width || "24"}
			height={height || "24"}
			className={className || ""}
			strokeWidth={strokeWidth || 2}
			color={color || "currentColor"}
			viewBox="0 0 512 512"
		>
			<path
				fill="#EDEBDA"
				d="M371.876,338.979l-45.903,31.779l-14.124-10.593l17.655-52.966l94.455-128.883V79.448L379.821,35.31 L344.511,0H53.2v512h370.759V270.124L371.876,338.979z"
			/>
			<path
				fill="#CEC9AE"
				d="M344.511,79.448h79.448l-35.31-35.31L344.511,0V79.448z"
			/>
			<path
				fill="#7383BF"
				d="M309.2,388.414c-1.766,0-3.531-0.883-5.297-1.766c-4.414-2.648-5.297-7.945-2.648-12.359l9.71-14.124 c2.648-4.414,7.945-5.297,12.359-2.648c4.414,2.648,5.297,7.945,2.648,12.359L316.262,384 C314.497,387.531,311.849,388.414,309.2,388.414"
			/>
			<path
				fill="#424A60"
				d="M325.973,370.759l-14.124-10.593l11.476-52.083l49.434,33.545L325.973,370.759z"
			/>
			<polygon
				fill="#7483BF"
				points="373.642,240.11 421.311,277.186 432.786,263.062 384.235,225.986 "
			/>
			<polygon
				fill="#7483BF"
				points="323.324,308.083 372.759,341.628 388.649,320.441 341.862,282.483 "
			/>
			<polygon
				fill="#7483BF"
				points="352.455,268.359 399.242,306.317 410.717,291.31 363.049,254.234 "
			/>
			<path
				fill="#7483BF"
				d="M454.855,217.159l-34.428-23.835c-4.414-2.648-9.71-1.766-13.241,1.766l-12.359,16.772 l48.552,37.076l13.241-17.655C460.152,226.869,459.269,220.69,454.855,217.159z"
			/>
			<polygon
				fill="#424A60"
				points="341.862,282.483 388.649,320.441 399.242,306.317 352.455,268.359 "
			/>
			<polygon
				fill="#424A60"
				points="363.049,254.234 410.717,291.31 421.311,277.186 373.642,240.11 "
			/>
			<polygon
				fill="#424A60"
				points="384.235,225.986 432.786,263.062 443.38,248.938 394.828,211.862 "
			/>
			<path
				fill="#CEC9AE"
				d="M229.752,176.552H123.821c-5.297,0-8.828-3.531-8.828-8.828s3.531-8.828,8.828-8.828h105.931 c5.297,0,8.828,3.531,8.828,8.828S235.049,176.552,229.752,176.552"
			/>
			<path
				fill="#CEC9AE"
				d="M229.752,282.483H123.821c-5.297,0-8.828-3.531-8.828-8.828c0-5.297,3.531-8.828,8.828-8.828 h105.931c5.297,0,8.828,3.531,8.828,8.828C238.58,278.952,235.049,282.483,229.752,282.483"
			/>
			<path
				fill="#CEC9AE"
				d="M229.752,388.414H123.821c-5.297,0-8.828-3.531-8.828-8.828s3.531-8.828,8.828-8.828h105.931 c5.297,0,8.828,3.531,8.828,8.828S235.049,388.414,229.752,388.414"
			/>
			<path
				fill="#CEC9AE"
				d="M300.373,185.379c-2.648,0-4.414-0.883-6.179-2.648l-17.655-17.655 c-3.531-3.531-3.531-8.828,0-12.359c3.531-3.531,8.828-3.531,12.359,0l10.593,10.593l37.959-45.903 c3.531-3.531,8.828-4.414,12.359-0.883c3.531,3.531,4.414,8.828,0.883,12.359l-44.138,52.966 C305.669,184.497,303.021,185.379,300.373,185.379L300.373,185.379"
			/>
			<path
				fill="#CEC9AE"
				d="M300.373,291.31c-2.648,0-4.414-0.883-6.179-2.648l-17.655-17.655 c-3.531-3.531-3.531-8.828,0-12.359s8.828-3.531,12.359,0l10.593,10.593l37.959-45.903c3.531-3.531,8.828-4.414,12.359-0.883 c3.531,3.531,4.414,8.828,0.883,12.359l-44.138,52.966C305.669,290.428,303.021,291.31,300.373,291.31L300.373,291.31"
			/>
		</svg>
	)
}

export const Scholar: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, strokeWidth, color, width, height, fill } = props

	return (
		<svg
			fill={fill || "#000000"}
			width={width || "24"}
			height={height || "24"}
			className={className || ""}
			strokeWidth={strokeWidth || 2}
			color={color || "currentColor"}
			viewBox="0 0 503.893 503.893"
		>
			<path
				fill="#ECF4F7"
				d="M318.249,447.853c-9.387,12.8-18.773,29.867-24.747,50.347h-42.667 C250.836,498.2,284.116,464.92,318.249,447.853"
			/>
			<path
				fill="#AE938D"
				d="M370.302,284.867h2.56c-12.8,87.04-44.373,128-122.027,128s-108.373-40.96-122.027-128h2.56 C148.436,301.933,191.102,319,191.102,319s8.533-42.667,34.133-42.667h51.2c25.6,0,34.133,42.667,34.133,42.667 S353.236,301.933,370.302,284.867"
			/>
			<path
				fill="#ECF4F7"
				d="M353.236,498.2h-59.733c5.973-21.333,15.36-37.547,24.747-50.347 c17.067-23.893,34.987-34.133,34.987-34.133c119.467,0,128.853,26.453,136.533,51.2l8.533,34.133H353.236V498.2z"
			/>
			<path
				fill="#ECF4F7"
				d="M261.076,97.133c-54.613,19.627-93.013,44.373-115.2,64l-14.507-20.48 c0,0,73.387-93.867,209.92-110.933l0.853-0.853c62.293,28.16,87.893,75.093,87.893,128.853c0,51.2-21.333,85.333-21.333,85.333 s-15.36,19.627-32.427,25.6h-0.853c1.707-12.8,2.56-27.307,4.267-42.667v-34.133C378.836,173.933,344.702,114.2,261.076,97.133"
			/>
			<path
				fill="#ECF4F7"
				d="M125.396,268.653C103.209,260.12,92.969,242.2,92.969,242.2s-21.333-34.133-21.333-85.333 c0-75.093,51.2-136.533,179.2-153.6c36.693,5.12,66.56,13.653,91.307,24.747l-0.853,0.853 C204.756,45.933,131.369,139.8,131.369,139.8l14.507,20.48c-15.36,13.653-23.04,24.747-23.04,30.72v17.067v17.067 c0.853,15.36,2.56,29.867,4.267,43.52H125.396z"
			/>
			<path
				fill="#ECF4F7"
				d="M232.916,498.2H3.369l8.533-34.133c8.533-25.6,34.133-51.2,102.4-51.2 c42.667,0,85.333,25.6,110.933,68.267l7.68,15.36V498.2z"
			/>
			<path
				fill="#FFD0A1"
				d="M378.836,191v34.133c-0.853,15.36-2.56,29.013-3.413,42.667c-0.853,5.973-1.707,11.947-2.56,17.92 h-2.56c-17.067,17.067-59.733,34.133-59.733,34.133s-8.533-42.667-34.133-42.667h-51.2c-25.6,0-34.133,42.667-34.133,42.667 s-42.667-17.067-59.733-34.133h-2.56c-0.853-5.12-1.707-11.093-2.56-17.067c-1.707-13.653-2.56-28.16-4.267-42.667V208.92v-17.067 c0-5.12,7.68-17.067,23.04-30.72c22.187-19.627,59.733-44.373,115.2-64C344.702,114.2,378.836,173.933,378.836,191"
			/>
			<path
				fill="#51565F"
				d="M294.502,503.467h-0.853c-2.56-0.853-3.413-3.413-2.56-5.12c4.267-14.507,9.387-26.453,15.36-36.693 c-27.307,17.067-50.347,40.96-51.2,40.96c-1.707,1.707-4.267,1.707-5.973,0c-1.707-1.707-1.707-4.267,0-5.973 c1.707-1.707,33.28-33.28,67.413-51.2c17.067-23.04,34.987-34.133,35.84-34.987c1.707-0.853,2.56-0.853,4.267-0.853 c120.32,0,129.707,28.16,138.24,53.76l8.533,34.133c0.853,2.56-0.853,4.267-3.413,5.12c-2.56,0.853-4.267-0.853-5.12-3.413 l-8.533-34.133c-7.68-22.187-16.213-47.787-129.707-47.787h-0.853c-3.413,2.56-17.067,11.947-31.573,29.867 c0,0.853-0.853,2.56-2.56,3.413c-9.387,12.8-17.92,28.16-23.04,48.64C297.916,502.613,296.209,503.467,294.502,503.467z M4.369,503.467H3.516c-2.56-0.853-3.413-2.56-3.413-5.12l8.533-34.133c8.533-24.747,33.28-54.613,106.667-54.613 c44.373,0,88.747,27.307,114.347,69.973c0.853,1.707,0.853,4.267-1.707,5.973c-1.707,0.853-4.267,0.853-5.973-1.707 c-24.747-40.96-65.707-66.56-107.52-66.56c-54.613,0-87.893,16.213-98.133,48.64l-8.533,34.133 C7.782,501.76,6.076,503.467,4.369,503.467z M354.236,503.467c-2.56,0-4.267-1.707-4.267-4.267c0-1.707,0-35.84,17.92-62.293 c1.707-1.707,4.267-2.56,5.973-0.853c1.707,1.707,2.56,4.267,0.853,5.973c-16.213,23.893-16.213,57.173-16.213,57.173 C358.502,501.76,356.796,503.467,354.236,503.467z M251.836,418.133c-100.693,0-123.733-67.413-132.267-192V192 c0-16.213,47.787-64,139.093-97.28c0.853-0.853,1.707-0.853,2.56-0.853c29.013-10.24,63.147-19.627,100.693-25.6 c2.56,0,4.267,0.853,5.12,3.413c0,2.56-0.853,4.267-3.413,5.12c-10.24,1.707-19.627,3.413-29.013,5.12 c19.627,8.533,53.76,28.16,66.56,65.707c0.853,2.56-0.853,4.267-2.56,5.12c-2.56,0.853-4.267-0.853-5.12-2.56 c-15.36-46.08-67.413-63.147-73.387-65.707c-15.36,3.413-29.013,7.68-42.667,11.947c74.24,20.48,107.52,75.947,107.52,94.72v34.133 C375.569,350.72,352.529,418.133,251.836,418.133z M135.782,294.4c14.507,85.333,47.787,115.2,116.053,115.2 s101.547-29.867,116.053-115.2c-19.627,15.36-52.907,29.013-54.613,29.867c-0.853,0.853-2.56,0-3.413,0 c-0.853-0.853-1.707-1.707-2.56-2.56c0,0-8.533-39.253-29.867-39.253h-51.2c-22.187,0-29.867,39.253-29.867,39.253 c0,0.853-0.853,2.56-2.56,2.56c-0.853,0.853-2.56,0.853-3.413,0C188.689,323.413,155.409,309.76,135.782,294.4z M226.236,273.067 h51.2c23.04,0,34.133,29.013,36.693,40.96c11.093-5.12,40.96-17.92,53.76-31.573c0.853-0.853,0.853-0.853,1.707-0.853 c2.56-17.067,4.267-34.987,5.973-56.32v-34.133c0-16.213-34.133-72.533-113.493-89.6c-90.453,32.427-133.973,77.653-133.973,89.6 v34.133c1.707,20.48,3.413,39.253,5.973,55.467c0.853,0,0.853,0.853,1.707,0.853c12.8,12.8,42.667,26.453,53.76,31.573 C192.102,302.08,203.196,273.067,226.236,273.067z M268.902,315.733h-34.133c-2.56,0-4.267-1.707-4.267-4.267 c0-2.56,1.707-4.267,4.267-4.267h34.133c2.56,0,4.267,1.707,4.267,4.267C273.169,314.027,271.462,315.733,268.902,315.733z M93.969,247.467c-1.707,0-2.56-0.853-3.413-1.707c-0.853-1.707-22.187-35.84-22.187-87.893C68.369,71.68,133.222,16.213,250.982,0 h0.853c117.76,15.36,182.613,71.68,182.613,157.867c0,52.053-21.333,86.187-22.187,87.893c-0.853,1.707-4.267,2.56-5.973,1.707 c-1.707-0.853-2.56-4.267-1.707-5.973c0,0,20.48-34.133,20.48-83.627c0-56.32-28.16-98.133-82.773-123.733h-0.853 C208.316,51.2,134.929,142.507,134.076,143.36c-1.707,1.707-4.267,2.56-5.973,0.853c-1.707-1.707-2.56-4.267-0.853-5.973 c0.853-0.853,71.68-89.6,200.533-110.933c-22.187-8.533-47.787-15.36-77.653-18.773C135.782,23.893,75.195,75.946,75.195,157.866 c0,49.493,20.48,82.773,20.48,82.773c0.853,1.707,0.853,4.267-1.707,5.973C95.676,247.467,94.822,247.467,93.969,247.467z M303.036,204.8c-2.56,0-4.267-1.707-4.267-4.267v-5.973l-12.8-0.853c-2.56,0-4.267-2.56-4.267-4.267 c0-2.56,1.707-4.267,4.267-4.267l17.067,0.853l0,0l17.067,0.853c2.56,0,4.267,2.56,4.267,4.267c0,2.56-1.707,4.267-4.267,4.267 l-12.8-0.853v5.12C307.302,203.093,305.596,204.8,303.036,204.8z M200.636,204.8c-2.56,0-4.267-1.707-4.267-4.267v-5.12l-12.8,0.853 c-2.56,0-4.267-1.707-4.267-4.267c0-2.56,1.707-4.267,4.267-4.267l17.067-0.853l0,0l17.067-0.853c2.56,0,4.267,1.707,4.267,4.267 c0,2.56-1.707,4.267-4.267,4.267l-12.8,0.853v5.973C204.902,203.093,203.196,204.8,200.636,204.8z"
			/>
		</svg>
	)
}

export const LanguagesIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, strokeWidth, color, width, height, fill, stroke } = props

	return (
		<svg
			fill={fill || "none"}
			width={width || "24"}
			height={height || "24"}
			className={className || ""}
			strokeWidth={strokeWidth || 1}
			color={color || "currentColor"}
			stroke={stroke || "#000000"}
			viewBox="0 0 24 24"
		>
			<path d="M5 8l6 6" />
			<path d="M4 14l6-6 2-3" />
			<path d="M2 5h12" />
			<path d="M7 2h1" />
			<path d="M22 22l-5-10-5 10" />
			<path d="M14 18h6" />
		</svg>
	)
}

export const SearchIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, width, height, fill } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className || ""}
			width={width || "24"}
			height={height || "24"}
			fill={fill || "currentColor"}
		>
			<path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
		</svg>
	)
}

export const PhoneIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, width, height, fill } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className || ""}
			width={width || "24"}
			height={height || "24"}
			fill={fill || "currentColor"}
		>
			<path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z" />
		</svg>
	)
}

export const SendIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, width, height, fill } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className || ""}
			width={width || "24"}
			height={height || "24"}
			fill={fill || "currentColor"}
		>
			<path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z" />
		</svg>
	)
}

export const ShareIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, width, height, fill } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className || ""}
			width={width || "24"}
			height={height || "24"}
			fill={fill || "currentColor"}
		>
			<path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z" />
		</svg>
	)
}

export const EmailIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, width, height, fill } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className || ""}
			width={width || "24"}
			height={height || "24"}
			fill={fill || "currentColor"}
		>
			<path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" />
		</svg>
	)
}

export const LocationIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, strokeWidth, color, width, height, fill } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className || ""}
			width={width || "24"}
			height={height || "24"}
			fill={fill || "currentColor"}
		>
			<path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" />
		</svg>
	)
}

export const TikTokIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, stroke, strokeWidth, color, width, height, fill } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className || ""}
			width={width || "24"}
			height={height || "24"}
			fill={fill || "currentColor"}
		>
			<path d="M11.0004 2V8.41396C10.5947 8.33909 10.1768 8.3 9.75039 8.3C5.96724 8.3 2.90039 11.3668 2.90039 15.15C2.90039 18.9332 5.96724 22 9.75039 22C13.5335 22 16.6004 18.9332 16.6004 15.15V11.4136C17.6366 11.8539 18.7662 12.1 20.0005 12.1H21.0005V6.5H20.0005C18.0966 6.5 16.6004 4.96259 16.6004 3V2H11.0004ZM13.0004 4H14.688C15.0818 6.22009 16.7673 7.99607 19.0005 8.4091V10.0282C17.9624 9.87602 17.0253 9.48645 16.1567 8.905L14.6004 7.86327V15.15C14.6004 17.8286 12.429 20 9.75039 20C7.07181 20 4.90039 17.8286 4.90039 15.15C4.90039 12.4714 7.07181 10.3 9.75039 10.3C9.83431 10.3 9.91769 10.3021 10.0005 10.3063V11.9095C9.91795 11.9032 9.83454 11.9 9.75039 11.9C7.95547 11.9 6.50039 13.3551 6.50039 15.15C6.50039 16.9449 7.95547 18.4 9.75039 18.4C11.5453 18.4 13.0004 16.9449 13.0004 15.15C13.0004 11.4334 12.9992 7.71665 13.0004 4ZM8.50039 15.15C8.50039 14.4596 9.06003 13.9 9.75039 13.9C10.4407 13.9 11.0004 14.4596 11.0004 15.15C11.0004 15.8404 10.4407 16.4 9.75039 16.4C9.06003 16.4 8.50039 15.8404 8.50039 15.15Z" />
		</svg>
	)
}

export const FacebookIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, stroke, strokeWidth, color, width, height, fill } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className || ""}
			width={width || "24"}
			height={height || "24"}
			fill={fill || "currentColor"}
		>
			<path d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z" />
		</svg>
	)
}

export const YoutubeIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, stroke, strokeWidth, color, width, height, fill } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className || ""}
			width={width || "24"}
			height={height || "24"}
			fill={fill || "currentColor"}
		>
			<path d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z" />
		</svg>
	)
}

export const TelegramIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, strokeWidth, color, width, height, fill } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className || ""}
			width={width || "24"}
			height={height || "24"}
			fill={fill || "currentColor"}
		>
			<path
				d="M12 4C10.4178 4 8.87103 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.93 9.48L14.62 15.67C14.52 16.11 14.26 16.21 13.89 16.01L11.89 14.53L10.89 15.46C10.8429 15.5215 10.7824 15.5715 10.7131 15.6062C10.6438 15.6408 10.5675 15.6592 10.49 15.66L10.63 13.66L14.33 10.31C14.5 10.17 14.33 10.09 14.09 10.23L9.55 13.08L7.55 12.46C7.12 12.33 7.11 12.03 7.64 11.83L15.35 8.83C15.73 8.72 16.05 8.94 15.93 9.48Z"
				fill={fill || "#24A1DE"}
			/>
		</svg>
	)
}

export const InstagramIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, strokeWidth, color, width, height, fill } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className || ""}
			width={width || "24"}
			height={height || "24"}
			fill={fill || "currentColor"}
		>
			<path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z" />
		</svg>
	)
}

export const WhatsAppIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, stroke, strokeWidth, color, width, height, fill } = props
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className || ""}
			width={width || "24"}
			height={height || "24"}
			fill={fill || "currentColor"}
		>
			<path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z" />
		</svg>
	)
}

export const XIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, strokeWidth, stroke, color, width, height, fill } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className || ""}
			width={width || "24"}
			height={height || "24"}
			fill={fill || "currentColor"}
		>
			<path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z" />
		</svg>
	)
}

export const MenuIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, width, height, fill } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className || ""}
			width={width || "24"}
			height={height || "24"}
			fill={fill || "currentColor"}
		>
			<path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
		</svg>
	)
}

export const CloseIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, width, height, fill } = props
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className || ""}
			width={width || "24"}
			height={height || "24"}
			fill={fill || "currentColor"}
		>
			<path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
		</svg>
	)
}

export const Placehold: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, width, height, fill } = props

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "400"}
			height={height || "400"}
			viewBox="0 0 400 400"
			className={className || ""}
		>
			<rect width="100%" height="100%" fill={fill || "#DDDDDD"} />
			<path
				fill={fill || "#999999"}
				d="M87.3 204.72h11.66v-12.54q0-1.77.24-3.92l-11.9 16.46Zm17.36 0h4.82v3.79q0 .53-.35.91-.34.39-.98.39h-3.49v9.35h-5.7v-9.35H82.79q-.66 0-1.16-.42-.51-.41-.64-1.02l-.69-3.31 18.16-24.25h6.2v23.91Zm35.59-4.72q0 5.01-1.08 8.71-1.07 3.69-2.97 6.1-1.89 2.42-4.47 3.59-2.59 1.18-5.58 1.18-3 0-5.55-1.18-2.56-1.17-4.44-3.59-1.88-2.41-2.94-6.1-1.06-3.7-1.06-8.71 0-5.03 1.06-8.72 1.06-3.68 2.94-6.09 1.88-2.41 4.44-3.59 2.55-1.18 5.55-1.18 2.99 0 5.58 1.18 2.58 1.18 4.47 3.59 1.9 2.41 2.97 6.09 1.08 3.69 1.08 8.72Zm-6.76 0q0-4.16-.61-6.89-.61-2.73-1.63-4.35-1.02-1.61-2.35-2.26-1.32-.65-2.75-.65-1.41 0-2.72.65-1.31.65-2.32 2.26-1 1.62-1.6 4.35-.6 2.73-.6 6.89t.6 6.89q.6 2.73 1.6 4.35 1.01 1.61 2.32 2.26 1.31.65 2.72.65 1.43 0 2.75-.65 1.33-.65 2.35-2.26 1.02-1.62 1.63-4.35.61-2.73.61-6.89Zm37.5 0q0 5.01-1.08 8.71-1.07 3.69-2.97 6.1-1.89 2.42-4.47 3.59-2.59 1.18-5.58 1.18-3 0-5.55-1.18-2.56-1.17-4.44-3.59-1.88-2.41-2.94-6.1-1.06-3.7-1.06-8.71 0-5.03 1.06-8.72 1.06-3.68 2.94-6.09 1.88-2.41 4.44-3.59 2.55-1.18 5.55-1.18 2.99 0 5.58 1.18 2.58 1.18 4.47 3.59 1.9 2.41 2.97 6.09 1.08 3.69 1.08 8.72Zm-6.76 0q0-4.16-.61-6.89-.61-2.73-1.63-4.35-1.02-1.61-2.35-2.26-1.32-.65-2.75-.65-1.41 0-2.72.65-1.31.65-2.32 2.26-1 1.62-1.6 4.35-.6 2.73-.6 6.89t.6 6.89q.6 2.73 1.6 4.35 1.01 1.61 2.32 2.26 1.31.65 2.72.65 1.43 0 2.75-.65 1.33-.65 2.35-2.26 1.02-1.62 1.63-4.35.61-2.73.61-6.89Zm48.84 10.39-3.47 3.42-8.99-8.99-9.06 9.04-3.47-3.42 9.06-9.09-8.64-8.64 3.45-3.44 8.64 8.64 8.58-8.59 3.5 3.45-8.61 8.61 9.01 9.01Zm22.95-5.67h11.66v-12.54q0-1.77.24-3.92l-11.9 16.46Zm17.35 0h4.83v3.79q0 .53-.35.91-.34.39-.98.39h-3.5v9.35h-5.69v-9.35h-16.17q-.66 0-1.16-.42-.51-.41-.64-1.02l-.69-3.31 18.15-24.25h6.2v23.91Zm35.59-4.72q0 5.01-1.07 8.71-1.07 3.69-2.97 6.1-1.89 2.42-4.48 3.59-2.58 1.18-5.57 1.18-3 0-5.56-1.18-2.55-1.17-4.43-3.59-1.89-2.41-2.95-6.1-1.06-3.7-1.06-8.71 0-5.03 1.06-8.72 1.06-3.68 2.95-6.09 1.88-2.41 4.43-3.59 2.56-1.18 5.56-1.18 2.99 0 5.57 1.18 2.59 1.18 4.48 3.59 1.9 2.41 2.97 6.09 1.07 3.69 1.07 8.72Zm-6.75 0q0-4.16-.61-6.89-.61-2.73-1.63-4.35-1.02-1.61-2.35-2.26-1.32-.65-2.75-.65-1.41 0-2.72.65-1.31.65-2.32 2.26-1.01 1.62-1.6 4.35-.6 2.73-.6 6.89t.6 6.89q.59 2.73 1.6 4.35 1.01 1.61 2.32 2.26 1.31.65 2.72.65 1.43 0 2.75-.65 1.33-.65 2.35-2.26 1.02-1.62 1.63-4.35.61-2.73.61-6.89Zm37.49 0q0 5.01-1.07 8.71-1.07 3.69-2.97 6.1-1.89 2.42-4.48 3.59-2.58 1.18-5.57 1.18-3 0-5.56-1.18-2.55-1.17-4.43-3.59-1.89-2.41-2.95-6.1-1.06-3.7-1.06-8.71 0-5.03 1.06-8.72 1.06-3.68 2.95-6.09 1.88-2.41 4.43-3.59 2.56-1.18 5.56-1.18 2.99 0 5.57 1.18 2.59 1.18 4.48 3.59 1.9 2.41 2.97 6.09 1.07 3.69 1.07 8.72Zm-6.75 0q0-4.16-.61-6.89-.61-2.73-1.63-4.35-1.02-1.61-2.35-2.26-1.32-.65-2.75-.65-1.41 0-2.72.65-1.31.65-2.32 2.26-1.01 1.62-1.6 4.35-.6 2.73-.6 6.89t.6 6.89q.59 2.73 1.6 4.35 1.01 1.61 2.32 2.26 1.31.65 2.72.65 1.43 0 2.75-.65 1.33-.65 2.35-2.26 1.02-1.62 1.63-4.35.61-2.73.61-6.89Z"
			/>
		</svg>
	)
}

export const Placeholder: FC<SVGProps<SVGSVGElement>> = (props) => {
	const { className, strokeWidth, color, width, height, fill } = props

	return (
		<svg
			fill={fill || "#000000"}
			width={width || "24"}
			height={height || "24"}
			className={className || ""}
			strokeWidth={strokeWidth || 2}
			color={color || "currentColor"}
			viewBox="0 0 511.999 511.999"
		></svg>
	)
}
