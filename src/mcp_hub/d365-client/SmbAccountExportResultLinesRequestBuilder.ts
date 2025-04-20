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
import { SmbAccountExportResultLines } from './SmbAccountExportResultLines';

/**
 * Request builder class for operations supported on the {@link SmbAccountExportResultLines} entity.
 */
export class SmbAccountExportResultLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SmbAccountExportResultLines<T>, T> {
  /**
   * Returns a request builder for querying all `SmbAccountExportResultLines` entities.
   * @returns A request builder for creating requests to retrieve all `SmbAccountExportResultLines` entities.
   */
  getAll(): GetAllRequestBuilder<SmbAccountExportResultLines<T>, T> {
    return new GetAllRequestBuilder<SmbAccountExportResultLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SmbAccountExportResultLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SmbAccountExportResultLines`.
   */
  create(
    entity: SmbAccountExportResultLines<T>
  ): CreateRequestBuilder<SmbAccountExportResultLines<T>, T> {
    return new CreateRequestBuilder<SmbAccountExportResultLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SmbAccountExportResultLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SmbAccountExportResultLines.dataAreaId}.
   * @param accountId Key property. See {@link SmbAccountExportResultLines.accountId}.
   * @returns A request builder for creating requests to retrieve one `SmbAccountExportResultLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SmbAccountExportResultLines<T>, T> {
    return new GetByKeyRequestBuilder<SmbAccountExportResultLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AccountId: accountId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SmbAccountExportResultLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SmbAccountExportResultLines`.
   */
  update(
    entity: SmbAccountExportResultLines<T>
  ): UpdateRequestBuilder<SmbAccountExportResultLines<T>, T> {
    return new UpdateRequestBuilder<SmbAccountExportResultLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SmbAccountExportResultLines`.
   * @param dataAreaId Key property. See {@link SmbAccountExportResultLines.dataAreaId}.
   * @param accountId Key property. See {@link SmbAccountExportResultLines.accountId}.
   * @returns A request builder for creating requests that delete an entity of type `SmbAccountExportResultLines`.
   */
  delete(
    dataAreaId: string,
    accountId: string
  ): DeleteRequestBuilder<SmbAccountExportResultLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SmbAccountExportResultLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SmbAccountExportResultLines` by taking the entity as a parameter.
   */
  delete(
    entity: SmbAccountExportResultLines<T>
  ): DeleteRequestBuilder<SmbAccountExportResultLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountId?: string
  ): DeleteRequestBuilder<SmbAccountExportResultLines<T>, T> {
    return new DeleteRequestBuilder<SmbAccountExportResultLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SmbAccountExportResultLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountId: accountId!
          }
    );
  }
}
