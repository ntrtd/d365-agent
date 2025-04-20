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
import { LedgerBiEntities } from './LedgerBiEntities';

/**
 * Request builder class for operations supported on the {@link LedgerBiEntities} entity.
 */
export class LedgerBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerBiEntities<T>, T> {
    return new GetAllRequestBuilder<LedgerBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerBiEntities`.
   */
  create(
    entity: LedgerBiEntities<T>
  ): CreateRequestBuilder<LedgerBiEntities<T>, T> {
    return new CreateRequestBuilder<LedgerBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerBiEntities` entity based on its keys.
   * @param name Key property. See {@link LedgerBiEntities.name}.
   * @returns A request builder for creating requests to retrieve one `LedgerBiEntities` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<LedgerBiEntities<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerBiEntities`.
   */
  update(
    entity: LedgerBiEntities<T>
  ): UpdateRequestBuilder<LedgerBiEntities<T>, T> {
    return new UpdateRequestBuilder<LedgerBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerBiEntities`.
   * @param name Key property. See {@link LedgerBiEntities.name}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerBiEntities`.
   */
  delete(name: string): DeleteRequestBuilder<LedgerBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerBiEntities<T>
  ): DeleteRequestBuilder<LedgerBiEntities<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<LedgerBiEntities<T>, T> {
    return new DeleteRequestBuilder<LedgerBiEntities<T>, T>(
      this.entityApi,
      nameOrEntity instanceof LedgerBiEntities
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
