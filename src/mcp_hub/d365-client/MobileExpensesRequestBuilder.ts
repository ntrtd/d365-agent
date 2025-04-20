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
import { MobileExpenses } from './MobileExpenses';

/**
 * Request builder class for operations supported on the {@link MobileExpenses} entity.
 */
export class MobileExpensesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MobileExpenses<T>, T> {
  /**
   * Returns a request builder for querying all `MobileExpenses` entities.
   * @returns A request builder for creating requests to retrieve all `MobileExpenses` entities.
   */
  getAll(): GetAllRequestBuilder<MobileExpenses<T>, T> {
    return new GetAllRequestBuilder<MobileExpenses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MobileExpenses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MobileExpenses`.
   */
  create(
    entity: MobileExpenses<T>
  ): CreateRequestBuilder<MobileExpenses<T>, T> {
    return new CreateRequestBuilder<MobileExpenses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MobileExpenses` entity based on its keys.
   * @param dataAreaId Key property. See {@link MobileExpenses.dataAreaId}.
   * @param expenseTransactionNumber Key property. See {@link MobileExpenses.expenseTransactionNumber}.
   * @returns A request builder for creating requests to retrieve one `MobileExpenses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    expenseTransactionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MobileExpenses<T>, T> {
    return new GetByKeyRequestBuilder<MobileExpenses<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ExpenseTransactionNumber: expenseTransactionNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MobileExpenses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MobileExpenses`.
   */
  update(
    entity: MobileExpenses<T>
  ): UpdateRequestBuilder<MobileExpenses<T>, T> {
    return new UpdateRequestBuilder<MobileExpenses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MobileExpenses`.
   * @param dataAreaId Key property. See {@link MobileExpenses.dataAreaId}.
   * @param expenseTransactionNumber Key property. See {@link MobileExpenses.expenseTransactionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `MobileExpenses`.
   */
  delete(
    dataAreaId: string,
    expenseTransactionNumber: string
  ): DeleteRequestBuilder<MobileExpenses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MobileExpenses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MobileExpenses` by taking the entity as a parameter.
   */
  delete(entity: MobileExpenses<T>): DeleteRequestBuilder<MobileExpenses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    expenseTransactionNumber?: string
  ): DeleteRequestBuilder<MobileExpenses<T>, T> {
    return new DeleteRequestBuilder<MobileExpenses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MobileExpenses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExpenseTransactionNumber: expenseTransactionNumber!
          }
    );
  }
}
