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
import { ExpenseRates } from './ExpenseRates';

/**
 * Request builder class for operations supported on the {@link ExpenseRates} entity.
 */
export class ExpenseRatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseRates<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseRates` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseRates` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseRates<T>, T> {
    return new GetAllRequestBuilder<ExpenseRates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpenseRates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseRates`.
   */
  create(entity: ExpenseRates<T>): CreateRequestBuilder<ExpenseRates<T>, T> {
    return new CreateRequestBuilder<ExpenseRates<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ExpenseRates` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpenseRates.dataAreaId}.
   * @param expense Key property. See {@link ExpenseRates.expense}.
   * @returns A request builder for creating requests to retrieve one `ExpenseRates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    expense: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseRates<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseRates<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Expense: expense
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseRates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseRates`.
   */
  update(entity: ExpenseRates<T>): UpdateRequestBuilder<ExpenseRates<T>, T> {
    return new UpdateRequestBuilder<ExpenseRates<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseRates`.
   * @param dataAreaId Key property. See {@link ExpenseRates.dataAreaId}.
   * @param expense Key property. See {@link ExpenseRates.expense}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseRates`.
   */
  delete(
    dataAreaId: string,
    expense: string
  ): DeleteRequestBuilder<ExpenseRates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseRates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseRates` by taking the entity as a parameter.
   */
  delete(entity: ExpenseRates<T>): DeleteRequestBuilder<ExpenseRates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    expense?: string
  ): DeleteRequestBuilder<ExpenseRates<T>, T> {
    return new DeleteRequestBuilder<ExpenseRates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpenseRates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Expense: expense!
          }
    );
  }
}
