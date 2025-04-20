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
import { CustTransBiEntities } from './CustTransBiEntities';

/**
 * Request builder class for operations supported on the {@link CustTransBiEntities} entity.
 */
export class CustTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CustTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CustTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<CustTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<CustTransBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustTransBiEntities`.
   */
  create(
    entity: CustTransBiEntities<T>
  ): CreateRequestBuilder<CustTransBiEntities<T>, T> {
    return new CreateRequestBuilder<CustTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link CustTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `CustTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<CustTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<CustTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustTransBiEntities`.
   */
  update(
    entity: CustTransBiEntities<T>
  ): UpdateRequestBuilder<CustTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<CustTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustTransBiEntities`.
   * @param dataAreaId Key property. See {@link CustTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link CustTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `CustTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<CustTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CustTransBiEntities<T>
  ): DeleteRequestBuilder<CustTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<CustTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<CustTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
