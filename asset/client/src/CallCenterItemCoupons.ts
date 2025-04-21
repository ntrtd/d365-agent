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
import type { CallCenterItemCouponsApi } from './CallCenterItemCouponsApi';

/**
 * This class represents the entity "CallCenterItemCoupons" of service "d365_metadata".
 */
export class CallCenterItemCoupons<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CallCenterItemCouponsType<T>
{
  /**
   * Technical entity name for CallCenterItemCoupons.
   */
  static override _entityName = 'CallCenterItemCoupons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CallCenterItemCoupons entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber', 'ItemGroupId', 'CouponId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Group Id.
   */
  declare itemGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coupon Id.
   */
  declare couponId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: CallCenterItemCouponsApi<T>) {
    super(_entityApi);
  }
}

export interface CallCenterItemCouponsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  itemGroupId: DeserializedType<T, 'Edm.String'>;
  couponId: DeserializedType<T, 'Edm.String'>;
}
