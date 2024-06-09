import { geolocation, ipAddress } from "@vercel/edge";

export const config = {
	runtime: "edge",
};

export default function (request) {
	const geo = geolocation(request);
	console.log("start hheeh");
	return new Response(
		JSON.stringify({
			...geo,
			ip: ipAddress(request) || null,
		}),
		{
			headers: { "content-type": "application/json" },
		}
	);
}
