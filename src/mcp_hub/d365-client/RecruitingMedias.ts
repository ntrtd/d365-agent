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
import type { RecruitingMediasApi } from './RecruitingMediasApi';
import {
  RecruitingProjects,
  RecruitingProjectsType
} from './RecruitingProjects';
import { Media, MediaType } from './Media';

/**
 * This class represents the entity "RecruitingMedias" of service "d365_metadata".
 */
export class RecruitingMedias<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RecruitingMediasType<T>
{
  /**
   * Technical entity name for RecruitingMedias.
   */
  static override _entityName = 'RecruitingMedias';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RecruitingMedias entity.
   */
  static _keys = ['dataAreaId', 'RecruitmentProject', 'Media'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Recruitment Project.
   */
  declare recruitmentProject: DeserializedType<T, 'Edm.String'>;
  /**
   * Media.
   */
  declare media: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link RecruitingProjects} entity.
   */
  declare recruitingProject?: RecruitingProjects<T> | null;
  /**
   * One-to-one navigation property to the {@link Media} entity.
   */
  declare relatedMedia?: Media<T> | null;

  constructor(_entityApi: RecruitingMediasApi<T>) {
    super(_entityApi);
  }
}

export interface RecruitingMediasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recruitmentProject: DeserializedType<T, 'Edm.String'>;
  media: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  recruitingProject?: RecruitingProjectsType<T> | null;
  relatedMedia?: MediaType<T> | null;
}
