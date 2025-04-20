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
import { SmaServiceTaskBiEntities } from './SmaServiceTaskBiEntities';

/**
 * Request builder class for operations supported on the {@link SmaServiceTaskBiEntities} entity.
 */
export class SmaServiceTaskBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SmaServiceTaskBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SmaServiceTaskBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SmaServiceTaskBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SmaServiceTaskBiEntities<T>, T> {
    return new GetAllRequestBuilder<SmaServiceTaskBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SmaServiceTaskBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SmaServiceTaskBiEntities`.
   */
  create(
    entity: SmaServiceTaskBiEntities<T>
  ): CreateRequestBuilder<SmaServiceTaskBiEntities<T>, T> {
    return new CreateRequestBuilder<SmaServiceTaskBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SmaServiceTaskBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SmaServiceTaskBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SmaServiceTaskBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `SmaServiceTaskBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SmaServiceTaskBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SmaServiceTaskBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SmaServiceTaskBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SmaServiceTaskBiEntities`.
   */
  update(
    entity: SmaServiceTaskBiEntities<T>
  ): UpdateRequestBuilder<SmaServiceTaskBiEntities<T>, T> {
    return new UpdateRequestBuilder<SmaServiceTaskBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SmaServiceTaskBiEntities`.
   * @param dataAreaId Key property. See {@link SmaServiceTaskBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SmaServiceTaskBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `SmaServiceTaskBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<SmaServiceTaskBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SmaServiceTaskBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SmaServiceTaskBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SmaServiceTaskBiEntities<T>
  ): DeleteRequestBuilder<SmaServiceTaskBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<SmaServiceTaskBiEntities<T>, T> {
    return new DeleteRequestBuilder<SmaServiceTaskBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SmaServiceTaskBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
