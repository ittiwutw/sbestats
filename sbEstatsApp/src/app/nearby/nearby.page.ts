import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RestService } from '../services/rest.service';
declare var google;

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nearby',
  templateUrl: './nearby.page.html',
  styleUrls: ['./nearby.page.scss'],
})
export class NearbyPage implements OnInit {

  @ViewChild('map', { static: false }) mapContainer: ElementRef;
  map: any;
  height = '100%';
  zoom = 13;
  estates: any;
  marker: any;

  lat: any;
  lng: any;

  nearbyList = [];

  constructor(
    private restApi: RestService,
    private geolocation: Geolocation,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getAllEstate();
  }

  getAllEstate() {
    this.restApi.getEstate().then(res => {
      console.log(res);
      let data: any;
      data = res;

      this.estates = data.data.result;
      console.log(this.estates);
      this.loadMap();
    });
  }

  // loadMap() {
  //   // หาที่อยู่ ปัจจุบัน
  //   this.geolocation.getCurrentPosition().then((resp) => {

  //     // set lat lng
  //     const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
  //     const mapOptions = {
  //       center: latLng,
  //       zoom: 15,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //     };

  //     this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  //     this.addMarkersToMap(resp.coords.latitude, resp.coords.longitude);

  //     google.maps.event.addListener(this.marker, 'click', function() {
  //       console.log(this.marker.data);
  //     });

  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });
  // }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;

      this.addMarkersToMap();
      // this.loading.dismiss();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  addMarkersToMap() {
    this.estates.forEach(element => {

      const current = new google.maps.LatLng(this.lat, this.lng);
      const target = new google.maps.LatLng(element.lat, element.lng);
      const distanceMet = google.maps.geometry.spherical.computeDistanceBetween(current, target);

      console.log((distanceMet / 1000).toFixed(2));
      const distance = (distanceMet / 1000).toFixed(2);
      // tslint:disable-next-line:radix
      if (parseInt(distance) <= 10) {
        const icon = {
          url: element.imgUrl,
          scaledSize: {
            width: 40,
            height: 40
          }
        };
        element.icon = icon;
        this.nearbyList.push(element);

      }
    });

  }

  markerClick(event, item) {
    console.log(item);
    this.router.navigate(['/estate-detail', {
      estate: JSON.stringify(item)
    }]);
  }

}
