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
import type { ResponsibilitiesApi } from './ResponsibilitiesApi';
import {
  JobTemplateResponsibilities,
  JobTemplateResponsibilitiesType
} from './JobTemplateResponsibilities';
import {
  JobResponsibilities,
  JobResponsibilitiesType
} from './JobResponsibilities';

/**
 * This class represents the entity "Responsibilities" of service "d365_metadata".
 */
export class Responsibilities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ResponsibilitiesType<T>
{
  /**
   * Technical entity name for Responsibilities.
   */
  static override _entityName = 'Responsibilities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Responsibilities entity.
   */
  static _keys = ['ResponsibilityId'];
  /**
   * Responsibility Id.
   */
  declare responsibilityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link JobTemplateResponsibilities} entity.
   */
  declare jobTemplateResponsibilities: JobTemplateResponsibilities<T>[];
  /**
   * One-to-many navigation property to the {@link JobResponsibilities} entity.
   */
  declare jobResponsibilities: JobResponsibilities<T>[];

  constructor(_entityApi: ResponsibilitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ResponsibilitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  responsibilityId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  jobTemplateResponsibilities: JobTemplateResponsibilitiesType<T>[];
  jobResponsibilities: JobResponsibilitiesType<T>[];
}
