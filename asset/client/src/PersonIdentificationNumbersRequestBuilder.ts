/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { PersonIdentificationNumbers } from './PersonIdentificationNumbers';

/**
 * Request builder class for operations supported on the {@link PersonIdentificationNumbers} entity.
 */
export class PersonIdentificationNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonIdentificationNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `PersonIdentificationNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `PersonIdentificationNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<PersonIdentificationNumbers<T>, T> {
    return new GetAllRequestBuilder<PersonIdentificationNumbers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PersonIdentificationNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonIdentificationNumbers`.
   */
  create(
    entity: PersonIdentificationNumbers<T>
  ): CreateRequestBuilder<PersonIdentificationNumbers<T>, T> {
    return new CreateRequestBuilder<PersonIdentificationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonIdentificationNumbers` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonIdentificationNumbers.partyNumber}.
   * @param identificationTypeId Key property. See {@link PersonIdentificationNumbers.identificationTypeId}.
   * @param identificationNumber Key property. See {@link PersonIdentificationNumbers.identificationNumber}.
   * @returns A request builder for creating requests to retrieve one `PersonIdentificationNumbers` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    identificationTypeId: DeserializedType<T, 'Edm.String'>,
    identificationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PersonIdentificationNumbers<T>, T> {
    return new GetByKeyRequestBuilder<PersonIdentificationNumbers<T>, T>(
      this.entityApi,
      {
        PartyNumber: partyNumber,
        IdentificationTypeId: identificationTypeId,
        IdentificationNumber: identificationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonIdentificationNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonIdentificationNumbers`.
   */
  update(
    entity: PersonIdentificationNumbers<T>
  ): UpdateRequestBuilder<PersonIdentificationNumbers<T>, T> {
    return new UpdateRequestBuilder<PersonIdentificationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonIdentificationNumbers`.
   * @param partyNumber Key property. See {@link PersonIdentificationNumbers.partyNumber}.
   * @param identificationTypeId Key property. See {@link PersonIdentificationNumbers.identificationTypeId}.
   * @param identificationNumber Key property. See {@link PersonIdentificationNumbers.identificationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PersonIdentificationNumbers`.
   */
  delete(
    partyNumber: string,
    identificationTypeId: string,
    identificationNumber: string
  ): DeleteRequestBuilder<PersonIdentificationNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonIdentificationNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonIdentificationNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: PersonIdentificationNumbers<T>
  ): DeleteRequestBuilder<PersonIdentificationNumbers<T>, T>;
  delete(
    partyNumberOrEntity: any,
    identificationTypeId?: string,
    identificationNumber?: string
  ): DeleteRequestBuilder<PersonIdentificationNumbers<T>, T> {
    return new DeleteRequestBuilder<PersonIdentificationNumbers<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonIdentificationNumbers
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            IdentificationTypeId: identificationTypeId!,
            IdentificationNumber: identificationNumber!
          }
    );
  }
}
