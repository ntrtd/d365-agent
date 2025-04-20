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
import { BudgetPlanProposedProjects } from './BudgetPlanProposedProjects';

/**
 * Request builder class for operations supported on the {@link BudgetPlanProposedProjects} entity.
 */
export class BudgetPlanProposedProjectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanProposedProjects<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanProposedProjects` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanProposedProjects` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanProposedProjects<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanProposedProjects<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetPlanProposedProjects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanProposedProjects`.
   */
  create(
    entity: BudgetPlanProposedProjects<T>
  ): CreateRequestBuilder<BudgetPlanProposedProjects<T>, T> {
    return new CreateRequestBuilder<BudgetPlanProposedProjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanProposedProjects` entity based on its keys.
   * @param name Key property. See {@link BudgetPlanProposedProjects.name}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanProposedProjects` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanProposedProjects<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanProposedProjects<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanProposedProjects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanProposedProjects`.
   */
  update(
    entity: BudgetPlanProposedProjects<T>
  ): UpdateRequestBuilder<BudgetPlanProposedProjects<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanProposedProjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanProposedProjects`.
   * @param name Key property. See {@link BudgetPlanProposedProjects.name}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanProposedProjects`.
   */
  delete(name: string): DeleteRequestBuilder<BudgetPlanProposedProjects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanProposedProjects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanProposedProjects` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanProposedProjects<T>
  ): DeleteRequestBuilder<BudgetPlanProposedProjects<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<BudgetPlanProposedProjects<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanProposedProjects<T>, T>(
      this.entityApi,
      nameOrEntity instanceof BudgetPlanProposedProjects
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
