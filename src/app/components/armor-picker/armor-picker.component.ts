import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ArmorService } from '../../services/armor.service';
import { WeaponService} from '../../services/weapon.service';
import { Armor } from 'src/app/models/Armor';
import { CalcService } from '../../services/calc.service';
import { Subscription } from 'rxjs';
import { Weapon } from 'src/app/models/Weapon';

@Component({
  selector: 'app-armor-picker',
  templateUrl: './armor-picker.component.html',
  styleUrls: ['./armor-picker.component.css']
})
export class ArmorPickerComponent implements OnInit, OnDestroy {
    public armor: Armor;
    public weapons: Weapon;
    public armorSet: Array<any> = new Array(4);
    public armorSub: Subscription;
    public weaponSub: Subscription;
    public calcSub: Subscription;
    public preMitigation: number = 0;
    public hitNumber: number = 0;
    @ViewChild('hitsNumber')
    public hitsNumber;
    public selectedWeapon;
    public toughness;
    public defensePoints;
    public endDamage;
    public loading;
  constructor(public armorService: ArmorService, public weaponService: WeaponService, public calcService: CalcService) { }

  ngOnInit(): void {
        this.armorSub = this.armorService.getArmor().subscribe(result => {
          this.armor = result;
          for(let i = 0; i < 4; i++){
              this.armorSet[i] = result[i].armor[i];
              this.armor[i].armor[i].selected = true;
                
          }
            this.calculateDefense();
            this.calculateToughness();
        })
        this.weaponSub = this.weaponService.getWeapons().subscribe(result => {
            this.weapons = result;
            this.selectedWeapon = this.weapons[1].weapons[1];
            this.weapons[1].weapons[1].selected = true;
        })
        
  }
  ngOnDestroy() {
    this.armorSub.unsubscribe();
    this.weaponSub.unsubscribe();
  }
  public pickArmor(armorName) {
    switch(armorName.armorType) {
        case "boots":
            this.armor[3].armor.forEach(a => {
                return a.selected = false;
            })
            this.armorSet[3] = armorName;
            break;
        case "pants":
            this.armor[2].armor.forEach(a => {
                return a.selected = false;
            })
            this.armorSet[2] = armorName;
            break;
        case "chestplate":
            this.armor[1].armor.forEach(a => {
                return a.selected = false;
            })
            this.armorSet[1] = armorName;
            break;
        case "helmet":
            this.armor[0].armor.forEach(a => {
                return a.selected = false;
            })
            this.armorSet[0] = armorName;
            break;
    }
    this.calculateToughness();
    this.calculateDefense();
    this.endDamage = 0;
    armorName.selected = true;
  }
  public pickWeapon(wepName) {
    this.selectedWeapon = wepName;
    for(let i = 0; i < 5; i++) {
        this.weapons[i].weapons.forEach(a => {
            return a.selected = false;
        })
    }
    this.hits();
    this.endDamage = 0;
    wepName.selected = true;
  }
  public changeSource(event) {
      event.target.src = "../../../assets/armor/chainmail_boots.png"
  }
  public hits() {
    this.hitNumber = this.hitsNumber.nativeElement.value;
    if(this.hitsNumber.nativeElement.value < 0) {
        this.hitsNumber.nativeElement.value = 0;
    }
    this.preMitigation = (this.hitsNumber.nativeElement.value * this.selectedWeapon.attackDamage) / 2;
  }
  public calculateToughness() {
      this.toughness = 0;
      for(let i of this.armorSet) {
        this.toughness += i.toughness;
      }
  }
  public calculateDefense() {
      this.defensePoints = 0;
      for(let i of this.armorSet) {
          this.defensePoints += i.defensePoints;
      }
  }
  public error;
  public calculate() {
      this.loading = true;
    this.calcSub = this.calcService.calculate(this.toughness, this.defensePoints, this.preMitigation).subscribe(result => {
            this.endDamage = Math.round(Number(result)) / 2;
            this.loading = false;
    })
  }
}
