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
import type { CouponUsagesApi } from './CouponUsagesApi';
import { RetailCouponUsageStatus } from './RetailCouponUsageStatus';

/**
 * This class represents the entity "CouponUsages" of service "d365_metadata".
 */
export class CouponUsages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CouponUsagesType<T>
{
  /**
   * Technical entity name for CouponUsages.
   */
  static override _entityName = 'CouponUsages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CouponUsages entity.
   */
  static _keys = ['dataAreaId', 'UsageId', 'RetailChannelId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Usage Id.
   */
  declare usageId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Retail Channel Id.
   */
  declare retailChannelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Receipt Id.
   * @nullable
   */
  declare receiptId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account.
   * @nullable
   */
  declare customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Id.
   * @nullable
   */
  declare transactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Coupon Code Id.
   * @nullable
   */
  declare couponCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailCouponUsageStatus | null;

  constructor(_entityApi: CouponUsagesApi<T>) {
    super(_entityApi);
  }
}

export interface CouponUsagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  usageId: DeserializedType<T, 'Edm.Guid'>;
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  receiptId?: DeserializedType<T, 'Edm.String'> | null;
  customerAccount?: DeserializedType<T, 'Edm.String'> | null;
  transactionId?: DeserializedType<T, 'Edm.String'> | null;
  couponCodeId?: DeserializedType<T, 'Edm.String'> | null;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  status?: RetailCouponUsageStatus | null;
}
