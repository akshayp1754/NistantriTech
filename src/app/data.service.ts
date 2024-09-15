import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Service to store and provide access to temperature data entries.
 */
@Injectable({
  providedIn: 'root',
})
export class DataService {
  /**
   * The data entries stored in the service, exposed as an observable.
   */
  private dataEntriesSubject = new BehaviorSubject<{ datetime: string; temperature: number }[]>([]);
  /**
   * An observable that provides access to the data entries.
   */
  dataEntries$ = this.dataEntriesSubject.asObservable();

  /**
   * Adds a new data entry to the list of stored entries.
   * @param entry The new data entry to add.
   */
  addDataEntry(entry: { datetime: string; temperature: number }) {
    const currentEntries = this.dataEntriesSubject.value;
    this.dataEntriesSubject.next([...currentEntries, entry]);
  }
}

