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
import { TaxTransWBiEntities } from './TaxTransWBiEntities';

/**
 * Request builder class for operations supported on the {@link TaxTransWBiEntities} entity.
 */
export class TaxTransWBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxTransWBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxTransWBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxTransWBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxTransWBiEntities<T>, T> {
    return new GetAllRequestBuilder<TaxTransWBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxTransWBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxTransWBiEntities`.
   */
  create(
    entity: TaxTransWBiEntities<T>
  ): CreateRequestBuilder<TaxTransWBiEntities<T>, T> {
    return new CreateRequestBuilder<TaxTransWBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxTransWBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxTransWBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransWBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `TaxTransWBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TaxTransWBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<TaxTransWBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxTransWBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxTransWBiEntities`.
   */
  update(
    entity: TaxTransWBiEntities<T>
  ): UpdateRequestBuilder<TaxTransWBiEntities<T>, T> {
    return new UpdateRequestBuilder<TaxTransWBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxTransWBiEntities`.
   * @param dataAreaId Key property. See {@link TaxTransWBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransWBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransWBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<TaxTransWBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxTransWBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransWBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxTransWBiEntities<T>
  ): DeleteRequestBuilder<TaxTransWBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<TaxTransWBiEntities<T>, T> {
    return new DeleteRequestBuilder<TaxTransWBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxTransWBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
