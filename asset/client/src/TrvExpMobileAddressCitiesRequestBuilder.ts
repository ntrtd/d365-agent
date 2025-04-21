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
import { TrvExpMobileAddressCities } from './TrvExpMobileAddressCities';

/**
 * Request builder class for operations supported on the {@link TrvExpMobileAddressCities} entity.
 */
export class TrvExpMobileAddressCitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrvExpMobileAddressCities<T>, T> {
  /**
   * Returns a request builder for querying all `TrvExpMobileAddressCities` entities.
   * @returns A request builder for creating requests to retrieve all `TrvExpMobileAddressCities` entities.
   */
  getAll(): GetAllRequestBuilder<TrvExpMobileAddressCities<T>, T> {
    return new GetAllRequestBuilder<TrvExpMobileAddressCities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TrvExpMobileAddressCities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrvExpMobileAddressCities`.
   */
  create(
    entity: TrvExpMobileAddressCities<T>
  ): CreateRequestBuilder<TrvExpMobileAddressCities<T>, T> {
    return new CreateRequestBuilder<TrvExpMobileAddressCities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TrvExpMobileAddressCities` entity based on its keys.
   * @param name Key property. See {@link TrvExpMobileAddressCities.name}.
   * @returns A request builder for creating requests to retrieve one `TrvExpMobileAddressCities` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TrvExpMobileAddressCities<T>, T> {
    return new GetByKeyRequestBuilder<TrvExpMobileAddressCities<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TrvExpMobileAddressCities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrvExpMobileAddressCities`.
   */
  update(
    entity: TrvExpMobileAddressCities<T>
  ): UpdateRequestBuilder<TrvExpMobileAddressCities<T>, T> {
    return new UpdateRequestBuilder<TrvExpMobileAddressCities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TrvExpMobileAddressCities`.
   * @param name Key property. See {@link TrvExpMobileAddressCities.name}.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpMobileAddressCities`.
   */
  delete(name: string): DeleteRequestBuilder<TrvExpMobileAddressCities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrvExpMobileAddressCities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpMobileAddressCities` by taking the entity as a parameter.
   */
  delete(
    entity: TrvExpMobileAddressCities<T>
  ): DeleteRequestBuilder<TrvExpMobileAddressCities<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<TrvExpMobileAddressCities<T>, T> {
    return new DeleteRequestBuilder<TrvExpMobileAddressCities<T>, T>(
      this.entityApi,
      nameOrEntity instanceof TrvExpMobileAddressCities
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
