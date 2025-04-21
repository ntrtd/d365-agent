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
import type { PaymentOrderStatusApi } from './PaymentOrderStatusApi';

/**
 * This class represents the entity "PaymentOrderStatus" of service "d365_metadata".
 */
export class PaymentOrderStatus<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentOrderStatusType<T>
{
  /**
   * Technical entity name for PaymentOrderStatus.
   */
  static override _entityName = 'PaymentOrderStatus';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentOrderStatus entity.
   */
  static _keys = ['dataAreaId', 'Number'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Number.
   */
  declare number: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PaymentOrderStatusApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentOrderStatusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  number: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
