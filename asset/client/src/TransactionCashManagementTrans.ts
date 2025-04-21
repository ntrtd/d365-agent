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
import type { TransactionCashManagementTransApi } from './TransactionCashManagementTransApi';

/**
 * This class represents the entity "TransactionCashManagementTrans" of service "d365_metadata".
 */
export class TransactionCashManagementTrans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionCashManagementTransType<T>
{
  /**
   * Technical entity name for TransactionCashManagementTrans.
   */
  static override _entityName = 'TransactionCashManagementTrans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransactionCashManagementTrans entity.
   */
  static _keys = [
    'dataAreaId',
    'TransactionNumber',
    'OperatingUnitNumber',
    'Terminal'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * From Safe.
   * @nullable
   */
  declare fromSafe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Shift Terminal Id.
   * @nullable
   */
  declare fromShiftTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Shift Id.
   * @nullable
   */
  declare fromShiftId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Shift Id.
   * @nullable
   */
  declare toShiftId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Shift Terminal Id.
   * @nullable
   */
  declare toShiftTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Safe.
   * @nullable
   */
  declare toSafe?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TransactionCashManagementTransApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionCashManagementTransType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  fromSafe?: DeserializedType<T, 'Edm.String'> | null;
  fromShiftTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  fromShiftId?: DeserializedType<T, 'Edm.String'> | null;
  toShiftId?: DeserializedType<T, 'Edm.String'> | null;
  toShiftTerminalId?: DeserializedType<T, 'Edm.String'> | null;
  toSafe?: DeserializedType<T, 'Edm.String'> | null;
}
