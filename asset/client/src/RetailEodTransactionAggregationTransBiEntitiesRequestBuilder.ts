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
import { RetailEodTransactionAggregationTransBiEntities } from './RetailEodTransactionAggregationTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailEodTransactionAggregationTransBiEntities} entity.
 */
export class RetailEodTransactionAggregationTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEodTransactionAggregationTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEodTransactionAggregationTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEodTransactionAggregationTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailEodTransactionAggregationTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailEodTransactionAggregationTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailEodTransactionAggregationTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEodTransactionAggregationTransBiEntities`.
   */
  create(
    entity: RetailEodTransactionAggregationTransBiEntities<T>
  ): CreateRequestBuilder<
    RetailEodTransactionAggregationTransBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailEodTransactionAggregationTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailEodTransactionAggregationTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEodTransactionAggregationTransBiEntities.dataAreaId}.
   * @param retailEodTransactionAggregationHeader Key property. See {@link RetailEodTransactionAggregationTransBiEntities.retailEodTransactionAggregationHeader}.
   * @param transactionId Key property. See {@link RetailEodTransactionAggregationTransBiEntities.transactionId}.
   * @returns A request builder for creating requests to retrieve one `RetailEodTransactionAggregationTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    retailEodTransactionAggregationHeader: DeserializedType<T, 'Edm.Int64'>,
    transactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    RetailEodTransactionAggregationTransBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailEodTransactionAggregationTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RetailEodTransactionAggregationHeader:
        retailEodTransactionAggregationHeader,
      TransactionId: transactionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEodTransactionAggregationTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEodTransactionAggregationTransBiEntities`.
   */
  update(
    entity: RetailEodTransactionAggregationTransBiEntities<T>
  ): UpdateRequestBuilder<
    RetailEodTransactionAggregationTransBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailEodTransactionAggregationTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionAggregationTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailEodTransactionAggregationTransBiEntities.dataAreaId}.
   * @param retailEodTransactionAggregationHeader Key property. See {@link RetailEodTransactionAggregationTransBiEntities.retailEodTransactionAggregationHeader}.
   * @param transactionId Key property. See {@link RetailEodTransactionAggregationTransBiEntities.transactionId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionAggregationTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    retailEodTransactionAggregationHeader: BigNumber,
    transactionId: string
  ): DeleteRequestBuilder<RetailEodTransactionAggregationTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionAggregationTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionAggregationTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEodTransactionAggregationTransBiEntities<T>
  ): DeleteRequestBuilder<RetailEodTransactionAggregationTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    retailEodTransactionAggregationHeader?: BigNumber,
    transactionId?: string
  ): DeleteRequestBuilder<
    RetailEodTransactionAggregationTransBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailEodTransactionAggregationTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailEodTransactionAggregationTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RetailEodTransactionAggregationHeader:
              retailEodTransactionAggregationHeader!,
            TransactionId: transactionId!
          }
    );
  }
}
