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
import { DocuExportAttachmentsTables } from './DocuExportAttachmentsTables';

/**
 * Request builder class for operations supported on the {@link DocuExportAttachmentsTables} entity.
 */
export class DocuExportAttachmentsTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocuExportAttachmentsTables<T>, T> {
  /**
   * Returns a request builder for querying all `DocuExportAttachmentsTables` entities.
   * @returns A request builder for creating requests to retrieve all `DocuExportAttachmentsTables` entities.
   */
  getAll(): GetAllRequestBuilder<DocuExportAttachmentsTables<T>, T> {
    return new GetAllRequestBuilder<DocuExportAttachmentsTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocuExportAttachmentsTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocuExportAttachmentsTables`.
   */
  create(
    entity: DocuExportAttachmentsTables<T>
  ): CreateRequestBuilder<DocuExportAttachmentsTables<T>, T> {
    return new CreateRequestBuilder<DocuExportAttachmentsTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocuExportAttachmentsTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocuExportAttachmentsTables.dataAreaId}.
   * @param sourceTableName Key property. See {@link DocuExportAttachmentsTables.sourceTableName}.
   * @returns A request builder for creating requests to retrieve one `DocuExportAttachmentsTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceTableName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocuExportAttachmentsTables<T>, T> {
    return new GetByKeyRequestBuilder<DocuExportAttachmentsTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceTableName: sourceTableName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocuExportAttachmentsTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocuExportAttachmentsTables`.
   */
  update(
    entity: DocuExportAttachmentsTables<T>
  ): UpdateRequestBuilder<DocuExportAttachmentsTables<T>, T> {
    return new UpdateRequestBuilder<DocuExportAttachmentsTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocuExportAttachmentsTables`.
   * @param dataAreaId Key property. See {@link DocuExportAttachmentsTables.dataAreaId}.
   * @param sourceTableName Key property. See {@link DocuExportAttachmentsTables.sourceTableName}.
   * @returns A request builder for creating requests that delete an entity of type `DocuExportAttachmentsTables`.
   */
  delete(
    dataAreaId: string,
    sourceTableName: string
  ): DeleteRequestBuilder<DocuExportAttachmentsTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocuExportAttachmentsTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocuExportAttachmentsTables` by taking the entity as a parameter.
   */
  delete(
    entity: DocuExportAttachmentsTables<T>
  ): DeleteRequestBuilder<DocuExportAttachmentsTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceTableName?: string
  ): DeleteRequestBuilder<DocuExportAttachmentsTables<T>, T> {
    return new DeleteRequestBuilder<DocuExportAttachmentsTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocuExportAttachmentsTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceTableName: sourceTableName!
          }
    );
  }
}
