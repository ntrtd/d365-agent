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
import type { LeasePaymentAmountBreakdownsApi } from './LeasePaymentAmountBreakdownsApi';

/**
 * This class represents the entity "LeasePaymentAmountBreakdowns" of service "d365_metadata".
 */
export class LeasePaymentAmountBreakdowns<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeasePaymentAmountBreakdownsType<T>
{
  /**
   * Technical entity name for LeasePaymentAmountBreakdowns.
   */
  static override _entityName = 'LeasePaymentAmountBreakdowns';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeasePaymentAmountBreakdowns entity.
   */
  static _keys = ['dataAreaId', 'LeaseId', 'StartDate', 'PaymentAmountType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payment Amount Type.
   */
  declare paymentAmountType: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: LeasePaymentAmountBreakdownsApi<T>) {
    super(_entityApi);
  }
}

export interface LeasePaymentAmountBreakdownsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymentAmountType: DeserializedType<T, 'Edm.String'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
}
