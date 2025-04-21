/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { SalesAgreementLineNotes } from './SalesAgreementLineNotes';

/**
 * Request builder class for operations supported on the {@link SalesAgreementLineNotes} entity.
 */
export class SalesAgreementLineNotesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesAgreementLineNotes<T>, T> {
  /**
   * Returns a request builder for querying all `SalesAgreementLineNotes` entities.
   * @returns A request builder for creating requests to retrieve all `SalesAgreementLineNotes` entities.
   */
  getAll(): GetAllRequestBuilder<SalesAgreementLineNotes<T>, T> {
    return new GetAllRequestBuilder<SalesAgreementLineNotes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesAgreementLineNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesAgreementLineNotes`.
   */
  create(
    entity: SalesAgreementLineNotes<T>
  ): CreateRequestBuilder<SalesAgreementLineNotes<T>, T> {
    return new CreateRequestBuilder<SalesAgreementLineNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesAgreementLineNotes` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesAgreementLineNotes.dataAreaId}.
   * @param salesAgreementId Key property. See {@link SalesAgreementLineNotes.salesAgreementId}.
   * @param lineNumber Key property. See {@link SalesAgreementLineNotes.lineNumber}.
   * @param documentAttachmentTypeCode Key property. See {@link SalesAgreementLineNotes.documentAttachmentTypeCode}.
   * @param attachmentDescription Key property. See {@link SalesAgreementLineNotes.attachmentDescription}.
   * @param attachedDateTime Key property. See {@link SalesAgreementLineNotes.attachedDateTime}.
   * @returns A request builder for creating requests to retrieve one `SalesAgreementLineNotes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesAgreementId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    documentAttachmentTypeCode: DeserializedType<T, 'Edm.String'>,
    attachmentDescription: DeserializedType<T, 'Edm.String'>,
    attachedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<SalesAgreementLineNotes<T>, T> {
    return new GetByKeyRequestBuilder<SalesAgreementLineNotes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesAgreementId: salesAgreementId,
        LineNumber: lineNumber,
        DocumentAttachmentTypeCode: documentAttachmentTypeCode,
        AttachmentDescription: attachmentDescription,
        AttachedDateTime: attachedDateTime
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesAgreementLineNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesAgreementLineNotes`.
   */
  update(
    entity: SalesAgreementLineNotes<T>
  ): UpdateRequestBuilder<SalesAgreementLineNotes<T>, T> {
    return new UpdateRequestBuilder<SalesAgreementLineNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesAgreementLineNotes`.
   * @param dataAreaId Key property. See {@link SalesAgreementLineNotes.dataAreaId}.
   * @param salesAgreementId Key property. See {@link SalesAgreementLineNotes.salesAgreementId}.
   * @param lineNumber Key property. See {@link SalesAgreementLineNotes.lineNumber}.
   * @param documentAttachmentTypeCode Key property. See {@link SalesAgreementLineNotes.documentAttachmentTypeCode}.
   * @param attachmentDescription Key property. See {@link SalesAgreementLineNotes.attachmentDescription}.
   * @param attachedDateTime Key property. See {@link SalesAgreementLineNotes.attachedDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreementLineNotes`.
   */
  delete(
    dataAreaId: string,
    salesAgreementId: string,
    lineNumber: BigNumber,
    documentAttachmentTypeCode: string,
    attachmentDescription: string,
    attachedDateTime: Moment
  ): DeleteRequestBuilder<SalesAgreementLineNotes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesAgreementLineNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesAgreementLineNotes` by taking the entity as a parameter.
   */
  delete(
    entity: SalesAgreementLineNotes<T>
  ): DeleteRequestBuilder<SalesAgreementLineNotes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesAgreementId?: string,
    lineNumber?: BigNumber,
    documentAttachmentTypeCode?: string,
    attachmentDescription?: string,
    attachedDateTime?: Moment
  ): DeleteRequestBuilder<SalesAgreementLineNotes<T>, T> {
    return new DeleteRequestBuilder<SalesAgreementLineNotes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesAgreementLineNotes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesAgreementId: salesAgreementId!,
            LineNumber: lineNumber!,
            DocumentAttachmentTypeCode: documentAttachmentTypeCode!,
            AttachmentDescription: attachmentDescription!,
            AttachedDateTime: attachedDateTime!
          }
    );
  }
}
