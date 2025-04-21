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
import type { StateHolidaysApi } from './StateHolidaysApi';

/**
 * This class represents the entity "StateHolidays" of service "d365_metadata".
 */
export class StateHolidays<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StateHolidaysType<T>
{
  /**
   * Technical entity name for StateHolidays.
   */
  static override _entityName = 'StateHolidays';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StateHolidays entity.
   */
  static _keys = ['HolidayDate', 'CountryRegionId', 'StateId'];
  /**
   * Holiday Date.
   */
  declare holidayDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * State Id.
   */
  declare stateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: StateHolidaysApi<T>) {
    super(_entityApi);
  }
}

export interface StateHolidaysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  holidayDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
