/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { LtmCustInvoiceTables } from './LtmCustInvoiceTables';

/**
 * Request builder class for operations supported on the {@link LtmCustInvoiceTables} entity.
 */
export class LtmCustInvoiceTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmCustInvoiceTables<T>, T> {
  /**
   * Returns a request builder for querying all `LtmCustInvoiceTables` entities.
   * @returns A request builder for creating requests to retrieve all `LtmCustInvoiceTables` entities.
   */
  getAll(): GetAllRequestBuilder<LtmCustInvoiceTables<T>, T> {
    return new GetAllRequestBuilder<LtmCustInvoiceTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmCustInvoiceTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmCustInvoiceTables`.
   */
  create(
    entity: LtmCustInvoiceTables<T>
  ): CreateRequestBuilder<LtmCustInvoiceTables<T>, T> {
    return new CreateRequestBuilder<LtmCustInvoiceTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmCustInvoiceTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmCustInvoiceTables.dataAreaId}.
   * @param completeDocumentNum Key property. See {@link LtmCustInvoiceTables.completeDocumentNum}.
   * @param ledgerVoucher Key property. See {@link LtmCustInvoiceTables.ledgerVoucher}.
   * @returns A request builder for creating requests to retrieve one `LtmCustInvoiceTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    completeDocumentNum: DeserializedType<T, 'Edm.String'>,
    ledgerVoucher: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmCustInvoiceTables<T>, T> {
    return new GetByKeyRequestBuilder<LtmCustInvoiceTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CompleteDocumentNum: completeDocumentNum,
        LedgerVoucher: ledgerVoucher
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmCustInvoiceTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmCustInvoiceTables`.
   */
  update(
    entity: LtmCustInvoiceTables<T>
  ): UpdateRequestBuilder<LtmCustInvoiceTables<T>, T> {
    return new UpdateRequestBuilder<LtmCustInvoiceTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmCustInvoiceTables`.
   * @param dataAreaId Key property. See {@link LtmCustInvoiceTables.dataAreaId}.
   * @param completeDocumentNum Key property. See {@link LtmCustInvoiceTables.completeDocumentNum}.
   * @param ledgerVoucher Key property. See {@link LtmCustInvoiceTables.ledgerVoucher}.
   * @returns A request builder for creating requests that delete an entity of type `LtmCustInvoiceTables`.
   */
  delete(
    dataAreaId: string,
    completeDocumentNum: string,
    ledgerVoucher: string
  ): DeleteRequestBuilder<LtmCustInvoiceTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmCustInvoiceTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmCustInvoiceTables` by taking the entity as a parameter.
   */
  delete(
    entity: LtmCustInvoiceTables<T>
  ): DeleteRequestBuilder<LtmCustInvoiceTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    completeDocumentNum?: string,
    ledgerVoucher?: string
  ): DeleteRequestBuilder<LtmCustInvoiceTables<T>, T> {
    return new DeleteRequestBuilder<LtmCustInvoiceTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmCustInvoiceTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CompleteDocumentNum: completeDocumentNum!,
            LedgerVoucher: ledgerVoucher!
          }
    );
  }
}
