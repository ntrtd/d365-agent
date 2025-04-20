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
import type { CandidatesToHireApi } from './CandidatesToHireApi';
import { HcmPersonGender } from './HcmPersonGender';
import { NoYes } from './NoYes';
import { HcmApplicantIntegrationResult } from './HcmApplicantIntegrationResult';
import { People, PeopleType } from './People';
import { VeteranStatuses, VeteranStatusesType } from './VeteranStatuses';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import {
  RecruitingRequests,
  RecruitingRequestsType
} from './RecruitingRequests';
import { ReasonCodes, ReasonCodesType } from './ReasonCodes';

/**
 * This class represents the entity "CandidatesToHire" of service "d365_metadata".
 */
export class CandidatesToHire<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CandidatesToHireType<T>
{
  /**
   * Technical entity name for CandidatesToHire.
   */
  static override _entityName = 'CandidatesToHire';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CandidatesToHire entity.
   */
  static _keys = ['dataAreaId', 'CandidateId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Candidate Id.
   */
  declare candidateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Military Service End Date.
   */
  declare militaryServiceEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Gender.
   * @nullable
   */
  declare gender?: HcmPersonGender | null;
  /**
   * First Name.
   * @nullable
   */
  declare firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Willing To Relocate.
   * @nullable
   */
  declare isWillingToRelocate?: NoYes | null;
  /**
   * Position Id.
   * @nullable
   */
  declare positionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Applicant Integration Result.
   * @nullable
   */
  declare applicantIntegrationResult?: HcmApplicantIntegrationResult | null;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Availability Date.
   */
  declare availabilityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Do Not Hire Reason Code Id.
   * @nullable
   */
  declare doNotHireReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Disabled Veteran.
   * @nullable
   */
  declare isDisabledVeteran?: NoYes | null;
  /**
   * Recruiting Request Id.
   * @nullable
   */
  declare recruitingRequestId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Type.
   * @nullable
   */
  declare partyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name Prefix.
   * @nullable
   */
  declare lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Date.
   */
  declare birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ethnic Origin Id.
   * @nullable
   */
  declare ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Military Service Start Date.
   */
  declare militaryServiceStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Middle Name.
   * @nullable
   */
  declare middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Citizenship Country Code.
   * @nullable
   */
  declare citizenshipCountryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Veteran Status Id.
   * @nullable
   */
  declare veteranStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare personRelation?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link VeteranStatuses} entity.
   */
  declare veteranStatusRelation?: VeteranStatuses<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare position?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link RecruitingRequests} entity.
   */
  declare recruitingRequest?: RecruitingRequests<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare reasonCode?: ReasonCodes<T> | null;

  constructor(_entityApi: CandidatesToHireApi<T>) {
    super(_entityApi);
  }
}

export interface CandidatesToHireType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  candidateId: DeserializedType<T, 'Edm.String'>;
  militaryServiceEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  gender?: HcmPersonGender | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  isWillingToRelocate?: NoYes | null;
  positionId?: DeserializedType<T, 'Edm.String'> | null;
  applicantIntegrationResult?: HcmApplicantIntegrationResult | null;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  availabilityDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  doNotHireReasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  isDisabledVeteran?: NoYes | null;
  recruitingRequestId?: DeserializedType<T, 'Edm.String'> | null;
  partyType?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  ethnicOriginId?: DeserializedType<T, 'Edm.String'> | null;
  militaryServiceStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  citizenshipCountryCode?: DeserializedType<T, 'Edm.String'> | null;
  veteranStatusId?: DeserializedType<T, 'Edm.String'> | null;
  personRelation?: PeopleType<T> | null;
  veteranStatusRelation?: VeteranStatusesType<T> | null;
  position?: PositionsV2Type<T> | null;
  recruitingRequest?: RecruitingRequestsType<T> | null;
  reasonCode?: ReasonCodesType<T> | null;
}
