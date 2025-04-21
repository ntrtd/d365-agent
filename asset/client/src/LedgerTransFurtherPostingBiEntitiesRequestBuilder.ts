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
import { LedgerTransFurtherPostingBiEntities } from './LedgerTransFurtherPostingBiEntities';

/**
 * Request builder class for operations supported on the {@link LedgerTransFurtherPostingBiEntities} entity.
 */
export class LedgerTransFurtherPostingBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerTransFurtherPostingBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerTransFurtherPostingBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerTransFurtherPostingBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerTransFurtherPostingBiEntities<T>, T> {
    return new GetAllRequestBuilder<LedgerTransFurtherPostingBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerTransFurtherPostingBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerTransFurtherPostingBiEntities`.
   */
  create(
    entity: LedgerTransFurtherPostingBiEntities<T>
  ): CreateRequestBuilder<LedgerTransFurtherPostingBiEntities<T>, T> {
    return new CreateRequestBuilder<LedgerTransFurtherPostingBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerTransFurtherPostingBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerTransFurtherPostingBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link LedgerTransFurtherPostingBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `LedgerTransFurtherPostingBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<LedgerTransFurtherPostingBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      LedgerTransFurtherPostingBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceKey: sourceKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerTransFurtherPostingBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerTransFurtherPostingBiEntities`.
   */
  update(
    entity: LedgerTransFurtherPostingBiEntities<T>
  ): UpdateRequestBuilder<LedgerTransFurtherPostingBiEntities<T>, T> {
    return new UpdateRequestBuilder<LedgerTransFurtherPostingBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerTransFurtherPostingBiEntities`.
   * @param dataAreaId Key property. See {@link LedgerTransFurtherPostingBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link LedgerTransFurtherPostingBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerTransFurtherPostingBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<LedgerTransFurtherPostingBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerTransFurtherPostingBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerTransFurtherPostingBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerTransFurtherPostingBiEntities<T>
  ): DeleteRequestBuilder<LedgerTransFurtherPostingBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<LedgerTransFurtherPostingBiEntities<T>, T> {
    return new DeleteRequestBuilder<LedgerTransFurtherPostingBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerTransFurtherPostingBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
