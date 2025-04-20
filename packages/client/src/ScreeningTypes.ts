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
import type { ScreeningTypesApi } from './ScreeningTypesApi';
import { HcmFrequencyGenerateFrom } from './HcmFrequencyGenerateFrom';
import { HcmFrequencyUnit } from './HcmFrequencyUnit';
import {
  JobPreferredScreenings,
  JobPreferredScreeningsType
} from './JobPreferredScreenings';
import {
  JobTemplateScreenings,
  JobTemplateScreeningsType
} from './JobTemplateScreenings';

/**
 * This class represents the entity "ScreeningTypes" of service "d365_metadata".
 */
export class ScreeningTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ScreeningTypesType<T>
{
  /**
   * Technical entity name for ScreeningTypes.
   */
  static override _entityName = 'ScreeningTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ScreeningTypes entity.
   */
  static _keys = ['ScreeningTypeId'];
  /**
   * Screening Type Id.
   */
  declare screeningTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Generate From.
   * @nullable
   */
  declare generateFrom?: HcmFrequencyGenerateFrom | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Frequency Unit.
   * @nullable
   */
  declare frequencyUnit?: HcmFrequencyUnit | null;
  /**
   * Frequency Interval.
   */
  declare frequencyInterval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link JobPreferredScreenings} entity.
   */
  declare jobPreferredScreenings: JobPreferredScreenings<T>[];
  /**
   * One-to-many navigation property to the {@link JobTemplateScreenings} entity.
   */
  declare jobTemplateScreenings: JobTemplateScreenings<T>[];

  constructor(_entityApi: ScreeningTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ScreeningTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  screeningTypeId: DeserializedType<T, 'Edm.String'>;
  generateFrom?: HcmFrequencyGenerateFrom | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  frequencyUnit?: HcmFrequencyUnit | null;
  frequencyInterval: DeserializedType<T, 'Edm.Int32'>;
  jobPreferredScreenings: JobPreferredScreeningsType<T>[];
  jobTemplateScreenings: JobTemplateScreeningsType<T>[];
}
