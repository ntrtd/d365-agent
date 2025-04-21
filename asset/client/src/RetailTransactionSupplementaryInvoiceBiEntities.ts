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
import type { RetailTransactionSupplementaryInvoiceBiEntitiesApi } from './RetailTransactionSupplementaryInvoiceBiEntitiesApi';

/**
 * This class represents the entity "RetailTransactionSupplementaryInvoiceBIEntities" of service "d365_metadata".
 */
export class RetailTransactionSupplementaryInvoiceBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionSupplementaryInvoiceBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionSupplementaryInvoiceBiEntities.
   */
  static override _entityName =
    'RetailTransactionSupplementaryInvoiceBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionSupplementaryInvoiceBiEntities entity.
   */
  static _keys = ['dataAreaId', 'Store', 'Terminal', 'TransactionId'];
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
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Account Num.
   * @nullable
   */
  declare accountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Name.
   * @nullable
   */
  declare customerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(
    _entityApi: RetailTransactionSupplementaryInvoiceBiEntitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface RetailTransactionSupplementaryInvoiceBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountNum?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
