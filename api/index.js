import { geolocation, ipAddress } from "@vercel/edge";

export default function (request) {
	const geo = geolocation(request);
	console.log("start geolocation", request);
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
