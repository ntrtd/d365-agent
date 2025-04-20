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
import type { FiscalCalendarBiEntitiesApi } from './FiscalCalendarBiEntitiesApi';

/**
 * This class represents the entity "FiscalCalendarBiEntities" of service "d365_metadata".
 */
export class FiscalCalendarBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalCalendarBiEntitiesType<T>
{
  /**
   * Technical entity name for FiscalCalendarBiEntities.
   */
  static override _entityName = 'FiscalCalendarBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalCalendarBiEntities entity.
   */
  static _keys = ['CalendarId'];
  /**
   * Calendar Id.
   */
  declare calendarId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FiscalCalendarBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalCalendarBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  calendarId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
