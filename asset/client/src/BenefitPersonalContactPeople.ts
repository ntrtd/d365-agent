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
import type { BenefitPersonalContactPeopleApi } from './BenefitPersonalContactPeopleApi';
import { HcmPersonGender } from './HcmPersonGender';
import { NoYes } from './NoYes';
import { BenefitDocumentationStatus } from './BenefitDocumentationStatus';
import { HcmPrimarySecondary } from './HcmPrimarySecondary';
import { RelationshipTypes, RelationshipTypesType } from './RelationshipTypes';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "BenefitPersonalContactPeople" of service "d365_metadata".
 */
export class BenefitPersonalContactPeople<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitPersonalContactPeopleType<T>
{
  /**
   * Technical entity name for BenefitPersonalContactPeople.
   */
  static override _entityName = 'BenefitPersonalContactPeople';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitPersonalContactPeople entity.
   */
  static _keys = [
    'WorkerPersonnelNumber',
    'ContactPersonPartyNumber',
    'RelationshipType',
    'RelationshipValidFrom'
  ];
  /**
   * Worker Personnel Number.
   */
  declare workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Contact Person Party Number.
   */
  declare contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Relationship Type.
   */
  declare relationshipType: DeserializedType<T, 'Edm.String'>;
  /**
   * Relationship Valid From.
   */
  declare relationshipValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dependent Details Adoption Date.
   */
  declare dependentDetailsAdoptionDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Gender.
   * @nullable
   */
  declare gender?: HcmPersonGender | null;
  /**
   * Contact Middle Name.
   * @nullable
   */
  declare contactMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dependent Valid To.
   */
  declare dependentValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dependent Details Documentation Verification Date.
   */
  declare dependentDetailsDocumentationVerificationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Dependent Details Loss Of Coverage Effective Date.
   */
  declare dependentDetailsLossOfCoverageEffectiveDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Beneficiary Valid From.
   */
  declare beneficiaryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dependent Details Employed.
   * @nullable
   */
  declare dependentDetailsEmployed?: NoYes | null;
  /**
   * Dependent Details Over Aged Dependent.
   * @nullable
   */
  declare dependentDetailsOverAgedDependent?: NoYes | null;
  /**
   * Contact First Name.
   * @nullable
   */
  declare contactFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dependent Details Other Insurance Coverage.
   * @nullable
   */
  declare dependentDetailsOtherInsuranceCoverage?: NoYes | null;
  /**
   * Contact Last Name Prefix.
   * @nullable
   */
  declare contactLastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dependent Details Has Leave Of Absence.
   * @nullable
   */
  declare dependentDetailsHasLeaveOfAbsence?: NoYes | null;
  /**
   * Beneficiary Valid To.
   */
  declare beneficiaryValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Relationship Valid To.
   */
  declare relationshipValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dependent Details Has Loss Of Coverage.
   * @nullable
   */
  declare dependentDetailsHasLossOfCoverage?: NoYes | null;
  /**
   * Birth Date.
   */
  declare birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Dependent Domestic Partner Verified.
   * @nullable
   */
  declare isDependentDomesticPartnerVerified?: NoYes | null;
  /**
   * Is Dependent.
   * @nullable
   */
  declare isDependent?: NoYes | null;
  /**
   * Dependent Details Employee Address.
   * @nullable
   */
  declare dependentDetailsEmployeeAddress?: NoYes | null;
  /**
   * Disabled Verification Date.
   */
  declare disabledVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dependent Valid From.
   */
  declare dependentValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dependent Court Ordered Expiration Date.
   */
  declare dependentCourtOrderedExpirationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Dependent Details Medicare Effective Date.
   */
  declare dependentDetailsMedicareEffectiveDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Is Beneficiary.
   * @nullable
   */
  declare isBeneficiary?: NoYes | null;
  /**
   * Dependent Court Ordered Effective Date.
   */
  declare dependentCourtOrderedEffectiveDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Dependent Details Wedding Date.
   */
  declare dependentDetailsWeddingDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Dependent Details Has Documentation.
   * @nullable
   */
  declare dependentDetailsHasDocumentation?: NoYes | null;
  /**
   * Contact Last Name.
   * @nullable
   */
  declare contactLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dependent Details Documentation Status.
   * @nullable
   */
  declare dependentDetailsDocumentationStatus?: BenefitDocumentationStatus | null;
  /**
   * Dependent Details Leave Of Absence Expiration Date.
   */
  declare dependentDetailsLeaveOfAbsenceExpirationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Dependent Details Leave Of Absence Effective Date.
   */
  declare dependentDetailsLeaveOfAbsenceEffectiveDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Dependent Details Nickname.
   * @nullable
   */
  declare dependentDetailsNickname?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dependent Details Default Designee.
   * @nullable
   */
  declare dependentDetailsDefaultDesignee?: NoYes | null;
  /**
   * Dependent Details Divorce Date.
   */
  declare dependentDetailsDivorceDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Emergency Contact Primary Secondary.
   * @nullable
   */
  declare emergencyContactPrimarySecondary?: HcmPrimarySecondary | null;
  /**
   * Is Primary Beneficiary.
   * @nullable
   */
  declare isPrimaryBeneficiary?: NoYes | null;
  /**
   * Dependent Details Smoker.
   * @nullable
   */
  declare dependentDetailsSmoker?: NoYes | null;
  /**
   * Is Dependent Court Ordered.
   * @nullable
   */
  declare isDependentCourtOrdered?: NoYes | null;
  /**
   * Is Emergency Contact.
   * @nullable
   */
  declare isEmergencyContact?: NoYes | null;
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
   * One-to-one navigation property to the {@link RelationshipTypes} entity.
   */
  declare benefitPersonalContactPersonRelationshipType?: RelationshipTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare benefitPersonalContactPersonWorker?: Workers<T> | null;

