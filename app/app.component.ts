import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { Helpers } from "./shared/helpers";

// import { BlogService }        from './blog.service';

let componentName = 'app'

@Component({
  selector: componentName,
  templateUrl: Helpers.getTemplatePath(componentName),
  styleUrls: [Helpers.getStylePath(componentName)],
  directives: [ROUTER_DIRECTIVES],
  // providers: [
  //   BlogService,
  // ]
})
export class AppComponent {
  title = "Numbers Don't Define Us";
}