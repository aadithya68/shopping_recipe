import { Component} from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})

export class HeaderComponent {
    // @Output() featureSelected = new EventEmitter<string>();

    // // onSelect(feature: string) {
    // //     this.featureSelected.emit(feature);

    // // }
    constructor (private dsService: DataStorageService,
        private authService: AuthService) {}

    onSaveData() {
        this.dsService.storeRecipes()
        .subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    onFetchData() {
        this.dsService.fetchRecipes();
    }

    onLogout() {
        this.authService.logout();
    }
    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}
