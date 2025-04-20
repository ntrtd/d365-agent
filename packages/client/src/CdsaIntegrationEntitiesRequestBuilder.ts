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
import { CdsaIntegrationEntities } from './CdsaIntegrationEntities';

/**
 * Request builder class for operations supported on the {@link CdsaIntegrationEntities} entity.
 */
export class CdsaIntegrationEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsaIntegrationEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CdsaIntegrationEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CdsaIntegrationEntities` entities.
   */
  getAll(): GetAllRequestBuilder<CdsaIntegrationEntities<T>, T> {
    return new GetAllRequestBuilder<CdsaIntegrationEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsaIntegrationEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsaIntegrationEntities`.
   */
  create(
    entity: CdsaIntegrationEntities<T>
  ): CreateRequestBuilder<CdsaIntegrationEntities<T>, T> {
    return new CreateRequestBuilder<CdsaIntegrationEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsaIntegrationEntities` entity based on its keys.
   * @param id Key property. See {@link CdsaIntegrationEntities.id}.
   * @returns A request builder for creating requests to retrieve one `CdsaIntegrationEntities` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<CdsaIntegrationEntities<T>, T> {
    return new GetByKeyRequestBuilder<CdsaIntegrationEntities<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsaIntegrationEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsaIntegrationEntities`.
   */
  update(
    entity: CdsaIntegrationEntities<T>
  ): UpdateRequestBuilder<CdsaIntegrationEntities<T>, T> {
    return new UpdateRequestBuilder<CdsaIntegrationEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsaIntegrationEntities`.
   * @param id Key property. See {@link CdsaIntegrationEntities.id}.
   * @returns A request builder for creating requests that delete an entity of type `CdsaIntegrationEntities`.
   */
  delete(id: string): DeleteRequestBuilder<CdsaIntegrationEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsaIntegrationEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsaIntegrationEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CdsaIntegrationEntities<T>
  ): DeleteRequestBuilder<CdsaIntegrationEntities<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<CdsaIntegrationEntities<T>, T> {
    return new DeleteRequestBuilder<CdsaIntegrationEntities<T>, T>(
      this.entityApi,
      idOrEntity instanceof CdsaIntegrationEntities
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
