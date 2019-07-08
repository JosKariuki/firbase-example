import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';
import { Policy } from '../policy.model';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {
  policies: Policy[];
  model: Policy={
    creationDate: new Date(),
    effectiveDate: new Date(),
    policyNumber: '',
  }
  isEdit: boolean = false;

  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getPolicies().subscribe(data => {
      console.log (data);
      this.policies = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Policy;
      })
    });
  }

  create(policy: Policy) {
    console.log(policy);
    if (this.isEdit){
      policy.id = this.model.id;
      this.policyService.updatePolicy(policy);
    }else {
      this.policyService.createPolicy(policy);
    }
  }

  update(policy:Policy) {
    this.policyService.updatePolicy(policy);
  }

  delete(id:string) {
    this.policyService.deletePolicy(id);
  }

  edit(policy: Policy){
    console.log(policy);
    this.model = policy;
    this.isEdit = true;
  }

  reset(policy: Policy){
    this.isEdit = false;
  }

}
