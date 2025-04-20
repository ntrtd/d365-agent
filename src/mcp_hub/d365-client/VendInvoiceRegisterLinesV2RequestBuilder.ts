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
import { VendInvoiceRegisterLinesV2 } from './VendInvoiceRegisterLinesV2';

/**
 * Request builder class for operations supported on the {@link VendInvoiceRegisterLinesV2} entity.
 */
export class VendInvoiceRegisterLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceRegisterLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceRegisterLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceRegisterLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceRegisterLinesV2<T>, T> {
    return new GetAllRequestBuilder<VendInvoiceRegisterLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoiceRegisterLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceRegisterLinesV2`.
   */
  create(
    entity: VendInvoiceRegisterLinesV2<T>
  ): CreateRequestBuilder<VendInvoiceRegisterLinesV2<T>, T> {
    return new CreateRequestBuilder<VendInvoiceRegisterLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceRegisterLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceRegisterLinesV2.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link VendInvoiceRegisterLinesV2.journalBatchNumber}.
   * @param lineNumber Key property. See {@link VendInvoiceRegisterLinesV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceRegisterLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<VendInvoiceRegisterLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoiceRegisterLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceRegisterLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceRegisterLinesV2`.
   */
  update(
    entity: VendInvoiceRegisterLinesV2<T>
  ): UpdateRequestBuilder<VendInvoiceRegisterLinesV2<T>, T> {
    return new UpdateRequestBuilder<VendInvoiceRegisterLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceRegisterLinesV2`.
   * @param dataAreaId Key property. See {@link VendInvoiceRegisterLinesV2.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link VendInvoiceRegisterLinesV2.journalBatchNumber}.
   * @param lineNumber Key property. See {@link VendInvoiceRegisterLinesV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceRegisterLinesV2`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<VendInvoiceRegisterLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceRegisterLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceRegisterLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceRegisterLinesV2<T>
  ): DeleteRequestBuilder<VendInvoiceRegisterLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<VendInvoiceRegisterLinesV2<T>, T> {
    return new DeleteRequestBuilder<VendInvoiceRegisterLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceRegisterLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
