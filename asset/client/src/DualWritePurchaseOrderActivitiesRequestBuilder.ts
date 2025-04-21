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
import { DualWritePurchaseOrderActivities } from './DualWritePurchaseOrderActivities';

/**
 * Request builder class for operations supported on the {@link DualWritePurchaseOrderActivities} entity.
 */
export class DualWritePurchaseOrderActivitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWritePurchaseOrderActivities<T>, T> {
  /**
   * Returns a request builder for querying all `DualWritePurchaseOrderActivities` entities.
   * @returns A request builder for creating requests to retrieve all `DualWritePurchaseOrderActivities` entities.
   */
  getAll(): GetAllRequestBuilder<DualWritePurchaseOrderActivities<T>, T> {
    return new GetAllRequestBuilder<DualWritePurchaseOrderActivities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DualWritePurchaseOrderActivities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWritePurchaseOrderActivities`.
   */
  create(
    entity: DualWritePurchaseOrderActivities<T>
  ): CreateRequestBuilder<DualWritePurchaseOrderActivities<T>, T> {
    return new CreateRequestBuilder<DualWritePurchaseOrderActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWritePurchaseOrderActivities` entity based on its keys.
   * @param dataAreaId Key property. See {@link DualWritePurchaseOrderActivities.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWritePurchaseOrderActivities.activityNumber}.
   * @param purchaseOrderNumber Key property. See {@link DualWritePurchaseOrderActivities.purchaseOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `DualWritePurchaseOrderActivities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    activityNumber: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DualWritePurchaseOrderActivities<T>, T> {
    return new GetByKeyRequestBuilder<DualWritePurchaseOrderActivities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ActivityNumber: activityNumber,
        PurchaseOrderNumber: purchaseOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWritePurchaseOrderActivities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWritePurchaseOrderActivities`.
   */
  update(
    entity: DualWritePurchaseOrderActivities<T>
  ): UpdateRequestBuilder<DualWritePurchaseOrderActivities<T>, T> {
    return new UpdateRequestBuilder<DualWritePurchaseOrderActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWritePurchaseOrderActivities`.
   * @param dataAreaId Key property. See {@link DualWritePurchaseOrderActivities.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWritePurchaseOrderActivities.activityNumber}.
   * @param purchaseOrderNumber Key property. See {@link DualWritePurchaseOrderActivities.purchaseOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DualWritePurchaseOrderActivities`.
   */
  delete(
    dataAreaId: string,
    activityNumber: string,
    purchaseOrderNumber: string
  ): DeleteRequestBuilder<DualWritePurchaseOrderActivities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWritePurchaseOrderActivities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWritePurchaseOrderActivities` by taking the entity as a parameter.
   */
  delete(
    entity: DualWritePurchaseOrderActivities<T>
  ): DeleteRequestBuilder<DualWritePurchaseOrderActivities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    activityNumber?: string,
    purchaseOrderNumber?: string
  ): DeleteRequestBuilder<DualWritePurchaseOrderActivities<T>, T> {
    return new DeleteRequestBuilder<DualWritePurchaseOrderActivities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DualWritePurchaseOrderActivities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ActivityNumber: activityNumber!,
            PurchaseOrderNumber: purchaseOrderNumber!
          }
    );
  }
}
