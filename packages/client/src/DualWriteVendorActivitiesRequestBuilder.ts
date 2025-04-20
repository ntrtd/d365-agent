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
import { DualWriteVendorActivities } from './DualWriteVendorActivities';

/**
 * Request builder class for operations supported on the {@link DualWriteVendorActivities} entity.
 */
export class DualWriteVendorActivitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteVendorActivities<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteVendorActivities` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteVendorActivities` entities.
   */
  getAll(): GetAllRequestBuilder<DualWriteVendorActivities<T>, T> {
    return new GetAllRequestBuilder<DualWriteVendorActivities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DualWriteVendorActivities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteVendorActivities`.
   */
  create(
    entity: DualWriteVendorActivities<T>
  ): CreateRequestBuilder<DualWriteVendorActivities<T>, T> {
    return new CreateRequestBuilder<DualWriteVendorActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWriteVendorActivities` entity based on its keys.
   * @param dataAreaId Key property. See {@link DualWriteVendorActivities.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWriteVendorActivities.activityNumber}.
   * @param accountNum Key property. See {@link DualWriteVendorActivities.accountNum}.
   * @returns A request builder for creating requests to retrieve one `DualWriteVendorActivities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    activityNumber: DeserializedType<T, 'Edm.String'>,
    accountNum: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DualWriteVendorActivities<T>, T> {
    return new GetByKeyRequestBuilder<DualWriteVendorActivities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ActivityNumber: activityNumber,
        AccountNum: accountNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteVendorActivities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteVendorActivities`.
   */
  update(
    entity: DualWriteVendorActivities<T>
  ): UpdateRequestBuilder<DualWriteVendorActivities<T>, T> {
    return new UpdateRequestBuilder<DualWriteVendorActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteVendorActivities`.
   * @param dataAreaId Key property. See {@link DualWriteVendorActivities.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWriteVendorActivities.activityNumber}.
   * @param accountNum Key property. See {@link DualWriteVendorActivities.accountNum}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteVendorActivities`.
   */
  delete(
    dataAreaId: string,
    activityNumber: string,
    accountNum: string
  ): DeleteRequestBuilder<DualWriteVendorActivities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteVendorActivities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteVendorActivities` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteVendorActivities<T>
  ): DeleteRequestBuilder<DualWriteVendorActivities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    activityNumber?: string,
    accountNum?: string
  ): DeleteRequestBuilder<DualWriteVendorActivities<T>, T> {
    return new DeleteRequestBuilder<DualWriteVendorActivities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DualWriteVendorActivities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ActivityNumber: activityNumber!,
            AccountNum: accountNum!
          }
    );
  }
}
