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
import { FreeTextInvoiceHeaders } from './FreeTextInvoiceHeaders';

/**
 * Request builder class for operations supported on the {@link FreeTextInvoiceHeaders} entity.
 */
export class FreeTextInvoiceHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FreeTextInvoiceHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `FreeTextInvoiceHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `FreeTextInvoiceHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<FreeTextInvoiceHeaders<T>, T> {
    return new GetAllRequestBuilder<FreeTextInvoiceHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FreeTextInvoiceHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FreeTextInvoiceHeaders`.
   */
  create(
    entity: FreeTextInvoiceHeaders<T>
  ): CreateRequestBuilder<FreeTextInvoiceHeaders<T>, T> {
    return new CreateRequestBuilder<FreeTextInvoiceHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FreeTextInvoiceHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link FreeTextInvoiceHeaders.dataAreaId}.
   * @param invoiceIdentifier Key property. See {@link FreeTextInvoiceHeaders.invoiceIdentifier}.
   * @returns A request builder for creating requests to retrieve one `FreeTextInvoiceHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceIdentifier: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<FreeTextInvoiceHeaders<T>, T> {
    return new GetByKeyRequestBuilder<FreeTextInvoiceHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InvoiceIdentifier: invoiceIdentifier
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FreeTextInvoiceHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FreeTextInvoiceHeaders`.
   */
  update(
    entity: FreeTextInvoiceHeaders<T>
  ): UpdateRequestBuilder<FreeTextInvoiceHeaders<T>, T> {
    return new UpdateRequestBuilder<FreeTextInvoiceHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FreeTextInvoiceHeaders`.
   * @param dataAreaId Key property. See {@link FreeTextInvoiceHeaders.dataAreaId}.
   * @param invoiceIdentifier Key property. See {@link FreeTextInvoiceHeaders.invoiceIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `FreeTextInvoiceHeaders`.
   */
  delete(
    dataAreaId: string,
    invoiceIdentifier: BigNumber
  ): DeleteRequestBuilder<FreeTextInvoiceHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FreeTextInvoiceHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FreeTextInvoiceHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: FreeTextInvoiceHeaders<T>
  ): DeleteRequestBuilder<FreeTextInvoiceHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceIdentifier?: BigNumber
  ): DeleteRequestBuilder<FreeTextInvoiceHeaders<T>, T> {
    return new DeleteRequestBuilder<FreeTextInvoiceHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FreeTextInvoiceHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InvoiceIdentifier: invoiceIdentifier!
          }
    );
  }
}
