import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class StoryService {
  private cdaClient = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
  });

  constructor(private router: Router) {}

  getStories(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: environment.contentful.contentTypeIds.story,
          },
          query
        )
      )
      .then((res) => res.items);
  }

  getStory(id: string): Promise<Entry<any>> {
    return this.cdaClient.getEntry(id).then((res) => res);
  }

  routeToStory(story: Entry<any>) {
    let title = story.fields.title
      .replaceAll(' ', '-')
      .replace(/[^A-Za-z0-9-]/g, '')
      .toLowerCase();
    this.router.navigate([
      `${story.fields.category.toLowerCase()}/${story.sys.id}/${title}`,
    ]);
  }
}
