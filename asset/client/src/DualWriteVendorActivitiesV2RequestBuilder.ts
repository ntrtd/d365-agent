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
import { DualWriteVendorActivitiesV2 } from './DualWriteVendorActivitiesV2';

/**
 * Request builder class for operations supported on the {@link DualWriteVendorActivitiesV2} entity.
 */
export class DualWriteVendorActivitiesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteVendorActivitiesV2<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteVendorActivitiesV2` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteVendorActivitiesV2` entities.
   */
  getAll(): GetAllRequestBuilder<DualWriteVendorActivitiesV2<T>, T> {
    return new GetAllRequestBuilder<DualWriteVendorActivitiesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DualWriteVendorActivitiesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteVendorActivitiesV2`.
   */
  create(
    entity: DualWriteVendorActivitiesV2<T>
  ): CreateRequestBuilder<DualWriteVendorActivitiesV2<T>, T> {
    return new CreateRequestBuilder<DualWriteVendorActivitiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWriteVendorActivitiesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link DualWriteVendorActivitiesV2.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWriteVendorActivitiesV2.activityNumber}.
   * @param accountNum Key property. See {@link DualWriteVendorActivitiesV2.accountNum}.
   * @returns A request builder for creating requests to retrieve one `DualWriteVendorActivitiesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    activityNumber: DeserializedType<T, 'Edm.String'>,
    accountNum: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DualWriteVendorActivitiesV2<T>, T> {
    return new GetByKeyRequestBuilder<DualWriteVendorActivitiesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ActivityNumber: activityNumber,
        AccountNum: accountNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteVendorActivitiesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteVendorActivitiesV2`.
   */
  update(
    entity: DualWriteVendorActivitiesV2<T>
  ): UpdateRequestBuilder<DualWriteVendorActivitiesV2<T>, T> {
    return new UpdateRequestBuilder<DualWriteVendorActivitiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteVendorActivitiesV2`.
   * @param dataAreaId Key property. See {@link DualWriteVendorActivitiesV2.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWriteVendorActivitiesV2.activityNumber}.
   * @param accountNum Key property. See {@link DualWriteVendorActivitiesV2.accountNum}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteVendorActivitiesV2`.
   */
  delete(
    dataAreaId: string,
    activityNumber: string,
    accountNum: string
  ): DeleteRequestBuilder<DualWriteVendorActivitiesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteVendorActivitiesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteVendorActivitiesV2` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteVendorActivitiesV2<T>
  ): DeleteRequestBuilder<DualWriteVendorActivitiesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    activityNumber?: string,
    accountNum?: string
  ): DeleteRequestBuilder<DualWriteVendorActivitiesV2<T>, T> {
    return new DeleteRequestBuilder<DualWriteVendorActivitiesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DualWriteVendorActivitiesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ActivityNumber: activityNumber!,
            AccountNum: accountNum!
          }
    );
  }
}
