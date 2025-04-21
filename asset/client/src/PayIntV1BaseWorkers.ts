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
import type { PayIntV1BaseWorkersApi } from './PayIntV1BaseWorkersApi';
import { HcmPersonGender } from './HcmPersonGender';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PayIntV1BaseWorkers" of service "d365_metadata".
 */
export class PayIntV1BaseWorkers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayIntV1BaseWorkersType<T>
{
  /**
   * Technical entity name for PayIntV1BaseWorkers.
   */
  static override _entityName = 'PayIntV1BaseWorkers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1BaseWorkers entity.
   */
  static _keys = ['PersonnelNumber'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Gender.
   * @nullable
   */
  declare gender?: HcmPersonGender | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Type.
   * @nullable
   */
  declare partyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Sequence Display As.
   * @nullable
   */
  declare nameSequenceDisplayAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Citizenship Country Region.
   * @nullable
   */
  declare citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Professional Suffix.
   * @nullable
   */
  declare professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Professional Title.
   * @nullable
   */
  declare professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email.
   * @nullable
   */
  declare primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ethnic Origin Id.
   * @nullable
   */
  declare ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Date.
   */
  declare birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Disabled Verification Date.
   */
  declare disabledVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name Valid From.
   */
  declare nameValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Mother Birth Country Region.
   * @nullable
   */
  declare motherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Rehire.
   * @nullable
   */
  declare allowRehire?: NoYes | null;
  /**
   * Phonetic First Name.
   * @nullable
   */
  declare phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Native Language Id.
   * @nullable
   */
  declare nativeLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Education.
   * @nullable
   */
  declare education?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name Prefix.
   * @nullable
   */
  declare lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deceased Date.
   */
  declare deceasedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Known As.
   * @nullable
   */
  declare knownAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Location Id.
   * @nullable
   */
  declare electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Birth Country Region.
   * @nullable
   */
  declare personBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phonetic Middle Name.
   * @nullable
   */
  declare phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nationality Country Region.
   * @nullable
   */
  declare nationalityCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Valid To.
   */
  declare nameValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Person Birth City.
   * @nullable
   */
  declare personBirthCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Middle Name.
   * @nullable
   */
  declare middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Father Birth Country Region.
   * @nullable
   */
  declare fatherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phonetic Last Name.
   * @nullable
   */
  declare phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Alias.
   * @nullable
   */
  declare nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * @nullable
   */
  declare firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Disabled.
   * @nullable
   */
  declare isDisabled?: NoYes | null;
  /**
   * Is Fulltime Student.
   * @nullable
   */
  declare isFulltimeStudent?: NoYes | null;

  constructor(_entityApi: PayIntV1BaseWorkersApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1BaseWorkersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  gender?: HcmPersonGender | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  partyType?: DeserializedType<T, 'Edm.String'> | null;
  nameSequenceDisplayAs?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  disabledVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nameValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  motherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  allowRehire?: NoYes | null;
  phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  nativeLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  education?: DeserializedType<T, 'Edm.String'> | null;
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  deceasedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  knownAs?: DeserializedType<T, 'Edm.String'> | null;
  electronicLocationId?: DeserializedType<T, 'Edm.String'> | null;
  personBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  nationalityCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  nameValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  personBirthCity?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  fatherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  isDisabled?: NoYes | null;
  isFulltimeStudent?: NoYes | null;
}
