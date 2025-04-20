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
import { RetailEodStatementAggregations } from './RetailEodStatementAggregations';

/**
 * Request builder class for operations supported on the {@link RetailEodStatementAggregations} entity.
 */
export class RetailEodStatementAggregationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEodStatementAggregations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEodStatementAggregations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEodStatementAggregations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailEodStatementAggregations<T>, T> {
    return new GetAllRequestBuilder<RetailEodStatementAggregations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailEodStatementAggregations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEodStatementAggregations`.
   */
  create(
    entity: RetailEodStatementAggregations<T>
  ): CreateRequestBuilder<RetailEodStatementAggregations<T>, T> {
    return new CreateRequestBuilder<RetailEodStatementAggregations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailEodStatementAggregations` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEodStatementAggregations.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodStatementAggregations.statementId}.
   * @param aggregation Key property. See {@link RetailEodStatementAggregations.aggregation}.
   * @returns A request builder for creating requests to retrieve one `RetailEodStatementAggregations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statementId: DeserializedType<T, 'Edm.String'>,
    aggregation: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailEodStatementAggregations<T>, T> {
    return new GetByKeyRequestBuilder<RetailEodStatementAggregations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        StatementId: statementId,
        Aggregation: aggregation
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEodStatementAggregations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEodStatementAggregations`.
   */
  update(
    entity: RetailEodStatementAggregations<T>
  ): UpdateRequestBuilder<RetailEodStatementAggregations<T>, T> {
    return new UpdateRequestBuilder<RetailEodStatementAggregations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEodStatementAggregations`.
   * @param dataAreaId Key property. See {@link RetailEodStatementAggregations.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodStatementAggregations.statementId}.
   * @param aggregation Key property. See {@link RetailEodStatementAggregations.aggregation}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodStatementAggregations`.
   */
  delete(
    dataAreaId: string,
    statementId: string,
    aggregation: BigNumber
  ): DeleteRequestBuilder<RetailEodStatementAggregations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEodStatementAggregations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodStatementAggregations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEodStatementAggregations<T>
  ): DeleteRequestBuilder<RetailEodStatementAggregations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    statementId?: string,
    aggregation?: BigNumber
  ): DeleteRequestBuilder<RetailEodStatementAggregations<T>, T> {
    return new DeleteRequestBuilder<RetailEodStatementAggregations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailEodStatementAggregations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StatementId: statementId!,
            Aggregation: aggregation!
          }
    );
  }
}
