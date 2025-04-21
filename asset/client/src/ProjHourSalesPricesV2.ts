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
import type { ProjHourSalesPricesV2Api } from './ProjHourSalesPricesV2Api';
import { ProjSalesPriceModel } from './ProjSalesPriceModel';

/**
 * This class represents the entity "ProjHourSalesPricesV2" of service "d365_metadata".
 */
export class ProjHourSalesPricesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjHourSalesPricesV2Type<T>
{
  /**
   * Technical entity name for ProjHourSalesPricesV2.
   */
  static override _entityName = 'ProjHourSalesPricesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjHourSalesPricesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjectId',
    'PriceGroup',
    'ResourceCategoryId',
    'TransDate',
    'CurrencyId',
    'CustomerAccount',
    'ProjectContractId',
    'ResourceId',
    'ResourceCompanyId',
    'CategoryId'
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
   * Resource Category Id.
   */
  declare resourceCategoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency Id.
   */
  declare currencyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account.
   */
  declare customerAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Contract Id.
   */
  declare projectContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Company Id.
   */
  declare resourceCompanyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Price Model.
   * @nullable
   */
  declare salesPriceModel?: ProjSalesPriceModel | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Pricing.
   */
  declare salesPricing: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ProjHourSalesPricesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProjHourSalesPricesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  priceGroup: DeserializedType<T, 'Edm.String'>;
  resourceCategoryId: DeserializedType<T, 'Edm.String'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyId: DeserializedType<T, 'Edm.String'>;
  customerAccount: DeserializedType<T, 'Edm.String'>;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  resourceId: DeserializedType<T, 'Edm.String'>;
  resourceCompanyId: DeserializedType<T, 'Edm.String'>;
  categoryId: DeserializedType<T, 'Edm.String'>;
  salesPriceModel?: ProjSalesPriceModel | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesPricing: DeserializedType<T, 'Edm.Decimal'>;
}
