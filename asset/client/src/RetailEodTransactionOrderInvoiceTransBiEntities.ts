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
import type { RetailEodTransactionOrderInvoiceTransBiEntitiesApi } from './RetailEodTransactionOrderInvoiceTransBiEntitiesApi';

/**
 * This class represents the entity "RetailEodTransactionOrderInvoiceTransBIEntities" of service "d365_metadata".
 */
export class RetailEodTransactionOrderInvoiceTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEodTransactionOrderInvoiceTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailEodTransactionOrderInvoiceTransBiEntities.
   */
  static override _entityName =
    'RetailEodTransactionOrderInvoiceTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEodTransactionOrderInvoiceTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'StatementId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Statement Id.
   */
  declare statementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   * @nullable
   */
  declare transactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Store Id.
   * @nullable
   */
  declare storeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(
    _entityApi: RetailEodTransactionOrderInvoiceTransBiEntitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface RetailEodTransactionOrderInvoiceTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  statementId: DeserializedType<T, 'Edm.String'>;
  transactionId?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  storeId?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
