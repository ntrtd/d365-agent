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
import { TaxTransRuBiEntities } from './TaxTransRuBiEntities';

/**
 * Request builder class for operations supported on the {@link TaxTransRuBiEntities} entity.
 */
export class TaxTransRuBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxTransRuBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxTransRuBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxTransRuBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxTransRuBiEntities<T>, T> {
    return new GetAllRequestBuilder<TaxTransRuBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxTransRuBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxTransRuBiEntities`.
   */
  create(
    entity: TaxTransRuBiEntities<T>
  ): CreateRequestBuilder<TaxTransRuBiEntities<T>, T> {
    return new CreateRequestBuilder<TaxTransRuBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxTransRuBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxTransRuBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransRuBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `TaxTransRuBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TaxTransRuBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<TaxTransRuBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxTransRuBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxTransRuBiEntities`.
   */
  update(
    entity: TaxTransRuBiEntities<T>
  ): UpdateRequestBuilder<TaxTransRuBiEntities<T>, T> {
    return new UpdateRequestBuilder<TaxTransRuBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxTransRuBiEntities`.
   * @param dataAreaId Key property. See {@link TaxTransRuBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxTransRuBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransRuBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<TaxTransRuBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxTransRuBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxTransRuBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxTransRuBiEntities<T>
  ): DeleteRequestBuilder<TaxTransRuBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<TaxTransRuBiEntities<T>, T> {
    return new DeleteRequestBuilder<TaxTransRuBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxTransRuBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
