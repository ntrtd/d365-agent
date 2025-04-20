/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { DimensionAttributeValueCombinationBiEntities } from './DimensionAttributeValueCombinationBiEntities';

/**
 * Request builder class for operations supported on the {@link DimensionAttributeValueCombinationBiEntities} entity.
 */
export class DimensionAttributeValueCombinationBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimensionAttributeValueCombinationBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `DimensionAttributeValueCombinationBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `DimensionAttributeValueCombinationBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    DimensionAttributeValueCombinationBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      DimensionAttributeValueCombinationBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DimensionAttributeValueCombinationBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimensionAttributeValueCombinationBiEntities`.
   */
  create(
    entity: DimensionAttributeValueCombinationBiEntities<T>
  ): CreateRequestBuilder<DimensionAttributeValueCombinationBiEntities<T>, T> {
    return new CreateRequestBuilder<
      DimensionAttributeValueCombinationBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `DimensionAttributeValueCombinationBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link DimensionAttributeValueCombinationBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `DimensionAttributeValueCombinationBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<
    DimensionAttributeValueCombinationBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      DimensionAttributeValueCombinationBiEntities<T>,
      T
    >(this.entityApi, { SourceKey: sourceKey });
  }

  /**
   * Returns a request builder for updating an entity of type `DimensionAttributeValueCombinationBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimensionAttributeValueCombinationBiEntities`.
   */
  update(
    entity: DimensionAttributeValueCombinationBiEntities<T>
  ): UpdateRequestBuilder<DimensionAttributeValueCombinationBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      DimensionAttributeValueCombinationBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DimensionAttributeValueCombinationBiEntities`.
   * @param sourceKey Key property. See {@link DimensionAttributeValueCombinationBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `DimensionAttributeValueCombinationBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<DimensionAttributeValueCombinationBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimensionAttributeValueCombinationBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimensionAttributeValueCombinationBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: DimensionAttributeValueCombinationBiEntities<T>
  ): DeleteRequestBuilder<DimensionAttributeValueCombinationBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<DimensionAttributeValueCombinationBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      DimensionAttributeValueCombinationBiEntities<T>,
      T
    >(
      this.entityApi,
      sourceKeyOrEntity instanceof DimensionAttributeValueCombinationBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
