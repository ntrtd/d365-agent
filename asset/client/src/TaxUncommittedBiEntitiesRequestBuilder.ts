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
import { TaxUncommittedBiEntities } from './TaxUncommittedBiEntities';

/**
 * Request builder class for operations supported on the {@link TaxUncommittedBiEntities} entity.
 */
export class TaxUncommittedBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxUncommittedBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxUncommittedBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxUncommittedBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxUncommittedBiEntities<T>, T> {
    return new GetAllRequestBuilder<TaxUncommittedBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxUncommittedBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxUncommittedBiEntities`.
   */
  create(
    entity: TaxUncommittedBiEntities<T>
  ): CreateRequestBuilder<TaxUncommittedBiEntities<T>, T> {
    return new CreateRequestBuilder<TaxUncommittedBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxUncommittedBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxUncommittedBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxUncommittedBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `TaxUncommittedBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TaxUncommittedBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<TaxUncommittedBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxUncommittedBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxUncommittedBiEntities`.
   */
  update(
    entity: TaxUncommittedBiEntities<T>
  ): UpdateRequestBuilder<TaxUncommittedBiEntities<T>, T> {
    return new UpdateRequestBuilder<TaxUncommittedBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxUncommittedBiEntities`.
   * @param dataAreaId Key property. See {@link TaxUncommittedBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxUncommittedBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `TaxUncommittedBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<TaxUncommittedBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxUncommittedBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxUncommittedBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxUncommittedBiEntities<T>
  ): DeleteRequestBuilder<TaxUncommittedBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<TaxUncommittedBiEntities<T>, T> {
    return new DeleteRequestBuilder<TaxUncommittedBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxUncommittedBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
