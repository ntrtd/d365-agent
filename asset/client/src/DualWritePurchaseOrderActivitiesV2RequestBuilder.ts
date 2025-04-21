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
import { DualWritePurchaseOrderActivitiesV2 } from './DualWritePurchaseOrderActivitiesV2';

/**
 * Request builder class for operations supported on the {@link DualWritePurchaseOrderActivitiesV2} entity.
 */
export class DualWritePurchaseOrderActivitiesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWritePurchaseOrderActivitiesV2<T>, T> {
  /**
   * Returns a request builder for querying all `DualWritePurchaseOrderActivitiesV2` entities.
   * @returns A request builder for creating requests to retrieve all `DualWritePurchaseOrderActivitiesV2` entities.
   */
  getAll(): GetAllRequestBuilder<DualWritePurchaseOrderActivitiesV2<T>, T> {
    return new GetAllRequestBuilder<DualWritePurchaseOrderActivitiesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DualWritePurchaseOrderActivitiesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWritePurchaseOrderActivitiesV2`.
   */
  create(
    entity: DualWritePurchaseOrderActivitiesV2<T>
  ): CreateRequestBuilder<DualWritePurchaseOrderActivitiesV2<T>, T> {
    return new CreateRequestBuilder<DualWritePurchaseOrderActivitiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWritePurchaseOrderActivitiesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link DualWritePurchaseOrderActivitiesV2.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWritePurchaseOrderActivitiesV2.activityNumber}.
   * @param purchaseOrderNumber Key property. See {@link DualWritePurchaseOrderActivitiesV2.purchaseOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `DualWritePurchaseOrderActivitiesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    activityNumber: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DualWritePurchaseOrderActivitiesV2<T>, T> {
    return new GetByKeyRequestBuilder<DualWritePurchaseOrderActivitiesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ActivityNumber: activityNumber,
        PurchaseOrderNumber: purchaseOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWritePurchaseOrderActivitiesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWritePurchaseOrderActivitiesV2`.
   */
  update(
    entity: DualWritePurchaseOrderActivitiesV2<T>
  ): UpdateRequestBuilder<DualWritePurchaseOrderActivitiesV2<T>, T> {
    return new UpdateRequestBuilder<DualWritePurchaseOrderActivitiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWritePurchaseOrderActivitiesV2`.
   * @param dataAreaId Key property. See {@link DualWritePurchaseOrderActivitiesV2.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWritePurchaseOrderActivitiesV2.activityNumber}.
   * @param purchaseOrderNumber Key property. See {@link DualWritePurchaseOrderActivitiesV2.purchaseOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DualWritePurchaseOrderActivitiesV2`.
   */
  delete(
    dataAreaId: string,
    activityNumber: string,
    purchaseOrderNumber: string
  ): DeleteRequestBuilder<DualWritePurchaseOrderActivitiesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWritePurchaseOrderActivitiesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWritePurchaseOrderActivitiesV2` by taking the entity as a parameter.
   */
  delete(
    entity: DualWritePurchaseOrderActivitiesV2<T>
  ): DeleteRequestBuilder<DualWritePurchaseOrderActivitiesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    activityNumber?: string,
    purchaseOrderNumber?: string
  ): DeleteRequestBuilder<DualWritePurchaseOrderActivitiesV2<T>, T> {
    return new DeleteRequestBuilder<DualWritePurchaseOrderActivitiesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DualWritePurchaseOrderActivitiesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ActivityNumber: activityNumber!,
            PurchaseOrderNumber: purchaseOrderNumber!
          }
    );
  }
}
