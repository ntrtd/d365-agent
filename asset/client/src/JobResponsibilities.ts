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
import type { JobResponsibilitiesApi } from './JobResponsibilitiesApi';
import { Jobs, JobsType } from './Jobs';
import { Responsibilities, ResponsibilitiesType } from './Responsibilities';

/**
 * This class represents the entity "JobResponsibilities" of service "d365_metadata".
 */
export class JobResponsibilities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobResponsibilitiesType<T>
{
  /**
   * Technical entity name for JobResponsibilities.
   */
  static override _entityName = 'JobResponsibilities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobResponsibilities entity.
   */
  static _keys = ['JobId', 'AreaOfResponsibilityId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;
  /**
   * One-to-one navigation property to the {@link Responsibilities} entity.
   */
  declare responsibility?: Responsibilities<T> | null;

  constructor(_entityApi: JobResponsibilitiesApi<T>) {
    super(_entityApi);
  }
}

export interface JobResponsibilitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  areaOfResponsibilityId: DeserializedType<T, 'Edm.String'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
  job?: JobsType<T> | null;
  responsibility?: ResponsibilitiesType<T> | null;
}
