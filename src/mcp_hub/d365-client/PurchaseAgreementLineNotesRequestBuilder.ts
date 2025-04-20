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
import { PurchaseAgreementLineNotes } from './PurchaseAgreementLineNotes';

/**
 * Request builder class for operations supported on the {@link PurchaseAgreementLineNotes} entity.
 */
export class PurchaseAgreementLineNotesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseAgreementLineNotes<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseAgreementLineNotes` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseAgreementLineNotes` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseAgreementLineNotes<T>, T> {
    return new GetAllRequestBuilder<PurchaseAgreementLineNotes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseAgreementLineNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseAgreementLineNotes`.
   */
  create(
    entity: PurchaseAgreementLineNotes<T>
  ): CreateRequestBuilder<PurchaseAgreementLineNotes<T>, T> {
    return new CreateRequestBuilder<PurchaseAgreementLineNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseAgreementLineNotes` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseAgreementLineNotes.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementLineNotes.purchaseAgreementId}.
   * @param lineNumber Key property. See {@link PurchaseAgreementLineNotes.lineNumber}.
   * @param documentAttachmentTypeCode Key property. See {@link PurchaseAgreementLineNotes.documentAttachmentTypeCode}.
   * @param attachmentDescription Key property. See {@link PurchaseAgreementLineNotes.attachmentDescription}.
   * @param attachedDateTime Key property. See {@link PurchaseAgreementLineNotes.attachedDateTime}.
   * @returns A request builder for creating requests to retrieve one `PurchaseAgreementLineNotes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseAgreementId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    documentAttachmentTypeCode: DeserializedType<T, 'Edm.String'>,
    attachmentDescription: DeserializedType<T, 'Edm.String'>,
    attachedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PurchaseAgreementLineNotes<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseAgreementLineNotes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseAgreementId: purchaseAgreementId,
        LineNumber: lineNumber,
        DocumentAttachmentTypeCode: documentAttachmentTypeCode,
        AttachmentDescription: attachmentDescription,
        AttachedDateTime: attachedDateTime
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseAgreementLineNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseAgreementLineNotes`.
   */
  update(
    entity: PurchaseAgreementLineNotes<T>
  ): UpdateRequestBuilder<PurchaseAgreementLineNotes<T>, T> {
    return new UpdateRequestBuilder<PurchaseAgreementLineNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementLineNotes`.
   * @param dataAreaId Key property. See {@link PurchaseAgreementLineNotes.dataAreaId}.
   * @param purchaseAgreementId Key property. See {@link PurchaseAgreementLineNotes.purchaseAgreementId}.
   * @param lineNumber Key property. See {@link PurchaseAgreementLineNotes.lineNumber}.
   * @param documentAttachmentTypeCode Key property. See {@link PurchaseAgreementLineNotes.documentAttachmentTypeCode}.
   * @param attachmentDescription Key property. See {@link PurchaseAgreementLineNotes.attachmentDescription}.
   * @param attachedDateTime Key property. See {@link PurchaseAgreementLineNotes.attachedDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementLineNotes`.
   */
  delete(
    dataAreaId: string,
    purchaseAgreementId: string,
    lineNumber: BigNumber,
    documentAttachmentTypeCode: string,
    attachmentDescription: string,
    attachedDateTime: Moment
  ): DeleteRequestBuilder<PurchaseAgreementLineNotes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseAgreementLineNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseAgreementLineNotes` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseAgreementLineNotes<T>
  ): DeleteRequestBuilder<PurchaseAgreementLineNotes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseAgreementId?: string,
    lineNumber?: BigNumber,
    documentAttachmentTypeCode?: string,
    attachmentDescription?: string,
    attachedDateTime?: Moment
  ): DeleteRequestBuilder<PurchaseAgreementLineNotes<T>, T> {
    return new DeleteRequestBuilder<PurchaseAgreementLineNotes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseAgreementLineNotes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseAgreementId: purchaseAgreementId!,
            LineNumber: lineNumber!,
            DocumentAttachmentTypeCode: documentAttachmentTypeCode!,
            AttachmentDescription: attachmentDescription!,
            AttachedDateTime: attachedDateTime!
          }
    );
  }
}
