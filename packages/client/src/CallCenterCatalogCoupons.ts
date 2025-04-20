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
import type { CallCenterCatalogCouponsApi } from './CallCenterCatalogCouponsApi';
import { McrTableAll } from './McrTableAll';
import { RetailCatalogs, RetailCatalogsType } from './RetailCatalogs';

/**
 * This class represents the entity "CallCenterCatalogCoupons" of service "d365_metadata".
 */
export class CallCenterCatalogCoupons<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CallCenterCatalogCouponsType<T>
{
  /**
   * Technical entity name for CallCenterCatalogCoupons.
   */
  static override _entityName = 'CallCenterCatalogCoupons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CallCenterCatalogCoupons entity.
   */
  static _keys = ['dataAreaId', 'CatalogCode', 'CouponId', 'CatalogNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Catalog Code.
   * @nullable
   */
  declare catalogCode?: McrTableAll | null;
  /**
   * Coupon Id.
   */
  declare couponId: DeserializedType<T, 'Edm.String'>;
  /**
   * Catalog Number.
   */
  declare catalogNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link RetailCatalogs} entity.
   */
  declare retailCatalog?: RetailCatalogs<T> | null;

  constructor(_entityApi: CallCenterCatalogCouponsApi<T>) {
    super(_entityApi);
  }
}

export interface CallCenterCatalogCouponsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  catalogCode?: McrTableAll | null;
  couponId: DeserializedType<T, 'Edm.String'>;
  catalogNumber: DeserializedType<T, 'Edm.String'>;
  retailCatalog?: RetailCatalogsType<T> | null;
}
