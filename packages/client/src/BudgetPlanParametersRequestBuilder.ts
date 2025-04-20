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
import { BudgetPlanParameters } from './BudgetPlanParameters';

/**
 * Request builder class for operations supported on the {@link BudgetPlanParameters} entity.
 */
export class BudgetPlanParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanParameters<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanParameters` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanParameters` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanParameters<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetPlanParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanParameters`.
   */
  create(
    entity: BudgetPlanParameters<T>
  ): CreateRequestBuilder<BudgetPlanParameters<T>, T> {
    return new CreateRequestBuilder<BudgetPlanParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetPlanParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanParameters<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanParameters<T>, T>(
      this.entityApi,
      { dataAreaId: dataAreaId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanParameters`.
   */
  update(
    entity: BudgetPlanParameters<T>
  ): UpdateRequestBuilder<BudgetPlanParameters<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanParameters`.
   * @param dataAreaId Key property. See {@link BudgetPlanParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<BudgetPlanParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanParameters` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanParameters<T>
  ): DeleteRequestBuilder<BudgetPlanParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<BudgetPlanParameters<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetPlanParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
