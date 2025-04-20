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
import { TaxTransBrBiEntities } from './TaxTransBrBiEntities';

/**
 * Request builder class for operations supported on the {@link TaxTransBrBiEntities} entity.
 */
export class TaxTransBrBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxTransBrBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxTransBrBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxTransBrBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxTransBrBiEntities<T>, T> {
    return new GetAllRequestBuilder<TaxTransBrBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxTransBrBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxTransBrBiEntities`.
   */
  create(
    entity: TaxTransBrBiEntities<T>
  ): CreateRequestBuilder<TaxTransBrBiEntities<T>, T> {
    return new CreateRequestBuilder<TaxTransBrBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxTransBrBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxTransBrBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransBrBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `TaxTransBrBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TaxTransBrBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<TaxTransBrBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxTransBrBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxTransBrBiEntities`.
   */
  update(
    entity: TaxTransBrBiEntities<T>
  ): UpdateRequestBuilder<TaxTransBrBiEntities<T>, T> {
    return new UpdateRequestBuilder<TaxTransBrBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxTransBrBiEntities`.
   * @param dataAreaId Key property. See {@link TaxTransBrBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransBrBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransBrBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<TaxTransBrBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxTransBrBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransBrBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxTransBrBiEntities<T>
  ): DeleteRequestBuilder<TaxTransBrBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<TaxTransBrBiEntities<T>, T> {
    return new DeleteRequestBuilder<TaxTransBrBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxTransBrBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
