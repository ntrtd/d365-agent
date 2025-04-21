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
import type { TaxVatSchedulesApi } from './TaxVatSchedulesApi';

/**
 * This class represents the entity "TaxVATSchedules" of service "d365_metadata".
 */
export class TaxVatSchedules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxVatSchedulesType<T>
{
  /**
   * Technical entity name for TaxVatSchedules.
   */
  static override _entityName = 'TaxVATSchedules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxVatSchedules entity.
   */
  static _keys = ['dataAreaId', 'Schedule'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule.
   */
  declare schedule: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxVatSchedulesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxVatSchedulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  schedule: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
