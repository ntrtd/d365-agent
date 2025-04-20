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
import type { PaymentCalendarsApi } from './PaymentCalendarsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PaymentCalendars" of service "d365_metadata".
 */
export class PaymentCalendars<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentCalendarsType<T>
{
  /**
   * Technical entity name for PaymentCalendars.
   */
  static override _entityName = 'PaymentCalendars';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentCalendars entity.
   */
  static _keys = ['Name'];
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
   * Is Friday Business Day.
   * @nullable
   */
  declare isFridayBusinessDay?: NoYes | null;
  /**
   * Is Thursday Business Day.
   * @nullable
   */
  declare isThursdayBusinessDay?: NoYes | null;
  /**
   * Is Wednesday Business Day.
   * @nullable
   */
  declare isWednesdayBusinessDay?: NoYes | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Saturday Business Day.
   * @nullable
   */
  declare isSaturdayBusinessDay?: NoYes | null;
  /**
   * Is Sunday Business Day.
   * @nullable
   */
  declare isSundayBusinessDay?: NoYes | null;
  /**
   * Is Monday Business Day.
   * @nullable
   */
  declare isMondayBusinessDay?: NoYes | null;
  /**
   * Is Tuesday Business Day.
   * @nullable
   */
  declare isTuesdayBusinessDay?: NoYes | null;

  constructor(_entityApi: PaymentCalendarsApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentCalendarsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isFridayBusinessDay?: NoYes | null;
  isThursdayBusinessDay?: NoYes | null;
  isWednesdayBusinessDay?: NoYes | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  isSaturdayBusinessDay?: NoYes | null;
  isSundayBusinessDay?: NoYes | null;
  isMondayBusinessDay?: NoYes | null;
  isTuesdayBusinessDay?: NoYes | null;
}
