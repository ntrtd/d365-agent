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
import { TaxTransBiEntities } from './TaxTransBiEntities';

/**
 * Request builder class for operations supported on the {@link TaxTransBiEntities} entity.
 */
export class TaxTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<TaxTransBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxTransBiEntities`.
   */
  create(
    entity: TaxTransBiEntities<T>
  ): CreateRequestBuilder<TaxTransBiEntities<T>, T> {
    return new CreateRequestBuilder<TaxTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `TaxTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TaxTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<TaxTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxTransBiEntities`.
   */
  update(
    entity: TaxTransBiEntities<T>
  ): UpdateRequestBuilder<TaxTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<TaxTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxTransBiEntities`.
   * @param dataAreaId Key property. See {@link TaxTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<TaxTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxTransBiEntities<T>
  ): DeleteRequestBuilder<TaxTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<TaxTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<TaxTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
