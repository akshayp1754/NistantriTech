import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service'; 

/**
 * Component for adding new temperature data entries
 */
@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
  /**
   * Form for adding new data entries
   */
  dataForm: FormGroup;

  /**
   * Constructor for AddDataComponent
   * @param fb 
   * @param dataService 
   */
  constructor(private fb: FormBuilder, public dataService: DataService) {
    /**
     * Create form with two fields: datetime and temperature
     * Both fields are required, and temperature must be between -50 and 50 degrees Celsius
     */
    this.dataForm = this.fb.group({
      datetime: ['', [Validators.required]],
      temperature: ['', [Validators.required, Validators.min(-50), Validators.max(50)]]
    });
  }

  /**
   * Submit form data to DataService and reset form if valid
   */
  onSubmit() {
    if (this.dataForm.valid) {
      const newEntry = this.dataForm.value;
      this.dataService.addDataEntry(newEntry);
      this.dataForm.reset(); 
    }
  }
}

