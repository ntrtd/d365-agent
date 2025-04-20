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
import type { EssLeaveTimeOffDatesApi } from './EssLeaveTimeOffDatesApi';
import { LeaveHalfDayDefinition } from './LeaveHalfDayDefinition';
import { EssLeaveTypes, EssLeaveTypesType } from './EssLeaveTypes';
import { EssWorkers, EssWorkersType } from './EssWorkers';

/**
 * This class represents the entity "EssLeaveTimeOffDates" of service "d365_metadata".
 */
export class EssLeaveTimeOffDates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EssLeaveTimeOffDatesType<T>
{
  /**
   * Technical entity name for EssLeaveTimeOffDates.
   */
  static override _entityName = 'EssLeaveTimeOffDates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssLeaveTimeOffDates entity.
   */
  static _keys = ['dataAreaId', 'LeaveDate', 'PersonnelNumber', 'LeaveTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Date.
   */
  declare leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Type Id.
   */
  declare leaveTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Half Day Definition.
   * @nullable
   */
  declare halfDayDefinition?: LeaveHalfDayDefinition | null;
  /**
   * One-to-one navigation property to the {@link EssLeaveTypes} entity.
   */
  declare leaveType?: EssLeaveTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link EssWorkers} entity.
   */
  declare worker?: EssWorkers<T> | null;

  constructor(_entityApi: EssLeaveTimeOffDatesApi<T>) {
    super(_entityApi);
  }
}

export interface EssLeaveTimeOffDatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  leaveTypeId: DeserializedType<T, 'Edm.String'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  halfDayDefinition?: LeaveHalfDayDefinition | null;
  leaveType?: EssLeaveTypesType<T> | null;
  worker?: EssWorkersType<T> | null;
}
