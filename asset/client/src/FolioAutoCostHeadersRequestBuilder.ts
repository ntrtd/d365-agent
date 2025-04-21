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
import { FolioAutoCostHeaders } from './FolioAutoCostHeaders';

/**
 * Request builder class for operations supported on the {@link FolioAutoCostHeaders} entity.
 */
export class FolioAutoCostHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FolioAutoCostHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `FolioAutoCostHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `FolioAutoCostHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<FolioAutoCostHeaders<T>, T> {
    return new GetAllRequestBuilder<FolioAutoCostHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FolioAutoCostHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FolioAutoCostHeaders`.
   */
  create(
    entity: FolioAutoCostHeaders<T>
  ): CreateRequestBuilder<FolioAutoCostHeaders<T>, T> {
    return new CreateRequestBuilder<FolioAutoCostHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FolioAutoCostHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link FolioAutoCostHeaders.dataAreaId}.
   * @param folioCostAutoNumber Key property. See {@link FolioAutoCostHeaders.folioCostAutoNumber}.
   * @returns A request builder for creating requests to retrieve one `FolioAutoCostHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    folioCostAutoNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FolioAutoCostHeaders<T>, T> {
    return new GetByKeyRequestBuilder<FolioAutoCostHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FolioCostAutoNumber: folioCostAutoNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FolioAutoCostHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FolioAutoCostHeaders`.
   */
  update(
    entity: FolioAutoCostHeaders<T>
  ): UpdateRequestBuilder<FolioAutoCostHeaders<T>, T> {
    return new UpdateRequestBuilder<FolioAutoCostHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FolioAutoCostHeaders`.
   * @param dataAreaId Key property. See {@link FolioAutoCostHeaders.dataAreaId}.
   * @param folioCostAutoNumber Key property. See {@link FolioAutoCostHeaders.folioCostAutoNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FolioAutoCostHeaders`.
   */
  delete(
    dataAreaId: string,
    folioCostAutoNumber: string
  ): DeleteRequestBuilder<FolioAutoCostHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FolioAutoCostHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FolioAutoCostHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: FolioAutoCostHeaders<T>
  ): DeleteRequestBuilder<FolioAutoCostHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    folioCostAutoNumber?: string
  ): DeleteRequestBuilder<FolioAutoCostHeaders<T>, T> {
    return new DeleteRequestBuilder<FolioAutoCostHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FolioAutoCostHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FolioCostAutoNumber: folioCostAutoNumber!
          }
    );
  }
}
