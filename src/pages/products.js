export async function get() {
	const product = {
		type: 'Shoes',
		company: 'Nike'
	}

	return new Response(JSON.stringify(product), {
		status: 200
	});
}