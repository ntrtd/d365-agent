/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { DocumentBatchSubmissionItems } from './DocumentBatchSubmissionItems';

/**
 * Request builder class for operations supported on the {@link DocumentBatchSubmissionItems} entity.
 */
export class DocumentBatchSubmissionItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentBatchSubmissionItems<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentBatchSubmissionItems` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentBatchSubmissionItems` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentBatchSubmissionItems<T>, T> {
    return new GetAllRequestBuilder<DocumentBatchSubmissionItems<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocumentBatchSubmissionItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentBatchSubmissionItems`.
   */
  create(
    entity: DocumentBatchSubmissionItems<T>
  ): CreateRequestBuilder<DocumentBatchSubmissionItems<T>, T> {
    return new CreateRequestBuilder<DocumentBatchSubmissionItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentBatchSubmissionItems` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentBatchSubmissionItems.dataAreaId}.
   * @param submissionId Key property. See {@link DocumentBatchSubmissionItems.submissionId}.
   * @param refTableId Key property. See {@link DocumentBatchSubmissionItems.refTableId}.
   * @param refRecId Key property. See {@link DocumentBatchSubmissionItems.refRecId}.
   * @returns A request builder for creating requests to retrieve one `DocumentBatchSubmissionItems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    submissionId: DeserializedType<T, 'Edm.String'>,
    refTableId: DeserializedType<T, 'Edm.Int32'>,
    refRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<DocumentBatchSubmissionItems<T>, T> {
    return new GetByKeyRequestBuilder<DocumentBatchSubmissionItems<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SubmissionId: submissionId,
        RefTableId: refTableId,
        RefRecId: refRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentBatchSubmissionItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentBatchSubmissionItems`.
   */
  update(
    entity: DocumentBatchSubmissionItems<T>
  ): UpdateRequestBuilder<DocumentBatchSubmissionItems<T>, T> {
    return new UpdateRequestBuilder<DocumentBatchSubmissionItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentBatchSubmissionItems`.
   * @param dataAreaId Key property. See {@link DocumentBatchSubmissionItems.dataAreaId}.
   * @param submissionId Key property. See {@link DocumentBatchSubmissionItems.submissionId}.
   * @param refTableId Key property. See {@link DocumentBatchSubmissionItems.refTableId}.
   * @param refRecId Key property. See {@link DocumentBatchSubmissionItems.refRecId}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentBatchSubmissionItems`.
   */
  delete(
    dataAreaId: string,
    submissionId: string,
    refTableId: number,
    refRecId: BigNumber
  ): DeleteRequestBuilder<DocumentBatchSubmissionItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentBatchSubmissionItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentBatchSubmissionItems` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentBatchSubmissionItems<T>
  ): DeleteRequestBuilder<DocumentBatchSubmissionItems<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    submissionId?: string,
    refTableId?: number,
    refRecId?: BigNumber
  ): DeleteRequestBuilder<DocumentBatchSubmissionItems<T>, T> {
    return new DeleteRequestBuilder<DocumentBatchSubmissionItems<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentBatchSubmissionItems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SubmissionId: submissionId!,
            RefTableId: refTableId!,
            RefRecId: refRecId!
          }
    );
  }
}
