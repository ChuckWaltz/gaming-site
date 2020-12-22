import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { MARKS, BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Entry } from 'contentful';
import { StoryService } from 'src/app/services/story-service/story.service';

@Component({
  selector: 'app-feature-page',
  templateUrl: './feature-page.component.html',
  styleUrls: ['./feature-page.component.scss'],
})
export class FeaturePageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public storyService: StoryService
  ) {
    const richTextOptions = {
      renderMark: {
        [MARKS.CODE]: (text) => `<code>${text}</code>`,
      },
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
          if (node.data.target.fields.file.contentType.startsWith('image'))
            return `<img src='${node.data.target.fields.file.url}'/>`;
          else return 'Unsupported Asset Type';
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node, next) =>
          `<a class='embeddedEntry' href='${window.location.origin}/news/${
            node.data.target.sys.id
          }/${this.storyService.getStoryTitleForUrl(node.data.target)}'>
            <div class='embeddedEntryImg'>
              <img src='${node.data.target.fields.mainImage.fields.file.url}'/>
            </div>
            <div class='embeddedEntryContent'>
              <div class='embeddedEntryTitle'>${
                node.data.target.fields.title
              }</div>
              <div class='embeddedEntrySubText'>${
                node.data.target.fields.subText
              }</div>
            </div>
          </a>`,
        [INLINES.EMBEDDED_ENTRY]: (node, next) =>
          `<a href='${window.location.origin}/news/${
            node.data.target.sys.id
          }/${this.storyService.getStoryTitleForUrl(
            node.data.target
          )}'><div class='embeddedEntryInline'>
            <div class='embeddedEntryInlineTitle'>${
              node.data.target.fields.title
            }</div>
          </div></a>`,
        [BLOCKS.QUOTE]: (node, next) =>
          `<div class="quote">${next(node.content)}</div>`,
      },
    };

    route.params.subscribe((val) => {
      this.story = null;
      this.nextUpStories = null;

      window.scrollTo(0, 0);

      let storyId: any = this.route.snapshot.params.id;

      this.storyService.getStory(storyId).then((story) => {
        this.story = story;
        this.storyBodyContent = documentToHtmlString(
          story.fields.body,
          richTextOptions
        );
        //console.log(story);
        //console.log(this.storyBodyContent);
      });

      this.storyService
        .getStories({
          'fields.category': 'Features',
          order: '-sys.updatedAt',
        })
        .then((stories) => {
          this.nextUpStories = stories.filter((s) => {
            return s.sys.id !== storyId;
          });
        });
    });
  }

  story: Entry<any>;
  storyBodyContent: any;

  nextUpStories: Entry<any>[];

  ngOnInit(): void {}
}
