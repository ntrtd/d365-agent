/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { HoursWorkedApi } from './HoursWorkedApi';
import { LeaveHoursWorkedType } from './LeaveHoursWorkedType';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "HoursWorked" of service "d365_metadata".
 */
export class HoursWorked<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements HoursWorkedType<T>
{
  /**
   * Technical entity name for HoursWorked.
   */
  static override _entityName = 'HoursWorked';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HoursWorked entity.
   */
  static _keys = ['dataAreaId', 'PersonnelNumber', 'DateWorked', 'Type'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Date Worked.
   */
  declare dateWorked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: LeaveHoursWorkedType | null;
  /**
   * Hours.
   */
  declare hours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: HoursWorkedApi<T>) {
    super(_entityApi);
  }
}

export interface HoursWorkedType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  dateWorked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  type?: LeaveHoursWorkedType | null;
  hours: DeserializedType<T, 'Edm.Decimal'>;
  worker?: WorkersType<T> | null;
}
