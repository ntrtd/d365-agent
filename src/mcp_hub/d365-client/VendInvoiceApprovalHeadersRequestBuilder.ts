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
import { VendInvoiceApprovalHeaders } from './VendInvoiceApprovalHeaders';

/**
 * Request builder class for operations supported on the {@link VendInvoiceApprovalHeaders} entity.
 */
export class VendInvoiceApprovalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceApprovalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceApprovalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceApprovalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceApprovalHeaders<T>, T> {
    return new GetAllRequestBuilder<VendInvoiceApprovalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoiceApprovalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceApprovalHeaders`.
   */
  create(
    entity: VendInvoiceApprovalHeaders<T>
  ): CreateRequestBuilder<VendInvoiceApprovalHeaders<T>, T> {
    return new CreateRequestBuilder<VendInvoiceApprovalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceApprovalHeaders` entity based on its keys.
   * @param workItemRecId Key property. See {@link VendInvoiceApprovalHeaders.workItemRecId}.
   * @param legalEntity Key property. See {@link VendInvoiceApprovalHeaders.legalEntity}.
   * @param headerReference Key property. See {@link VendInvoiceApprovalHeaders.headerReference}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceApprovalHeaders` entity based on its keys.
   */
  getByKey(
    workItemRecId: DeserializedType<T, 'Edm.Int64'>,
    legalEntity: DeserializedType<T, 'Edm.String'>,
    headerReference: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendInvoiceApprovalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoiceApprovalHeaders<T>, T>(
      this.entityApi,
      {
        WorkItemRecId: workItemRecId,
        LegalEntity: legalEntity,
        HeaderReference: headerReference
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceApprovalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceApprovalHeaders`.
   */
  update(
    entity: VendInvoiceApprovalHeaders<T>
  ): UpdateRequestBuilder<VendInvoiceApprovalHeaders<T>, T> {
    return new UpdateRequestBuilder<VendInvoiceApprovalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceApprovalHeaders`.
   * @param workItemRecId Key property. See {@link VendInvoiceApprovalHeaders.workItemRecId}.
   * @param legalEntity Key property. See {@link VendInvoiceApprovalHeaders.legalEntity}.
   * @param headerReference Key property. See {@link VendInvoiceApprovalHeaders.headerReference}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceApprovalHeaders`.
   */
  delete(
    workItemRecId: BigNumber,
    legalEntity: string,
    headerReference: string
  ): DeleteRequestBuilder<VendInvoiceApprovalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceApprovalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceApprovalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceApprovalHeaders<T>
  ): DeleteRequestBuilder<VendInvoiceApprovalHeaders<T>, T>;
  delete(
    workItemRecIdOrEntity: any,
    legalEntity?: string,
    headerReference?: string
  ): DeleteRequestBuilder<VendInvoiceApprovalHeaders<T>, T> {
    return new DeleteRequestBuilder<VendInvoiceApprovalHeaders<T>, T>(
      this.entityApi,
      workItemRecIdOrEntity instanceof VendInvoiceApprovalHeaders
        ? workItemRecIdOrEntity
        : {
            WorkItemRecId: workItemRecIdOrEntity!,
            LegalEntity: legalEntity!,
            HeaderReference: headerReference!
          }
    );
  }
}
