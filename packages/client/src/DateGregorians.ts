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
import type { DateGregoriansApi } from './DateGregoriansApi';

/**
 * This class represents the entity "DateGregorians" of service "d365_metadata".
 */
export class DateGregorians<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DateGregoriansType<T>
{
  /**
   * Technical entity name for DateGregorians.
   */
  static override _entityName = 'DateGregorians';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DateGregorians entity.
   */
  static _keys = ['GregorianDate'];
  /**
   * Gregorian Date.
   */
  declare gregorianDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Gregorian Date Id.
   */
  declare gregorianDateId: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: DateGregoriansApi<T>) {
    super(_entityApi);
  }
}

export interface DateGregoriansType<
  T extends DeSerializers = DefaultDeSerializers
> {
  gregorianDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  gregorianDateId: DeserializedType<T, 'Edm.Int64'>;
}
