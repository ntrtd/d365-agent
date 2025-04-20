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
import { UnitOfMeasureBiEntities } from './UnitOfMeasureBiEntities';

/**
 * Request builder class for operations supported on the {@link UnitOfMeasureBiEntities} entity.
 */
export class UnitOfMeasureBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UnitOfMeasureBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `UnitOfMeasureBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `UnitOfMeasureBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<UnitOfMeasureBiEntities<T>, T> {
    return new GetAllRequestBuilder<UnitOfMeasureBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `UnitOfMeasureBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UnitOfMeasureBiEntities`.
   */
  create(
    entity: UnitOfMeasureBiEntities<T>
  ): CreateRequestBuilder<UnitOfMeasureBiEntities<T>, T> {
    return new CreateRequestBuilder<UnitOfMeasureBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `UnitOfMeasureBiEntities` entity based on its keys.
   * @param pSymbol Key property. See {@link UnitOfMeasureBiEntities.symbol}.
   * @returns A request builder for creating requests to retrieve one `UnitOfMeasureBiEntities` entity based on its keys.
   */
  getByKey(
    pSymbol: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UnitOfMeasureBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<UnitOfMeasureBiEntities<T>, T>(
      this.entityApi,
      { Symbol: pSymbol }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UnitOfMeasureBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UnitOfMeasureBiEntities`.
   */
  update(
    entity: UnitOfMeasureBiEntities<T>
  ): UpdateRequestBuilder<UnitOfMeasureBiEntities<T>, T> {
    return new UpdateRequestBuilder<UnitOfMeasureBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UnitOfMeasureBiEntities`.
   * @param pSymbol Key property. See {@link UnitOfMeasureBiEntities.symbol}.
   * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasureBiEntities`.
   */
  delete(pSymbol: string): DeleteRequestBuilder<UnitOfMeasureBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UnitOfMeasureBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UnitOfMeasureBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: UnitOfMeasureBiEntities<T>
  ): DeleteRequestBuilder<UnitOfMeasureBiEntities<T>, T>;
  delete(
    pSymbolOrEntity: any
  ): DeleteRequestBuilder<UnitOfMeasureBiEntities<T>, T> {
    return new DeleteRequestBuilder<UnitOfMeasureBiEntities<T>, T>(
      this.entityApi,
      pSymbolOrEntity instanceof UnitOfMeasureBiEntities
        ? pSymbolOrEntity
        : { Symbol: pSymbolOrEntity! }
    );
  }
}
