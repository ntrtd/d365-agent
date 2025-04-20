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
import type { LeaveBankTransactionAuditTrailsApi } from './LeaveBankTransactionAuditTrailsApi';
import { LeaveTransactionType } from './LeaveTransactionType';

/**
 * This class represents the entity "LeaveBankTransactionAuditTrails" of service "d365_metadata".
 */
export class LeaveBankTransactionAuditTrails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaveBankTransactionAuditTrailsType<T>
{
  /**
   * Technical entity name for LeaveBankTransactionAuditTrails.
   */
  static override _entityName = 'LeaveBankTransactionAuditTrails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveBankTransactionAuditTrails entity.
   */
  static _keys = [
    'dataAreaId',
    'PersonnelNumber',
    'Type',
    'TransactionType',
    'TransactionDate',
    'TransactionNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   */
  declare type: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: LeaveTransactionType | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Data.
   * @nullable
   */
  declare data?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Type Revision.
   */
  declare typeRevision: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: LeaveBankTransactionAuditTrailsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaveBankTransactionAuditTrailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  type: DeserializedType<T, 'Edm.String'>;
  transactionType?: LeaveTransactionType | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transactionNumber: DeserializedType<T, 'Edm.Decimal'>;
  data?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  typeRevision: DeserializedType<T, 'Edm.Int64'>;
}
