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
import type { RetailVendorSalesPriceMarginSetupsApi } from './RetailVendorSalesPriceMarginSetupsApi';

/**
 * This class represents the entity "RetailVendorSalesPriceMarginSetups" of service "d365_metadata".
 */
export class RetailVendorSalesPriceMarginSetups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailVendorSalesPriceMarginSetupsType<T>
{
  /**
   * Technical entity name for RetailVendorSalesPriceMarginSetups.
   */
  static override _entityName = 'RetailVendorSalesPriceMarginSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailVendorSalesPriceMarginSetups entity.
   */
  static _keys = [
    'dataAreaId',
    'CategoryName',
    'CategoryHierarchyName',
    'VendorAccount'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Name.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Hierarchy Name.
   */
  declare categoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Account.
   */
  declare vendorAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Suggested Contribution Ratio.
   */
  declare suggestedContributionRatio: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contribution Ratio.
   */
  declare contributionRatio: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailVendorSalesPriceMarginSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailVendorSalesPriceMarginSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  categoryName: DeserializedType<T, 'Edm.String'>;
  categoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  vendorAccount: DeserializedType<T, 'Edm.String'>;
  suggestedContributionRatio: DeserializedType<T, 'Edm.Decimal'>;
  contributionRatio: DeserializedType<T, 'Edm.Decimal'>;
}
