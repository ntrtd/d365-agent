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
import type { PaymentDaysCdsApi } from './PaymentDaysCdsApi';
import {
  PaymentDayLinesCds,
  PaymentDayLinesCdsType
} from './PaymentDayLinesCds';

/**
 * This class represents the entity "PaymentDaysCds" of service "d365_metadata".
 */
export class PaymentDaysCds<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentDaysCdsType<T>
{
  /**
   * Technical entity name for PaymentDaysCds.
   */
  static override _entityName = 'PaymentDaysCds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentDaysCds entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PaymentDayLinesCds} entity.
   */
  declare paymentDayLinePaymentDayEntity: PaymentDayLinesCds<T>[];

  constructor(_entityApi: PaymentDaysCdsApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentDaysCdsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  paymentDayLinePaymentDayEntity: PaymentDayLinesCdsType<T>[];
}
