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
import { LtmDocumentClassificationJournalNames } from './LtmDocumentClassificationJournalNames';

/**
 * Request builder class for operations supported on the {@link LtmDocumentClassificationJournalNames} entity.
 */
export class LtmDocumentClassificationJournalNamesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmDocumentClassificationJournalNames<T>, T> {
  /**
   * Returns a request builder for querying all `LtmDocumentClassificationJournalNames` entities.
   * @returns A request builder for creating requests to retrieve all `LtmDocumentClassificationJournalNames` entities.
   */
  getAll(): GetAllRequestBuilder<LtmDocumentClassificationJournalNames<T>, T> {
    return new GetAllRequestBuilder<
      LtmDocumentClassificationJournalNames<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmDocumentClassificationJournalNames` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmDocumentClassificationJournalNames`.
   */
  create(
    entity: LtmDocumentClassificationJournalNames<T>
  ): CreateRequestBuilder<LtmDocumentClassificationJournalNames<T>, T> {
    return new CreateRequestBuilder<
      LtmDocumentClassificationJournalNames<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LtmDocumentClassificationJournalNames` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationJournalNames.dataAreaId}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationJournalNames.documentClassificationId}.
   * @param journalName Key property. See {@link LtmDocumentClassificationJournalNames.journalName}.
   * @returns A request builder for creating requests to retrieve one `LtmDocumentClassificationJournalNames` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentClassificationId: DeserializedType<T, 'Edm.String'>,
    journalName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmDocumentClassificationJournalNames<T>, T> {
    return new GetByKeyRequestBuilder<
      LtmDocumentClassificationJournalNames<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentClassificationId: documentClassificationId,
      JournalName: journalName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmDocumentClassificationJournalNames`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmDocumentClassificationJournalNames`.
   */
  update(
    entity: LtmDocumentClassificationJournalNames<T>
  ): UpdateRequestBuilder<LtmDocumentClassificationJournalNames<T>, T> {
    return new UpdateRequestBuilder<
      LtmDocumentClassificationJournalNames<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationJournalNames`.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationJournalNames.dataAreaId}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationJournalNames.documentClassificationId}.
   * @param journalName Key property. See {@link LtmDocumentClassificationJournalNames.journalName}.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationJournalNames`.
   */
  delete(
    dataAreaId: string,
    documentClassificationId: string,
    journalName: string
  ): DeleteRequestBuilder<LtmDocumentClassificationJournalNames<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationJournalNames`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationJournalNames` by taking the entity as a parameter.
   */
  delete(
    entity: LtmDocumentClassificationJournalNames<T>
  ): DeleteRequestBuilder<LtmDocumentClassificationJournalNames<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentClassificationId?: string,
    journalName?: string
  ): DeleteRequestBuilder<LtmDocumentClassificationJournalNames<T>, T> {
    return new DeleteRequestBuilder<
      LtmDocumentClassificationJournalNames<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmDocumentClassificationJournalNames
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentClassificationId: documentClassificationId!,
            JournalName: journalName!
          }
    );
  }
}
