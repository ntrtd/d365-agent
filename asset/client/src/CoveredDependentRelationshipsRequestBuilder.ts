/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { CoveredDependentRelationships } from './CoveredDependentRelationships';

/**
 * Request builder class for operations supported on the {@link CoveredDependentRelationships} entity.
 */
export class CoveredDependentRelationshipsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CoveredDependentRelationships<T>, T> {
  /**
   * Returns a request builder for querying all `CoveredDependentRelationships` entities.
   * @returns A request builder for creating requests to retrieve all `CoveredDependentRelationships` entities.
   */
  getAll(): GetAllRequestBuilder<CoveredDependentRelationships<T>, T> {
    return new GetAllRequestBuilder<CoveredDependentRelationships<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CoveredDependentRelationships` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CoveredDependentRelationships`.
   */
  create(
    entity: CoveredDependentRelationships<T>
  ): CreateRequestBuilder<CoveredDependentRelationships<T>, T> {
    return new CreateRequestBuilder<CoveredDependentRelationships<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CoveredDependentRelationships` entity based on its keys.
   * @param benefitId Key property. See {@link CoveredDependentRelationships.benefitId}.
   * @param personnelNumber Key property. See {@link CoveredDependentRelationships.personnelNumber}.
   * @param enrollmentStart Key property. See {@link CoveredDependentRelationships.enrollmentStart}.
   * @param enrollmentEnd Key property. See {@link CoveredDependentRelationships.enrollmentEnd}.
   * @param relationshipTypeId Key property. See {@link CoveredDependentRelationships.relationshipTypeId}.
   * @param childPartyId Key property. See {@link CoveredDependentRelationships.childPartyId}.
   * @param partyRelationshipDataAreaId Key property. See {@link CoveredDependentRelationships.partyRelationshipDataAreaId}.
   * @param partyRelationshipValidTo Key property. See {@link CoveredDependentRelationships.partyRelationshipValidTo}.
   * @param partyRelationshipValidFrom Key property. See {@link CoveredDependentRelationships.partyRelationshipValidFrom}.
   * @param validFrom Key property. See {@link CoveredDependentRelationships.validFrom}.
   * @param validTo Key property. See {@link CoveredDependentRelationships.validTo}.
   * @returns A request builder for creating requests to retrieve one `CoveredDependentRelationships` entity based on its keys.
   */
  getByKey(
    benefitId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    enrollmentStart: DeserializedType<T, 'Edm.DateTimeOffset'>,
    enrollmentEnd: DeserializedType<T, 'Edm.DateTimeOffset'>,
    relationshipTypeId: DeserializedType<T, 'Edm.String'>,
    childPartyId: DeserializedType<T, 'Edm.String'>,
    partyRelationshipDataAreaId: DeserializedType<T, 'Edm.String'>,
    partyRelationshipValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    partyRelationshipValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CoveredDependentRelationships<T>, T> {
    return new GetByKeyRequestBuilder<CoveredDependentRelationships<T>, T>(
      this.entityApi,
      {
        BenefitId: benefitId,
        PersonnelNumber: personnelNumber,
        EnrollmentStart: enrollmentStart,
        EnrollmentEnd: enrollmentEnd,
        RelationshipTypeId: relationshipTypeId,
        ChildPartyId: childPartyId,
        PartyRelationshipDataAreaId: partyRelationshipDataAreaId,
        PartyRelationshipValidTo: partyRelationshipValidTo,
        PartyRelationshipValidFrom: partyRelationshipValidFrom,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CoveredDependentRelationships`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CoveredDependentRelationships`.
   */
  update(
    entity: CoveredDependentRelationships<T>
  ): UpdateRequestBuilder<CoveredDependentRelationships<T>, T> {
    return new UpdateRequestBuilder<CoveredDependentRelationships<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CoveredDependentRelationships`.
   * @param benefitId Key property. See {@link CoveredDependentRelationships.benefitId}.
   * @param personnelNumber Key property. See {@link CoveredDependentRelationships.personnelNumber}.
   * @param enrollmentStart Key property. See {@link CoveredDependentRelationships.enrollmentStart}.
   * @param enrollmentEnd Key property. See {@link CoveredDependentRelationships.enrollmentEnd}.
   * @param relationshipTypeId Key property. See {@link CoveredDependentRelationships.relationshipTypeId}.
   * @param childPartyId Key property. See {@link CoveredDependentRelationships.childPartyId}.
   * @param partyRelationshipDataAreaId Key property. See {@link CoveredDependentRelationships.partyRelationshipDataAreaId}.
   * @param partyRelationshipValidTo Key property. See {@link CoveredDependentRelationships.partyRelationshipValidTo}.
   * @param partyRelationshipValidFrom Key property. See {@link CoveredDependentRelationships.partyRelationshipValidFrom}.
   * @param validFrom Key property. See {@link CoveredDependentRelationships.validFrom}.
   * @param validTo Key property. See {@link CoveredDependentRelationships.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `CoveredDependentRelationships`.
   */
  delete(
    benefitId: string,
    personnelNumber: string,
    enrollmentStart: Moment,
    enrollmentEnd: Moment,
    relationshipTypeId: string,
    childPartyId: string,
    partyRelationshipDataAreaId: string,
    partyRelationshipValidTo: Moment,
    partyRelationshipValidFrom: Moment,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<CoveredDependentRelationships<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CoveredDependentRelationships`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CoveredDependentRelationships` by taking the entity as a parameter.
   */
  delete(
    entity: CoveredDependentRelationships<T>
  ): DeleteRequestBuilder<CoveredDependentRelationships<T>, T>;
  delete(
    benefitIdOrEntity: any,
    personnelNumber?: string,
    enrollmentStart?: Moment,
    enrollmentEnd?: Moment,
    relationshipTypeId?: string,
    childPartyId?: string,
    partyRelationshipDataAreaId?: string,
    partyRelationshipValidTo?: Moment,
    partyRelationshipValidFrom?: Moment,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<CoveredDependentRelationships<T>, T> {
    return new DeleteRequestBuilder<CoveredDependentRelationships<T>, T>(
      this.entityApi,
      benefitIdOrEntity instanceof CoveredDependentRelationships
        ? benefitIdOrEntity
        : {
            BenefitId: benefitIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            EnrollmentStart: enrollmentStart!,
            EnrollmentEnd: enrollmentEnd!,
            RelationshipTypeId: relationshipTypeId!,
            ChildPartyId: childPartyId!,
            PartyRelationshipDataAreaId: partyRelationshipDataAreaId!,
            PartyRelationshipValidTo: partyRelationshipValidTo!,
            PartyRelationshipValidFrom: partyRelationshipValidFrom!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
