import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable()
export class StoryService {
  private cdaClient = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
  });

  constructor() {}

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
}
