export async function get({ user }: { user: string }, request: Request) {
	const product = {
		user: user,
		type: 'Shoes',
		company: 'Nike'
	}
	
	return new Response(JSON.stringify(product), {
		status: 200
	});
}