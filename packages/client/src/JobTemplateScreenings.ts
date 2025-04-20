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
import type { JobTemplateScreeningsApi } from './JobTemplateScreeningsApi';
import { ScreeningTypes, ScreeningTypesType } from './ScreeningTypes';
import { JobTemplates, JobTemplatesType } from './JobTemplates';

/**
 * This class represents the entity "JobTemplateScreenings" of service "d365_metadata".
 */
export class JobTemplateScreenings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements JobTemplateScreeningsType<T>
{
  /**
   * Technical entity name for JobTemplateScreenings.
   */
  static override _entityName = 'JobTemplateScreenings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobTemplateScreenings entity.
   */
  static _keys = ['JobTemplateId', 'ScreeningTypeId'];
  /**
   * Job Template Id.
   */
  declare jobTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Screening Type Id.
   */
  declare screeningTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link ScreeningTypes} entity.
   */
  declare screeningType?: ScreeningTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link JobTemplates} entity.
   */
  declare jobTemplate?: JobTemplates<T> | null;

  constructor(_entityApi: JobTemplateScreeningsApi<T>) {
    super(_entityApi);
  }
}

export interface JobTemplateScreeningsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobTemplateId: DeserializedType<T, 'Edm.String'>;
  screeningTypeId: DeserializedType<T, 'Edm.String'>;
  screeningType?: ScreeningTypesType<T> | null;
  jobTemplate?: JobTemplatesType<T> | null;
}
