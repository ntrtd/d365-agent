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
import { BudgetPlanProposedAssets } from './BudgetPlanProposedAssets';

/**
 * Request builder class for operations supported on the {@link BudgetPlanProposedAssets} entity.
 */
export class BudgetPlanProposedAssetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanProposedAssets<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanProposedAssets` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanProposedAssets` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanProposedAssets<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanProposedAssets<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetPlanProposedAssets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanProposedAssets`.
   */
  create(
    entity: BudgetPlanProposedAssets<T>
  ): CreateRequestBuilder<BudgetPlanProposedAssets<T>, T> {
    return new CreateRequestBuilder<BudgetPlanProposedAssets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanProposedAssets` entity based on its keys.
   * @param name Key property. See {@link BudgetPlanProposedAssets.name}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanProposedAssets` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanProposedAssets<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanProposedAssets<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanProposedAssets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanProposedAssets`.
   */
  update(
    entity: BudgetPlanProposedAssets<T>
  ): UpdateRequestBuilder<BudgetPlanProposedAssets<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanProposedAssets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanProposedAssets`.
   * @param name Key property. See {@link BudgetPlanProposedAssets.name}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanProposedAssets`.
   */
  delete(name: string): DeleteRequestBuilder<BudgetPlanProposedAssets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanProposedAssets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanProposedAssets` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanProposedAssets<T>
  ): DeleteRequestBuilder<BudgetPlanProposedAssets<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<BudgetPlanProposedAssets<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanProposedAssets<T>, T>(
      this.entityApi,
      nameOrEntity instanceof BudgetPlanProposedAssets
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
