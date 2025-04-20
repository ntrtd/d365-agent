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
import type { WorkCalendarEmploymentsApi } from './WorkCalendarEmploymentsApi';

/**
 * This class represents the entity "WorkCalendarEmployments" of service "d365_metadata".
 */
export class WorkCalendarEmployments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkCalendarEmploymentsType<T>
{
  /**
   * Technical entity name for WorkCalendarEmployments.
   */
  static override _entityName = 'WorkCalendarEmployments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkCalendarEmployments entity.
   */
  static _keys = ['dataAreaId', 'PersonnelNumber', 'StartDate', 'CompanyId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Company Id.
   */
  declare companyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Calendar Id.
   * @nullable
   */
  declare calendarId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WorkCalendarEmploymentsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkCalendarEmploymentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  companyId: DeserializedType<T, 'Edm.String'>;
  calendarId?: DeserializedType<T, 'Edm.String'> | null;
}
