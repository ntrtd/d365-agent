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
import { ApplicationBookmarks } from './ApplicationBookmarks';
import { HrmApplicationCorrespondanceAction } from './HrmApplicationCorrespondanceAction';

/**
 * Request builder class for operations supported on the {@link ApplicationBookmarks} entity.
 */
export class ApplicationBookmarksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApplicationBookmarks<T>, T> {
  /**
   * Returns a request builder for querying all `ApplicationBookmarks` entities.
   * @returns A request builder for creating requests to retrieve all `ApplicationBookmarks` entities.
   */
  getAll(): GetAllRequestBuilder<ApplicationBookmarks<T>, T> {
    return new GetAllRequestBuilder<ApplicationBookmarks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApplicationBookmarks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApplicationBookmarks`.
   */
  create(
    entity: ApplicationBookmarks<T>
  ): CreateRequestBuilder<ApplicationBookmarks<T>, T> {
    return new CreateRequestBuilder<ApplicationBookmarks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApplicationBookmarks` entity based on its keys.
   * @param dataAreaId Key property. See {@link ApplicationBookmarks.dataAreaId}.
   * @param correspondenceAction Key property. See {@link ApplicationBookmarks.correspondenceAction}.
   * @returns A request builder for creating requests to retrieve one `ApplicationBookmarks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    correspondenceAction: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HrmApplicationCorrespondanceAction'
    >
  ): GetByKeyRequestBuilder<ApplicationBookmarks<T>, T> {
    return new GetByKeyRequestBuilder<ApplicationBookmarks<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CorrespondenceAction: correspondenceAction
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApplicationBookmarks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApplicationBookmarks`.
   */
  update(
    entity: ApplicationBookmarks<T>
  ): UpdateRequestBuilder<ApplicationBookmarks<T>, T> {
    return new UpdateRequestBuilder<ApplicationBookmarks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApplicationBookmarks`.
   * @param dataAreaId Key property. See {@link ApplicationBookmarks.dataAreaId}.
   * @param correspondenceAction Key property. See {@link ApplicationBookmarks.correspondenceAction}.
   * @returns A request builder for creating requests that delete an entity of type `ApplicationBookmarks`.
   */
  delete(
    dataAreaId: string,
    correspondenceAction: HrmApplicationCorrespondanceAction
  ): DeleteRequestBuilder<ApplicationBookmarks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApplicationBookmarks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApplicationBookmarks` by taking the entity as a parameter.
   */
  delete(
    entity: ApplicationBookmarks<T>
  ): DeleteRequestBuilder<ApplicationBookmarks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    correspondenceAction?: HrmApplicationCorrespondanceAction
  ): DeleteRequestBuilder<ApplicationBookmarks<T>, T> {
    return new DeleteRequestBuilder<ApplicationBookmarks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ApplicationBookmarks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CorrespondenceAction: correspondenceAction!
          }
    );
  }
}
