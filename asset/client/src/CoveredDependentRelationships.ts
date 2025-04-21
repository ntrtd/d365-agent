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
import type { CoveredDependentRelationshipsApi } from './CoveredDependentRelationshipsApi';
import {
  WorkerEnrolledBenefits,
  WorkerEnrolledBenefitsType
} from './WorkerEnrolledBenefits';

/**
 * This class represents the entity "CoveredDependentRelationships" of service "d365_metadata".
 */
export class CoveredDependentRelationships<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CoveredDependentRelationshipsType<T>
{
  /**
   * Technical entity name for CoveredDependentRelationships.
   */
  static override _entityName = 'CoveredDependentRelationships';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CoveredDependentRelationships entity.
   */
  static _keys = [
    'BenefitId',
    'PersonnelNumber',
    'EnrollmentStart',
    'EnrollmentEnd',
    'RelationshipTypeId',
    'ChildPartyId',
    'PartyRelationshipDataAreaId',
    'PartyRelationshipValidTo',
    'PartyRelationshipValidFrom',
    'ValidFrom',
    'ValidTo'
  ];
  /**
   * Benefit Id.
   */
  declare benefitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Enrollment Start.
   */
  declare enrollmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Enrollment End.
   */
  declare enrollmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Relationship Type Id.
   */
  declare relationshipTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Child Party Id.
   */
  declare childPartyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Party Relationship Data Area Id.
   */
  declare partyRelationshipDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Party Relationship Valid To.
   */
  declare partyRelationshipValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Party Relationship Valid From.
   */
  declare partyRelationshipValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link WorkerEnrolledBenefits} entity.
   */
  declare workerEnrolledBenefit?: WorkerEnrolledBenefits<T> | null;

  constructor(_entityApi: CoveredDependentRelationshipsApi<T>) {
    super(_entityApi);
  }
}

export interface CoveredDependentRelationshipsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  benefitId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  enrollmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  enrollmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  relationshipTypeId: DeserializedType<T, 'Edm.String'>;
  childPartyId: DeserializedType<T, 'Edm.String'>;
  partyRelationshipDataAreaId: DeserializedType<T, 'Edm.String'>;
  partyRelationshipValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  partyRelationshipValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerEnrolledBenefit?: WorkerEnrolledBenefitsType<T> | null;
}
