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
import { ExcludeSpecificSourceDocumentLines } from './ExcludeSpecificSourceDocumentLines';

/**
 * Request builder class for operations supported on the {@link ExcludeSpecificSourceDocumentLines} entity.
 */
export class ExcludeSpecificSourceDocumentLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExcludeSpecificSourceDocumentLines<T>, T> {
  /**
   * Returns a request builder for querying all `ExcludeSpecificSourceDocumentLines` entities.
   * @returns A request builder for creating requests to retrieve all `ExcludeSpecificSourceDocumentLines` entities.
   */
  getAll(): GetAllRequestBuilder<ExcludeSpecificSourceDocumentLines<T>, T> {
    return new GetAllRequestBuilder<ExcludeSpecificSourceDocumentLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExcludeSpecificSourceDocumentLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExcludeSpecificSourceDocumentLines`.
   */
  create(
    entity: ExcludeSpecificSourceDocumentLines<T>
  ): CreateRequestBuilder<ExcludeSpecificSourceDocumentLines<T>, T> {
    return new CreateRequestBuilder<ExcludeSpecificSourceDocumentLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExcludeSpecificSourceDocumentLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExcludeSpecificSourceDocumentLines.dataAreaId}.
   * @param inventTransId Key property. See {@link ExcludeSpecificSourceDocumentLines.inventTransId}.
   * @returns A request builder for creating requests to retrieve one `ExcludeSpecificSourceDocumentLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventTransId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExcludeSpecificSourceDocumentLines<T>, T> {
    return new GetByKeyRequestBuilder<ExcludeSpecificSourceDocumentLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventTransId: inventTransId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExcludeSpecificSourceDocumentLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExcludeSpecificSourceDocumentLines`.
   */
  update(
    entity: ExcludeSpecificSourceDocumentLines<T>
  ): UpdateRequestBuilder<ExcludeSpecificSourceDocumentLines<T>, T> {
    return new UpdateRequestBuilder<ExcludeSpecificSourceDocumentLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExcludeSpecificSourceDocumentLines`.
   * @param dataAreaId Key property. See {@link ExcludeSpecificSourceDocumentLines.dataAreaId}.
   * @param inventTransId Key property. See {@link ExcludeSpecificSourceDocumentLines.inventTransId}.
   * @returns A request builder for creating requests that delete an entity of type `ExcludeSpecificSourceDocumentLines`.
   */
  delete(
    dataAreaId: string,
    inventTransId: string
  ): DeleteRequestBuilder<ExcludeSpecificSourceDocumentLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExcludeSpecificSourceDocumentLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExcludeSpecificSourceDocumentLines` by taking the entity as a parameter.
   */
  delete(
    entity: ExcludeSpecificSourceDocumentLines<T>
  ): DeleteRequestBuilder<ExcludeSpecificSourceDocumentLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventTransId?: string
  ): DeleteRequestBuilder<ExcludeSpecificSourceDocumentLines<T>, T> {
    return new DeleteRequestBuilder<ExcludeSpecificSourceDocumentLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExcludeSpecificSourceDocumentLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventTransId: inventTransId!
          }
    );
  }
}
