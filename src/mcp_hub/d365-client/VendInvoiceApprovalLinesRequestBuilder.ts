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
import { VendInvoiceApprovalLines } from './VendInvoiceApprovalLines';

/**
 * Request builder class for operations supported on the {@link VendInvoiceApprovalLines} entity.
 */
export class VendInvoiceApprovalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceApprovalLines<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceApprovalLines` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceApprovalLines` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceApprovalLines<T>, T> {
    return new GetAllRequestBuilder<VendInvoiceApprovalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoiceApprovalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceApprovalLines`.
   */
  create(
    entity: VendInvoiceApprovalLines<T>
  ): CreateRequestBuilder<VendInvoiceApprovalLines<T>, T> {
    return new CreateRequestBuilder<VendInvoiceApprovalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceApprovalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceApprovalLines.dataAreaId}.
   * @param workItemRecId Key property. See {@link VendInvoiceApprovalLines.workItemRecId}.
   * @param legalEntity Key property. See {@link VendInvoiceApprovalLines.legalEntity}.
   * @param headerReference Key property. See {@link VendInvoiceApprovalLines.headerReference}.
   * @param lineNumber Key property. See {@link VendInvoiceApprovalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceApprovalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workItemRecId: DeserializedType<T, 'Edm.Int64'>,
    legalEntity: DeserializedType<T, 'Edm.String'>,
    headerReference: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<VendInvoiceApprovalLines<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoiceApprovalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkItemRecId: workItemRecId,
        LegalEntity: legalEntity,
        HeaderReference: headerReference,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceApprovalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceApprovalLines`.
   */
  update(
    entity: VendInvoiceApprovalLines<T>
  ): UpdateRequestBuilder<VendInvoiceApprovalLines<T>, T> {
    return new UpdateRequestBuilder<VendInvoiceApprovalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceApprovalLines`.
   * @param dataAreaId Key property. See {@link VendInvoiceApprovalLines.dataAreaId}.
   * @param workItemRecId Key property. See {@link VendInvoiceApprovalLines.workItemRecId}.
   * @param legalEntity Key property. See {@link VendInvoiceApprovalLines.legalEntity}.
   * @param headerReference Key property. See {@link VendInvoiceApprovalLines.headerReference}.
   * @param lineNumber Key property. See {@link VendInvoiceApprovalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceApprovalLines`.
   */
  delete(
    dataAreaId: string,
    workItemRecId: BigNumber,
    legalEntity: string,
    headerReference: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<VendInvoiceApprovalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceApprovalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceApprovalLines` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceApprovalLines<T>
  ): DeleteRequestBuilder<VendInvoiceApprovalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workItemRecId?: BigNumber,
    legalEntity?: string,
    headerReference?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<VendInvoiceApprovalLines<T>, T> {
    return new DeleteRequestBuilder<VendInvoiceApprovalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceApprovalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkItemRecId: workItemRecId!,
            LegalEntity: legalEntity!,
            HeaderReference: headerReference!,
            LineNumber: lineNumber!
          }
    );
  }
}
