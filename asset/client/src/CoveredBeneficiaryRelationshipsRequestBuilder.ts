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
import { CoveredBeneficiaryRelationships } from './CoveredBeneficiaryRelationships';

/**
 * Request builder class for operations supported on the {@link CoveredBeneficiaryRelationships} entity.
 */
export class CoveredBeneficiaryRelationshipsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CoveredBeneficiaryRelationships<T>, T> {
  /**
   * Returns a request builder for querying all `CoveredBeneficiaryRelationships` entities.
   * @returns A request builder for creating requests to retrieve all `CoveredBeneficiaryRelationships` entities.
   */
  getAll(): GetAllRequestBuilder<CoveredBeneficiaryRelationships<T>, T> {
    return new GetAllRequestBuilder<CoveredBeneficiaryRelationships<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CoveredBeneficiaryRelationships` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CoveredBeneficiaryRelationships`.
   */
  create(
    entity: CoveredBeneficiaryRelationships<T>
  ): CreateRequestBuilder<CoveredBeneficiaryRelationships<T>, T> {
    return new CreateRequestBuilder<CoveredBeneficiaryRelationships<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CoveredBeneficiaryRelationships` entity based on its keys.
   * @param benefitId Key property. See {@link CoveredBeneficiaryRelationships.benefitId}.
   * @param personnelNumber Key property. See {@link CoveredBeneficiaryRelationships.personnelNumber}.
   * @param enrollmentStart Key property. See {@link CoveredBeneficiaryRelationships.enrollmentStart}.
   * @param enrollmentEnd Key property. See {@link CoveredBeneficiaryRelationships.enrollmentEnd}.
   * @param relationshipTypeId Key property. See {@link CoveredBeneficiaryRelationships.relationshipTypeId}.
   * @param childPartyId Key property. See {@link CoveredBeneficiaryRelationships.childPartyId}.
   * @param partyRelationshipDataAreaId Key property. See {@link CoveredBeneficiaryRelationships.partyRelationshipDataAreaId}.
   * @param partyRelationshipValidTo Key property. See {@link CoveredBeneficiaryRelationships.partyRelationshipValidTo}.
   * @param partyRelationshipValidFrom Key property. See {@link CoveredBeneficiaryRelationships.partyRelationshipValidFrom}.
   * @returns A request builder for creating requests to retrieve one `CoveredBeneficiaryRelationships` entity based on its keys.
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
    partyRelationshipValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CoveredBeneficiaryRelationships<T>, T> {
    return new GetByKeyRequestBuilder<CoveredBeneficiaryRelationships<T>, T>(
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
        PartyRelationshipValidFrom: partyRelationshipValidFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CoveredBeneficiaryRelationships`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CoveredBeneficiaryRelationships`.
   */
  update(
    entity: CoveredBeneficiaryRelationships<T>
  ): UpdateRequestBuilder<CoveredBeneficiaryRelationships<T>, T> {
    return new UpdateRequestBuilder<CoveredBeneficiaryRelationships<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CoveredBeneficiaryRelationships`.
   * @param benefitId Key property. See {@link CoveredBeneficiaryRelationships.benefitId}.
   * @param personnelNumber Key property. See {@link CoveredBeneficiaryRelationships.personnelNumber}.
   * @param enrollmentStart Key property. See {@link CoveredBeneficiaryRelationships.enrollmentStart}.
   * @param enrollmentEnd Key property. See {@link CoveredBeneficiaryRelationships.enrollmentEnd}.
   * @param relationshipTypeId Key property. See {@link CoveredBeneficiaryRelationships.relationshipTypeId}.
   * @param childPartyId Key property. See {@link CoveredBeneficiaryRelationships.childPartyId}.
   * @param partyRelationshipDataAreaId Key property. See {@link CoveredBeneficiaryRelationships.partyRelationshipDataAreaId}.
   * @param partyRelationshipValidTo Key property. See {@link CoveredBeneficiaryRelationships.partyRelationshipValidTo}.
   * @param partyRelationshipValidFrom Key property. See {@link CoveredBeneficiaryRelationships.partyRelationshipValidFrom}.
   * @returns A request builder for creating requests that delete an entity of type `CoveredBeneficiaryRelationships`.
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
    partyRelationshipValidFrom: Moment
  ): DeleteRequestBuilder<CoveredBeneficiaryRelationships<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CoveredBeneficiaryRelationships`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CoveredBeneficiaryRelationships` by taking the entity as a parameter.
   */
  delete(
    entity: CoveredBeneficiaryRelationships<T>
  ): DeleteRequestBuilder<CoveredBeneficiaryRelationships<T>, T>;
  delete(
    benefitIdOrEntity: any,
    personnelNumber?: string,
    enrollmentStart?: Moment,
    enrollmentEnd?: Moment,
    relationshipTypeId?: string,
    childPartyId?: string,
    partyRelationshipDataAreaId?: string,
    partyRelationshipValidTo?: Moment,
    partyRelationshipValidFrom?: Moment
  ): DeleteRequestBuilder<CoveredBeneficiaryRelationships<T>, T> {
    return new DeleteRequestBuilder<CoveredBeneficiaryRelationships<T>, T>(
      this.entityApi,
      benefitIdOrEntity instanceof CoveredBeneficiaryRelationships
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
            PartyRelationshipValidFrom: partyRelationshipValidFrom!
          }
    );
  }
}
