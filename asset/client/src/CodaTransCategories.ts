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
import type { CodaTransCategoriesApi } from './CodaTransCategoriesApi';

/**
 * This class represents the entity "CodaTransCategories" of service "d365_metadata".
 */
export class CodaTransCategories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CodaTransCategoriesType<T>
{
  /**
   * Technical entity name for CodaTransCategories.
   */
  static override _entityName = 'CodaTransCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CodaTransCategories entity.
   */
  static _keys = [
    'dataAreaId',
    'TransactionFamily',
    'Transaction',
    'TransactionCategory'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Family.
   */
  declare transactionFamily: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction.
   */
  declare transaction: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Category.
   */
  declare transactionCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CodaTransCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface CodaTransCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionFamily: DeserializedType<T, 'Edm.String'>;
  transaction: DeserializedType<T, 'Edm.String'>;
  transactionCategory: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
