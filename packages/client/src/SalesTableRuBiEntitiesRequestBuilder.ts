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
import { SalesTableRuBiEntities } from './SalesTableRuBiEntities';

/**
 * Request builder class for operations supported on the {@link SalesTableRuBiEntities} entity.
 */
export class SalesTableRuBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesTableRuBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SalesTableRuBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTableRuBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SalesTableRuBiEntities<T>, T> {
    return new GetAllRequestBuilder<SalesTableRuBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesTableRuBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTableRuBiEntities`.
   */
  create(
    entity: SalesTableRuBiEntities<T>
  ): CreateRequestBuilder<SalesTableRuBiEntities<T>, T> {
    return new CreateRequestBuilder<SalesTableRuBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesTableRuBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesTableRuBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SalesTableRuBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `SalesTableRuBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SalesTableRuBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SalesTableRuBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTableRuBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTableRuBiEntities`.
   */
  update(
    entity: SalesTableRuBiEntities<T>
  ): UpdateRequestBuilder<SalesTableRuBiEntities<T>, T> {
    return new UpdateRequestBuilder<SalesTableRuBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTableRuBiEntities`.
   * @param dataAreaId Key property. See {@link SalesTableRuBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SalesTableRuBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `SalesTableRuBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<SalesTableRuBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTableRuBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTableRuBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SalesTableRuBiEntities<T>
  ): DeleteRequestBuilder<SalesTableRuBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<SalesTableRuBiEntities<T>, T> {
    return new DeleteRequestBuilder<SalesTableRuBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesTableRuBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
