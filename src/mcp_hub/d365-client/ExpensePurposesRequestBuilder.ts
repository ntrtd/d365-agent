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
import { ExpensePurposes } from './ExpensePurposes';
import { TrvExpType } from './TrvExpType';

/**
 * Request builder class for operations supported on the {@link ExpensePurposes} entity.
 */
export class ExpensePurposesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpensePurposes<T>, T> {
  /**
   * Returns a request builder for querying all `ExpensePurposes` entities.
   * @returns A request builder for creating requests to retrieve all `ExpensePurposes` entities.
   */
  getAll(): GetAllRequestBuilder<ExpensePurposes<T>, T> {
    return new GetAllRequestBuilder<ExpensePurposes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpensePurposes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpensePurposes`.
   */
  create(
    entity: ExpensePurposes<T>
  ): CreateRequestBuilder<ExpensePurposes<T>, T> {
    return new CreateRequestBuilder<ExpensePurposes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpensePurposes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpensePurposes.dataAreaId}.
   * @param businessPurpose Key property. See {@link ExpensePurposes.businessPurpose}.
   * @param expenseType Key property. See {@link ExpensePurposes.expenseType}.
   * @returns A request builder for creating requests to retrieve one `ExpensePurposes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    businessPurpose: DeserializedType<T, 'Edm.String'>,
    expenseType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TrvExpType'
    >
  ): GetByKeyRequestBuilder<ExpensePurposes<T>, T> {
    return new GetByKeyRequestBuilder<ExpensePurposes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BusinessPurpose: businessPurpose,
      ExpenseType: expenseType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExpensePurposes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpensePurposes`.
   */
  update(
    entity: ExpensePurposes<T>
  ): UpdateRequestBuilder<ExpensePurposes<T>, T> {
    return new UpdateRequestBuilder<ExpensePurposes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpensePurposes`.
   * @param dataAreaId Key property. See {@link ExpensePurposes.dataAreaId}.
   * @param businessPurpose Key property. See {@link ExpensePurposes.businessPurpose}.
   * @param expenseType Key property. See {@link ExpensePurposes.expenseType}.
   * @returns A request builder for creating requests that delete an entity of type `ExpensePurposes`.
   */
  delete(
    dataAreaId: string,
    businessPurpose: string,
    expenseType: TrvExpType
  ): DeleteRequestBuilder<ExpensePurposes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpensePurposes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpensePurposes` by taking the entity as a parameter.
   */
  delete(
    entity: ExpensePurposes<T>
  ): DeleteRequestBuilder<ExpensePurposes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    businessPurpose?: string,
    expenseType?: TrvExpType
  ): DeleteRequestBuilder<ExpensePurposes<T>, T> {
    return new DeleteRequestBuilder<ExpensePurposes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpensePurposes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BusinessPurpose: businessPurpose!,
            ExpenseType: expenseType!
          }
    );
  }
}
