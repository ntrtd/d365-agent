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
import { SmaServiceObjectTableBiEntities } from './SmaServiceObjectTableBiEntities';

/**
 * Request builder class for operations supported on the {@link SmaServiceObjectTableBiEntities} entity.
 */
export class SmaServiceObjectTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SmaServiceObjectTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SmaServiceObjectTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SmaServiceObjectTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SmaServiceObjectTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<SmaServiceObjectTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SmaServiceObjectTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SmaServiceObjectTableBiEntities`.
   */
  create(
    entity: SmaServiceObjectTableBiEntities<T>
  ): CreateRequestBuilder<SmaServiceObjectTableBiEntities<T>, T> {
    return new CreateRequestBuilder<SmaServiceObjectTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SmaServiceObjectTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SmaServiceObjectTableBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SmaServiceObjectTableBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `SmaServiceObjectTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SmaServiceObjectTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SmaServiceObjectTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SmaServiceObjectTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SmaServiceObjectTableBiEntities`.
   */
  update(
    entity: SmaServiceObjectTableBiEntities<T>
  ): UpdateRequestBuilder<SmaServiceObjectTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<SmaServiceObjectTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SmaServiceObjectTableBiEntities`.
   * @param dataAreaId Key property. See {@link SmaServiceObjectTableBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SmaServiceObjectTableBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `SmaServiceObjectTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<SmaServiceObjectTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SmaServiceObjectTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SmaServiceObjectTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SmaServiceObjectTableBiEntities<T>
  ): DeleteRequestBuilder<SmaServiceObjectTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<SmaServiceObjectTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<SmaServiceObjectTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SmaServiceObjectTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
