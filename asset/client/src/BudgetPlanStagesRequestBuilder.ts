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
import { BudgetPlanStages } from './BudgetPlanStages';

/**
 * Request builder class for operations supported on the {@link BudgetPlanStages} entity.
 */
export class BudgetPlanStagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanStages<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanStages` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanStages` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanStages<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanStages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetPlanStages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanStages`.
   */
  create(
    entity: BudgetPlanStages<T>
  ): CreateRequestBuilder<BudgetPlanStages<T>, T> {
    return new CreateRequestBuilder<BudgetPlanStages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanStages` entity based on its keys.
   * @param name Key property. See {@link BudgetPlanStages.name}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanStages` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanStages<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanStages<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanStages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanStages`.
   */
  update(
    entity: BudgetPlanStages<T>
  ): UpdateRequestBuilder<BudgetPlanStages<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanStages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanStages`.
   * @param name Key property. See {@link BudgetPlanStages.name}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanStages`.
   */
  delete(name: string): DeleteRequestBuilder<BudgetPlanStages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanStages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanStages` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanStages<T>
  ): DeleteRequestBuilder<BudgetPlanStages<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<BudgetPlanStages<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanStages<T>, T>(
      this.entityApi,
      nameOrEntity instanceof BudgetPlanStages
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
