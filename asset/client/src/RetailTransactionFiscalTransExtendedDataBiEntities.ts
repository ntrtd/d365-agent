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
import type { RetailTransactionFiscalTransExtendedDataBiEntitiesApi } from './RetailTransactionFiscalTransExtendedDataBiEntitiesApi';
import { RetailFiscalRegistrationExtendedDataType } from './RetailFiscalRegistrationExtendedDataType';

/**
 * This class represents the entity "RetailTransactionFiscalTransExtendedDataBIEntities" of service "d365_metadata".
 */
export class RetailTransactionFiscalTransExtendedDataBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionFiscalTransExtendedDataBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionFiscalTransExtendedDataBiEntities.
   */
  static override _entityName =
    'RetailTransactionFiscalTransExtendedDataBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionFiscalTransExtendedDataBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'Store',
    'Terminal',
    'TransactionId',
    'FiscalTransLineNum',
    'FiscalTransRecordGuid',
    'DataKey'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Trans Line Num.
   */
  declare fiscalTransLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fiscal Trans Record Guid.
   */
  declare fiscalTransRecordGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Data Key.
   * @nullable
   */
  declare dataKey?: RetailFiscalRegistrationExtendedDataType | null;
  /**
   * Data Value.
   * @nullable
   */
  declare dataValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;

  constructor(
    _entityApi: RetailTransactionFiscalTransExtendedDataBiEntitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface RetailTransactionFiscalTransExtendedDataBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  fiscalTransLineNum: DeserializedType<T, 'Edm.Decimal'>;
  fiscalTransRecordGuid: DeserializedType<T, 'Edm.Guid'>;
  dataKey?: RetailFiscalRegistrationExtendedDataType | null;
  dataValue?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
}
