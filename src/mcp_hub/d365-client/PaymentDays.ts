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
import type { PaymentDaysApi } from './PaymentDaysApi';
import { WeekMonth } from './WeekMonth';
import { WeekDays } from './WeekDays';
import { PaymentTerms, PaymentTermsType } from './PaymentTerms';

/**
 * This class represents the entity "PaymentDays" of service "d365_metadata".
 */
export class PaymentDays<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentDaysType<T>
{
  /**
   * Technical entity name for PaymentDays.
   */
  static override _entityName = 'PaymentDays';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentDays entity.
   */
  static _keys = ['dataAreaId', 'Name', 'Frequency', 'DayOfWeek', 'DayOfMonth'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Frequency.
   * @nullable
   */
  declare frequency?: WeekMonth | null;
  /**
   * Day Of Week.
   * @nullable
   */
  declare dayOfWeek?: WeekDays | null;
  /**
   * Day Of Month.
   */
  declare dayOfMonth: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PaymentTerms} entity.
   */
  declare paymentTerm: PaymentTerms<T>[];

  constructor(_entityApi: PaymentDaysApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentDaysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  frequency?: WeekMonth | null;
  dayOfWeek?: WeekDays | null;
  dayOfMonth: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  paymentTerm: PaymentTermsType<T>[];
}
