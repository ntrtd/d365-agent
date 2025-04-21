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
import { SalesTableBrBiEntities } from './SalesTableBrBiEntities';

/**
 * Request builder class for operations supported on the {@link SalesTableBrBiEntities} entity.
 */
export class SalesTableBrBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesTableBrBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SalesTableBrBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTableBrBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SalesTableBrBiEntities<T>, T> {
    return new GetAllRequestBuilder<SalesTableBrBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesTableBrBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTableBrBiEntities`.
   */
  create(
    entity: SalesTableBrBiEntities<T>
  ): CreateRequestBuilder<SalesTableBrBiEntities<T>, T> {
    return new CreateRequestBuilder<SalesTableBrBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesTableBrBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesTableBrBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SalesTableBrBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `SalesTableBrBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SalesTableBrBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SalesTableBrBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTableBrBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTableBrBiEntities`.
   */
  update(
    entity: SalesTableBrBiEntities<T>
  ): UpdateRequestBuilder<SalesTableBrBiEntities<T>, T> {
    return new UpdateRequestBuilder<SalesTableBrBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTableBrBiEntities`.
   * @param dataAreaId Key property. See {@link SalesTableBrBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SalesTableBrBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `SalesTableBrBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<SalesTableBrBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTableBrBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTableBrBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SalesTableBrBiEntities<T>
  ): DeleteRequestBuilder<SalesTableBrBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<SalesTableBrBiEntities<T>, T> {
    return new DeleteRequestBuilder<SalesTableBrBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesTableBrBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
