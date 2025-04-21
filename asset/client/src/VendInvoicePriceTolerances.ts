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
import type { VendInvoicePriceTolerancesApi } from './VendInvoicePriceTolerancesApi';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import {
  VendorPriceToleranceGroups,
  VendorPriceToleranceGroupsType
} from './VendorPriceToleranceGroups';
import {
  ItemPriceToleranceGroups,
  ItemPriceToleranceGroupsType
} from './ItemPriceToleranceGroups';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "VendInvoicePriceTolerances" of service "d365_metadata".
 */
export class VendInvoicePriceTolerances<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendInvoicePriceTolerancesType<T>
{
  /**
   * Technical entity name for VendInvoicePriceTolerances.
   */
  static override _entityName = 'VendInvoicePriceTolerances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendInvoicePriceTolerances entity.
   */
  static _keys = [
    'dataAreaId',
    'PriceToleranceItemNumber',
    'PriceToleranceItemGroup',
    'PriceToleranceAccountNumber',
    'PriceToleranceAccountGroup'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Tolerance Item Number.
   */
  declare priceToleranceItemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Tolerance Item Group.
   */
  declare priceToleranceItemGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Tolerance Account Number.
   */
  declare priceToleranceAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Tolerance Account Group.
   */
  declare priceToleranceAccountGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Percent Tolerance.
   */
  declare percentTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendorV2?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorPriceToleranceGroups} entity.
   */
  declare vendorPriceToleranceGroup?: VendorPriceToleranceGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ItemPriceToleranceGroups} entity.
   */
  declare itemPriceToleranceGroup?: ItemPriceToleranceGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;

  constructor(_entityApi: VendInvoicePriceTolerancesApi<T>) {
    super(_entityApi);
  }
}

export interface VendInvoicePriceTolerancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  priceToleranceItemNumber: DeserializedType<T, 'Edm.String'>;
  priceToleranceItemGroup: DeserializedType<T, 'Edm.String'>;
  priceToleranceAccountNumber: DeserializedType<T, 'Edm.String'>;
  priceToleranceAccountGroup: DeserializedType<T, 'Edm.String'>;
  percentTolerance: DeserializedType<T, 'Edm.Decimal'>;
  vendorV2?: VendorsV2Type<T> | null;
  vendorPriceToleranceGroup?: VendorPriceToleranceGroupsType<T> | null;
  itemPriceToleranceGroup?: ItemPriceToleranceGroupsType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
}
