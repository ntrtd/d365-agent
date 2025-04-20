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
import type { PaymentCalendarExceptionsApi } from './PaymentCalendarExceptionsApi';
import { PaymDayExceptionType } from './PaymDayExceptionType';

/**
 * This class represents the entity "PaymentCalendarExceptions" of service "d365_metadata".
 */
export class PaymentCalendarExceptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PaymentCalendarExceptionsType<T>
{
  /**
   * Technical entity name for PaymentCalendarExceptions.
   */
  static override _entityName = 'PaymentCalendarExceptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentCalendarExceptions entity.
   */
  static _keys = ['PaymentCalendarName', 'ExceptionDate'];
  /**
   * Payment Calendar Name.
   */
  declare paymentCalendarName: DeserializedType<T, 'Edm.String'>;
  /**
   * Exception Date.
   */
  declare exceptionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exception Type.
   * @nullable
   */
  declare exceptionType?: PaymDayExceptionType | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PaymentCalendarExceptionsApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentCalendarExceptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  paymentCalendarName: DeserializedType<T, 'Edm.String'>;
  exceptionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exceptionType?: PaymDayExceptionType | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
