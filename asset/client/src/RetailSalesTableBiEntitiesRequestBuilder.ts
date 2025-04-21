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
import { RetailSalesTableBiEntities } from './RetailSalesTableBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailSalesTableBiEntities} entity.
 */
export class RetailSalesTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailSalesTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailSalesTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailSalesTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailSalesTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<RetailSalesTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailSalesTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailSalesTableBiEntities`.
   */
  create(
    entity: RetailSalesTableBiEntities<T>
  ): CreateRequestBuilder<RetailSalesTableBiEntities<T>, T> {
    return new CreateRequestBuilder<RetailSalesTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailSalesTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailSalesTableBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link RetailSalesTableBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `RetailSalesTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailSalesTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<RetailSalesTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailSalesTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailSalesTableBiEntities`.
   */
  update(
    entity: RetailSalesTableBiEntities<T>
  ): UpdateRequestBuilder<RetailSalesTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<RetailSalesTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailSalesTableBiEntities`.
   * @param dataAreaId Key property. See {@link RetailSalesTableBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link RetailSalesTableBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<RetailSalesTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailSalesTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailSalesTableBiEntities<T>
  ): DeleteRequestBuilder<RetailSalesTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<RetailSalesTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<RetailSalesTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailSalesTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
