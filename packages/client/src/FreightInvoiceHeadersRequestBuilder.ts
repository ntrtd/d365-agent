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
import { FreightInvoiceHeaders } from './FreightInvoiceHeaders';

/**
 * Request builder class for operations supported on the {@link FreightInvoiceHeaders} entity.
 */
export class FreightInvoiceHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FreightInvoiceHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `FreightInvoiceHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `FreightInvoiceHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<FreightInvoiceHeaders<T>, T> {
    return new GetAllRequestBuilder<FreightInvoiceHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FreightInvoiceHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FreightInvoiceHeaders`.
   */
  create(
    entity: FreightInvoiceHeaders<T>
  ): CreateRequestBuilder<FreightInvoiceHeaders<T>, T> {
    return new CreateRequestBuilder<FreightInvoiceHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FreightInvoiceHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link FreightInvoiceHeaders.dataAreaId}.
   * @param internalInvoiceNumber Key property. See {@link FreightInvoiceHeaders.internalInvoiceNumber}.
   * @returns A request builder for creating requests to retrieve one `FreightInvoiceHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    internalInvoiceNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FreightInvoiceHeaders<T>, T> {
    return new GetByKeyRequestBuilder<FreightInvoiceHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InternalInvoiceNumber: internalInvoiceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FreightInvoiceHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FreightInvoiceHeaders`.
   */
  update(
    entity: FreightInvoiceHeaders<T>
  ): UpdateRequestBuilder<FreightInvoiceHeaders<T>, T> {
    return new UpdateRequestBuilder<FreightInvoiceHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FreightInvoiceHeaders`.
   * @param dataAreaId Key property. See {@link FreightInvoiceHeaders.dataAreaId}.
   * @param internalInvoiceNumber Key property. See {@link FreightInvoiceHeaders.internalInvoiceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FreightInvoiceHeaders`.
   */
  delete(
    dataAreaId: string,
    internalInvoiceNumber: string
  ): DeleteRequestBuilder<FreightInvoiceHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FreightInvoiceHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FreightInvoiceHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: FreightInvoiceHeaders<T>
  ): DeleteRequestBuilder<FreightInvoiceHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    internalInvoiceNumber?: string
  ): DeleteRequestBuilder<FreightInvoiceHeaders<T>, T> {
    return new DeleteRequestBuilder<FreightInvoiceHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FreightInvoiceHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InternalInvoiceNumber: internalInvoiceNumber!
          }
    );
  }
}
