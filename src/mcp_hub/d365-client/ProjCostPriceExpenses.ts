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
import type { ProjCostPriceExpensesApi } from './ProjCostPriceExpensesApi';

/**
 * This class represents the entity "ProjCostPriceExpenses" of service "d365_metadata".
 */
export class ProjCostPriceExpenses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjCostPriceExpensesType<T>
{
  /**
   * Technical entity name for ProjCostPriceExpenses.
   */
  static override _entityName = 'ProjCostPriceExpenses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjCostPriceExpenses entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjId',
    'ResourceId',
    'CategoryId',
    'TransactionDate',
    'CustomerAccount',
    'ProjectContractId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Id.
   */
  declare projId: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customer Account.
   */
  declare customerAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Contract Id.
   */
  declare projectContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Group.
   * @nullable
   */
  declare priceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Price.
   */
  declare costPrice: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ProjCostPriceExpensesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjCostPriceExpensesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projId: DeserializedType<T, 'Edm.String'>;
  resourceId: DeserializedType<T, 'Edm.String'>;
  categoryId: DeserializedType<T, 'Edm.String'>;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerAccount: DeserializedType<T, 'Edm.String'>;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  priceGroup?: DeserializedType<T, 'Edm.String'> | null;
  costPrice: DeserializedType<T, 'Edm.Decimal'>;
}
