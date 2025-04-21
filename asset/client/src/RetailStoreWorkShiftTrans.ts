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
import type { RetailStoreWorkShiftTransApi } from './RetailStoreWorkShiftTransApi';
import { RetailWorkShiftStatus } from './RetailWorkShiftStatus';
import { RetailStaffTerminalTotal } from './RetailStaffTerminalTotal';

/**
 * This class represents the entity "RetailStoreWorkShiftTrans" of service "d365_metadata".
 */
export class RetailStoreWorkShiftTrans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStoreWorkShiftTransType<T>
{
  /**
   * Technical entity name for RetailStoreWorkShiftTrans.
   */
  static override _entityName = 'RetailStoreWorkShiftTrans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStoreWorkShiftTrans entity.
   */
  static _keys = [
    'dataAreaId',
    'ShiftId',
    'ShiftDate',
    'StatementCode',
    'OMOperatingUnitNumber'
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
   * Om Operating Unit Number.
   */
  declare omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: RetailStoreWorkShiftTransApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStoreWorkShiftTransType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shiftId: DeserializedType<T, 'Edm.String'>;
  shiftDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  statementCode: DeserializedType<T, 'Edm.String'>;
  omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  status?: RetailWorkShiftStatus | null;
  statementMethod?: RetailStaffTerminalTotal | null;
  openingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  openingTime: DeserializedType<T, 'Edm.Int32'>;
  closingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  closingTime: DeserializedType<T, 'Edm.Int32'>;
}
