import { Client } from '@notionhq/client';
import { SECRET_NOTION_API_KEY } from '$env/static/private'
import { SECRET_NOTION_DATABASE_ID } from '$env/static/private'



export async function load({ params }) {
	


	const notion = new Client({ auth: SECRET_NOTION_API_KEY });

	const posts = await notion.databases.query({
		database_id: SECRET_NOTION_DATABASE_ID
	  });
	
	  const post = posts.results[params.index];
  
	return {
		post: JSON.parse(JSON.stringify(post))
	};
}
