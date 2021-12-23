export class NodeModel {
    type?: 'folder' | 'file' | 'upset' | null;
	name?: string; 
	children?:NodeModel[]=[];
    id?: string;
    isActive?:boolean;
    parentId?:number | null
}
