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
import { PersonImages } from './PersonImages';

/**
 * Request builder class for operations supported on the {@link PersonImages} entity.
 */
export class PersonImagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonImages<T>, T> {
  /**
   * Returns a request builder for querying all `PersonImages` entities.
   * @returns A request builder for creating requests to retrieve all `PersonImages` entities.
   */
  getAll(): GetAllRequestBuilder<PersonImages<T>, T> {
    return new GetAllRequestBuilder<PersonImages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonImages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonImages`.
   */
  create(entity: PersonImages<T>): CreateRequestBuilder<PersonImages<T>, T> {
    return new CreateRequestBuilder<PersonImages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PersonImages` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonImages.partyNumber}.
   * @returns A request builder for creating requests to retrieve one `PersonImages` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PersonImages<T>, T> {
    return new GetByKeyRequestBuilder<PersonImages<T>, T>(this.entityApi, {
      PartyNumber: partyNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PersonImages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonImages`.
   */
  update(entity: PersonImages<T>): UpdateRequestBuilder<PersonImages<T>, T> {
    return new UpdateRequestBuilder<PersonImages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonImages`.
   * @param partyNumber Key property. See {@link PersonImages.partyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PersonImages`.
   */
  delete(partyNumber: string): DeleteRequestBuilder<PersonImages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonImages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonImages` by taking the entity as a parameter.
   */
  delete(entity: PersonImages<T>): DeleteRequestBuilder<PersonImages<T>, T>;
  delete(partyNumberOrEntity: any): DeleteRequestBuilder<PersonImages<T>, T> {
    return new DeleteRequestBuilder<PersonImages<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonImages
        ? partyNumberOrEntity
        : { PartyNumber: partyNumberOrEntity! }
    );
  }
}
