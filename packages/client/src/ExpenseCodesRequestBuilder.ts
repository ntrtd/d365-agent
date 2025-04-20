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
import { ExpenseCodes } from './ExpenseCodes';

/**
 * Request builder class for operations supported on the {@link ExpenseCodes} entity.
 */
export class ExpenseCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseCodes<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseCodes` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseCodes` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseCodes<T>, T> {
    return new GetAllRequestBuilder<ExpenseCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpenseCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseCodes`.
   */
  create(entity: ExpenseCodes<T>): CreateRequestBuilder<ExpenseCodes<T>, T> {
    return new CreateRequestBuilder<ExpenseCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ExpenseCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpenseCodes.dataAreaId}.
   * @param expenseCode Key property. See {@link ExpenseCodes.expenseCode}.
   * @returns A request builder for creating requests to retrieve one `ExpenseCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    expenseCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseCodes<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ExpenseCode: expenseCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseCodes`.
   */
  update(entity: ExpenseCodes<T>): UpdateRequestBuilder<ExpenseCodes<T>, T> {
    return new UpdateRequestBuilder<ExpenseCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseCodes`.
   * @param dataAreaId Key property. See {@link ExpenseCodes.dataAreaId}.
   * @param expenseCode Key property. See {@link ExpenseCodes.expenseCode}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseCodes`.
   */
  delete(
    dataAreaId: string,
    expenseCode: string
  ): DeleteRequestBuilder<ExpenseCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseCodes` by taking the entity as a parameter.
   */
  delete(entity: ExpenseCodes<T>): DeleteRequestBuilder<ExpenseCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    expenseCode?: string
  ): DeleteRequestBuilder<ExpenseCodes<T>, T> {
    return new DeleteRequestBuilder<ExpenseCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpenseCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExpenseCode: expenseCode!
          }
    );
  }
}
