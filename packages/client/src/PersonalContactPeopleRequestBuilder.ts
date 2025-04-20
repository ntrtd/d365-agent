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
import { PersonalContactPeople } from './PersonalContactPeople';

/**
 * Request builder class for operations supported on the {@link PersonalContactPeople} entity.
 */
export class PersonalContactPeopleRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonalContactPeople<T>, T> {
  /**
   * Returns a request builder for querying all `PersonalContactPeople` entities.
   * @returns A request builder for creating requests to retrieve all `PersonalContactPeople` entities.
   */
  getAll(): GetAllRequestBuilder<PersonalContactPeople<T>, T> {
    return new GetAllRequestBuilder<PersonalContactPeople<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PersonalContactPeople` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonalContactPeople`.
   */
  create(
    entity: PersonalContactPeople<T>
  ): CreateRequestBuilder<PersonalContactPeople<T>, T> {
    return new CreateRequestBuilder<PersonalContactPeople<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonalContactPeople` entity based on its keys.
   * @param workerPersonnelNumber Key property. See {@link PersonalContactPeople.workerPersonnelNumber}.
   * @param contactPersonPartyNumber Key property. See {@link PersonalContactPeople.contactPersonPartyNumber}.
   * @param relationshipType Key property. See {@link PersonalContactPeople.relationshipType}.
   * @param relationshipValidFrom Key property. See {@link PersonalContactPeople.relationshipValidFrom}.
   * @returns A request builder for creating requests to retrieve one `PersonalContactPeople` entity based on its keys.
   */
  getByKey(
    workerPersonnelNumber: DeserializedType<T, 'Edm.String'>,
    contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>,
    relationshipType: DeserializedType<T, 'Edm.String'>,
    relationshipValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PersonalContactPeople<T>, T> {
    return new GetByKeyRequestBuilder<PersonalContactPeople<T>, T>(
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
   * Returns a request builder for updating an entity of type `PersonalContactPeople`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonalContactPeople`.
   */
  update(
    entity: PersonalContactPeople<T>
  ): UpdateRequestBuilder<PersonalContactPeople<T>, T> {
    return new UpdateRequestBuilder<PersonalContactPeople<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonalContactPeople`.
   * @param workerPersonnelNumber Key property. See {@link PersonalContactPeople.workerPersonnelNumber}.
   * @param contactPersonPartyNumber Key property. See {@link PersonalContactPeople.contactPersonPartyNumber}.
   * @param relationshipType Key property. See {@link PersonalContactPeople.relationshipType}.
   * @param relationshipValidFrom Key property. See {@link PersonalContactPeople.relationshipValidFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PersonalContactPeople`.
   */
  delete(
    workerPersonnelNumber: string,
    contactPersonPartyNumber: string,
    relationshipType: string,
    relationshipValidFrom: Moment
  ): DeleteRequestBuilder<PersonalContactPeople<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonalContactPeople`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonalContactPeople` by taking the entity as a parameter.
   */
  delete(
    entity: PersonalContactPeople<T>
  ): DeleteRequestBuilder<PersonalContactPeople<T>, T>;
  delete(
    workerPersonnelNumberOrEntity: any,
    contactPersonPartyNumber?: string,
    relationshipType?: string,
    relationshipValidFrom?: Moment
  ): DeleteRequestBuilder<PersonalContactPeople<T>, T> {
    return new DeleteRequestBuilder<PersonalContactPeople<T>, T>(
      this.entityApi,
      workerPersonnelNumberOrEntity instanceof PersonalContactPeople
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
