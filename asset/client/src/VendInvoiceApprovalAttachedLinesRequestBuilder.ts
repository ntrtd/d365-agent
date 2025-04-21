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
import { VendInvoiceApprovalAttachedLines } from './VendInvoiceApprovalAttachedLines';

/**
 * Request builder class for operations supported on the {@link VendInvoiceApprovalAttachedLines} entity.
 */
export class VendInvoiceApprovalAttachedLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceApprovalAttachedLines<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceApprovalAttachedLines` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceApprovalAttachedLines` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceApprovalAttachedLines<T>, T> {
    return new GetAllRequestBuilder<VendInvoiceApprovalAttachedLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoiceApprovalAttachedLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceApprovalAttachedLines`.
   */
  create(
    entity: VendInvoiceApprovalAttachedLines<T>
  ): CreateRequestBuilder<VendInvoiceApprovalAttachedLines<T>, T> {
    return new CreateRequestBuilder<VendInvoiceApprovalAttachedLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceApprovalAttachedLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceApprovalAttachedLines.dataAreaId}.
   * @param legalEntity Key property. See {@link VendInvoiceApprovalAttachedLines.legalEntity}.
   * @param headerReference Key property. See {@link VendInvoiceApprovalAttachedLines.headerReference}.
   * @param lineNumber Key property. See {@link VendInvoiceApprovalAttachedLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceApprovalAttachedLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntity: DeserializedType<T, 'Edm.String'>,
    headerReference: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<VendInvoiceApprovalAttachedLines<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoiceApprovalAttachedLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntity: legalEntity,
        HeaderReference: headerReference,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceApprovalAttachedLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceApprovalAttachedLines`.
   */
  update(
    entity: VendInvoiceApprovalAttachedLines<T>
  ): UpdateRequestBuilder<VendInvoiceApprovalAttachedLines<T>, T> {
    return new UpdateRequestBuilder<VendInvoiceApprovalAttachedLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceApprovalAttachedLines`.
   * @param dataAreaId Key property. See {@link VendInvoiceApprovalAttachedLines.dataAreaId}.
   * @param legalEntity Key property. See {@link VendInvoiceApprovalAttachedLines.legalEntity}.
   * @param headerReference Key property. See {@link VendInvoiceApprovalAttachedLines.headerReference}.
   * @param lineNumber Key property. See {@link VendInvoiceApprovalAttachedLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceApprovalAttachedLines`.
   */
  delete(
    dataAreaId: string,
    legalEntity: string,
    headerReference: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<VendInvoiceApprovalAttachedLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceApprovalAttachedLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceApprovalAttachedLines` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceApprovalAttachedLines<T>
  ): DeleteRequestBuilder<VendInvoiceApprovalAttachedLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntity?: string,
    headerReference?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<VendInvoiceApprovalAttachedLines<T>, T> {
    return new DeleteRequestBuilder<VendInvoiceApprovalAttachedLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceApprovalAttachedLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntity: legalEntity!,
            HeaderReference: headerReference!,
            LineNumber: lineNumber!
          }
    );
  }
}
