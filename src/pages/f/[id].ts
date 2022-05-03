export async function get({ id }: { id: string }, request: Request) {
	if (id.length !== 20)
	{
		return new Response("Form not found!", {
			status: 404
		});
	}
	
	return new Response(id, {
		status: 200
	});
}