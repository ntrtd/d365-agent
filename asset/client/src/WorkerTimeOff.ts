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
import type { WorkerTimeOffApi } from './WorkerTimeOffApi';
import { LeaveAmountUnit } from './LeaveAmountUnit';
import { LeaveHalfDayDefinition } from './LeaveHalfDayDefinition';

/**
 * This class represents the entity "WorkerTimeOff" of service "d365_metadata".
 */
export class WorkerTimeOff<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkerTimeOffType<T>
{
  /**
   * Technical entity name for WorkerTimeOff.
   */
  static override _entityName = 'WorkerTimeOff';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerTimeOff entity.
   */
  static _keys = ['PersonnelNumber', 'LeaveDate'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Date.
   */
  declare leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Leave Amount Unit.
   * @nullable
   */
  declare leaveAmountUnit?: LeaveAmountUnit | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Half Day Definition.
   * @nullable
   */
  declare halfDayDefinition?: LeaveHalfDayDefinition | null;

  constructor(_entityApi: WorkerTimeOffApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerTimeOffType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leaveAmountUnit?: LeaveAmountUnit | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  halfDayDefinition?: LeaveHalfDayDefinition | null;
}
