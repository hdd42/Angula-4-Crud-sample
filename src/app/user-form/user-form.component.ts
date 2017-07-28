import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import {IUser} from "../Models/Interfaces";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "../messages.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  isEdit = false;
  user: IUser;
  userId;
  title = 'Yeni Kullanici Ekle'

  userForm: FormGroup;
  nameCtrl = new FormControl("", Validators.required)
  emailCtrl = new FormControl("", Validators.required)
  activeCtrl = new FormControl("", Validators.required)
  roleCtrl = new FormControl("", Validators.required)

  constructor(private route: ActivatedRoute, private _messageService:MessageService, private _userService: UserService, private fb: FormBuilder, private router: Router) {
    this.userForm = fb.group({
      email: this.emailCtrl,
      name: this.nameCtrl,
      active: this.activeCtrl,
      role: this.roleCtrl
    })
  }

  ngOnInit() {
    this.route.params.subscribe(_params => {
      if (_params['id']) {
        //kullanici duzenleme modu
        this.userId = _params['id']
        this.getUser()
      }
    })
  }

  // alternatif kullanim, subscribe yerine,
  //donen Observable i Promise e dondurup, async kullanilabilir
  //sonuc olarak ayni isi yaparlar
  private async getUser() {
    let response = await this._userService.getUserById(this.userId).toPromise()
    this.user = response.data
    //artik editlenecek kullaniciyi aldigimiza gore
    //edit modu true ya set edebiliriz
    this.isEdit = true;
    this.nameCtrl.setValue(this.user.name)
    this.emailCtrl.setValue(this.user.email)
    this.activeCtrl.setValue(this.user.active)
    this.roleCtrl.setValue(this.user.role)

    this.title = `Kullanici Duzenleniyor : ${this.user.name}`
  }

  handleForm() {
    let form = this.userForm.value;
    form._id = this.userId
    console.log("User: ", form)
    if (this.isEdit) {
      this._userService.updateUser(form)
        .subscribe(_res => {
          this.router.navigate(['/'])
          this._messageService.sendMessage({type:'success',text:'Kullanici Guncellendi'})
          return;
        },
          (err) => {
            this._messageService.closeModal();
            this._messageService.sendMessage({text:'Bir hata olustu!', type:'danger'})
          }

        )
    } else {
      this._userService.addUser(form)
        .subscribe(_res => {
          console.log("res : ", _res)
          this._messageService.newDataAdded(_res['data'],'user')
          this._messageService.closeModal()
          this._messageService.sendMessage({type:'success',text:'Kullanici Basariyla Eklendi'})
          return;
        },
          (err) => {
            this._messageService.closeModal();
            this._messageService.sendMessage({text:'Bir hata olustu!', type:'danger'})
          }
          )
    }
  }

  cancelForm(){
    this.isEdit ? this.router.navigate(['/']) : this._messageService.closeModal();
  }

}
