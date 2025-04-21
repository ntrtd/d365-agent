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
import { ExpenseCashAdvances } from './ExpenseCashAdvances';

/**
 * Request builder class for operations supported on the {@link ExpenseCashAdvances} entity.
 */
export class ExpenseCashAdvancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseCashAdvances<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseCashAdvances` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseCashAdvances` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseCashAdvances<T>, T> {
    return new GetAllRequestBuilder<ExpenseCashAdvances<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpenseCashAdvances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseCashAdvances`.
   */
  create(
    entity: ExpenseCashAdvances<T>
  ): CreateRequestBuilder<ExpenseCashAdvances<T>, T> {
    return new CreateRequestBuilder<ExpenseCashAdvances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpenseCashAdvances` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpenseCashAdvances.dataAreaId}.
   * @param cashAdvanceNumber Key property. See {@link ExpenseCashAdvances.cashAdvanceNumber}.
   * @returns A request builder for creating requests to retrieve one `ExpenseCashAdvances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cashAdvanceNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseCashAdvances<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseCashAdvances<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CashAdvanceNumber: cashAdvanceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseCashAdvances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseCashAdvances`.
   */
  update(
    entity: ExpenseCashAdvances<T>
  ): UpdateRequestBuilder<ExpenseCashAdvances<T>, T> {
    return new UpdateRequestBuilder<ExpenseCashAdvances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseCashAdvances`.
   * @param dataAreaId Key property. See {@link ExpenseCashAdvances.dataAreaId}.
   * @param cashAdvanceNumber Key property. See {@link ExpenseCashAdvances.cashAdvanceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseCashAdvances`.
   */
  delete(
    dataAreaId: string,
    cashAdvanceNumber: string
  ): DeleteRequestBuilder<ExpenseCashAdvances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseCashAdvances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseCashAdvances` by taking the entity as a parameter.
   */
  delete(
    entity: ExpenseCashAdvances<T>
  ): DeleteRequestBuilder<ExpenseCashAdvances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cashAdvanceNumber?: string
  ): DeleteRequestBuilder<ExpenseCashAdvances<T>, T> {
    return new DeleteRequestBuilder<ExpenseCashAdvances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpenseCashAdvances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CashAdvanceNumber: cashAdvanceNumber!
          }
    );
  }
}
