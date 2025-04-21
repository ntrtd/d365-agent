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
import type { ServiceSubscriptionSalesPricesApi } from './ServiceSubscriptionSalesPricesApi';

/**
 * This class represents the entity "ServiceSubscriptionSalesPrices" of service "d365_metadata".
 */
export class ServiceSubscriptionSalesPrices<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceSubscriptionSalesPricesType<T>
{
  /**
   * Technical entity name for ServiceSubscriptionSalesPrices.
   */
  static override _entityName = 'ServiceSubscriptionSalesPrices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ServiceSubscriptionSalesPrices entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjectCategoryId',
    'SalesPriceCurrencyCode',
    'ProjectId',
    'InvoicingPeriodTypeCode',
    'PriceCustomerGroupCode',
    'ServiceSubscriptionId',
    'EffectiveDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Category Id.
   */
  declare projectCategoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Price Currency Code.
   */
  declare salesPriceCurrencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoicing Period Type Code.
   */
  declare invoicingPeriodTypeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Customer Group Code.
   */
  declare priceCustomerGroupCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Subscription Id.
   */
  declare serviceSubscriptionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ServiceSubscriptionSalesPricesApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceSubscriptionSalesPricesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectCategoryId: DeserializedType<T, 'Edm.String'>;
  salesPriceCurrencyCode: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  invoicingPeriodTypeCode: DeserializedType<T, 'Edm.String'>;
  priceCustomerGroupCode: DeserializedType<T, 'Edm.String'>;
  serviceSubscriptionId: DeserializedType<T, 'Edm.String'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
}
