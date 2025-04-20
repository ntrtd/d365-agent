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
import { RetailEodTransactionIncomeExpenseTransBiEntities } from './RetailEodTransactionIncomeExpenseTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailEodTransactionIncomeExpenseTransBiEntities} entity.
 */
export class RetailEodTransactionIncomeExpenseTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailEodTransactionIncomeExpenseTransBiEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailEodTransactionIncomeExpenseTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEodTransactionIncomeExpenseTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailEodTransactionIncomeExpenseTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailEodTransactionIncomeExpenseTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailEodTransactionIncomeExpenseTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEodTransactionIncomeExpenseTransBiEntities`.
   */
  create(
    entity: RetailEodTransactionIncomeExpenseTransBiEntities<T>
  ): CreateRequestBuilder<
    RetailEodTransactionIncomeExpenseTransBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailEodTransactionIncomeExpenseTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailEodTransactionIncomeExpenseTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEodTransactionIncomeExpenseTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionIncomeExpenseTransBiEntities.statementId}.
   * @returns A request builder for creating requests to retrieve one `RetailEodTransactionIncomeExpenseTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    RetailEodTransactionIncomeExpenseTransBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailEodTransactionIncomeExpenseTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StatementId: statementId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEodTransactionIncomeExpenseTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEodTransactionIncomeExpenseTransBiEntities`.
   */
  update(
    entity: RetailEodTransactionIncomeExpenseTransBiEntities<T>
  ): UpdateRequestBuilder<
    RetailEodTransactionIncomeExpenseTransBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailEodTransactionIncomeExpenseTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionIncomeExpenseTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailEodTransactionIncomeExpenseTransBiEntities.dataAreaId}.
   * @param statementId Key property. See {@link RetailEodTransactionIncomeExpenseTransBiEntities.statementId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionIncomeExpenseTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    statementId: string
  ): DeleteRequestBuilder<
    RetailEodTransactionIncomeExpenseTransBiEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailEodTransactionIncomeExpenseTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEodTransactionIncomeExpenseTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEodTransactionIncomeExpenseTransBiEntities<T>
  ): DeleteRequestBuilder<
    RetailEodTransactionIncomeExpenseTransBiEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    statementId?: string
  ): DeleteRequestBuilder<
    RetailEodTransactionIncomeExpenseTransBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailEodTransactionIncomeExpenseTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailEodTransactionIncomeExpenseTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StatementId: statementId!
          }
    );
  }
}
