import { Component }          from '@angular/core';
import { Helpers } from "./shared/helpers";

let componentName = 'app'

@Component({
  selector: componentName,
  templateUrl: Helpers.getTemplatePath(componentName),
  styleUrls: [Helpers.getStylePath(componentName)],
})

export class AppComponent {
  title = 'I am Sam Pastoriza, a Software Engineering at Ciena';
  description = 'I am rising senior at Rose-Hulman Institute of Technology and I love website development, photography, golf and family'
}