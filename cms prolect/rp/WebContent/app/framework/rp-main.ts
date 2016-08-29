// Written by: Tun Thura Thet  - on: 18.4.2016
// Update by:  Tun Thura Thet  - on: 11.5.2015

import {bootstrap,Title}    from 'angular2/platform/browser';
import {RpRootComponent} from '../rp-root.component'; 
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS,LocationStrategy,HashLocationStrategy} from 'angular2/router'; 
import {HTTP_PROVIDERS} from 'angular2/http'; 
bootstrap(RpRootComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS,Title, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
 