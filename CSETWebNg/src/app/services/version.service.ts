import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { environment } from '../../environments/environment';
// import { AppVersion } from '../models/app-version';
import { data } from 'jquery';
import { version } from 'os';
const headers = {
  headers: new HttpHeaders().set("Content-Type", "application/json"),
  params: new HttpParams()
};
@Injectable({
  providedIn: 'root'
})

export class VersionService {
  actualVersion:string='';
  githubVersion=[]
  public localVersion: string;
  showVersionNotification = false;
  private apiURLCset=this.configSvc.apiUrl;
  installedVersion:any;

  constructor(
    private http: HttpClient,
    private configSvc: ConfigService
  ) { }

  async getLatestVersion(): Promise<void> {
    this.getGithubLatestRelease().subscribe(data=>{
      this.actualVersion=data.tag_name.substring(1)
      this.githubVersion=data.tag_name.substring(1).split('.').map(x => parseInt(x, 10))
      if(data){
        this.getInstalledVersion().subscribe(version=>{
          this.localVersion=version.majorVersion.toString()+'.'+version.minorVersion.toString()+'.'+version.patch.toString()+'.'+version.build.toString();
          if(version.majorVersion < this.githubVersion[0] ||
            (version.majorVersion === this.githubVersion[0] && version.minorVersion < this.githubVersion[1]) ||
            (version.majorVersion === this.githubVersion[0] && version.minorVersion === this.githubVersion[1] && version.patch < this.githubVersion[2]) ||
            (version.majorVersion === this.githubVersion[0] && version.minorVersion === this.githubVersion[1] && version.patch === this.githubVersion[2] && version.build < this.githubVersion[3]))
         {
          this.showVersionNotification=true;
         }
        else{
          this.showVersionNotification=false;
        }
        })
      }
    })
    error => {
      console.log(error)
    }
  }

  async getLatestVersionPromise(): Promise<any> {
    await this.getLatestVersion()
    return this.localVersion
  }

  getGithubLatestRelease():Observable<any>{
    return this.http.get<any>(this.configSvc.csetGithubApiUrl)
  }
  getInstalledVersion():Observable<any>{
    return this.http.get<any>(this.apiURLCset+'version/getVersionNumber')
  }
}
