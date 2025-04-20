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
import { SalesTableWBiEntities } from './SalesTableWBiEntities';

/**
 * Request builder class for operations supported on the {@link SalesTableWBiEntities} entity.
 */
export class SalesTableWBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesTableWBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SalesTableWBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTableWBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SalesTableWBiEntities<T>, T> {
    return new GetAllRequestBuilder<SalesTableWBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesTableWBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTableWBiEntities`.
   */
  create(
    entity: SalesTableWBiEntities<T>
  ): CreateRequestBuilder<SalesTableWBiEntities<T>, T> {
    return new CreateRequestBuilder<SalesTableWBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesTableWBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesTableWBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SalesTableWBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `SalesTableWBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SalesTableWBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SalesTableWBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTableWBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTableWBiEntities`.
   */
  update(
    entity: SalesTableWBiEntities<T>
  ): UpdateRequestBuilder<SalesTableWBiEntities<T>, T> {
    return new UpdateRequestBuilder<SalesTableWBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTableWBiEntities`.
   * @param dataAreaId Key property. See {@link SalesTableWBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SalesTableWBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `SalesTableWBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<SalesTableWBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTableWBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTableWBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SalesTableWBiEntities<T>
  ): DeleteRequestBuilder<SalesTableWBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<SalesTableWBiEntities<T>, T> {
    return new DeleteRequestBuilder<SalesTableWBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesTableWBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
