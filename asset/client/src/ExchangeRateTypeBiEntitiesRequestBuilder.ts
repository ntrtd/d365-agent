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
import { ExchangeRateTypeBiEntities } from './ExchangeRateTypeBiEntities';

/**
 * Request builder class for operations supported on the {@link ExchangeRateTypeBiEntities} entity.
 */
export class ExchangeRateTypeBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExchangeRateTypeBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ExchangeRateTypeBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ExchangeRateTypeBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ExchangeRateTypeBiEntities<T>, T> {
    return new GetAllRequestBuilder<ExchangeRateTypeBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExchangeRateTypeBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExchangeRateTypeBiEntities`.
   */
  create(
    entity: ExchangeRateTypeBiEntities<T>
  ): CreateRequestBuilder<ExchangeRateTypeBiEntities<T>, T> {
    return new CreateRequestBuilder<ExchangeRateTypeBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExchangeRateTypeBiEntities` entity based on its keys.
   * @param name Key property. See {@link ExchangeRateTypeBiEntities.name}.
   * @returns A request builder for creating requests to retrieve one `ExchangeRateTypeBiEntities` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExchangeRateTypeBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<ExchangeRateTypeBiEntities<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExchangeRateTypeBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExchangeRateTypeBiEntities`.
   */
  update(
    entity: ExchangeRateTypeBiEntities<T>
  ): UpdateRequestBuilder<ExchangeRateTypeBiEntities<T>, T> {
    return new UpdateRequestBuilder<ExchangeRateTypeBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExchangeRateTypeBiEntities`.
   * @param name Key property. See {@link ExchangeRateTypeBiEntities.name}.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRateTypeBiEntities`.
   */
  delete(name: string): DeleteRequestBuilder<ExchangeRateTypeBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExchangeRateTypeBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRateTypeBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ExchangeRateTypeBiEntities<T>
  ): DeleteRequestBuilder<ExchangeRateTypeBiEntities<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<ExchangeRateTypeBiEntities<T>, T> {
    return new DeleteRequestBuilder<ExchangeRateTypeBiEntities<T>, T>(
      this.entityApi,
      nameOrEntity instanceof ExchangeRateTypeBiEntities
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
