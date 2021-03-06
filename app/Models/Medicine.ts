import { column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'

import MedicalRecord from './MedicalRecord'

export default class Medicine extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public substance: string

  @column()
  public producer: string

  @column()
  public concentration: string

  @column()
  public usage: string

  @manyToMany(() => MedicalRecord, {
    pivotTable: 'medical_record_medicine',
    pivotForeignKey: 'medicine_id',
    pivotRelatedForeignKey: 'medical_record_id',
  })
  public medicalRecords: ManyToMany<typeof MedicalRecord>
}
