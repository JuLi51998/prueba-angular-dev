import { Aviso } from 'src/app/models/avisos.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  aviso!: Observable<Aviso[]>;

  private avisosCollection: AngularFirestoreCollection<Aviso>;

  constructor(private readonly afs: AngularFirestore) {
    this.avisosCollection = afs.collection<Aviso>('avisos');
    this.getAvisos();
   }

   onDeleteAviso(avsId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.avisosCollection.doc(avsId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  onSaveAviso(aviso: Aviso, avsId: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const idAvs = avsId || this.afs.createId();
        const data = { idAvs, ...aviso };
        const result = await this.avisosCollection.doc(idAvs).set(data);
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }


  private getAvisos(): void {
    this.aviso = this.avisosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Aviso))
    );
  }
}
