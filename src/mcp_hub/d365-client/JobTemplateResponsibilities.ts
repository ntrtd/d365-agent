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
import type { JobTemplateResponsibilitiesApi } from './JobTemplateResponsibilitiesApi';
import { JobTemplates, JobTemplatesType } from './JobTemplates';
import { Responsibilities, ResponsibilitiesType } from './Responsibilities';

/**
 * This class represents the entity "JobTemplateResponsibilities" of service "d365_metadata".
 */
export class JobTemplateResponsibilities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements JobTemplateResponsibilitiesType<T>
{
  /**
   * Technical entity name for JobTemplateResponsibilities.
   */
  static override _entityName = 'JobTemplateResponsibilities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobTemplateResponsibilities entity.
   */
  static _keys = ['JobTemplateId', 'AreaOfResponsibilityId'];
  /**
   * Job Template Id.
   */
  declare jobTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Area Of Responsibility Id.
   */
  declare areaOfResponsibilityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link JobTemplates} entity.
   */
  declare jobTemplate?: JobTemplates<T> | null;
  /**
   * One-to-one navigation property to the {@link Responsibilities} entity.
   */
  declare responsibility?: Responsibilities<T> | null;

  constructor(_entityApi: JobTemplateResponsibilitiesApi<T>) {
    super(_entityApi);
  }
}

export interface JobTemplateResponsibilitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobTemplateId: DeserializedType<T, 'Edm.String'>;
  areaOfResponsibilityId: DeserializedType<T, 'Edm.String'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
  jobTemplate?: JobTemplatesType<T> | null;
  responsibility?: ResponsibilitiesType<T> | null;
}
