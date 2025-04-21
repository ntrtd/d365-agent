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
import type { CodaTransactionGroupsApi } from './CodaTransactionGroupsApi';

/**
 * This class represents the entity "CodaTransactionGroups" of service "d365_metadata".
 */
export class CodaTransactionGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CodaTransactionGroupsType<T>
{
  /**
   * Technical entity name for CodaTransactionGroups.
   */
  static override _entityName = 'CodaTransactionGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CodaTransactionGroups entity.
   */
  static _keys = ['dataAreaId', 'Code', 'TransactionCategory', 'Transaction'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Category.
   */
  declare transactionCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction.
   */
  declare transaction: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Description.
   * @nullable
   */
  declare transactionDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Description.
   * @nullable
   */
  declare categoryDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CodaTransactionGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface CodaTransactionGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  transactionCategory: DeserializedType<T, 'Edm.String'>;
  transaction: DeserializedType<T, 'Edm.String'>;
  transactionDescription?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  categoryDescription?: DeserializedType<T, 'Edm.String'> | null;
}
