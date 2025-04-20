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
import type { LeasePaymentAmountBreakdownImportsApi } from './LeasePaymentAmountBreakdownImportsApi';

/**
 * This class represents the entity "LeasePaymentAmountBreakdownImports" of service "d365_metadata".
 */
export class LeasePaymentAmountBreakdownImports<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeasePaymentAmountBreakdownImportsType<T>
{
  /**
   * Technical entity name for LeasePaymentAmountBreakdownImports.
   */
  static override _entityName = 'LeasePaymentAmountBreakdownImports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeasePaymentAmountBreakdownImports entity.
   */
  static _keys = [
    'dataAreaId',
    'ImportId',
    'LeaseId',
    'StartDate',
    'PaymentAmountType'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Import Id.
   */
  declare importId: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: LeasePaymentAmountBreakdownImportsApi<T>) {
    super(_entityApi);
  }
}

export interface LeasePaymentAmountBreakdownImportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  importId: DeserializedType<T, 'Edm.String'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymentAmountType: DeserializedType<T, 'Edm.String'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
}
