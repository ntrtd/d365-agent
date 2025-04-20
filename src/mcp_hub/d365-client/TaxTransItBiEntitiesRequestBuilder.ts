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
import { TaxTransItBiEntities } from './TaxTransItBiEntities';

/**
 * Request builder class for operations supported on the {@link TaxTransItBiEntities} entity.
 */
export class TaxTransItBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxTransItBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxTransItBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxTransItBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxTransItBiEntities<T>, T> {
    return new GetAllRequestBuilder<TaxTransItBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxTransItBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxTransItBiEntities`.
   */
  create(
    entity: TaxTransItBiEntities<T>
  ): CreateRequestBuilder<TaxTransItBiEntities<T>, T> {
    return new CreateRequestBuilder<TaxTransItBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxTransItBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxTransItBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransItBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `TaxTransItBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TaxTransItBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<TaxTransItBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxTransItBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxTransItBiEntities`.
   */
  update(
    entity: TaxTransItBiEntities<T>
  ): UpdateRequestBuilder<TaxTransItBiEntities<T>, T> {
    return new UpdateRequestBuilder<TaxTransItBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxTransItBiEntities`.
   * @param dataAreaId Key property. See {@link TaxTransItBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransItBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransItBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<TaxTransItBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxTransItBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransItBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxTransItBiEntities<T>
  ): DeleteRequestBuilder<TaxTransItBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<TaxTransItBiEntities<T>, T> {
    return new DeleteRequestBuilder<TaxTransItBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxTransItBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
