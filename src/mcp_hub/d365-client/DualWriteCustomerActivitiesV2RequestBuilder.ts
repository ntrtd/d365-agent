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
import { DualWriteCustomerActivitiesV2 } from './DualWriteCustomerActivitiesV2';

/**
 * Request builder class for operations supported on the {@link DualWriteCustomerActivitiesV2} entity.
 */
export class DualWriteCustomerActivitiesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteCustomerActivitiesV2<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteCustomerActivitiesV2` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteCustomerActivitiesV2` entities.
   */
  getAll(): GetAllRequestBuilder<DualWriteCustomerActivitiesV2<T>, T> {
    return new GetAllRequestBuilder<DualWriteCustomerActivitiesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DualWriteCustomerActivitiesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteCustomerActivitiesV2`.
   */
  create(
    entity: DualWriteCustomerActivitiesV2<T>
  ): CreateRequestBuilder<DualWriteCustomerActivitiesV2<T>, T> {
    return new CreateRequestBuilder<DualWriteCustomerActivitiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWriteCustomerActivitiesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link DualWriteCustomerActivitiesV2.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWriteCustomerActivitiesV2.activityNumber}.
   * @param accountNum Key property. See {@link DualWriteCustomerActivitiesV2.accountNum}.
   * @returns A request builder for creating requests to retrieve one `DualWriteCustomerActivitiesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    activityNumber: DeserializedType<T, 'Edm.String'>,
    accountNum: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DualWriteCustomerActivitiesV2<T>, T> {
    return new GetByKeyRequestBuilder<DualWriteCustomerActivitiesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ActivityNumber: activityNumber,
        AccountNum: accountNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteCustomerActivitiesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteCustomerActivitiesV2`.
   */
  update(
    entity: DualWriteCustomerActivitiesV2<T>
  ): UpdateRequestBuilder<DualWriteCustomerActivitiesV2<T>, T> {
    return new UpdateRequestBuilder<DualWriteCustomerActivitiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteCustomerActivitiesV2`.
   * @param dataAreaId Key property. See {@link DualWriteCustomerActivitiesV2.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWriteCustomerActivitiesV2.activityNumber}.
   * @param accountNum Key property. See {@link DualWriteCustomerActivitiesV2.accountNum}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteCustomerActivitiesV2`.
   */
  delete(
    dataAreaId: string,
    activityNumber: string,
    accountNum: string
  ): DeleteRequestBuilder<DualWriteCustomerActivitiesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteCustomerActivitiesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteCustomerActivitiesV2` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteCustomerActivitiesV2<T>
  ): DeleteRequestBuilder<DualWriteCustomerActivitiesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    activityNumber?: string,
    accountNum?: string
  ): DeleteRequestBuilder<DualWriteCustomerActivitiesV2<T>, T> {
    return new DeleteRequestBuilder<DualWriteCustomerActivitiesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DualWriteCustomerActivitiesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ActivityNumber: activityNumber!,
            AccountNum: accountNum!
          }
    );
  }
}
