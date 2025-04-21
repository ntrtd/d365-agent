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
import type { ValidatePaymentsApi } from './ValidatePaymentsApi';

/**
 * This class represents the entity "ValidatePayments" of service "d365_metadata".
 */
export class ValidatePayments<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ValidatePaymentsType<T>
{
  /**
   * Technical entity name for ValidatePayments.
   */
  static override _entityName = 'ValidatePayments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ValidatePayments entity.
   */
  static _keys = ['dataAreaId', 'ExpenseCategory', 'PaymentMethod'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense Category.
   */
  declare expenseCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Method.
   */
  declare paymentMethod: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ValidatePaymentsApi<T>) {
    super(_entityApi);
  }
}

export interface ValidatePaymentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  expenseCategory: DeserializedType<T, 'Edm.String'>;
  paymentMethod: DeserializedType<T, 'Edm.String'>;
}
