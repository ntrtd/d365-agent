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
import { ReleasedProductReadinessChecks } from './ReleasedProductReadinessChecks';

/**
 * Request builder class for operations supported on the {@link ReleasedProductReadinessChecks} entity.
 */
export class ReleasedProductReadinessChecksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedProductReadinessChecks<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedProductReadinessChecks` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedProductReadinessChecks` entities.
   */
  getAll(): GetAllRequestBuilder<ReleasedProductReadinessChecks<T>, T> {
    return new GetAllRequestBuilder<ReleasedProductReadinessChecks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReleasedProductReadinessChecks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedProductReadinessChecks`.
   */
  create(
    entity: ReleasedProductReadinessChecks<T>
  ): CreateRequestBuilder<ReleasedProductReadinessChecks<T>, T> {
    return new CreateRequestBuilder<ReleasedProductReadinessChecks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReleasedProductReadinessChecks` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedProductReadinessChecks.dataAreaId}.
   * @param productReadinessCheckRecordId Key property. See {@link ReleasedProductReadinessChecks.productReadinessCheckRecordId}.
   * @returns A request builder for creating requests to retrieve one `ReleasedProductReadinessChecks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productReadinessCheckRecordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ReleasedProductReadinessChecks<T>, T> {
    return new GetByKeyRequestBuilder<ReleasedProductReadinessChecks<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductReadinessCheckRecordId: productReadinessCheckRecordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedProductReadinessChecks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedProductReadinessChecks`.
   */
  update(
    entity: ReleasedProductReadinessChecks<T>
  ): UpdateRequestBuilder<ReleasedProductReadinessChecks<T>, T> {
    return new UpdateRequestBuilder<ReleasedProductReadinessChecks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductReadinessChecks`.
   * @param dataAreaId Key property. See {@link ReleasedProductReadinessChecks.dataAreaId}.
   * @param productReadinessCheckRecordId Key property. See {@link ReleasedProductReadinessChecks.productReadinessCheckRecordId}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductReadinessChecks`.
   */
  delete(
    dataAreaId: string,
    productReadinessCheckRecordId: BigNumber
  ): DeleteRequestBuilder<ReleasedProductReadinessChecks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductReadinessChecks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductReadinessChecks` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedProductReadinessChecks<T>
  ): DeleteRequestBuilder<ReleasedProductReadinessChecks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productReadinessCheckRecordId?: BigNumber
  ): DeleteRequestBuilder<ReleasedProductReadinessChecks<T>, T> {
    return new DeleteRequestBuilder<ReleasedProductReadinessChecks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedProductReadinessChecks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductReadinessCheckRecordId: productReadinessCheckRecordId!
          }
    );
  }
}
