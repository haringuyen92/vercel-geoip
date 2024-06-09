export default function (request) {
    console.log("start func test")
    return new Response(
        'hello',
        {
			headers: { "content-type": "application/json" },
		}
    ) 
}