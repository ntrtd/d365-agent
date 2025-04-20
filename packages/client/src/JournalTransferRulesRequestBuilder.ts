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
import { JournalTransferRules } from './JournalTransferRules';

/**
 * Request builder class for operations supported on the {@link JournalTransferRules} entity.
 */
export class JournalTransferRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JournalTransferRules<T>, T> {
  /**
   * Returns a request builder for querying all `JournalTransferRules` entities.
   * @returns A request builder for creating requests to retrieve all `JournalTransferRules` entities.
   */
  getAll(): GetAllRequestBuilder<JournalTransferRules<T>, T> {
    return new GetAllRequestBuilder<JournalTransferRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JournalTransferRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JournalTransferRules`.
   */
  create(
    entity: JournalTransferRules<T>
  ): CreateRequestBuilder<JournalTransferRules<T>, T> {
    return new CreateRequestBuilder<JournalTransferRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JournalTransferRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link JournalTransferRules.dataAreaId}.
   * @param legalEntityId Key property. See {@link JournalTransferRules.legalEntityId}.
   * @param sourceDocumentType Key property. See {@link JournalTransferRules.sourceDocumentType}.
   * @returns A request builder for creating requests to retrieve one `JournalTransferRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    sourceDocumentType: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<JournalTransferRules<T>, T> {
    return new GetByKeyRequestBuilder<JournalTransferRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntityId: legalEntityId,
        SourceDocumentType: sourceDocumentType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JournalTransferRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JournalTransferRules`.
   */
  update(
    entity: JournalTransferRules<T>
  ): UpdateRequestBuilder<JournalTransferRules<T>, T> {
    return new UpdateRequestBuilder<JournalTransferRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JournalTransferRules`.
   * @param dataAreaId Key property. See {@link JournalTransferRules.dataAreaId}.
   * @param legalEntityId Key property. See {@link JournalTransferRules.legalEntityId}.
   * @param sourceDocumentType Key property. See {@link JournalTransferRules.sourceDocumentType}.
   * @returns A request builder for creating requests that delete an entity of type `JournalTransferRules`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    sourceDocumentType: number
  ): DeleteRequestBuilder<JournalTransferRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JournalTransferRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JournalTransferRules` by taking the entity as a parameter.
   */
  delete(
    entity: JournalTransferRules<T>
  ): DeleteRequestBuilder<JournalTransferRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    sourceDocumentType?: number
  ): DeleteRequestBuilder<JournalTransferRules<T>, T> {
    return new DeleteRequestBuilder<JournalTransferRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof JournalTransferRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            SourceDocumentType: sourceDocumentType!
          }
    );
  }
}
