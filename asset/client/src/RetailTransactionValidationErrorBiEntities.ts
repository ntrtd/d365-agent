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
import type { RetailTransactionValidationErrorBiEntitiesApi } from './RetailTransactionValidationErrorBiEntitiesApi';
import { RetailTransactionValidationType } from './RetailTransactionValidationType';

/**
 * This class represents the entity "RetailTransactionValidationErrorBIEntities" of service "d365_metadata".
 */
export class RetailTransactionValidationErrorBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionValidationErrorBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionValidationErrorBiEntities.
   */
  static override _entityName = 'RetailTransactionValidationErrorBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionValidationErrorBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'Channel',
    'LineNum',
    'Store',
    'Terminal',
    'TransactionId',
    'ValidationType'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Channel.
   */
  declare channel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
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
   * Validation Type.
   * @nullable
   */
  declare validationType?: RetailTransactionValidationType | null;
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
   * Error Message.
   * @nullable
   */
  declare errorMessage?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTransactionValidationErrorBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionValidationErrorBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  channel: DeserializedType<T, 'Edm.Int64'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  validationType?: RetailTransactionValidationType | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  errorMessage?: DeserializedType<T, 'Edm.String'> | null;
}
