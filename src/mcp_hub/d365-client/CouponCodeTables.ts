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
import type { CouponCodeTablesApi } from './CouponCodeTablesApi';
import { RetailCouponStatus } from './RetailCouponStatus';

/**
 * This class represents the entity "CouponCodeTables" of service "d365_metadata".
 */
export class CouponCodeTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CouponCodeTablesType<T>
{
  /**
   * Technical entity name for CouponCodeTables.
   */
  static override _entityName = 'CouponCodeTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CouponCodeTables entity.
   */
  static _keys = ['dataAreaId', 'CouponCodeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coupon Code Id.
   */
  declare couponCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coupon Code.
   * @nullable
   */
  declare couponCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailCouponStatus | null;
  /**
   * Barcode.
   * @nullable
   */
  declare barcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Coupon Number.
   * @nullable
   */
  declare couponNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: CouponCodeTablesApi<T>) {
    super(_entityApi);
  }
}

export interface CouponCodeTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  couponCodeId: DeserializedType<T, 'Edm.String'>;
  couponCode?: DeserializedType<T, 'Edm.String'> | null;
  status?: RetailCouponStatus | null;
  barcode?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  couponNumber?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
