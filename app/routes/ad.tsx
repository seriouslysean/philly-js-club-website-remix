import { useSearchParams } from "@remix-run/react";

import { AdLogo } from "~/components/AdLogo";

const monthNames = new Set([
	"january",
	"february",
	"march",
	"april",
	"may",
	"june",
	"july",
	"august",
	"september",
	"october",
	"november",
	"december",
]);

export default function Ad() {
	const [params] = useSearchParams();
	const month = params.get("month")?.toLowerCase() ?? "idk";
	if (!monthNames.has(month)) {
		return "nope (month)";
	}

	const year = params.get("year")?.toLowerCase() ?? "when";
	if (!/\d{4}/.test(year)) {
		return "nope (year)";
	}

	return (
		<main className="ad-main">
			<div className="ad-img-area">
				<AdLogo className="ad-img" />
			</div>
			<div className="ad-text">
				<h1>Philly JS Club</h1>
				<p>
					{upperFirst(month)} {year}
				</p>
			</div>
		</main>
	);
}

function upperFirst(text: string) {
	return text[0].toUpperCase() + text.slice(1);
}
