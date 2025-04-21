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
import type { CallCenterCustomerCouponsApi } from './CallCenterCustomerCouponsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CallCenterCustomerCoupons" of service "d365_metadata".
 */
export class CallCenterCustomerCoupons<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CallCenterCustomerCouponsType<T>
{
  /**
   * Technical entity name for CallCenterCustomerCoupons.
   */
  static override _entityName = 'CallCenterCustomerCoupons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CallCenterCustomerCoupons entity.
   */
  static _keys = [
    'dataAreaId',
    'CustomerAccountNumber',
    'CustomerGroupId',
    'CouponId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account Number.
   */
  declare customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Group Id.
   */
  declare customerGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coupon Id.
   */
  declare couponId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Coupon Voided.
   * @nullable
   */
  declare isCouponVoided?: NoYes | null;

  constructor(_entityApi: CallCenterCustomerCouponsApi<T>) {
    super(_entityApi);
  }
}

export interface CallCenterCustomerCouponsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  customerGroupId: DeserializedType<T, 'Edm.String'>;
  couponId: DeserializedType<T, 'Edm.String'>;
  isCouponVoided?: NoYes | null;
}
