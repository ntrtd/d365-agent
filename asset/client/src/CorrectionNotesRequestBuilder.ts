/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { CorrectionNotes } from './CorrectionNotes';

/**
 * Request builder class for operations supported on the {@link CorrectionNotes} entity.
 */
export class CorrectionNotesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CorrectionNotes<T>, T> {
  /**
   * Returns a request builder for querying all `CorrectionNotes` entities.
   * @returns A request builder for creating requests to retrieve all `CorrectionNotes` entities.
   */
  getAll(): GetAllRequestBuilder<CorrectionNotes<T>, T> {
    return new GetAllRequestBuilder<CorrectionNotes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CorrectionNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CorrectionNotes`.
   */
  create(
    entity: CorrectionNotes<T>
  ): CreateRequestBuilder<CorrectionNotes<T>, T> {
    return new CreateRequestBuilder<CorrectionNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CorrectionNotes` entity based on its keys.
   * @param dataAreaId Key property. See {@link CorrectionNotes.dataAreaId}.
   * @param correctionNote Key property. See {@link CorrectionNotes.correctionNote}.
   * @param invoice Key property. See {@link CorrectionNotes.invoice}.
   * @param invoiceAccount Key property. See {@link CorrectionNotes.invoiceAccount}.
   * @param date Key property. See {@link CorrectionNotes.date}.
   * @param documentDate Key property. See {@link CorrectionNotes.documentDate}.
   * @returns A request builder for creating requests to retrieve one `CorrectionNotes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    correctionNote: DeserializedType<T, 'Edm.String'>,
    invoice: DeserializedType<T, 'Edm.String'>,
    invoiceAccount: DeserializedType<T, 'Edm.String'>,
    date: DeserializedType<T, 'Edm.DateTimeOffset'>,
    documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CorrectionNotes<T>, T> {
    return new GetByKeyRequestBuilder<CorrectionNotes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CorrectionNote: correctionNote,
      Invoice: invoice,
      InvoiceAccount: invoiceAccount,
      Date: date,
      DocumentDate: documentDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CorrectionNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CorrectionNotes`.
   */
  update(
    entity: CorrectionNotes<T>
  ): UpdateRequestBuilder<CorrectionNotes<T>, T> {
    return new UpdateRequestBuilder<CorrectionNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CorrectionNotes`.
   * @param dataAreaId Key property. See {@link CorrectionNotes.dataAreaId}.
   * @param correctionNote Key property. See {@link CorrectionNotes.correctionNote}.
   * @param invoice Key property. See {@link CorrectionNotes.invoice}.
   * @param invoiceAccount Key property. See {@link CorrectionNotes.invoiceAccount}.
   * @param date Key property. See {@link CorrectionNotes.date}.
   * @param documentDate Key property. See {@link CorrectionNotes.documentDate}.
   * @returns A request builder for creating requests that delete an entity of type `CorrectionNotes`.
   */
  delete(
    dataAreaId: string,
    correctionNote: string,
    invoice: string,
    invoiceAccount: string,
    date: Moment,
    documentDate: Moment
  ): DeleteRequestBuilder<CorrectionNotes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CorrectionNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CorrectionNotes` by taking the entity as a parameter.
   */
  delete(
    entity: CorrectionNotes<T>
  ): DeleteRequestBuilder<CorrectionNotes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    correctionNote?: string,
    invoice?: string,
    invoiceAccount?: string,
    date?: Moment,
    documentDate?: Moment
  ): DeleteRequestBuilder<CorrectionNotes<T>, T> {
    return new DeleteRequestBuilder<CorrectionNotes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CorrectionNotes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CorrectionNote: correctionNote!,
            Invoice: invoice!,
            InvoiceAccount: invoiceAccount!,
            Date: date!,
            DocumentDate: documentDate!
          }
    );
  }
}
