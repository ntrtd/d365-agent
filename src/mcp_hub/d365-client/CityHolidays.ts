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
import type { CityHolidaysApi } from './CityHolidaysApi';

/**
 * This class represents the entity "CityHolidays" of service "d365_metadata".
 */
export class CityHolidays<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CityHolidaysType<T>
{
  /**
   * Technical entity name for CityHolidays.
   */
  static override _entityName = 'CityHolidays';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CityHolidays entity.
   */
  static _keys = ['CountryRegionId', 'StateId', 'CityName', 'HolidayDate'];
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * State Id.
   */
  declare stateId: DeserializedType<T, 'Edm.String'>;
  /**
   * City Name.
   */
  declare cityName: DeserializedType<T, 'Edm.String'>;
  /**
   * Holiday Date.
   */
  declare holidayDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CityHolidaysApi<T>) {
    super(_entityApi);
  }
}

export interface CityHolidaysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  cityName: DeserializedType<T, 'Edm.String'>;
  holidayDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
