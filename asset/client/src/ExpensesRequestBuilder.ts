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
import { Expenses } from './Expenses';

/**
 * Request builder class for operations supported on the {@link Expenses} entity.
 */
export class ExpensesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Expenses<T>, T> {
  /**
   * Returns a request builder for querying all `Expenses` entities.
   * @returns A request builder for creating requests to retrieve all `Expenses` entities.
   */
  getAll(): GetAllRequestBuilder<Expenses<T>, T> {
    return new GetAllRequestBuilder<Expenses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Expenses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Expenses`.
   */
  create(entity: Expenses<T>): CreateRequestBuilder<Expenses<T>, T> {
    return new CreateRequestBuilder<Expenses<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Expenses` entity based on its keys.
   * @param dataAreaId Key property. See {@link Expenses.dataAreaId}.
   * @param expenseTransactionNumber Key property. See {@link Expenses.expenseTransactionNumber}.
   * @returns A request builder for creating requests to retrieve one `Expenses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    expenseTransactionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Expenses<T>, T> {
    return new GetByKeyRequestBuilder<Expenses<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ExpenseTransactionNumber: expenseTransactionNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Expenses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Expenses`.
   */
  update(entity: Expenses<T>): UpdateRequestBuilder<Expenses<T>, T> {
    return new UpdateRequestBuilder<Expenses<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Expenses`.
   * @param dataAreaId Key property. See {@link Expenses.dataAreaId}.
   * @param expenseTransactionNumber Key property. See {@link Expenses.expenseTransactionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `Expenses`.
   */
  delete(
    dataAreaId: string,
    expenseTransactionNumber: string
  ): DeleteRequestBuilder<Expenses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Expenses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Expenses` by taking the entity as a parameter.
   */
  delete(entity: Expenses<T>): DeleteRequestBuilder<Expenses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    expenseTransactionNumber?: string
  ): DeleteRequestBuilder<Expenses<T>, T> {
    return new DeleteRequestBuilder<Expenses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Expenses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExpenseTransactionNumber: expenseTransactionNumber!
          }
    );
  }
}
