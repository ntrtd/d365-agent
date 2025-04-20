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
import { LedgerChartOfAccountsBiEntities } from './LedgerChartOfAccountsBiEntities';

/**
 * Request builder class for operations supported on the {@link LedgerChartOfAccountsBiEntities} entity.
 */
export class LedgerChartOfAccountsBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerChartOfAccountsBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerChartOfAccountsBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerChartOfAccountsBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerChartOfAccountsBiEntities<T>, T> {
    return new GetAllRequestBuilder<LedgerChartOfAccountsBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerChartOfAccountsBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerChartOfAccountsBiEntities`.
   */
  create(
    entity: LedgerChartOfAccountsBiEntities<T>
  ): CreateRequestBuilder<LedgerChartOfAccountsBiEntities<T>, T> {
    return new CreateRequestBuilder<LedgerChartOfAccountsBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerChartOfAccountsBiEntities` entity based on its keys.
   * @param name Key property. See {@link LedgerChartOfAccountsBiEntities.name}.
   * @returns A request builder for creating requests to retrieve one `LedgerChartOfAccountsBiEntities` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerChartOfAccountsBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<LedgerChartOfAccountsBiEntities<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerChartOfAccountsBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerChartOfAccountsBiEntities`.
   */
  update(
    entity: LedgerChartOfAccountsBiEntities<T>
  ): UpdateRequestBuilder<LedgerChartOfAccountsBiEntities<T>, T> {
    return new UpdateRequestBuilder<LedgerChartOfAccountsBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerChartOfAccountsBiEntities`.
   * @param name Key property. See {@link LedgerChartOfAccountsBiEntities.name}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerChartOfAccountsBiEntities`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<LedgerChartOfAccountsBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerChartOfAccountsBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerChartOfAccountsBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerChartOfAccountsBiEntities<T>
  ): DeleteRequestBuilder<LedgerChartOfAccountsBiEntities<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<LedgerChartOfAccountsBiEntities<T>, T> {
    return new DeleteRequestBuilder<LedgerChartOfAccountsBiEntities<T>, T>(
      this.entityApi,
      nameOrEntity instanceof LedgerChartOfAccountsBiEntities
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
