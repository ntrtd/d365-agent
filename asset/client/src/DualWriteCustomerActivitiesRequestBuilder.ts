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
import { DualWriteCustomerActivities } from './DualWriteCustomerActivities';

/**
 * Request builder class for operations supported on the {@link DualWriteCustomerActivities} entity.
 */
export class DualWriteCustomerActivitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteCustomerActivities<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteCustomerActivities` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteCustomerActivities` entities.
   */
  getAll(): GetAllRequestBuilder<DualWriteCustomerActivities<T>, T> {
    return new GetAllRequestBuilder<DualWriteCustomerActivities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DualWriteCustomerActivities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteCustomerActivities`.
   */
  create(
    entity: DualWriteCustomerActivities<T>
  ): CreateRequestBuilder<DualWriteCustomerActivities<T>, T> {
    return new CreateRequestBuilder<DualWriteCustomerActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWriteCustomerActivities` entity based on its keys.
   * @param dataAreaId Key property. See {@link DualWriteCustomerActivities.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWriteCustomerActivities.activityNumber}.
   * @param accountNum Key property. See {@link DualWriteCustomerActivities.accountNum}.
   * @returns A request builder for creating requests to retrieve one `DualWriteCustomerActivities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    activityNumber: DeserializedType<T, 'Edm.String'>,
    accountNum: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DualWriteCustomerActivities<T>, T> {
    return new GetByKeyRequestBuilder<DualWriteCustomerActivities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ActivityNumber: activityNumber,
        AccountNum: accountNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteCustomerActivities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteCustomerActivities`.
   */
  update(
    entity: DualWriteCustomerActivities<T>
  ): UpdateRequestBuilder<DualWriteCustomerActivities<T>, T> {
    return new UpdateRequestBuilder<DualWriteCustomerActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteCustomerActivities`.
   * @param dataAreaId Key property. See {@link DualWriteCustomerActivities.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWriteCustomerActivities.activityNumber}.
   * @param accountNum Key property. See {@link DualWriteCustomerActivities.accountNum}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteCustomerActivities`.
   */
  delete(
    dataAreaId: string,
    activityNumber: string,
    accountNum: string
  ): DeleteRequestBuilder<DualWriteCustomerActivities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteCustomerActivities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteCustomerActivities` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteCustomerActivities<T>
  ): DeleteRequestBuilder<DualWriteCustomerActivities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    activityNumber?: string,
    accountNum?: string
  ): DeleteRequestBuilder<DualWriteCustomerActivities<T>, T> {
    return new DeleteRequestBuilder<DualWriteCustomerActivities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DualWriteCustomerActivities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ActivityNumber: activityNumber!,
            AccountNum: accountNum!
          }
    );
  }
}
