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
import type { PersonalContactPeopleApi } from './PersonalContactPeopleApi';
import { HcmPersonGender } from './HcmPersonGender';
import { NoYes } from './NoYes';
import { HcmPrimarySecondary } from './HcmPrimarySecondary';
import { RelationshipTypes, RelationshipTypesType } from './RelationshipTypes';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "PersonalContactPeople" of service "d365_metadata".
 */
export class PersonalContactPeople<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PersonalContactPeopleType<T>
{
  /**
   * Technical entity name for PersonalContactPeople.
   */
  static override _entityName = 'PersonalContactPeople';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonalContactPeople entity.
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
   * Contact Last Name.
   * @nullable
   */
  declare contactLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gender.
   * @nullable
   */
  declare gender?: HcmPersonGender | null;
  /**
   * Contact First Name.
   * @nullable
   */
  declare contactFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Dependent.
   * @nullable
   */
  declare isDependent?: NoYes | null;
  /**
   * Disabled Verification Date.
   */
  declare disabledVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dependent Court Ordered Expiration Date.
   */
  declare dependentCourtOrderedExpirationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Is Beneficiary.
   * @nullable
   */
  declare isBeneficiary?: NoYes | null;
  /**
   * Contact Last Name Prefix.
   * @nullable
   */
  declare contactLastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
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
   * Is Disabled.
   * @nullable
   */
  declare isDisabled?: NoYes | null;
  /**
   * Contact Middle Name.
   * @nullable
   */
  declare contactMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Fulltime Student.
   * @nullable
   */
  declare isFulltimeStudent?: NoYes | null;
  /**
   * Emergency Contact Primary Secondary.
   * @nullable
   */
  declare emergencyContactPrimarySecondary?: HcmPrimarySecondary | null;
  /**
   * Relationship Valid To.
   */
  declare relationshipValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Emergency Contact.
   * @nullable
   */
  declare isEmergencyContact?: NoYes | null;
  /**
   * Is Dependent Court Ordered.
   * @nullable
   */
  declare isDependentCourtOrdered?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link RelationshipTypes} entity.
   */
  declare personalContactPersonRelationshipType?: RelationshipTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare personalContactPersonWorker?: Workers<T> | null;

  constructor(_entityApi: PersonalContactPeopleApi<T>) {
    super(_entityApi);
  }
}

export interface PersonalContactPeopleType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>;
  relationshipType: DeserializedType<T, 'Edm.String'>;
  relationshipValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  contactLastName?: DeserializedType<T, 'Edm.String'> | null;
  gender?: HcmPersonGender | null;
  contactFirstName?: DeserializedType<T, 'Edm.String'> | null;
  isDependent?: NoYes | null;
  disabledVerificationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dependentCourtOrderedExpirationDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  isBeneficiary?: NoYes | null;
  contactLastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isDependentDomesticPartnerVerified?: NoYes | null;
  isDisabled?: NoYes | null;
  contactMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  isFulltimeStudent?: NoYes | null;
  emergencyContactPrimarySecondary?: HcmPrimarySecondary | null;
  relationshipValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isEmergencyContact?: NoYes | null;
  isDependentCourtOrdered?: NoYes | null;
  personalContactPersonRelationshipType?: RelationshipTypesType<T> | null;
  personalContactPersonWorker?: WorkersType<T> | null;
}
