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
import type { RetailStoreWorkShiftsApi } from './RetailStoreWorkShiftsApi';
import { RetailWorkShiftStatus } from './RetailWorkShiftStatus';

/**
 * This class represents the entity "RetailStoreWorkShifts" of service "d365_metadata".
 */
export class RetailStoreWorkShifts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStoreWorkShiftsType<T>
{
  /**
   * Technical entity name for RetailStoreWorkShifts.
   */
  static override _entityName = 'RetailStoreWorkShifts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStoreWorkShifts entity.
   */
  static _keys = ['dataAreaId', 'ShiftDate', 'ShiftId', 'StoreNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shift Date.
   */
  declare shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Shift Id.
   */
  declare shiftId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Ending Date.
   */
  declare endingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Starting Date.
   */
  declare startingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Replication Counter.
   */
  declare replicationCounter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Work Shift Status.
   * @nullable
   */
  declare workShiftStatus?: RetailWorkShiftStatus | null;
  /**
   * Statement Id.
   * @nullable
   */
  declare statementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Starting Time.
   */
  declare startingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ending Time.
   */
  declare endingTime: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailStoreWorkShiftsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStoreWorkShiftsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shiftId: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  endingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  startingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  replicationCounter: DeserializedType<T, 'Edm.Int32'>;
  workShiftStatus?: RetailWorkShiftStatus | null;
  statementId?: DeserializedType<T, 'Edm.String'> | null;
  startingTime: DeserializedType<T, 'Edm.Int32'>;
  endingTime: DeserializedType<T, 'Edm.Int32'>;
}
