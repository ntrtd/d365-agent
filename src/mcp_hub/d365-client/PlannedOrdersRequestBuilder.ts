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
import { PlannedOrders } from './PlannedOrders';

/**
 * Request builder class for operations supported on the {@link PlannedOrders} entity.
 */
export class PlannedOrdersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PlannedOrders<T>, T> {
  /**
   * Returns a request builder for querying all `PlannedOrders` entities.
   * @returns A request builder for creating requests to retrieve all `PlannedOrders` entities.
   */
  getAll(): GetAllRequestBuilder<PlannedOrders<T>, T> {
    return new GetAllRequestBuilder<PlannedOrders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PlannedOrders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PlannedOrders`.
   */
  create(entity: PlannedOrders<T>): CreateRequestBuilder<PlannedOrders<T>, T> {
    return new CreateRequestBuilder<PlannedOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PlannedOrders` entity based on its keys.
   * @param dataAreaId Key property. See {@link PlannedOrders.dataAreaId}.
   * @param requirementPlanId Key property. See {@link PlannedOrders.requirementPlanId}.
   * @param plannedOrderNumber Key property. See {@link PlannedOrders.plannedOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `PlannedOrders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requirementPlanId: DeserializedType<T, 'Edm.String'>,
    plannedOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PlannedOrders<T>, T> {
    return new GetByKeyRequestBuilder<PlannedOrders<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RequirementPlanId: requirementPlanId,
      PlannedOrderNumber: plannedOrderNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PlannedOrders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PlannedOrders`.
   */
  update(entity: PlannedOrders<T>): UpdateRequestBuilder<PlannedOrders<T>, T> {
    return new UpdateRequestBuilder<PlannedOrders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PlannedOrders`.
   * @param dataAreaId Key property. See {@link PlannedOrders.dataAreaId}.
   * @param requirementPlanId Key property. See {@link PlannedOrders.requirementPlanId}.
   * @param plannedOrderNumber Key property. See {@link PlannedOrders.plannedOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PlannedOrders`.
   */
  delete(
    dataAreaId: string,
    requirementPlanId: string,
    plannedOrderNumber: string
  ): DeleteRequestBuilder<PlannedOrders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PlannedOrders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PlannedOrders` by taking the entity as a parameter.
   */
  delete(entity: PlannedOrders<T>): DeleteRequestBuilder<PlannedOrders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requirementPlanId?: string,
    plannedOrderNumber?: string
  ): DeleteRequestBuilder<PlannedOrders<T>, T> {
    return new DeleteRequestBuilder<PlannedOrders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PlannedOrders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequirementPlanId: requirementPlanId!,
            PlannedOrderNumber: plannedOrderNumber!
          }
    );
  }
}
