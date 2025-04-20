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
import { FreightInvoiceLines } from './FreightInvoiceLines';

/**
 * Request builder class for operations supported on the {@link FreightInvoiceLines} entity.
 */
export class FreightInvoiceLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FreightInvoiceLines<T>, T> {
  /**
   * Returns a request builder for querying all `FreightInvoiceLines` entities.
   * @returns A request builder for creating requests to retrieve all `FreightInvoiceLines` entities.
   */
  getAll(): GetAllRequestBuilder<FreightInvoiceLines<T>, T> {
    return new GetAllRequestBuilder<FreightInvoiceLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FreightInvoiceLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FreightInvoiceLines`.
   */
  create(
    entity: FreightInvoiceLines<T>
  ): CreateRequestBuilder<FreightInvoiceLines<T>, T> {
    return new CreateRequestBuilder<FreightInvoiceLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FreightInvoiceLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link FreightInvoiceLines.dataAreaId}.
   * @param internalInvoiceNumber Key property. See {@link FreightInvoiceLines.internalInvoiceNumber}.
   * @param lineNumber Key property. See {@link FreightInvoiceLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `FreightInvoiceLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    internalInvoiceNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<FreightInvoiceLines<T>, T> {
    return new GetByKeyRequestBuilder<FreightInvoiceLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InternalInvoiceNumber: internalInvoiceNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FreightInvoiceLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FreightInvoiceLines`.
   */
  update(
    entity: FreightInvoiceLines<T>
  ): UpdateRequestBuilder<FreightInvoiceLines<T>, T> {
    return new UpdateRequestBuilder<FreightInvoiceLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FreightInvoiceLines`.
   * @param dataAreaId Key property. See {@link FreightInvoiceLines.dataAreaId}.
   * @param internalInvoiceNumber Key property. See {@link FreightInvoiceLines.internalInvoiceNumber}.
   * @param lineNumber Key property. See {@link FreightInvoiceLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FreightInvoiceLines`.
   */
  delete(
    dataAreaId: string,
    internalInvoiceNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<FreightInvoiceLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FreightInvoiceLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FreightInvoiceLines` by taking the entity as a parameter.
   */
  delete(
    entity: FreightInvoiceLines<T>
  ): DeleteRequestBuilder<FreightInvoiceLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    internalInvoiceNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<FreightInvoiceLines<T>, T> {
    return new DeleteRequestBuilder<FreightInvoiceLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FreightInvoiceLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InternalInvoiceNumber: internalInvoiceNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
