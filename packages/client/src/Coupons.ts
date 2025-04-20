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
import type { CouponsApi } from './CouponsApi';
import { NoYes } from './NoYes';
import { RetailCouponStatus } from './RetailCouponStatus';
import { RetailCouponUsageLimitType } from './RetailCouponUsageLimitType';

/**
 * This class represents the entity "Coupons" of service "d365_metadata".
 */
export class Coupons<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CouponsType<T>
{
  /**
   * Technical entity name for Coupons.
   */
  static override _entityName = 'Coupons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Coupons entity.
   */
  static _keys = ['dataAreaId', 'CouponNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coupon Number.
   */
  declare couponNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Apply Without Coupon Code.
   * @nullable
   */
  declare applyWithoutCouponCode?: NoYes | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailCouponStatus | null;
  /**
   * Is Exclusive.
   * @nullable
   */
  declare isExclusive?: NoYes | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Usage Limit Type.
   * @nullable
   */
  declare usageLimitType?: RetailCouponUsageLimitType | null;
  /**
   * Is Customer Required.
   * @nullable
   */
  declare isCustomerRequired?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage Limit.
   */
  declare usageLimit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Discount Offer Id.
   * @nullable
   */
  declare discountOfferId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Coupon Number.
   * @nullable
   */
  declare parentCouponNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: CouponsApi<T>) {
    super(_entityApi);
  }
}

export interface CouponsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  couponNumber: DeserializedType<T, 'Edm.String'>;
  applyWithoutCouponCode?: NoYes | null;
  status?: RetailCouponStatus | null;
  isExclusive?: NoYes | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  usageLimitType?: RetailCouponUsageLimitType | null;
  isCustomerRequired?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  usageLimit: DeserializedType<T, 'Edm.Int32'>;
  discountOfferId?: DeserializedType<T, 'Edm.String'> | null;
  parentCouponNumber?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
