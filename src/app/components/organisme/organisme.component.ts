import { Component, OnInit } from '@angular/core';
import { Organisme } from 'src/app/models/organisme.model';
import { OrganismeService } from 'src/app/services/organisme.service';

@Component({
  selector: 'app-organisme',
  templateUrl: './organisme.component.html',
  styleUrls: ['./organisme.component.scss'],
})
export class OrganismeComponent implements OnInit {

  listOrganismes: Organisme[] = [];
  newOrganisme: Organisme = new Organisme();

  constructor(private organismeService: OrganismeService) { }

  ngOnInit() {
    this.getOrganismes()
  }


  getOrganismes() {
    this.organismeService.getOrganismes()
      .subscribe(data => {
        this.listOrganismes = data
        console.log("list Organismes component", this.listOrganismes)
      })
  }


  onAddOrganisme() {
    this.organismeService.addOrganisme(this.newOrganisme)
      .subscribe(() =>
        console.log("newOrganisme", this.newOrganisme))
    this.newOrganisme = new Organisme()
    this.getOrganismes()
  }


  onUpdateOrganisme(Organisme: Organisme) {
    this.organismeService.updateOrganisme(Organisme)
    .subscribe()
  }


  onRemoveOrganisme(id: number, index: number) {
    this.organismeService.removeOrganisme(id)
      .subscribe(() =>
        console.log("id to remove", id))
    this.listOrganismes.splice(index,1)
  }

}
