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
import type { CourseTypeCertificateProfilesApi } from './CourseTypeCertificateProfilesApi';
import { CertificateTypes, CertificateTypesType } from './CertificateTypes';
import { CourseTypes, CourseTypesType } from './CourseTypes';

/**
 * This class represents the entity "CourseTypeCertificateProfiles" of service "d365_metadata".
 */
export class CourseTypeCertificateProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CourseTypeCertificateProfilesType<T>
{
  /**
   * Technical entity name for CourseTypeCertificateProfiles.
   */
  static override _entityName = 'CourseTypeCertificateProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CourseTypeCertificateProfiles entity.
   */
  static _keys = ['CourseTypeId', 'CertificateTypeId'];
  /**
   * Course Type Id.
   */
  declare courseTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Certificate Type Id.
   */
  declare certificateTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link CertificateTypes} entity.
   */
  declare certificateType?: CertificateTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link CourseTypes} entity.
   */
  declare courseType?: CourseTypes<T> | null;

  constructor(_entityApi: CourseTypeCertificateProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface CourseTypeCertificateProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  courseTypeId: DeserializedType<T, 'Edm.String'>;
  certificateTypeId: DeserializedType<T, 'Edm.String'>;
  certificateType?: CertificateTypesType<T> | null;
  courseType?: CourseTypesType<T> | null;
}
