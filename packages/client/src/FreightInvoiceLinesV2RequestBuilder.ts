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
import { FreightInvoiceLinesV2 } from './FreightInvoiceLinesV2';

/**
 * Request builder class for operations supported on the {@link FreightInvoiceLinesV2} entity.
 */
export class FreightInvoiceLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FreightInvoiceLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `FreightInvoiceLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `FreightInvoiceLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<FreightInvoiceLinesV2<T>, T> {
    return new GetAllRequestBuilder<FreightInvoiceLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FreightInvoiceLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FreightInvoiceLinesV2`.
   */
  create(
    entity: FreightInvoiceLinesV2<T>
  ): CreateRequestBuilder<FreightInvoiceLinesV2<T>, T> {
    return new CreateRequestBuilder<FreightInvoiceLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FreightInvoiceLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link FreightInvoiceLinesV2.dataAreaId}.
   * @param internalInvoiceNumber Key property. See {@link FreightInvoiceLinesV2.internalInvoiceNumber}.
   * @param lineNumber Key property. See {@link FreightInvoiceLinesV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `FreightInvoiceLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    internalInvoiceNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<FreightInvoiceLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<FreightInvoiceLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InternalInvoiceNumber: internalInvoiceNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FreightInvoiceLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FreightInvoiceLinesV2`.
   */
  update(
    entity: FreightInvoiceLinesV2<T>
  ): UpdateRequestBuilder<FreightInvoiceLinesV2<T>, T> {
    return new UpdateRequestBuilder<FreightInvoiceLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FreightInvoiceLinesV2`.
   * @param dataAreaId Key property. See {@link FreightInvoiceLinesV2.dataAreaId}.
   * @param internalInvoiceNumber Key property. See {@link FreightInvoiceLinesV2.internalInvoiceNumber}.
   * @param lineNumber Key property. See {@link FreightInvoiceLinesV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FreightInvoiceLinesV2`.
   */
  delete(
    dataAreaId: string,
    internalInvoiceNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<FreightInvoiceLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FreightInvoiceLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FreightInvoiceLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: FreightInvoiceLinesV2<T>
  ): DeleteRequestBuilder<FreightInvoiceLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    internalInvoiceNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<FreightInvoiceLinesV2<T>, T> {
    return new DeleteRequestBuilder<FreightInvoiceLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FreightInvoiceLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InternalInvoiceNumber: internalInvoiceNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
