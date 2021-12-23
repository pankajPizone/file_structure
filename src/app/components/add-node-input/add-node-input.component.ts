import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';

@Component({
  selector: 'add-node-input',
  templateUrl: './add-node-input.component.html',
  styleUrls: ['./add-node-input.component.css']
})
export class AddNodeInputComponent implements OnInit {
  @Output() actions = new EventEmitter<Object>()
  @Input() type: string = ""
  node: NodeModel = {}

  constructor() { }

  ngOnInit(): void {
    if(!this.node.type){
      this.node.type = 'folder'
    }
  }

  saveNode() {
    this.node.id = Math.floor(Math.random() * 100).toString();
    this.node.parentId = null;
    this.node.children = [];
    this.node.isActive = false;
    if(this.node.type==undefined) this.node.type = 'folder'
    this.actions.emit({ action: "save", data: this.node })
  }

  cancelNode() {
    this.actions.emit({ action: "cancel" })
  }

  selectType(type:any){
    this.node.type = type;
    this.type = 'edit'

  }

}
