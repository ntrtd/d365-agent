/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { RetailEodTransactionAggregationHeaderBiEntities } from './RetailEodTransactionAggregationHeaderBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailEodTransactionAggregationHeaderBiEntities} entity.
 */
export class RetailEodTransactionAggregationHeaderBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailEodTransactionAggregationHeaderBiEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailEodTransactionAggregationHeaderBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEodTransactionAggregationHeaderBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailEodTransactionAggregationHeaderBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailEodTransactionAggregationHeaderBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailEodTransactionAggregationHeaderBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEodTransactionAggregationHeaderBiEntities`.
   */
  create(
    entity: RetailEodTransactionAggregationHeaderBiEntities<T>
  ): CreateRequestBuilder<
    RetailEodTransactionAggregationHeaderBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailEodTransactionAggregationHeaderBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailEodTransactionAggregationHeaderBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEodTransactionAggregationHeaderBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionAggregationHeaderBiEntities.statementId}.
   * @param salesId Key property. See {@link RetailEodTransactionAggregationHeaderBiEntities.salesId}.
   * @returns A request builder for creating requests to retrieve one `RetailEodTransactionAggregationHeaderBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statementId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    RetailEodTransactionAggregationHeaderBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailEodTransactionAggregationHeaderBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StatementId: statementId,
      SalesId: salesId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEodTransactionAggregationHeaderBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEodTransactionAggregationHeaderBiEntities`.
   */
  update(
    entity: RetailEodTransactionAggregationHeaderBiEntities<T>
  ): UpdateRequestBuilder<
    RetailEodTransactionAggregationHeaderBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailEodTransactionAggregationHeaderBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionAggregationHeaderBiEntities`.
   * @param dataAreaId Key property. See {@link RetailEodTransactionAggregationHeaderBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionAggregationHeaderBiEntities.statementId}.
   * @param salesId Key property. See {@link RetailEodTransactionAggregationHeaderBiEntities.salesId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionAggregationHeaderBiEntities`.
   */
  delete(
    dataAreaId: string,
    statementId: string,
    salesId: string
  ): DeleteRequestBuilder<
    RetailEodTransactionAggregationHeaderBiEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionAggregationHeaderBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionAggregationHeaderBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEodTransactionAggregationHeaderBiEntities<T>
  ): DeleteRequestBuilder<
    RetailEodTransactionAggregationHeaderBiEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    statementId?: string,
    salesId?: string
  ): DeleteRequestBuilder<
    RetailEodTransactionAggregationHeaderBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailEodTransactionAggregationHeaderBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailEodTransactionAggregationHeaderBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StatementId: statementId!,
            SalesId: salesId!
          }
    );
  }
}
