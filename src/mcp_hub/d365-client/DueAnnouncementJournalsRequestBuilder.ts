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
import { DueAnnouncementJournals } from './DueAnnouncementJournals';

/**
 * Request builder class for operations supported on the {@link DueAnnouncementJournals} entity.
 */
export class DueAnnouncementJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DueAnnouncementJournals<T>, T> {
  /**
   * Returns a request builder for querying all `DueAnnouncementJournals` entities.
   * @returns A request builder for creating requests to retrieve all `DueAnnouncementJournals` entities.
   */
  getAll(): GetAllRequestBuilder<DueAnnouncementJournals<T>, T> {
    return new GetAllRequestBuilder<DueAnnouncementJournals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DueAnnouncementJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DueAnnouncementJournals`.
   */
  create(
    entity: DueAnnouncementJournals<T>
  ): CreateRequestBuilder<DueAnnouncementJournals<T>, T> {
    return new CreateRequestBuilder<DueAnnouncementJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DueAnnouncementJournals` entity based on its keys.
   * @param dataAreaId Key property. See {@link DueAnnouncementJournals.dataAreaId}.
   * @param announcementNumber Key property. See {@link DueAnnouncementJournals.announcementNumber}.
   * @returns A request builder for creating requests to retrieve one `DueAnnouncementJournals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    announcementNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DueAnnouncementJournals<T>, T> {
    return new GetByKeyRequestBuilder<DueAnnouncementJournals<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AnnouncementNumber: announcementNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DueAnnouncementJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DueAnnouncementJournals`.
   */
  update(
    entity: DueAnnouncementJournals<T>
  ): UpdateRequestBuilder<DueAnnouncementJournals<T>, T> {
    return new UpdateRequestBuilder<DueAnnouncementJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DueAnnouncementJournals`.
   * @param dataAreaId Key property. See {@link DueAnnouncementJournals.dataAreaId}.
   * @param announcementNumber Key property. See {@link DueAnnouncementJournals.announcementNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DueAnnouncementJournals`.
   */
  delete(
    dataAreaId: string,
    announcementNumber: string
  ): DeleteRequestBuilder<DueAnnouncementJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DueAnnouncementJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DueAnnouncementJournals` by taking the entity as a parameter.
   */
  delete(
    entity: DueAnnouncementJournals<T>
  ): DeleteRequestBuilder<DueAnnouncementJournals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    announcementNumber?: string
  ): DeleteRequestBuilder<DueAnnouncementJournals<T>, T> {
    return new DeleteRequestBuilder<DueAnnouncementJournals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DueAnnouncementJournals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AnnouncementNumber: announcementNumber!
          }
    );
  }
}
