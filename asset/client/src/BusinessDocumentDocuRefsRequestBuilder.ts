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
import { BusinessDocumentDocuRefs } from './BusinessDocumentDocuRefs';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentDocuRefs} entity.
 */
export class BusinessDocumentDocuRefsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentDocuRefs<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentDocuRefs` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentDocuRefs` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessDocumentDocuRefs<T>, T> {
    return new GetAllRequestBuilder<BusinessDocumentDocuRefs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentDocuRefs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentDocuRefs`.
   */
  create(
    entity: BusinessDocumentDocuRefs<T>
  ): CreateRequestBuilder<BusinessDocumentDocuRefs<T>, T> {
    return new CreateRequestBuilder<BusinessDocumentDocuRefs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentDocuRefs` entity based on its keys.
   * @param docuRefRecId Key property. See {@link BusinessDocumentDocuRefs.docuRefRecId}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentDocuRefs` entity based on its keys.
   */
  getByKey(
    docuRefRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<BusinessDocumentDocuRefs<T>, T> {
    return new GetByKeyRequestBuilder<BusinessDocumentDocuRefs<T>, T>(
      this.entityApi,
      { DocuRefRecId: docuRefRecId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessDocumentDocuRefs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentDocuRefs`.
   */
  update(
    entity: BusinessDocumentDocuRefs<T>
  ): UpdateRequestBuilder<BusinessDocumentDocuRefs<T>, T> {
    return new UpdateRequestBuilder<BusinessDocumentDocuRefs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentDocuRefs`.
   * @param docuRefRecId Key property. See {@link BusinessDocumentDocuRefs.docuRefRecId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentDocuRefs`.
   */
  delete(
    docuRefRecId: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentDocuRefs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentDocuRefs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentDocuRefs` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentDocuRefs<T>
  ): DeleteRequestBuilder<BusinessDocumentDocuRefs<T>, T>;
  delete(
    docuRefRecIdOrEntity: any
  ): DeleteRequestBuilder<BusinessDocumentDocuRefs<T>, T> {
    return new DeleteRequestBuilder<BusinessDocumentDocuRefs<T>, T>(
      this.entityApi,
      docuRefRecIdOrEntity instanceof BusinessDocumentDocuRefs
        ? docuRefRecIdOrEntity
        : { DocuRefRecId: docuRefRecIdOrEntity! }
    );
  }
}
