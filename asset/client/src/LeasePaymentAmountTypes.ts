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
import type { LeasePaymentAmountTypesApi } from './LeasePaymentAmountTypesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LeasePaymentAmountTypes" of service "d365_metadata".
 */
export class LeasePaymentAmountTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeasePaymentAmountTypesType<T>
{
  /**
   * Technical entity name for LeasePaymentAmountTypes.
   */
  static override _entityName = 'LeasePaymentAmountTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeasePaymentAmountTypes entity.
   */
  static _keys = ['dataAreaId', 'PaymentAmountType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Amount Type.
   */
  declare paymentAmountType: DeserializedType<T, 'Edm.String'>;
  /**
   * Ifrs Index Revaluation.
   * @nullable
   */
  declare ifrsIndexRevaluation?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LeasePaymentAmountTypesApi<T>) {
    super(_entityApi);
  }
}

export interface LeasePaymentAmountTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  paymentAmountType: DeserializedType<T, 'Edm.String'>;
  ifrsIndexRevaluation?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
