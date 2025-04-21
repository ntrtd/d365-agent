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
import { TrvExpMobileActivities } from './TrvExpMobileActivities';

/**
 * Request builder class for operations supported on the {@link TrvExpMobileActivities} entity.
 */
export class TrvExpMobileActivitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrvExpMobileActivities<T>, T> {
  /**
   * Returns a request builder for querying all `TrvExpMobileActivities` entities.
   * @returns A request builder for creating requests to retrieve all `TrvExpMobileActivities` entities.
   */
  getAll(): GetAllRequestBuilder<TrvExpMobileActivities<T>, T> {
    return new GetAllRequestBuilder<TrvExpMobileActivities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TrvExpMobileActivities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrvExpMobileActivities`.
   */
  create(
    entity: TrvExpMobileActivities<T>
  ): CreateRequestBuilder<TrvExpMobileActivities<T>, T> {
    return new CreateRequestBuilder<TrvExpMobileActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TrvExpMobileActivities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TrvExpMobileActivities.dataAreaId}.
   * @param activityNumber Key property. See {@link TrvExpMobileActivities.activityNumber}.
   * @returns A request builder for creating requests to retrieve one `TrvExpMobileActivities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    activityNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TrvExpMobileActivities<T>, T> {
    return new GetByKeyRequestBuilder<TrvExpMobileActivities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ActivityNumber: activityNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TrvExpMobileActivities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrvExpMobileActivities`.
   */
  update(
    entity: TrvExpMobileActivities<T>
  ): UpdateRequestBuilder<TrvExpMobileActivities<T>, T> {
    return new UpdateRequestBuilder<TrvExpMobileActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TrvExpMobileActivities`.
   * @param dataAreaId Key property. See {@link TrvExpMobileActivities.dataAreaId}.
   * @param activityNumber Key property. See {@link TrvExpMobileActivities.activityNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpMobileActivities`.
   */
  delete(
    dataAreaId: string,
    activityNumber: string
  ): DeleteRequestBuilder<TrvExpMobileActivities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrvExpMobileActivities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpMobileActivities` by taking the entity as a parameter.
   */
  delete(
    entity: TrvExpMobileActivities<T>
  ): DeleteRequestBuilder<TrvExpMobileActivities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    activityNumber?: string
  ): DeleteRequestBuilder<TrvExpMobileActivities<T>, T> {
    return new DeleteRequestBuilder<TrvExpMobileActivities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TrvExpMobileActivities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ActivityNumber: activityNumber!
          }
    );
  }
}