  constructor(_entityApi: BenefitPersonalContactPeopleApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitPersonalContactPeopleType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>;
  relationshipType: DeserializedType<T, 'Edm.String'>;
  relationshipValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dependentDetailsAdoptionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  gender?: HcmPersonGender | null;
  contactMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  dependentValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dependentDetailsDocumentationVerificationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  dependentDetailsLossOfCoverageEffectiveDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  beneficiaryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dependentDetailsEmployed?: NoYes | null;
  dependentDetailsOverAgedDependent?: NoYes | null;
  contactFirstName?: DeserializedType<T, 'Edm.String'> | null;
  dependentDetailsOtherInsuranceCoverage?: NoYes | null;
  contactLastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  dependentDetailsHasLeaveOfAbsence?: NoYes | null;
  beneficiaryValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  relationshipValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dependentDetailsHasLossOfCoverage?: NoYes | null;
  birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isDependentDomesticPartnerVerified?: NoYes | null;
  isDependent?: NoYes | null;
  dependentDetailsEmployeeAddress?: NoYes | null;
  disabledVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dependentValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dependentCourtOrderedExpirationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  dependentDetailsMedicareEffectiveDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  isBeneficiary?: NoYes | null;
  dependentCourtOrderedEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dependentDetailsWeddingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dependentDetailsHasDocumentation?: NoYes | null;
  contactLastName?: DeserializedType<T, 'Edm.String'> | null;
  dependentDetailsDocumentationStatus?: BenefitDocumentationStatus | null;
  dependentDetailsLeaveOfAbsenceExpirationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  dependentDetailsLeaveOfAbsenceEffectiveDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  dependentDetailsNickname?: DeserializedType<T, 'Edm.String'> | null;
  dependentDetailsDefaultDesignee?: NoYes | null;
  dependentDetailsDivorceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  emergencyContactPrimarySecondary?: HcmPrimarySecondary | null;
  isPrimaryBeneficiary?: NoYes | null;
  dependentDetailsSmoker?: NoYes | null;
  isDependentCourtOrdered?: NoYes | null;
  isEmergencyContact?: NoYes | null;
  isDisabled?: NoYes | null;
  isFulltimeStudent?: NoYes | null;
  benefitPersonalContactPersonRelationshipType?: RelationshipTypesType<T> | null;
  benefitPersonalContactPersonWorker?: WorkersType<T> | null;
}
