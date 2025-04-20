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
import type { CallCenterSalesOrderCouponsApi } from './CallCenterSalesOrderCouponsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CallCenterSalesOrderCoupons" of service "d365_metadata".
 */
export class CallCenterSalesOrderCoupons<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CallCenterSalesOrderCouponsType<T>
{
  /**
   * Technical entity name for CallCenterSalesOrderCoupons.
   */
  static override _entityName = 'CallCenterSalesOrderCoupons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CallCenterSalesOrderCoupons entity.
   */
  static _keys = ['dataAreaId', 'CouponId', 'SalesId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coupon Id.
   */
  declare couponId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Id.
   */
  declare salesId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Liability Deducted.
   * @nullable
   */
  declare isLiabilityDeducted?: NoYes | null;
  /**
   * Is Reissue.
   * @nullable
   */
  declare isReissue?: NoYes | null;

  constructor(_entityApi: CallCenterSalesOrderCouponsApi<T>) {
    super(_entityApi);
  }
}

export interface CallCenterSalesOrderCouponsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  couponId: DeserializedType<T, 'Edm.String'>;
  salesId: DeserializedType<T, 'Edm.String'>;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  isLiabilityDeducted?: NoYes | null;
  isReissue?: NoYes | null;
}
