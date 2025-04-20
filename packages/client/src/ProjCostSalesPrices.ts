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
import type { ProjCostSalesPricesApi } from './ProjCostSalesPricesApi';
import { ProjSalesPriceModel } from './ProjSalesPriceModel';

/**
 * This class represents the entity "ProjCostSalesPrices" of service "d365_metadata".
 */
export class ProjCostSalesPrices<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjCostSalesPricesType<T>
{
  /**
   * Technical entity name for ProjCostSalesPrices.
   */
  static override _entityName = 'ProjCostSalesPrices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjCostSalesPrices entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjectId',
    'PriceGroup',
    'CategoryId',
    'CustomerAccount',
    'ProjectContractId',
    'TransactionDate',
    'ResourceId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Group.
   */
  declare priceGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account.
   */
  declare customerAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Contract Id.
   */
  declare projectContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Pricing.
   */
  declare salesPricing: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Id.
   * @nullable
   */
  declare currencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price Model.
   * @nullable
   */
  declare salesPriceModel?: ProjSalesPriceModel | null;

  constructor(_entityApi: ProjCostSalesPricesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjCostSalesPricesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  priceGroup: DeserializedType<T, 'Edm.String'>;
  categoryId: DeserializedType<T, 'Edm.String'>;
  customerAccount: DeserializedType<T, 'Edm.String'>;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  resourceId: DeserializedType<T, 'Edm.String'>;
  salesPricing: DeserializedType<T, 'Edm.Decimal'>;
  currencyId?: DeserializedType<T, 'Edm.String'> | null;
  salesPriceModel?: ProjSalesPriceModel | null;
}
