const FacebookIcon = () => (
	<svg width="24px" height="24px" viewBox="0 0 192 192" fill="none">
		<g id="SVGRepo_iconCarrier">
			<path
				stroke="#000000"
				strokeLinecap="round"
				strokeWidth="8"
				d="M96 170c40.869 0 74-33.131 74-74 0-40.87-33.131-74-74-74-40.87 0-74 33.13-74 74 0 40.869 33.13 74 74 74Zm0 0v-62m30-48h-10c-11.046 0-20 8.954-20 20v28m0 0H74m22 0h22"
			></path>
		</g>
	</svg>
)

const InstagramIcon = () => (
	<svg width="24px" height="24px" viewBox="0 0 192 192" fill="none">
		<g id="SVGRepo_iconCarrier">
			<path
				stroke="#000000"
				strokeWidth="8"
				d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"
			/>
			<circle cx="96" cy="96" r="30" stroke="#000000" strokeWidth="8" />
			<circle cx="135" cy="57" r="9" fill="#000000" />
		</g>
	</svg>
)

const YoutubeIcon = () => (
	<svg width="30px" height="30px" viewBox="0 0 192 192" fill="none">
		<g id="SVGRepo_iconCarrier">
			<path
				stroke="#000000"
				strokeWidth="8"
				d="M170 96c0-45-4.962-49.999-50-50H72c-45.038.001-50 5-50 50s4.962 49.999 50 50h48c45.038-.001 50-5 50-50Z"
			></path>
			<path
				stroke="#000000"
				strokeLinejoin="round"
				strokeWidth="8"
				d="M118 96 82 74v44l36-22Z"
			></path>
		</g>
	</svg>
)

const TikTokIcon = () => (
	<svg width="24px" height="24px" viewBox="0 0 192.00 192.00" fill="none">
		<g id="SVGRepo_iconCarrier">
			<path
				stroke="#000000"
				strokeLinecap="round"
				strokeWidth="12"
				d="M108 132a38.004 38.004 0 0 1-23.458 35.107 37.995 37.995 0 0 1-41.412-8.237 37.996 37.996 0 0 1-8.237-41.412A38.001 38.001 0 0 1 70 94"
			></path>
			<path
				stroke="#000000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
				d="M108 132V22c0 18 24 50 52 50"
			></path>
		</g>
	</svg>
)

const Socials = () => {
	return (
		<div className="flex justify-center items-center gap-4">
			<InstagramIcon />
			<YoutubeIcon />
			<FacebookIcon />
			<TikTokIcon />
		</div>
	)
}

export default Socials
