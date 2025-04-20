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
import { DualWriteSmmActivities } from './DualWriteSmmActivities';

/**
 * Request builder class for operations supported on the {@link DualWriteSmmActivities} entity.
 */
export class DualWriteSmmActivitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteSmmActivities<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteSmmActivities` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteSmmActivities` entities.
   */
  getAll(): GetAllRequestBuilder<DualWriteSmmActivities<T>, T> {
    return new GetAllRequestBuilder<DualWriteSmmActivities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DualWriteSmmActivities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteSmmActivities`.
   */
  create(
    entity: DualWriteSmmActivities<T>
  ): CreateRequestBuilder<DualWriteSmmActivities<T>, T> {
    return new CreateRequestBuilder<DualWriteSmmActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWriteSmmActivities` entity based on its keys.
   * @param dataAreaId Key property. See {@link DualWriteSmmActivities.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWriteSmmActivities.activityNumber}.
   * @returns A request builder for creating requests to retrieve one `DualWriteSmmActivities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    activityNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DualWriteSmmActivities<T>, T> {
    return new GetByKeyRequestBuilder<DualWriteSmmActivities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ActivityNumber: activityNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteSmmActivities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteSmmActivities`.
   */
  update(
    entity: DualWriteSmmActivities<T>
  ): UpdateRequestBuilder<DualWriteSmmActivities<T>, T> {
    return new UpdateRequestBuilder<DualWriteSmmActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteSmmActivities`.
   * @param dataAreaId Key property. See {@link DualWriteSmmActivities.dataAreaId}.
   * @param activityNumber Key property. See {@link DualWriteSmmActivities.activityNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteSmmActivities`.
   */
  delete(
    dataAreaId: string,
    activityNumber: string
  ): DeleteRequestBuilder<DualWriteSmmActivities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteSmmActivities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteSmmActivities` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteSmmActivities<T>
  ): DeleteRequestBuilder<DualWriteSmmActivities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    activityNumber?: string
  ): DeleteRequestBuilder<DualWriteSmmActivities<T>, T> {
    return new DeleteRequestBuilder<DualWriteSmmActivities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DualWriteSmmActivities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ActivityNumber: activityNumber!
          }
    );
  }
}
