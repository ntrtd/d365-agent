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
import { RetailEodTransactionSalesTransBiEntities } from './RetailEodTransactionSalesTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailEodTransactionSalesTransBiEntities} entity.
 */
export class RetailEodTransactionSalesTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEodTransactionSalesTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEodTransactionSalesTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEodTransactionSalesTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailEodTransactionSalesTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailEodTransactionSalesTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailEodTransactionSalesTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEodTransactionSalesTransBiEntities`.
   */
  create(
    entity: RetailEodTransactionSalesTransBiEntities<T>
  ): CreateRequestBuilder<RetailEodTransactionSalesTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailEodTransactionSalesTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailEodTransactionSalesTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEodTransactionSalesTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionSalesTransBiEntities.statementId}.
   * @param retailTransactionSalesTrans Key property. See {@link RetailEodTransactionSalesTransBiEntities.retailTransactionSalesTrans}.
   * @returns A request builder for creating requests to retrieve one `RetailEodTransactionSalesTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statementId: DeserializedType<T, 'Edm.String'>,
    retailTransactionSalesTrans: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<RetailEodTransactionSalesTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailEodTransactionSalesTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StatementId: statementId,
      RetailTransactionSalesTrans: retailTransactionSalesTrans
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEodTransactionSalesTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEodTransactionSalesTransBiEntities`.
   */
  update(
    entity: RetailEodTransactionSalesTransBiEntities<T>
  ): UpdateRequestBuilder<RetailEodTransactionSalesTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailEodTransactionSalesTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionSalesTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailEodTransactionSalesTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionSalesTransBiEntities.statementId}.
   * @param retailTransactionSalesTrans Key property. See {@link RetailEodTransactionSalesTransBiEntities.retailTransactionSalesTrans}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionSalesTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    statementId: string,
    retailTransactionSalesTrans: BigNumber
  ): DeleteRequestBuilder<RetailEodTransactionSalesTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionSalesTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionSalesTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEodTransactionSalesTransBiEntities<T>
  ): DeleteRequestBuilder<RetailEodTransactionSalesTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    statementId?: string,
    retailTransactionSalesTrans?: BigNumber
  ): DeleteRequestBuilder<RetailEodTransactionSalesTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailEodTransactionSalesTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailEodTransactionSalesTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StatementId: statementId!,
            RetailTransactionSalesTrans: retailTransactionSalesTrans!
          }
    );
  }
}
