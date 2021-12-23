import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  @Input() node:NodeModel = {}
  @Input() parentNode:NodeModel = {}
  @Output() actions = new EventEmitter<Object>()
  public ishover:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addChildNode(){
    this.node.isActive = true;
    this.actions.emit({action:'addChild',data:this.node})
  }

  delete(){
    if(this.parentNode.id==undefined)  {
      this.actions.emit({action:'delete', data:this.node})
    }else if(this.parentNode.children){
      this.parentNode.children.forEach((element,index) => {
        if(element.id==this.node.id && this.parentNode.children){
          this.parentNode.children.splice(index,1);
        }
      });
    }
  }

  getNodeActions(data: any, index?: number) {
    if (data == undefined || data == null) return;

    switch (data.action) {
      case "cancel":
        this.node.isActive = false
        break;
      case "save":
       this.saveNode(data.data)
       this.node.isActive = false
        break;
      default:
        break;

    }

  }

  saveNode(data: NodeModel) {
    if(data.name==undefined || data.name=="") return
    if(!this.node.children) return;
    this.node.children.push(data)
    this.node.isActive = false
  }

}
