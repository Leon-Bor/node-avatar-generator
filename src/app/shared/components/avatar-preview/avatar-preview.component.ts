import { AfterContentInit, Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-avatar-preview",
  templateUrl: "./avatar-preview.component.html",
  styleUrls: ["./avatar-preview.component.scss"],
})
export class AvatarPreviewComponent implements OnInit, AfterContentInit {
  @Input() dirs;
  @Input() md5Hash;
  baseUrl = environment.serverUrl;
  generatorVersion = environment.version;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  showAvatarModal(): void {
    this.router.navigate([
      "generator",
      { outlets: { modal: ["generated-avatar", this.md5Hash] } },
    ]);
  }

  ngAfterContentInit() {
    (<any>window).twttr.widgets.load();
  }
}
