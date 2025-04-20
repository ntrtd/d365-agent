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
import { LeaseExpenseTypes } from './LeaseExpenseTypes';

/**
 * Request builder class for operations supported on the {@link LeaseExpenseTypes} entity.
 */
export class LeaseExpenseTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseExpenseTypes<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseExpenseTypes` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseExpenseTypes` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseExpenseTypes<T>, T> {
    return new GetAllRequestBuilder<LeaseExpenseTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaseExpenseTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseExpenseTypes`.
   */
  create(
    entity: LeaseExpenseTypes<T>
  ): CreateRequestBuilder<LeaseExpenseTypes<T>, T> {
    return new CreateRequestBuilder<LeaseExpenseTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseExpenseTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseExpenseTypes.dataAreaId}.
   * @param expenseType Key property. See {@link LeaseExpenseTypes.expenseType}.
   * @returns A request builder for creating requests to retrieve one `LeaseExpenseTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    expenseType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaseExpenseTypes<T>, T> {
    return new GetByKeyRequestBuilder<LeaseExpenseTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ExpenseType: expenseType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseExpenseTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseExpenseTypes`.
   */
  update(
    entity: LeaseExpenseTypes<T>
  ): UpdateRequestBuilder<LeaseExpenseTypes<T>, T> {
    return new UpdateRequestBuilder<LeaseExpenseTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseExpenseTypes`.
   * @param dataAreaId Key property. See {@link LeaseExpenseTypes.dataAreaId}.
   * @param expenseType Key property. See {@link LeaseExpenseTypes.expenseType}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExpenseTypes`.
   */
  delete(
    dataAreaId: string,
    expenseType: string
  ): DeleteRequestBuilder<LeaseExpenseTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseExpenseTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExpenseTypes` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseExpenseTypes<T>
  ): DeleteRequestBuilder<LeaseExpenseTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    expenseType?: string
  ): DeleteRequestBuilder<LeaseExpenseTypes<T>, T> {
    return new DeleteRequestBuilder<LeaseExpenseTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseExpenseTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExpenseType: expenseType!
          }
    );
  }
}
