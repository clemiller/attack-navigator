import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-google-analytics',
  templateUrl: './google-analytics.component.html',
  styleUrls: ['./google-analytics.component.scss']
})
export class GoogleAnalyticsComponent {
	public get isProduction(): boolean {
		return environment.production;
	}

	public get googleAnalytics(): string {
		return environment.googleAnalytics;
	}

	public get gTagSource(): string {
		return `https://www.googletagmanager.com/gtag/js?id=${this.googleAnalytics}`;
	}
}
