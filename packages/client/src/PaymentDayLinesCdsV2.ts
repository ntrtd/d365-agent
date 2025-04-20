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
import type { PaymentDayLinesCdsV2Api } from './PaymentDayLinesCdsV2Api';
import { WeekDays } from './WeekDays';
import { WeekMonth } from './WeekMonth';

/**
 * This class represents the entity "PaymentDayLinesCdsV2" of service "d365_metadata".
 */
export class PaymentDayLinesCdsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PaymentDayLinesCdsV2Type<T>
{
  /**
   * Technical entity name for PaymentDayLinesCdsV2.
   */
  static override _entityName = 'PaymentDayLinesCdsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentDayLinesCdsV2 entity.
   */
  static _keys = ['dataAreaId', 'Name', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
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

  constructor(_entityApi: PaymentDayLinesCdsV2Api<T>) {
    super(_entityApi);
  }
}

export interface PaymentDayLinesCdsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  dayOfMonth: DeserializedType<T, 'Edm.Int32'>;
  dayOfWeek?: WeekDays | null;
  frequency?: WeekMonth | null;
}
