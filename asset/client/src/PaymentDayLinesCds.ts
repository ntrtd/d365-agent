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
import type { PaymentDayLinesCdsApi } from './PaymentDayLinesCdsApi';
import { WeekDays } from './WeekDays';
import { WeekMonth } from './WeekMonth';
import { PaymentDaysCds, PaymentDaysCdsType } from './PaymentDaysCds';

/**
 * This class represents the entity "PaymentDayLinesCds" of service "d365_metadata".
 */
export class PaymentDayLinesCds<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentDayLinesCdsType<T>
{
  /**
   * Technical entity name for PaymentDayLinesCds.
   */
  static override _entityName = 'PaymentDayLinesCds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentDayLinesCds entity.
   */
  static _keys = ['dataAreaId', 'CdsIntegrationKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cds Integration Key.
   */
  declare cdsIntegrationKey: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Day Of Month.
   */
  declare dayOfMonth: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Day Of Week.
   * @nullable
   */
  declare dayOfWeek?: WeekDays | null;
  /**
   * Frequency.
   * @nullable
   */
  declare frequency?: WeekMonth | null;
  /**
   * One-to-one navigation property to the {@link PaymentDaysCds} entity.
   */
  declare paymentDayLinePaymentDayEntityRole?: PaymentDaysCds<T> | null;

  constructor(_entityApi: PaymentDayLinesCdsApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentDayLinesCdsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cdsIntegrationKey: DeserializedType<T, 'Edm.Guid'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  dayOfMonth: DeserializedType<T, 'Edm.Int32'>;
  dayOfWeek?: WeekDays | null;
  frequency?: WeekMonth | null;
  paymentDayLinePaymentDayEntityRole?: PaymentDaysCdsType<T> | null;
}
