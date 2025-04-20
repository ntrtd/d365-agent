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
import { EventNotificationSettingLines } from './EventNotificationSettingLines';

/**
 * Request builder class for operations supported on the {@link EventNotificationSettingLines} entity.
 */
export class EventNotificationSettingLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EventNotificationSettingLines<T>, T> {
  /**
   * Returns a request builder for querying all `EventNotificationSettingLines` entities.
   * @returns A request builder for creating requests to retrieve all `EventNotificationSettingLines` entities.
   */
  getAll(): GetAllRequestBuilder<EventNotificationSettingLines<T>, T> {
    return new GetAllRequestBuilder<EventNotificationSettingLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EventNotificationSettingLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EventNotificationSettingLines`.
   */
  create(
    entity: EventNotificationSettingLines<T>
  ): CreateRequestBuilder<EventNotificationSettingLines<T>, T> {
    return new CreateRequestBuilder<EventNotificationSettingLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EventNotificationSettingLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link EventNotificationSettingLines.dataAreaId}.
   * @param profileId Key property. See {@link EventNotificationSettingLines.profileId}.
   * @param notificationType Key property. See {@link EventNotificationSettingLines.notificationType}.
   * @param lineNum Key property. See {@link EventNotificationSettingLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `EventNotificationSettingLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    profileId: DeserializedType<T, 'Edm.String'>,
    notificationType: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<EventNotificationSettingLines<T>, T> {
    return new GetByKeyRequestBuilder<EventNotificationSettingLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProfileId: profileId,
        NotificationType: notificationType,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EventNotificationSettingLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EventNotificationSettingLines`.
   */
  update(
    entity: EventNotificationSettingLines<T>
  ): UpdateRequestBuilder<EventNotificationSettingLines<T>, T> {
    return new UpdateRequestBuilder<EventNotificationSettingLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EventNotificationSettingLines`.
   * @param dataAreaId Key property. See {@link EventNotificationSettingLines.dataAreaId}.
   * @param profileId Key property. See {@link EventNotificationSettingLines.profileId}.
   * @param notificationType Key property. See {@link EventNotificationSettingLines.notificationType}.
   * @param lineNum Key property. See {@link EventNotificationSettingLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `EventNotificationSettingLines`.
   */
  delete(
    dataAreaId: string,
    profileId: string,
    notificationType: string,
    lineNum: number
  ): DeleteRequestBuilder<EventNotificationSettingLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EventNotificationSettingLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EventNotificationSettingLines` by taking the entity as a parameter.
   */
  delete(
    entity: EventNotificationSettingLines<T>
  ): DeleteRequestBuilder<EventNotificationSettingLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    profileId?: string,
    notificationType?: string,
    lineNum?: number
  ): DeleteRequestBuilder<EventNotificationSettingLines<T>, T> {
    return new DeleteRequestBuilder<EventNotificationSettingLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EventNotificationSettingLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProfileId: profileId!,
            NotificationType: notificationType!,
            LineNum: lineNum!
          }
    );
  }
}
