import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  private sub!: Subscription;
  post!: string;

  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe((params) => {
      this.post = './assets/blog/' + params['id'] + '.md';
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
