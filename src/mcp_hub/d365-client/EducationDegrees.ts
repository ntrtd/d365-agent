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
import type { EducationDegreesApi } from './EducationDegreesApi';
import { Applicants, ApplicantsType } from './Applicants';
import { PersonEducations, PersonEducationsType } from './PersonEducations';

/**
 * This class represents the entity "EducationDegrees" of service "d365_metadata".
 */
export class EducationDegrees<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EducationDegreesType<T>
{
  /**
   * Technical entity name for EducationDegrees.
   */
  static override _entityName = 'EducationDegrees';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EducationDegrees entity.
   */
  static _keys = ['LevelOfEducation'];
  /**
   * Level Of Education.
   */
  declare levelOfEducation: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Applicants} entity.
   */
  declare applicants: Applicants<T>[];
  /**
   * One-to-many navigation property to the {@link PersonEducations} entity.
   */
  declare personEducation: PersonEducations<T>[];

  constructor(_entityApi: EducationDegreesApi<T>) {
    super(_entityApi);
  }
}

export interface EducationDegreesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  levelOfEducation: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  applicants: ApplicantsType<T>[];
  personEducation: PersonEducationsType<T>[];
}
