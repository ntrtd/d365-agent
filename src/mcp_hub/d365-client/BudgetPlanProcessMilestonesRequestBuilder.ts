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
import { BudgetPlanProcessMilestones } from './BudgetPlanProcessMilestones';

/**
 * Request builder class for operations supported on the {@link BudgetPlanProcessMilestones} entity.
 */
export class BudgetPlanProcessMilestonesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanProcessMilestones<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanProcessMilestones` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanProcessMilestones` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanProcessMilestones<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanProcessMilestones<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetPlanProcessMilestones` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanProcessMilestones`.
   */
  create(
    entity: BudgetPlanProcessMilestones<T>
  ): CreateRequestBuilder<BudgetPlanProcessMilestones<T>, T> {
    return new CreateRequestBuilder<BudgetPlanProcessMilestones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanProcessMilestones` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetPlanProcessMilestones.dataAreaId}.
   * @param name Key property. See {@link BudgetPlanProcessMilestones.name}.
   * @param process Key property. See {@link BudgetPlanProcessMilestones.process}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanProcessMilestones` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    process: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanProcessMilestones<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanProcessMilestones<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name,
        Process: process
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanProcessMilestones`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanProcessMilestones`.
   */
  update(
    entity: BudgetPlanProcessMilestones<T>
  ): UpdateRequestBuilder<BudgetPlanProcessMilestones<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanProcessMilestones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanProcessMilestones`.
   * @param dataAreaId Key property. See {@link BudgetPlanProcessMilestones.dataAreaId}.
   * @param name Key property. See {@link BudgetPlanProcessMilestones.name}.
   * @param process Key property. See {@link BudgetPlanProcessMilestones.process}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanProcessMilestones`.
   */
  delete(
    dataAreaId: string,
    name: string,
    process: string
  ): DeleteRequestBuilder<BudgetPlanProcessMilestones<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanProcessMilestones`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanProcessMilestones` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanProcessMilestones<T>
  ): DeleteRequestBuilder<BudgetPlanProcessMilestones<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string,
    process?: string
  ): DeleteRequestBuilder<BudgetPlanProcessMilestones<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanProcessMilestones<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetPlanProcessMilestones
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!,
            Process: process!
          }
    );
  }
}
