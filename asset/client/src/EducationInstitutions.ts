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
import type { EducationInstitutionsApi } from './EducationInstitutionsApi';
import { PersonEducations, PersonEducationsType } from './PersonEducations';

/**
 * This class represents the entity "EducationInstitutions" of service "d365_metadata".
 */
export class EducationInstitutions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EducationInstitutionsType<T>
{
  /**
   * Technical entity name for EducationInstitutions.
   */
  static override _entityName = 'EducationInstitutions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EducationInstitutions entity.
   */
  static _keys = ['Institution'];
  /**
   * Institution.
   */
  declare institution: DeserializedType<T, 'Edm.String'>;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internet Address.
   * @nullable
   */
  declare internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone.
   * @nullable
   */
  declare telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PersonEducations} entity.
   */
  declare personEducation: PersonEducations<T>[];

  constructor(_entityApi: EducationInstitutionsApi<T>) {
    super(_entityApi);
  }
}

export interface EducationInstitutionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  institution: DeserializedType<T, 'Edm.String'>;
  location?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  personEducation: PersonEducationsType<T>[];
}
