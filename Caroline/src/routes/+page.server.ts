import { Client } from '@notionhq/client';
import { SECRET_NOTION_API_KEY } from '$env/static/private'
import { SECRET_NOTION_DATABASE_ID } from '$env/static/private'



export async function load() {


	const notion = new Client({ auth: SECRET_NOTION_API_KEY });

	const posts = await notion.databases.query({
		database_id: SECRET_NOTION_DATABASE_ID
	  });
	
	  const allPosts = posts.results;
  
	return {
		posts: JSON.parse(JSON.stringify(allPosts))
	};
}
