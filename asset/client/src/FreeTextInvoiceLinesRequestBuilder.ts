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
import { FreeTextInvoiceLines } from './FreeTextInvoiceLines';

/**
 * Request builder class for operations supported on the {@link FreeTextInvoiceLines} entity.
 */
export class FreeTextInvoiceLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FreeTextInvoiceLines<T>, T> {
  /**
   * Returns a request builder for querying all `FreeTextInvoiceLines` entities.
   * @returns A request builder for creating requests to retrieve all `FreeTextInvoiceLines` entities.
   */
  getAll(): GetAllRequestBuilder<FreeTextInvoiceLines<T>, T> {
    return new GetAllRequestBuilder<FreeTextInvoiceLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FreeTextInvoiceLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FreeTextInvoiceLines`.
   */
  create(
    entity: FreeTextInvoiceLines<T>
  ): CreateRequestBuilder<FreeTextInvoiceLines<T>, T> {
    return new CreateRequestBuilder<FreeTextInvoiceLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FreeTextInvoiceLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link FreeTextInvoiceLines.dataAreaId}.
   * @param lineNumber Key property. See {@link FreeTextInvoiceLines.lineNumber}.
   * @param parentRecId Key property. See {@link FreeTextInvoiceLines.parentRecId}.
   * @returns A request builder for creating requests to retrieve one `FreeTextInvoiceLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    parentRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<FreeTextInvoiceLines<T>, T> {
    return new GetByKeyRequestBuilder<FreeTextInvoiceLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNumber: lineNumber,
        ParentRecId: parentRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FreeTextInvoiceLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FreeTextInvoiceLines`.
   */
  update(
    entity: FreeTextInvoiceLines<T>
  ): UpdateRequestBuilder<FreeTextInvoiceLines<T>, T> {
    return new UpdateRequestBuilder<FreeTextInvoiceLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FreeTextInvoiceLines`.
   * @param dataAreaId Key property. See {@link FreeTextInvoiceLines.dataAreaId}.
   * @param lineNumber Key property. See {@link FreeTextInvoiceLines.lineNumber}.
   * @param parentRecId Key property. See {@link FreeTextInvoiceLines.parentRecId}.
   * @returns A request builder for creating requests that delete an entity of type `FreeTextInvoiceLines`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber,
    parentRecId: BigNumber
  ): DeleteRequestBuilder<FreeTextInvoiceLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FreeTextInvoiceLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FreeTextInvoiceLines` by taking the entity as a parameter.
   */
  delete(
    entity: FreeTextInvoiceLines<T>
  ): DeleteRequestBuilder<FreeTextInvoiceLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber,
    parentRecId?: BigNumber
  ): DeleteRequestBuilder<FreeTextInvoiceLines<T>, T> {
    return new DeleteRequestBuilder<FreeTextInvoiceLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FreeTextInvoiceLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            ParentRecId: parentRecId!
          }
    );
  }
}
