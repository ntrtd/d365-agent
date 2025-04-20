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
import { CdsFreeTextInvoiceLines } from './CdsFreeTextInvoiceLines';

/**
 * Request builder class for operations supported on the {@link CdsFreeTextInvoiceLines} entity.
 */
export class CdsFreeTextInvoiceLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsFreeTextInvoiceLines<T>, T> {
  /**
   * Returns a request builder for querying all `CdsFreeTextInvoiceLines` entities.
   * @returns A request builder for creating requests to retrieve all `CdsFreeTextInvoiceLines` entities.
   */
  getAll(): GetAllRequestBuilder<CdsFreeTextInvoiceLines<T>, T> {
    return new GetAllRequestBuilder<CdsFreeTextInvoiceLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsFreeTextInvoiceLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsFreeTextInvoiceLines`.
   */
  create(
    entity: CdsFreeTextInvoiceLines<T>
  ): CreateRequestBuilder<CdsFreeTextInvoiceLines<T>, T> {
    return new CreateRequestBuilder<CdsFreeTextInvoiceLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsFreeTextInvoiceLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsFreeTextInvoiceLines.dataAreaId}.
   * @param externalInvoiceId Key property. See {@link CdsFreeTextInvoiceLines.externalInvoiceId}.
   * @param lineNumber Key property. See {@link CdsFreeTextInvoiceLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsFreeTextInvoiceLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    externalInvoiceId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CdsFreeTextInvoiceLines<T>, T> {
    return new GetByKeyRequestBuilder<CdsFreeTextInvoiceLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ExternalInvoiceId: externalInvoiceId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsFreeTextInvoiceLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsFreeTextInvoiceLines`.
   */
  update(
    entity: CdsFreeTextInvoiceLines<T>
  ): UpdateRequestBuilder<CdsFreeTextInvoiceLines<T>, T> {
    return new UpdateRequestBuilder<CdsFreeTextInvoiceLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsFreeTextInvoiceLines`.
   * @param dataAreaId Key property. See {@link CdsFreeTextInvoiceLines.dataAreaId}.
   * @param externalInvoiceId Key property. See {@link CdsFreeTextInvoiceLines.externalInvoiceId}.
   * @param lineNumber Key property. See {@link CdsFreeTextInvoiceLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsFreeTextInvoiceLines`.
   */
  delete(
    dataAreaId: string,
    externalInvoiceId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CdsFreeTextInvoiceLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsFreeTextInvoiceLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsFreeTextInvoiceLines` by taking the entity as a parameter.
   */
  delete(
    entity: CdsFreeTextInvoiceLines<T>
  ): DeleteRequestBuilder<CdsFreeTextInvoiceLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    externalInvoiceId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CdsFreeTextInvoiceLines<T>, T> {
    return new DeleteRequestBuilder<CdsFreeTextInvoiceLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsFreeTextInvoiceLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExternalInvoiceId: externalInvoiceId!,
            LineNumber: lineNumber!
          }
    );
  }
}
