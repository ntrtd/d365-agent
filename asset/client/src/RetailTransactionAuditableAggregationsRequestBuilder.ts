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
import { RetailTransactionAuditableAggregations } from './RetailTransactionAuditableAggregations';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAuditableAggregations} entity.
 */
export class RetailTransactionAuditableAggregationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAuditableAggregations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAuditableAggregations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAuditableAggregations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionAuditableAggregations<T>, T> {
    return new GetAllRequestBuilder<
      RetailTransactionAuditableAggregations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAuditableAggregations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAuditableAggregations`.
   */
  create(
    entity: RetailTransactionAuditableAggregations<T>
  ): CreateRequestBuilder<RetailTransactionAuditableAggregations<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionAuditableAggregations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAuditableAggregations` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableAggregations.dataAreaId}.
   * @param statementNumber Key property. See {@link RetailTransactionAuditableAggregations.statementNumber}.
   * @param aggregation Key property. See {@link RetailTransactionAuditableAggregations.aggregation}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAuditableAggregations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statementNumber: DeserializedType<T, 'Edm.String'>,
    aggregation: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailTransactionAuditableAggregations<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionAuditableAggregations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StatementNumber: statementNumber,
      Aggregation: aggregation
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionAuditableAggregations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAuditableAggregations`.
   */
  update(
    entity: RetailTransactionAuditableAggregations<T>
  ): UpdateRequestBuilder<RetailTransactionAuditableAggregations<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionAuditableAggregations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableAggregations`.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableAggregations.dataAreaId}.
   * @param statementNumber Key property. See {@link RetailTransactionAuditableAggregations.statementNumber}.
   * @param aggregation Key property. See {@link RetailTransactionAuditableAggregations.aggregation}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableAggregations`.
   */
  delete(
    dataAreaId: string,
    statementNumber: string,
    aggregation: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableAggregations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableAggregations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableAggregations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAuditableAggregations<T>
  ): DeleteRequestBuilder<RetailTransactionAuditableAggregations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    statementNumber?: string,
    aggregation?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableAggregations<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionAuditableAggregations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAuditableAggregations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StatementNumber: statementNumber!,
            Aggregation: aggregation!
          }
    );
  }
}
