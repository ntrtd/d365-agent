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
import type { CallCenterCouponDiscountsApi } from './CallCenterCouponDiscountsApi';
import { McrCouponDiscAttr } from './McrCouponDiscAttr';

/**
 * This class represents the entity "CallCenterCouponDiscounts" of service "d365_metadata".
 */
export class CallCenterCouponDiscounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CallCenterCouponDiscountsType<T>
{
  /**
   * Technical entity name for CallCenterCouponDiscounts.
   */
  static override _entityName = 'CallCenterCouponDiscounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CallCenterCouponDiscounts entity.
   */
  static _keys = ['dataAreaId', 'CouponId', 'CouponAmount'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coupon Id.
   */
  declare couponId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coupon Amount.
   */
  declare couponAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Coupon Value.
   */
  declare couponValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Coupon Discount Type.
   * @nullable
   */
  declare couponDiscountType?: McrCouponDiscAttr | null;

  constructor(_entityApi: CallCenterCouponDiscountsApi<T>) {
    super(_entityApi);
  }
}

export interface CallCenterCouponDiscountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  couponId: DeserializedType<T, 'Edm.String'>;
  couponAmount: DeserializedType<T, 'Edm.Decimal'>;
  couponValue: DeserializedType<T, 'Edm.Decimal'>;
  couponDiscountType?: McrCouponDiscAttr | null;
}
