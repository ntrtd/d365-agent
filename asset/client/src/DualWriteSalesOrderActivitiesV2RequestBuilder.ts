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
import { DualWriteSalesOrderActivitiesV2 } from './DualWriteSalesOrderActivitiesV2';

/**
 * Request builder class for operations supported on the {@link DualWriteSalesOrderActivitiesV2} entity.
 */
export class DualWriteSalesOrderActivitiesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteSalesOrderActivitiesV2<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteSalesOrderActivitiesV2` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteSalesOrderActivitiesV2` entities.
   */
  getAll(): GetAllRequestBuilder<DualWriteSalesOrderActivitiesV2<T>, T> {
    return new GetAllRequestBuilder<DualWriteSalesOrderActivitiesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DualWriteSalesOrderActivitiesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteSalesOrderActivitiesV2`.
   */
  create(
    entity: DualWriteSalesOrderActivitiesV2<T>
  ): CreateRequestBuilder<DualWriteSalesOrderActivitiesV2<T>, T> {
    return new CreateRequestBuilder<DualWriteSalesOrderActivitiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWriteSalesOrderActivitiesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link DualWriteSalesOrderActivitiesV2.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWriteSalesOrderActivitiesV2.activityNumber}.
   * @param salesId Key property. See {@link DualWriteSalesOrderActivitiesV2.salesId}.
   * @returns A request builder for creating requests to retrieve one `DualWriteSalesOrderActivitiesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    activityNumber: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DualWriteSalesOrderActivitiesV2<T>, T> {
    return new GetByKeyRequestBuilder<DualWriteSalesOrderActivitiesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ActivityNumber: activityNumber,
        SalesId: salesId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteSalesOrderActivitiesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteSalesOrderActivitiesV2`.
   */
  update(
    entity: DualWriteSalesOrderActivitiesV2<T>
  ): UpdateRequestBuilder<DualWriteSalesOrderActivitiesV2<T>, T> {
    return new UpdateRequestBuilder<DualWriteSalesOrderActivitiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteSalesOrderActivitiesV2`.
   * @param dataAreaId Key property. See {@link DualWriteSalesOrderActivitiesV2.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWriteSalesOrderActivitiesV2.activityNumber}.
   * @param salesId Key property. See {@link DualWriteSalesOrderActivitiesV2.salesId}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteSalesOrderActivitiesV2`.
   */
  delete(
    dataAreaId: string,
    activityNumber: string,
    salesId: string
  ): DeleteRequestBuilder<DualWriteSalesOrderActivitiesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteSalesOrderActivitiesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteSalesOrderActivitiesV2` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteSalesOrderActivitiesV2<T>
  ): DeleteRequestBuilder<DualWriteSalesOrderActivitiesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    activityNumber?: string,
    salesId?: string
  ): DeleteRequestBuilder<DualWriteSalesOrderActivitiesV2<T>, T> {
    return new DeleteRequestBuilder<DualWriteSalesOrderActivitiesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DualWriteSalesOrderActivitiesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ActivityNumber: activityNumber!,
            SalesId: salesId!
          }
    );
  }
}
