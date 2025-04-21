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
import { TaxWithholdTrans_InBiEntities } from './TaxWithholdTrans_InBiEntities';

/**
 * Request builder class for operations supported on the {@link TaxWithholdTrans_InBiEntities} entity.
 */
export class TaxWithholdTrans_InBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxWithholdTrans_InBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxWithholdTrans_InBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxWithholdTrans_InBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxWithholdTrans_InBiEntities<T>, T> {
    return new GetAllRequestBuilder<TaxWithholdTrans_InBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxWithholdTrans_InBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxWithholdTrans_InBiEntities`.
   */
  create(
    entity: TaxWithholdTrans_InBiEntities<T>
  ): CreateRequestBuilder<TaxWithholdTrans_InBiEntities<T>, T> {
    return new CreateRequestBuilder<TaxWithholdTrans_InBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxWithholdTrans_InBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxWithholdTrans_InBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxWithholdTrans_InBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `TaxWithholdTrans_InBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TaxWithholdTrans_InBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<TaxWithholdTrans_InBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxWithholdTrans_InBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxWithholdTrans_InBiEntities`.
   */
  update(
    entity: TaxWithholdTrans_InBiEntities<T>
  ): UpdateRequestBuilder<TaxWithholdTrans_InBiEntities<T>, T> {
    return new UpdateRequestBuilder<TaxWithholdTrans_InBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxWithholdTrans_InBiEntities`.
   * @param dataAreaId Key property. See {@link TaxWithholdTrans_InBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link TaxWithholdTrans_InBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `TaxWithholdTrans_InBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<TaxWithholdTrans_InBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxWithholdTrans_InBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxWithholdTrans_InBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxWithholdTrans_InBiEntities<T>
  ): DeleteRequestBuilder<TaxWithholdTrans_InBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<TaxWithholdTrans_InBiEntities<T>, T> {
    return new DeleteRequestBuilder<TaxWithholdTrans_InBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxWithholdTrans_InBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
