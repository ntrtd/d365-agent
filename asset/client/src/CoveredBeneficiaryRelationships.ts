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
import type { CoveredBeneficiaryRelationshipsApi } from './CoveredBeneficiaryRelationshipsApi';
import { HcmBeneficiaryDesignation } from './HcmBeneficiaryDesignation';
import {
  WorkerEnrolledBenefits,
  WorkerEnrolledBenefitsType
} from './WorkerEnrolledBenefits';

/**
 * This class represents the entity "CoveredBeneficiaryRelationships" of service "d365_metadata".
 */
export class CoveredBeneficiaryRelationships<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CoveredBeneficiaryRelationshipsType<T>
{
  /**
   * Technical entity name for CoveredBeneficiaryRelationships.
   */
  static override _entityName = 'CoveredBeneficiaryRelationships';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CoveredBeneficiaryRelationships entity.
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
    'PartyRelationshipValidFrom'
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
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Designated.
   * @nullable
   */
  declare designated?: HcmBeneficiaryDesignation | null;
  /**
   * One-to-one navigation property to the {@link WorkerEnrolledBenefits} entity.
   */
  declare workerEnrolledBenefit?: WorkerEnrolledBenefits<T> | null;

  constructor(_entityApi: CoveredBeneficiaryRelationshipsApi<T>) {
    super(_entityApi);
  }
}

export interface CoveredBeneficiaryRelationshipsType<
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
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  designated?: HcmBeneficiaryDesignation | null;
  workerEnrolledBenefit?: WorkerEnrolledBenefitsType<T> | null;
}
