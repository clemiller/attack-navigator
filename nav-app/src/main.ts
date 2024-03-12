import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
	const gaTag = document.createElement('script');
	gaTag.setAttribute('async', 'true');
	gaTag.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${ environment.googleAnalytics }`);
	document.head.appendChild(gaTag);

	const gaScript = document.createElement('script');
	gaScript.innerHTML = `\
	window.dataLayer = window.dataLayer || [];\
	function gtag(){dataLayer.push(arguments);}\
	gtag('js', new Date());\
	gtag('config', '${ environment.googleAnalytics }');`;

	document.head.appendChild(gaScript);

	enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.log(err));
