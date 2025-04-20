/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ReqPlannedOrderBiEntities } from './ReqPlannedOrderBiEntities';

/**
 * Request builder class for operations supported on the {@link ReqPlannedOrderBiEntities} entity.
 */
export class ReqPlannedOrderBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReqPlannedOrderBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ReqPlannedOrderBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ReqPlannedOrderBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ReqPlannedOrderBiEntities<T>, T> {
    return new GetAllRequestBuilder<ReqPlannedOrderBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReqPlannedOrderBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReqPlannedOrderBiEntities`.
   */
  create(
    entity: ReqPlannedOrderBiEntities<T>
  ): CreateRequestBuilder<ReqPlannedOrderBiEntities<T>, T> {
    return new CreateRequestBuilder<ReqPlannedOrderBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReqPlannedOrderBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReqPlannedOrderBiEntities.dataAreaId}.
   * @param plannedOrderNumber Key property. See {@link ReqPlannedOrderBiEntities.plannedOrderNumber}.
   * @param planVersion Key property. See {@link ReqPlannedOrderBiEntities.planVersion}.
   * @returns A request builder for creating requests to retrieve one `ReqPlannedOrderBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    plannedOrderNumber: DeserializedType<T, 'Edm.String'>,
    planVersion: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ReqPlannedOrderBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<ReqPlannedOrderBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PlannedOrderNumber: plannedOrderNumber,
        PlanVersion: planVersion
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReqPlannedOrderBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReqPlannedOrderBiEntities`.
   */
  update(
    entity: ReqPlannedOrderBiEntities<T>
  ): UpdateRequestBuilder<ReqPlannedOrderBiEntities<T>, T> {
    return new UpdateRequestBuilder<ReqPlannedOrderBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReqPlannedOrderBiEntities`.
   * @param dataAreaId Key property. See {@link ReqPlannedOrderBiEntities.dataAreaId}.
   * @param plannedOrderNumber Key property. See {@link ReqPlannedOrderBiEntities.plannedOrderNumber}.
   * @param planVersion Key property. See {@link ReqPlannedOrderBiEntities.planVersion}.
   * @returns A request builder for creating requests that delete an entity of type `ReqPlannedOrderBiEntities`.
   */
  delete(
    dataAreaId: string,
    plannedOrderNumber: string,
    planVersion: BigNumber
  ): DeleteRequestBuilder<ReqPlannedOrderBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReqPlannedOrderBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReqPlannedOrderBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ReqPlannedOrderBiEntities<T>
  ): DeleteRequestBuilder<ReqPlannedOrderBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    plannedOrderNumber?: string,
    planVersion?: BigNumber
  ): DeleteRequestBuilder<ReqPlannedOrderBiEntities<T>, T> {
    return new DeleteRequestBuilder<ReqPlannedOrderBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReqPlannedOrderBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PlannedOrderNumber: plannedOrderNumber!,
            PlanVersion: planVersion!
          }
    );
  }
}
