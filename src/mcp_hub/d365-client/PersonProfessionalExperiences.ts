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
import type { PersonProfessionalExperiencesApi } from './PersonProfessionalExperiencesApi';
import { HrmBlankYesNo } from './HrmBlankYesNo';
import { People, PeopleType } from './People';

/**
 * This class represents the entity "PersonProfessionalExperiences" of service "d365_metadata".
 */
export class PersonProfessionalExperiences<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PersonProfessionalExperiencesType<T>
{
  /**
   * Technical entity name for PersonProfessionalExperiences.
   */
  static override _entityName = 'PersonProfessionalExperiences';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonProfessionalExperiences entity.
   */
  static _keys = [
    'PartyNumber',
    'StartDate',
    'EmployerPosition',
    'EmployerName'
  ];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employer Position.
   */
  declare employerPosition: DeserializedType<T, 'Edm.String'>;
  /**
   * Employer Name.
   */
  declare employerName: DeserializedType<T, 'Edm.String'>;
  /**
   * Allow Contact Employer.
   * @nullable
   */
  declare allowContactEmployer?: HrmBlankYesNo | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employer Location.
   * @nullable
   */
  declare employerLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone.
   * @nullable
   */
  declare phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare person?: People<T> | null;

  constructor(_entityApi: PersonProfessionalExperiencesApi<T>) {
    super(_entityApi);
  }
}

export interface PersonProfessionalExperiencesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employerPosition: DeserializedType<T, 'Edm.String'>;
  employerName: DeserializedType<T, 'Edm.String'>;
  allowContactEmployer?: HrmBlankYesNo | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  employerLocation?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  person?: PeopleType<T> | null;
}
