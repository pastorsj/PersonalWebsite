import { Component }          from '@angular/core';
import { Helpers } from "./shared/helpers";

let componentName = 'app'

@Component({
  selector: componentName,
  templateUrl: Helpers.getTemplatePath(componentName),
  styleUrls: [Helpers.getStylePath(componentName)],
})

export class AppComponent {
  title = 'Sam Pastoriza';
  description = 'A rising senior at Rose-Hulman Institute of Technology with interests in website development, photography and golf'
}