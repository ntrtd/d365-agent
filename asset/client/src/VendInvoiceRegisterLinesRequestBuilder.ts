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
import { VendInvoiceRegisterLines } from './VendInvoiceRegisterLines';

/**
 * Request builder class for operations supported on the {@link VendInvoiceRegisterLines} entity.
 */
export class VendInvoiceRegisterLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceRegisterLines<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceRegisterLines` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceRegisterLines` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceRegisterLines<T>, T> {
    return new GetAllRequestBuilder<VendInvoiceRegisterLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoiceRegisterLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceRegisterLines`.
   */
  create(
    entity: VendInvoiceRegisterLines<T>
  ): CreateRequestBuilder<VendInvoiceRegisterLines<T>, T> {
    return new CreateRequestBuilder<VendInvoiceRegisterLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceRegisterLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceRegisterLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link VendInvoiceRegisterLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link VendInvoiceRegisterLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceRegisterLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<VendInvoiceRegisterLines<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoiceRegisterLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceRegisterLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceRegisterLines`.
   */
  update(
    entity: VendInvoiceRegisterLines<T>
  ): UpdateRequestBuilder<VendInvoiceRegisterLines<T>, T> {
    return new UpdateRequestBuilder<VendInvoiceRegisterLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceRegisterLines`.
   * @param dataAreaId Key property. See {@link VendInvoiceRegisterLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link VendInvoiceRegisterLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link VendInvoiceRegisterLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceRegisterLines`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<VendInvoiceRegisterLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceRegisterLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceRegisterLines` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceRegisterLines<T>
  ): DeleteRequestBuilder<VendInvoiceRegisterLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<VendInvoiceRegisterLines<T>, T> {
    return new DeleteRequestBuilder<VendInvoiceRegisterLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceRegisterLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
