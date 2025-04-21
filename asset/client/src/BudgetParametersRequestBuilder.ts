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
import { BudgetParameters } from './BudgetParameters';

/**
 * Request builder class for operations supported on the {@link BudgetParameters} entity.
 */
export class BudgetParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetParameters<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetParameters` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetParameters` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetParameters<T>, T> {
    return new GetAllRequestBuilder<BudgetParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetParameters`.
   */
  create(
    entity: BudgetParameters<T>
  ): CreateRequestBuilder<BudgetParameters<T>, T> {
    return new CreateRequestBuilder<BudgetParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `BudgetParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetParameters<T>, T> {
    return new GetByKeyRequestBuilder<BudgetParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetParameters`.
   */
  update(
    entity: BudgetParameters<T>
  ): UpdateRequestBuilder<BudgetParameters<T>, T> {
    return new UpdateRequestBuilder<BudgetParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetParameters`.
   * @param dataAreaId Key property. See {@link BudgetParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<BudgetParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetParameters` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetParameters<T>
  ): DeleteRequestBuilder<BudgetParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<BudgetParameters<T>, T> {
    return new DeleteRequestBuilder<BudgetParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
