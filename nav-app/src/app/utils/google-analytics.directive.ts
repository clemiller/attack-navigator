import { Directive, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

declare const gtag: Function;

@Directive({
  selector: '[appGoogleAnalytics]'
})
export class GoogleAnalyticsDirective implements OnInit {
	ngOnInit(): void {
		if (environment.production) this.addGoogleAnalytics(); // TODO this will always be true
	}

	private addGoogleAnalytics(): void {
		const gaTag = document.createElement('script');
		gaTag.setAttribute('async', 'true');
		gaTag.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${ environment.googleAnalytics }`);
		document.head.appendChild(gaTag);

		const gaScript = document.createElement('script');
		gaScript.innerText = `\
		window.dataLayer = window.dataLayer || [];\
		function gtag(){dataLayer.push(arguments);}\
		gtag('js', new Date());\
		gtag('config', '${ environment.googleAnalytics }');`;
	
		document.head.appendChild(gaScript);
	}
}
