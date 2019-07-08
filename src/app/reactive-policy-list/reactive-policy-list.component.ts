import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { PolicyService } from "../policy.service";
import { Policy } from "../policy.model";

@Component({
  selector: 'app-reactive-policy-list',
  templateUrl: './reactive-policy-list.component.html',
  styleUrls: ['./reactive-policy-list.component.css']
})
export class ReactivePolicyListComponent implements OnInit {
  policies: Policy[];
  policyForm = this.formBuilder.group({
    creationDate: [Date],
    effectiveDate: [Date],
    policyNumber: ['', Validators.required],
  });


  constructor(private formBuilder: FormBuilder, private policyService: PolicyService) {}

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

  create(policy: Policy){
    console.log(policy);
    this.policyService.createPolicy(policy);
  }

  delete(id: string){
    this.policyService.deletePolicy(id);
  }

}
