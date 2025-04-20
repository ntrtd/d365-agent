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
import type { CallCenterCouponsApi } from './CallCenterCouponsApi';
import { McrCouponInclude } from './McrCouponInclude';
import { NoYes } from './NoYes';
import { McrCouponOrign } from './McrCouponOrign';

/**
 * This class represents the entity "CallCenterCoupons" of service "d365_metadata".
 */
export class CallCenterCoupons<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CallCenterCouponsType<T>
{
  /**
   * Technical entity name for CallCenterCoupons.
   */
  static override _entityName = 'CallCenterCoupons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CallCenterCoupons entity.
   */
  static _keys = ['dataAreaId', 'CouponId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coupon Id.
   */
  declare couponId: DeserializedType<T, 'Edm.String'>;
  /**
   * Include Exclude Item.
   * @nullable
   */
  declare includeExcludeItem?: McrCouponInclude | null;
  /**
   * Is Manufacturer Coupon.
   * @nullable
   */
  declare isManufacturerCoupon?: NoYes | null;
  /**
   * Is Enabled.
   * @nullable
   */
  declare isEnabled?: NoYes | null;
  /**
   * Is Reissue.
   * @nullable
   */
  declare isReissue?: NoYes | null;
  /**
   * Is Exclusive.
   * @nullable
   */
  declare isExclusive?: NoYes | null;
  /**
   * Coupon Origination.
   * @nullable
   */
  declare couponOrigination?: McrCouponOrign | null;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Include Exclude Catalog.
   * @nullable
   */
  declare includeExcludeCatalog?: McrCouponInclude | null;
  /**
   * Is Coupon Voided.
   * @nullable
   */
  declare isCouponVoided?: NoYes | null;
  /**
   * Coupon Number.
   * @nullable
   */
  declare couponNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Coupon Expire Date.
   */
  declare couponExpireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is One Time Use.
   * @nullable
   */
  declare isOneTimeUse?: NoYes | null;
  /**
   * Coupon Redemption Rate.
   */
  declare couponRedemptionRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Coupon Description.
   * @nullable
   */
  declare couponDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Customer Specific.
   * @nullable
   */
  declare isCustomerSpecific?: NoYes | null;
  /**
   * Parent Coupon Id.
   * @nullable
   */
  declare parentCouponId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CallCenterCouponsApi<T>) {
    super(_entityApi);
  }
}

export interface CallCenterCouponsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  couponId: DeserializedType<T, 'Edm.String'>;
  includeExcludeItem?: McrCouponInclude | null;
  isManufacturerCoupon?: NoYes | null;
  isEnabled?: NoYes | null;
  isReissue?: NoYes | null;
  isExclusive?: NoYes | null;
  couponOrigination?: McrCouponOrign | null;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  includeExcludeCatalog?: McrCouponInclude | null;
  isCouponVoided?: NoYes | null;
  couponNumber?: DeserializedType<T, 'Edm.String'> | null;
  couponExpireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isOneTimeUse?: NoYes | null;
  couponRedemptionRate: DeserializedType<T, 'Edm.Decimal'>;
  couponDescription?: DeserializedType<T, 'Edm.String'> | null;
  isCustomerSpecific?: NoYes | null;
  parentCouponId?: DeserializedType<T, 'Edm.String'> | null;
}
