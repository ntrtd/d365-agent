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
import { JournalSettings } from './JournalSettings';

/**
 * Request builder class for operations supported on the {@link JournalSettings} entity.
 */
export class JournalSettingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JournalSettings<T>, T> {
  /**
   * Returns a request builder for querying all `JournalSettings` entities.
   * @returns A request builder for creating requests to retrieve all `JournalSettings` entities.
   */
  getAll(): GetAllRequestBuilder<JournalSettings<T>, T> {
    return new GetAllRequestBuilder<JournalSettings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JournalSettings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JournalSettings`.
   */
  create(
    entity: JournalSettings<T>
  ): CreateRequestBuilder<JournalSettings<T>, T> {
    return new CreateRequestBuilder<JournalSettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JournalSettings` entity based on its keys.
   * @param dataAreaId Key property. See {@link JournalSettings.dataAreaId}.
   * @param lineId Key property. See {@link JournalSettings.lineId}.
   * @returns A request builder for creating requests to retrieve one `JournalSettings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<JournalSettings<T>, T> {
    return new GetByKeyRequestBuilder<JournalSettings<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LineId: lineId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JournalSettings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JournalSettings`.
   */
  update(
    entity: JournalSettings<T>
  ): UpdateRequestBuilder<JournalSettings<T>, T> {
    return new UpdateRequestBuilder<JournalSettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JournalSettings`.
   * @param dataAreaId Key property. See {@link JournalSettings.dataAreaId}.
   * @param lineId Key property. See {@link JournalSettings.lineId}.
   * @returns A request builder for creating requests that delete an entity of type `JournalSettings`.
   */
  delete(
    dataAreaId: string,
    lineId: string
  ): DeleteRequestBuilder<JournalSettings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JournalSettings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JournalSettings` by taking the entity as a parameter.
   */
  delete(
    entity: JournalSettings<T>
  ): DeleteRequestBuilder<JournalSettings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineId?: string
  ): DeleteRequestBuilder<JournalSettings<T>, T> {
    return new DeleteRequestBuilder<JournalSettings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof JournalSettings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineId: lineId!
          }
    );
  }
}
