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
import { RetailLoyalties } from './RetailLoyalties';

/**
 * Request builder class for operations supported on the {@link RetailLoyalties} entity.
 */
export class RetailLoyaltiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailLoyalties<T>, T> {
  /**
   * Returns a request builder for querying all `RetailLoyalties` entities.
   * @returns A request builder for creating requests to retrieve all `RetailLoyalties` entities.
   */
  getAll(): GetAllRequestBuilder<RetailLoyalties<T>, T> {
    return new GetAllRequestBuilder<RetailLoyalties<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailLoyalties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailLoyalties`.
   */
  create(
    entity: RetailLoyalties<T>
  ): CreateRequestBuilder<RetailLoyalties<T>, T> {
    return new CreateRequestBuilder<RetailLoyalties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailLoyalties` entity based on its keys.
   * @param name Key property. See {@link RetailLoyalties.name}.
   * @returns A request builder for creating requests to retrieve one `RetailLoyalties` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailLoyalties<T>, T> {
    return new GetByKeyRequestBuilder<RetailLoyalties<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailLoyalties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailLoyalties`.
   */
  update(
    entity: RetailLoyalties<T>
  ): UpdateRequestBuilder<RetailLoyalties<T>, T> {
    return new UpdateRequestBuilder<RetailLoyalties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailLoyalties`.
   * @param name Key property. See {@link RetailLoyalties.name}.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyalties`.
   */
  delete(name: string): DeleteRequestBuilder<RetailLoyalties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailLoyalties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailLoyalties` by taking the entity as a parameter.
   */
  delete(
    entity: RetailLoyalties<T>
  ): DeleteRequestBuilder<RetailLoyalties<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<RetailLoyalties<T>, T> {
    return new DeleteRequestBuilder<RetailLoyalties<T>, T>(
      this.entityApi,
      nameOrEntity instanceof RetailLoyalties
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
