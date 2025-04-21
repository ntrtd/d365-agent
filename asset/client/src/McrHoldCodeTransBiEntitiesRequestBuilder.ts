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
import { McrHoldCodeTransBiEntities } from './McrHoldCodeTransBiEntities';

/**
 * Request builder class for operations supported on the {@link McrHoldCodeTransBiEntities} entity.
 */
export class McrHoldCodeTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<McrHoldCodeTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `McrHoldCodeTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `McrHoldCodeTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<McrHoldCodeTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<McrHoldCodeTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `McrHoldCodeTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `McrHoldCodeTransBiEntities`.
   */
  create(
    entity: McrHoldCodeTransBiEntities<T>
  ): CreateRequestBuilder<McrHoldCodeTransBiEntities<T>, T> {
    return new CreateRequestBuilder<McrHoldCodeTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `McrHoldCodeTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link McrHoldCodeTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link McrHoldCodeTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `McrHoldCodeTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<McrHoldCodeTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<McrHoldCodeTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `McrHoldCodeTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `McrHoldCodeTransBiEntities`.
   */
  update(
    entity: McrHoldCodeTransBiEntities<T>
  ): UpdateRequestBuilder<McrHoldCodeTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<McrHoldCodeTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `McrHoldCodeTransBiEntities`.
   * @param dataAreaId Key property. See {@link McrHoldCodeTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link McrHoldCodeTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `McrHoldCodeTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<McrHoldCodeTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `McrHoldCodeTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `McrHoldCodeTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: McrHoldCodeTransBiEntities<T>
  ): DeleteRequestBuilder<McrHoldCodeTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<McrHoldCodeTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<McrHoldCodeTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof McrHoldCodeTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
