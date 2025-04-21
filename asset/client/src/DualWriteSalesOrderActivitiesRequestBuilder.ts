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
import { DualWriteSalesOrderActivities } from './DualWriteSalesOrderActivities';

/**
 * Request builder class for operations supported on the {@link DualWriteSalesOrderActivities} entity.
 */
export class DualWriteSalesOrderActivitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteSalesOrderActivities<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteSalesOrderActivities` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteSalesOrderActivities` entities.
   */
  getAll(): GetAllRequestBuilder<DualWriteSalesOrderActivities<T>, T> {
    return new GetAllRequestBuilder<DualWriteSalesOrderActivities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DualWriteSalesOrderActivities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteSalesOrderActivities`.
   */
  create(
    entity: DualWriteSalesOrderActivities<T>
  ): CreateRequestBuilder<DualWriteSalesOrderActivities<T>, T> {
    return new CreateRequestBuilder<DualWriteSalesOrderActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWriteSalesOrderActivities` entity based on its keys.
   * @param dataAreaId Key property. See {@link DualWriteSalesOrderActivities.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWriteSalesOrderActivities.activityNumber}.
   * @param salesId Key property. See {@link DualWriteSalesOrderActivities.salesId}.
   * @returns A request builder for creating requests to retrieve one `DualWriteSalesOrderActivities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    activityNumber: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DualWriteSalesOrderActivities<T>, T> {
    return new GetByKeyRequestBuilder<DualWriteSalesOrderActivities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ActivityNumber: activityNumber,
        SalesId: salesId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteSalesOrderActivities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteSalesOrderActivities`.
   */
  update(
    entity: DualWriteSalesOrderActivities<T>
  ): UpdateRequestBuilder<DualWriteSalesOrderActivities<T>, T> {
    return new UpdateRequestBuilder<DualWriteSalesOrderActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteSalesOrderActivities`.
   * @param dataAreaId Key property. See {@link DualWriteSalesOrderActivities.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWriteSalesOrderActivities.activityNumber}.
   * @param salesId Key property. See {@link DualWriteSalesOrderActivities.salesId}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteSalesOrderActivities`.
   */
  delete(
    dataAreaId: string,
    activityNumber: string,
    salesId: string
  ): DeleteRequestBuilder<DualWriteSalesOrderActivities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteSalesOrderActivities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteSalesOrderActivities` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteSalesOrderActivities<T>
  ): DeleteRequestBuilder<DualWriteSalesOrderActivities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    activityNumber?: string,
    salesId?: string
  ): DeleteRequestBuilder<DualWriteSalesOrderActivities<T>, T> {
    return new DeleteRequestBuilder<DualWriteSalesOrderActivities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DualWriteSalesOrderActivities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ActivityNumber: activityNumber!,
            SalesId: salesId!
          }
    );
  }
}
