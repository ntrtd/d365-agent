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
import { TaxTransInBiEntities } from './TaxTransInBiEntities';

/**
 * Request builder class for operations supported on the {@link TaxTransInBiEntities} entity.
 */
export class TaxTransInBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxTransInBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxTransInBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxTransInBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxTransInBiEntities<T>, T> {
    return new GetAllRequestBuilder<TaxTransInBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxTransInBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxTransInBiEntities`.
   */
  create(
    entity: TaxTransInBiEntities<T>
  ): CreateRequestBuilder<TaxTransInBiEntities<T>, T> {
    return new CreateRequestBuilder<TaxTransInBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxTransInBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxTransInBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransInBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `TaxTransInBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TaxTransInBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<TaxTransInBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxTransInBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxTransInBiEntities`.
   */
  update(
    entity: TaxTransInBiEntities<T>
  ): UpdateRequestBuilder<TaxTransInBiEntities<T>, T> {
    return new UpdateRequestBuilder<TaxTransInBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxTransInBiEntities`.
   * @param dataAreaId Key property. See {@link TaxTransInBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransInBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransInBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<TaxTransInBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxTransInBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransInBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxTransInBiEntities<T>
  ): DeleteRequestBuilder<TaxTransInBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<TaxTransInBiEntities<T>, T> {
    return new DeleteRequestBuilder<TaxTransInBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxTransInBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
