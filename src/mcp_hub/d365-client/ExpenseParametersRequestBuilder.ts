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
import { ExpenseParameters } from './ExpenseParameters';

/**
 * Request builder class for operations supported on the {@link ExpenseParameters} entity.
 */
export class ExpenseParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseParameters<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseParameters` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseParameters` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseParameters<T>, T> {
    return new GetAllRequestBuilder<ExpenseParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpenseParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseParameters`.
   */
  create(
    entity: ExpenseParameters<T>
  ): CreateRequestBuilder<ExpenseParameters<T>, T> {
    return new CreateRequestBuilder<ExpenseParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpenseParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpenseParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `ExpenseParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseParameters<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseParameters`.
   */
  update(
    entity: ExpenseParameters<T>
  ): UpdateRequestBuilder<ExpenseParameters<T>, T> {
    return new UpdateRequestBuilder<ExpenseParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseParameters`.
   * @param dataAreaId Key property. See {@link ExpenseParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<ExpenseParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseParameters` by taking the entity as a parameter.
   */
  delete(
    entity: ExpenseParameters<T>
  ): DeleteRequestBuilder<ExpenseParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<ExpenseParameters<T>, T> {
    return new DeleteRequestBuilder<ExpenseParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpenseParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
