import { Component, ElementRef, ViewChild } from '@angular/core';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { NodeModel } from './models/node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nodes: NodeModel[] = [
  { name: 'Desktop', id: '1', parentId: null, isActive: false, children: [], type:'folder' },
 ];
  isNewNode: boolean = false
  currentEditableNode:NodeModel = {}


  getNodeActions(data: any) {
    if (data == undefined || data == null) return;

    switch (data.action) {
      case "cancel":
        this.cancelNode()
        this.isNewNode = false
        break;
      case "save":
        this.saveNode(data.data)
        this.isNewNode = false
        break;
      case "delete":
        this.deleteNode(data.data)
        break;
      default:
        break;

    }

  }
  
  deleteNode(node:NodeModel){
    this.nodes.forEach((element,index) => {
      if(element.id==node.id){
        this.nodes.splice(index,1);
      }
    });
  }

  addRootNode() {
    this.isNewNode = true;
  }

  saveNode(data: NodeModel) {
    if(data.name==undefined || data.name=="") return
    this.nodes.push(data)
  }

  cancelNode() {
    this.isNewNode = false;
  }

}
