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
import type { RetailEodTransactionErrorBiEntitiesApi } from './RetailEodTransactionErrorBiEntitiesApi';

/**
 * This class represents the entity "RetailEodTransactionErrorBIEntities" of service "d365_metadata".
 */
export class RetailEodTransactionErrorBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEodTransactionErrorBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailEodTransactionErrorBiEntities.
   */
  static override _entityName = 'RetailEodTransactionErrorBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEodTransactionErrorBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Error Message Localized.
   * @nullable
   */
  declare errorMessageLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Error Message.
   * @nullable
   */
  declare errorMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Id.
   * @nullable
   */
  declare statementId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailEodTransactionErrorBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailEodTransactionErrorBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  errorMessageLocalized?: DeserializedType<T, 'Edm.String'> | null;
  errorMessage?: DeserializedType<T, 'Edm.String'> | null;
  statementId?: DeserializedType<T, 'Edm.String'> | null;
}
