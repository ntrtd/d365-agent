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
import { TaxWithholdUncommitted_InBiEntities } from './TaxWithholdUncommitted_InBiEntities';

/**
 * Request builder class for operations supported on the {@link TaxWithholdUncommitted_InBiEntities} entity.
 */
export class TaxWithholdUncommitted_InBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxWithholdUncommitted_InBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxWithholdUncommitted_InBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxWithholdUncommitted_InBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxWithholdUncommitted_InBiEntities<T>, T> {
    return new GetAllRequestBuilder<TaxWithholdUncommitted_InBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxWithholdUncommitted_InBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxWithholdUncommitted_InBiEntities`.
   */
  create(
    entity: TaxWithholdUncommitted_InBiEntities<T>
  ): CreateRequestBuilder<TaxWithholdUncommitted_InBiEntities<T>, T> {
    return new CreateRequestBuilder<TaxWithholdUncommitted_InBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxWithholdUncommitted_InBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxWithholdUncommitted_InBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxWithholdUncommitted_InBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `TaxWithholdUncommitted_InBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TaxWithholdUncommitted_InBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      TaxWithholdUncommitted_InBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceKey: sourceKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxWithholdUncommitted_InBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxWithholdUncommitted_InBiEntities`.
   */
  update(
    entity: TaxWithholdUncommitted_InBiEntities<T>
  ): UpdateRequestBuilder<TaxWithholdUncommitted_InBiEntities<T>, T> {
    return new UpdateRequestBuilder<TaxWithholdUncommitted_InBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxWithholdUncommitted_InBiEntities`.
   * @param dataAreaId Key property. See {@link TaxWithholdUncommitted_InBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxWithholdUncommitted_InBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `TaxWithholdUncommitted_InBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<TaxWithholdUncommitted_InBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxWithholdUncommitted_InBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxWithholdUncommitted_InBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxWithholdUncommitted_InBiEntities<T>
  ): DeleteRequestBuilder<TaxWithholdUncommitted_InBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<TaxWithholdUncommitted_InBiEntities<T>, T> {
    return new DeleteRequestBuilder<TaxWithholdUncommitted_InBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxWithholdUncommitted_InBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
