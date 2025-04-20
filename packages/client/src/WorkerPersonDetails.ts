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
import type { WorkerPersonDetailsApi } from './WorkerPersonDetailsApi';
import { HcmPersonGender } from './HcmPersonGender';
import { NoYes } from './NoYes';
import { HcmPersonMaritalStatus } from './HcmPersonMaritalStatus';
import { VeteranStatuses, VeteranStatusesType } from './VeteranStatuses';
import { EthnicOrigins, EthnicOriginsType } from './EthnicOrigins';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';
import { LanguageCodes, LanguageCodesType } from './LanguageCodes';

/**
 * This class represents the entity "WorkerPersonDetails" of service "d365_metadata".
 */
export class WorkerPersonDetails<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkerPersonDetailsType<T>
{
  /**
   * Technical entity name for WorkerPersonDetails.
   */
  static override _entityName = 'WorkerPersonDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerPersonDetails entity.
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
   * Number Of Dependents.
   */
  declare numberOfDependents: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Veteran Status Id.
   * @nullable
   */
  declare veteranStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Citizenship Country Region.
   * @nullable
   */
  declare citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Expatriate Ruling Applicable.
   * @nullable
   */
  declare isExpatriateRulingApplicable?: NoYes | null;
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
   * Mother Birth Country Region.
   * @nullable
   */
  declare motherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expatriate Start Date.
   */
  declare expatriateStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Marital Status.
   * @nullable
   */
  declare maritalStatus?: HcmPersonMaritalStatus | null;
  /**
   * Deceased Date.
   */
  declare deceasedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Person Birth Country Region.
   * @nullable
   */
  declare personBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nationality Country Region.
   * @nullable
   */
  declare nationalityCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Birth City.
   * @nullable
   */
  declare personBirthCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Father Birth Country Region.
   * @nullable
   */
  declare fatherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Military Service End Date.
   */
  declare militaryServiceEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expatriate End Date.
   */
  declare expatriateEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Military Service Start Date.
   */
  declare militaryServiceStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
  /**
   * Disabled Veteran.
   * @nullable
   */
  declare disabledVeteran?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link VeteranStatuses} entity.
   */
  declare veteranStatus?: VeteranStatuses<T> | null;
  /**
   * One-to-one navigation property to the {@link EthnicOrigins} entity.
   */
  declare ethnicOrigin?: EthnicOrigins<T> | null;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare baseWorker?: BaseWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link LanguageCodes} entity.
   */
  declare languageCode?: LanguageCodes<T> | null;

  constructor(_entityApi: WorkerPersonDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerPersonDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  gender?: HcmPersonGender | null;
  numberOfDependents: DeserializedType<T, 'Edm.Int32'>;
  veteranStatusId?: DeserializedType<T, 'Edm.String'> | null;
  citizenshipCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  isExpatriateRulingApplicable?: NoYes | null;
  ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  disabledVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  motherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  expatriateStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  nativeLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  education?: DeserializedType<T, 'Edm.String'> | null;
  maritalStatus?: HcmPersonMaritalStatus | null;
  deceasedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  personBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  nationalityCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  personBirthCity?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fatherBirthCountryRegion?: DeserializedType<T, 'Edm.String'> | null;
  militaryServiceEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expatriateEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  militaryServiceStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isDisabled?: NoYes | null;
  isFulltimeStudent?: NoYes | null;
  disabledVeteran?: NoYes | null;
  veteranStatus?: VeteranStatusesType<T> | null;
  ethnicOrigin?: EthnicOriginsType<T> | null;
  baseWorker?: BaseWorkersType<T> | null;
  languageCode?: LanguageCodesType<T> | null;
}
