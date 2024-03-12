import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css'],
    styles: [`h1 { color: blue; }`],
})
export class ServerComponent {
    serverId:number = 10;
    serverStatus:string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}