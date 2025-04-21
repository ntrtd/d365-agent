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
import { AccomodationTypes } from './AccomodationTypes';

/**
 * Request builder class for operations supported on the {@link AccomodationTypes} entity.
 */
export class AccomodationTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccomodationTypes<T>, T> {
  /**
   * Returns a request builder for querying all `AccomodationTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AccomodationTypes` entities.
   */
  getAll(): GetAllRequestBuilder<AccomodationTypes<T>, T> {
    return new GetAllRequestBuilder<AccomodationTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AccomodationTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccomodationTypes`.
   */
  create(
    entity: AccomodationTypes<T>
  ): CreateRequestBuilder<AccomodationTypes<T>, T> {
    return new CreateRequestBuilder<AccomodationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AccomodationTypes` entity based on its keys.
   * @param accommodationTypeId Key property. See {@link AccomodationTypes.accommodationTypeId}.
   * @returns A request builder for creating requests to retrieve one `AccomodationTypes` entity based on its keys.
   */
  getByKey(
    accommodationTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AccomodationTypes<T>, T> {
    return new GetByKeyRequestBuilder<AccomodationTypes<T>, T>(this.entityApi, {
      AccommodationTypeId: accommodationTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AccomodationTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccomodationTypes`.
   */
  update(
    entity: AccomodationTypes<T>
  ): UpdateRequestBuilder<AccomodationTypes<T>, T> {
    return new UpdateRequestBuilder<AccomodationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccomodationTypes`.
   * @param accommodationTypeId Key property. See {@link AccomodationTypes.accommodationTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AccomodationTypes`.
   */
  delete(
    accommodationTypeId: string
  ): DeleteRequestBuilder<AccomodationTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccomodationTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccomodationTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AccomodationTypes<T>
  ): DeleteRequestBuilder<AccomodationTypes<T>, T>;
  delete(
    accommodationTypeIdOrEntity: any
  ): DeleteRequestBuilder<AccomodationTypes<T>, T> {
    return new DeleteRequestBuilder<AccomodationTypes<T>, T>(
      this.entityApi,
      accommodationTypeIdOrEntity instanceof AccomodationTypes
        ? accommodationTypeIdOrEntity
        : { AccommodationTypeId: accommodationTypeIdOrEntity! }
    );
  }
}
