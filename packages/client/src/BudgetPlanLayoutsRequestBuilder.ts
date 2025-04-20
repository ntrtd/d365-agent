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
import { BudgetPlanLayouts } from './BudgetPlanLayouts';

/**
 * Request builder class for operations supported on the {@link BudgetPlanLayouts} entity.
 */
export class BudgetPlanLayoutsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanLayouts<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanLayouts` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanLayouts` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanLayouts<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanLayouts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetPlanLayouts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanLayouts`.
   */
  create(
    entity: BudgetPlanLayouts<T>
  ): CreateRequestBuilder<BudgetPlanLayouts<T>, T> {
    return new CreateRequestBuilder<BudgetPlanLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanLayouts` entity based on its keys.
   * @param layoutName Key property. See {@link BudgetPlanLayouts.layoutName}.
   * @param elementDefinitionName Key property. See {@link BudgetPlanLayouts.elementDefinitionName}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanLayouts` entity based on its keys.
   */
  getByKey(
    layoutName: DeserializedType<T, 'Edm.String'>,
    elementDefinitionName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanLayouts<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanLayouts<T>, T>(this.entityApi, {
      LayoutName: layoutName,
      ElementDefinitionName: elementDefinitionName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanLayouts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanLayouts`.
   */
  update(
    entity: BudgetPlanLayouts<T>
  ): UpdateRequestBuilder<BudgetPlanLayouts<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanLayouts`.
   * @param layoutName Key property. See {@link BudgetPlanLayouts.layoutName}.
   * @param elementDefinitionName Key property. See {@link BudgetPlanLayouts.elementDefinitionName}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanLayouts`.
   */
  delete(
    layoutName: string,
    elementDefinitionName: string
  ): DeleteRequestBuilder<BudgetPlanLayouts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanLayouts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanLayouts` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanLayouts<T>
  ): DeleteRequestBuilder<BudgetPlanLayouts<T>, T>;
  delete(
    layoutNameOrEntity: any,
    elementDefinitionName?: string
  ): DeleteRequestBuilder<BudgetPlanLayouts<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanLayouts<T>, T>(
      this.entityApi,
      layoutNameOrEntity instanceof BudgetPlanLayouts
        ? layoutNameOrEntity
        : {
            LayoutName: layoutNameOrEntity!,
            ElementDefinitionName: elementDefinitionName!
          }
    );
  }
}
