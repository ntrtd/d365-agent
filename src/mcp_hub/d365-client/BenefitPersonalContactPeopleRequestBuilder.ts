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
import { BenefitPersonalContactPeople } from './BenefitPersonalContactPeople';

/**
 * Request builder class for operations supported on the {@link BenefitPersonalContactPeople} entity.
 */
export class BenefitPersonalContactPeopleRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitPersonalContactPeople<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitPersonalContactPeople` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitPersonalContactPeople` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitPersonalContactPeople<T>, T> {
    return new GetAllRequestBuilder<BenefitPersonalContactPeople<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitPersonalContactPeople` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitPersonalContactPeople`.
   */
  create(
    entity: BenefitPersonalContactPeople<T>
  ): CreateRequestBuilder<BenefitPersonalContactPeople<T>, T> {
    return new CreateRequestBuilder<BenefitPersonalContactPeople<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitPersonalContactPeople` entity based on its keys.
   * @param workerPersonnelNumber Key property. See {@link BenefitPersonalContactPeople.workerPersonnelNumber}.
   * @param contactPersonPartyNumber Key property. See {@link BenefitPersonalContactPeople.contactPersonPartyNumber}.
   * @param relationshipType Key property. See {@link BenefitPersonalContactPeople.relationshipType}.
   * @param relationshipValidFrom Key property. See {@link BenefitPersonalContactPeople.relationshipValidFrom}.
   * @returns A request builder for creating requests to retrieve one `BenefitPersonalContactPeople` entity based on its keys.
   */
  getByKey(
    workerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>,
    relationshipType: DeserializedType<T, 'Edm.String'>,
    relationshipValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitPersonalContactPeople<T>, T> {
    return new GetByKeyRequestBuilder<BenefitPersonalContactPeople<T>, T>(
      this.entityApi,
      {
        WorkerPersonnelNumber: workerPersonnelNumber,
        ContactPersonPartyNumber: contactPersonPartyNumber,
        RelationshipType: relationshipType,
        RelationshipValidFrom: relationshipValidFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitPersonalContactPeople`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitPersonalContactPeople`.
   */
  update(
    entity: BenefitPersonalContactPeople<T>
  ): UpdateRequestBuilder<BenefitPersonalContactPeople<T>, T> {
    return new UpdateRequestBuilder<BenefitPersonalContactPeople<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitPersonalContactPeople`.
   * @param workerPersonnelNumber Key property. See {@link BenefitPersonalContactPeople.workerPersonnelNumber}.
   * @param contactPersonPartyNumber Key property. See {@link BenefitPersonalContactPeople.contactPersonPartyNumber}.
   * @param relationshipType Key property. See {@link BenefitPersonalContactPeople.relationshipType}.
   * @param relationshipValidFrom Key property. See {@link BenefitPersonalContactPeople.relationshipValidFrom}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitPersonalContactPeople`.
   */
  delete(
    workerPersonnelNumber: string,
    contactPersonPartyNumber: string,
    relationshipType: string,
    relationshipValidFrom: Moment
  ): DeleteRequestBuilder<BenefitPersonalContactPeople<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitPersonalContactPeople`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitPersonalContactPeople` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitPersonalContactPeople<T>
  ): DeleteRequestBuilder<BenefitPersonalContactPeople<T>, T>;
  delete(
    workerPersonnelNumberOrEntity: any,
    contactPersonPartyNumber?: string,
    relationshipType?: string,
    relationshipValidFrom?: Moment
  ): DeleteRequestBuilder<BenefitPersonalContactPeople<T>, T> {
    return new DeleteRequestBuilder<BenefitPersonalContactPeople<T>, T>(
      this.entityApi,
      workerPersonnelNumberOrEntity instanceof BenefitPersonalContactPeople
        ? workerPersonnelNumberOrEntity
        : {
            WorkerPersonnelNumber: workerPersonnelNumberOrEntity!,
            ContactPersonPartyNumber: contactPersonPartyNumber!,
            RelationshipType: relationshipType!,
            RelationshipValidFrom: relationshipValidFrom!
          }
    );
  }
}
