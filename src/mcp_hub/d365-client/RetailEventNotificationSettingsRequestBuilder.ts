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
import { RetailEventNotificationSettings } from './RetailEventNotificationSettings';

/**
 * Request builder class for operations supported on the {@link RetailEventNotificationSettings} entity.
 */
export class RetailEventNotificationSettingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEventNotificationSettings<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEventNotificationSettings` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEventNotificationSettings` entities.
   */
  getAll(): GetAllRequestBuilder<RetailEventNotificationSettings<T>, T> {
    return new GetAllRequestBuilder<RetailEventNotificationSettings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailEventNotificationSettings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEventNotificationSettings`.
   */
  create(
    entity: RetailEventNotificationSettings<T>
  ): CreateRequestBuilder<RetailEventNotificationSettings<T>, T> {
    return new CreateRequestBuilder<RetailEventNotificationSettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailEventNotificationSettings` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEventNotificationSettings.dataAreaId}.
   * @param notificationType Key property. See {@link RetailEventNotificationSettings.notificationType}.
   * @param profileId Key property. See {@link RetailEventNotificationSettings.profileId}.
   * @returns A request builder for creating requests to retrieve one `RetailEventNotificationSettings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    notificationType: DeserializedType<T, 'Edm.String'>,
    profileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailEventNotificationSettings<T>, T> {
    return new GetByKeyRequestBuilder<RetailEventNotificationSettings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        NotificationType: notificationType,
        ProfileId: profileId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEventNotificationSettings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEventNotificationSettings`.
   */
  update(
    entity: RetailEventNotificationSettings<T>
  ): UpdateRequestBuilder<RetailEventNotificationSettings<T>, T> {
    return new UpdateRequestBuilder<RetailEventNotificationSettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEventNotificationSettings`.
   * @param dataAreaId Key property. See {@link RetailEventNotificationSettings.dataAreaId}.
   * @param notificationType Key property. See {@link RetailEventNotificationSettings.notificationType}.
   * @param profileId Key property. See {@link RetailEventNotificationSettings.profileId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEventNotificationSettings`.
   */
  delete(
    dataAreaId: string,
    notificationType: string,
    profileId: string
  ): DeleteRequestBuilder<RetailEventNotificationSettings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEventNotificationSettings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEventNotificationSettings` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEventNotificationSettings<T>
  ): DeleteRequestBuilder<RetailEventNotificationSettings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    notificationType?: string,
    profileId?: string
  ): DeleteRequestBuilder<RetailEventNotificationSettings<T>, T> {
    return new DeleteRequestBuilder<RetailEventNotificationSettings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailEventNotificationSettings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            NotificationType: notificationType!,
            ProfileId: profileId!
          }
    );
  }
}
