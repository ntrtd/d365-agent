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
import { MobileExpensesV2 } from './MobileExpensesV2';

/**
 * Request builder class for operations supported on the {@link MobileExpensesV2} entity.
 */
export class MobileExpensesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MobileExpensesV2<T>, T> {
  /**
   * Returns a request builder for querying all `MobileExpensesV2` entities.
   * @returns A request builder for creating requests to retrieve all `MobileExpensesV2` entities.
   */
  getAll(): GetAllRequestBuilder<MobileExpensesV2<T>, T> {
    return new GetAllRequestBuilder<MobileExpensesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MobileExpensesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MobileExpensesV2`.
   */
  create(
    entity: MobileExpensesV2<T>
  ): CreateRequestBuilder<MobileExpensesV2<T>, T> {
    return new CreateRequestBuilder<MobileExpensesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MobileExpensesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link MobileExpensesV2.dataAreaId}.
   * @param expenseTransactionNumber Key property. See {@link MobileExpensesV2.expenseTransactionNumber}.
   * @returns A request builder for creating requests to retrieve one `MobileExpensesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    expenseTransactionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MobileExpensesV2<T>, T> {
    return new GetByKeyRequestBuilder<MobileExpensesV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ExpenseTransactionNumber: expenseTransactionNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MobileExpensesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MobileExpensesV2`.
   */
  update(
    entity: MobileExpensesV2<T>
  ): UpdateRequestBuilder<MobileExpensesV2<T>, T> {
    return new UpdateRequestBuilder<MobileExpensesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MobileExpensesV2`.
   * @param dataAreaId Key property. See {@link MobileExpensesV2.dataAreaId}.
   * @param expenseTransactionNumber Key property. See {@link MobileExpensesV2.expenseTransactionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `MobileExpensesV2`.
   */
  delete(
    dataAreaId: string,
    expenseTransactionNumber: string
  ): DeleteRequestBuilder<MobileExpensesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MobileExpensesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MobileExpensesV2` by taking the entity as a parameter.
   */
  delete(
    entity: MobileExpensesV2<T>
  ): DeleteRequestBuilder<MobileExpensesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    expenseTransactionNumber?: string
  ): DeleteRequestBuilder<MobileExpensesV2<T>, T> {
    return new DeleteRequestBuilder<MobileExpensesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MobileExpensesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExpenseTransactionNumber: expenseTransactionNumber!
          }
    );
  }
}
