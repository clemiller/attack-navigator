import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor(private _router: Router) {
	console.debug('initializing google analytics service');
	// if (environment.production && environment.googleAnalytics) {
	// 	this.addGoogleAnalytics();
	// }
  }

  public addGoogleAnalytics(): void {
	const gaTagManager = document.createElement('script');
	gaTagManager.src = `https://www.googletagmanager.com/gtag/js?id=${environment.GOOGLE_ANALYTICS}`;
	gaTagManager.async = true;
	// document.head.appendChild(gaTagManager);

	// const gaScript = document.createElement('script');
	// gaScript.innerText = `
	// window.dataLayer = window.dataLayer || [];
	// function gtag() {dataLayer.push(arguments);}
	// `;
	// gaScript.appendChild(gaScript);
	// document.body.appendChild(gaScript);
	const gaScript = document.createElement('script');
	gaScript.innerText = `window.dataLayer = window.dataLayer || [];\
	function gtag(){dataLayer.push(arguments);}\
	gtag('js', new Date());\
	gtag('config', '${ environment.GOOGLE_ANALYTICS }');`;

	// document.head.appendChild(gaScript);

	document.head.prepend(gaTagManager, gaScript);
  }
}
