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
import { TaxTransThBiEntities } from './TaxTransThBiEntities';

/**
 * Request builder class for operations supported on the {@link TaxTransThBiEntities} entity.
 */
export class TaxTransThBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxTransThBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxTransThBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxTransThBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxTransThBiEntities<T>, T> {
    return new GetAllRequestBuilder<TaxTransThBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxTransThBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxTransThBiEntities`.
   */
  create(
    entity: TaxTransThBiEntities<T>
  ): CreateRequestBuilder<TaxTransThBiEntities<T>, T> {
    return new CreateRequestBuilder<TaxTransThBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxTransThBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxTransThBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransThBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `TaxTransThBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TaxTransThBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<TaxTransThBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxTransThBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxTransThBiEntities`.
   */
  update(
    entity: TaxTransThBiEntities<T>
  ): UpdateRequestBuilder<TaxTransThBiEntities<T>, T> {
    return new UpdateRequestBuilder<TaxTransThBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxTransThBiEntities`.
   * @param dataAreaId Key property. See {@link TaxTransThBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransThBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransThBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<TaxTransThBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxTransThBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransThBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxTransThBiEntities<T>
  ): DeleteRequestBuilder<TaxTransThBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<TaxTransThBiEntities<T>, T> {
    return new DeleteRequestBuilder<TaxTransThBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxTransThBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
