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
import { RetailEventNotificationProfiles } from './RetailEventNotificationProfiles';

/**
 * Request builder class for operations supported on the {@link RetailEventNotificationProfiles} entity.
 */
export class RetailEventNotificationProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEventNotificationProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEventNotificationProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEventNotificationProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<RetailEventNotificationProfiles<T>, T> {
    return new GetAllRequestBuilder<RetailEventNotificationProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailEventNotificationProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEventNotificationProfiles`.
   */
  create(
    entity: RetailEventNotificationProfiles<T>
  ): CreateRequestBuilder<RetailEventNotificationProfiles<T>, T> {
    return new CreateRequestBuilder<RetailEventNotificationProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailEventNotificationProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailEventNotificationProfiles.dataAreaId}.
   * @param profileId Key property. See {@link RetailEventNotificationProfiles.profileId}.
   * @returns A request builder for creating requests to retrieve one `RetailEventNotificationProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    profileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailEventNotificationProfiles<T>, T> {
    return new GetByKeyRequestBuilder<RetailEventNotificationProfiles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProfileId: profileId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEventNotificationProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEventNotificationProfiles`.
   */
  update(
    entity: RetailEventNotificationProfiles<T>
  ): UpdateRequestBuilder<RetailEventNotificationProfiles<T>, T> {
    return new UpdateRequestBuilder<RetailEventNotificationProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEventNotificationProfiles`.
   * @param dataAreaId Key property. See {@link RetailEventNotificationProfiles.dataAreaId}.
   * @param profileId Key property. See {@link RetailEventNotificationProfiles.profileId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEventNotificationProfiles`.
   */
  delete(
    dataAreaId: string,
    profileId: string
  ): DeleteRequestBuilder<RetailEventNotificationProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEventNotificationProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEventNotificationProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEventNotificationProfiles<T>
  ): DeleteRequestBuilder<RetailEventNotificationProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    profileId?: string
  ): DeleteRequestBuilder<RetailEventNotificationProfiles<T>, T> {
    return new DeleteRequestBuilder<RetailEventNotificationProfiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailEventNotificationProfiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProfileId: profileId!
          }
    );
  }
}
