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
import type { RetailStoreWorkShiftTrans2Api } from './RetailStoreWorkShiftTrans2Api';
import { RetailWorkShiftStatus } from './RetailWorkShiftStatus';
import { RetailStaffTerminalTotal } from './RetailStaffTerminalTotal';

/**
 * This class represents the entity "RetailStoreWorkShiftTrans2" of service "d365_metadata".
 */
export class RetailStoreWorkShiftTrans2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStoreWorkShiftTrans2Type<T>
{
  /**
   * Technical entity name for RetailStoreWorkShiftTrans2.
   */
  static override _entityName = 'RetailStoreWorkShiftTrans2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStoreWorkShiftTrans2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ShiftId',
    'ShiftDate',
    'StatementCode',
    'StoreNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shift Id.
   */
  declare shiftId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shift Date.
   */
  declare shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Statement Code.
   */
  declare statementCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Number.
   */
  declare storeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailWorkShiftStatus | null;
  /**
   * Statement Method.
   * @nullable
   */
  declare statementMethod?: RetailStaffTerminalTotal | null;
  /**
   * Opening Date.
   */
  declare openingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Opening Time.
   */
  declare openingTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Closing Date.
   */
  declare closingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Closing Time.
   */
  declare closingTime: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailStoreWorkShiftTrans2Api<T>) {
    super(_entityApi);
  }
}

export interface RetailStoreWorkShiftTrans2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shiftId: DeserializedType<T, 'Edm.String'>;
  shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  statementCode: DeserializedType<T, 'Edm.String'>;
  storeNumber: DeserializedType<T, 'Edm.String'>;
  status?: RetailWorkShiftStatus | null;
  statementMethod?: RetailStaffTerminalTotal | null;
  openingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  openingTime: DeserializedType<T, 'Edm.Int32'>;
  closingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  closingTime: DeserializedType<T, 'Edm.Int32'>;
}
