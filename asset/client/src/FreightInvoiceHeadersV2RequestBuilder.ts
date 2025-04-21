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
import { FreightInvoiceHeadersV2 } from './FreightInvoiceHeadersV2';

/**
 * Request builder class for operations supported on the {@link FreightInvoiceHeadersV2} entity.
 */
export class FreightInvoiceHeadersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FreightInvoiceHeadersV2<T>, T> {
  /**
   * Returns a request builder for querying all `FreightInvoiceHeadersV2` entities.
   * @returns A request builder for creating requests to retrieve all `FreightInvoiceHeadersV2` entities.
   */
  getAll(): GetAllRequestBuilder<FreightInvoiceHeadersV2<T>, T> {
    return new GetAllRequestBuilder<FreightInvoiceHeadersV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FreightInvoiceHeadersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FreightInvoiceHeadersV2`.
   */
  create(
    entity: FreightInvoiceHeadersV2<T>
  ): CreateRequestBuilder<FreightInvoiceHeadersV2<T>, T> {
    return new CreateRequestBuilder<FreightInvoiceHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FreightInvoiceHeadersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link FreightInvoiceHeadersV2.dataAreaId}.
   * @param internalInvoiceNumber Key property. See {@link FreightInvoiceHeadersV2.internalInvoiceNumber}.
   * @returns A request builder for creating requests to retrieve one `FreightInvoiceHeadersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    internalInvoiceNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FreightInvoiceHeadersV2<T>, T> {
    return new GetByKeyRequestBuilder<FreightInvoiceHeadersV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InternalInvoiceNumber: internalInvoiceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FreightInvoiceHeadersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FreightInvoiceHeadersV2`.
   */
  update(
    entity: FreightInvoiceHeadersV2<T>
  ): UpdateRequestBuilder<FreightInvoiceHeadersV2<T>, T> {
    return new UpdateRequestBuilder<FreightInvoiceHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FreightInvoiceHeadersV2`.
   * @param dataAreaId Key property. See {@link FreightInvoiceHeadersV2.dataAreaId}.
   * @param internalInvoiceNumber Key property. See {@link FreightInvoiceHeadersV2.internalInvoiceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FreightInvoiceHeadersV2`.
   */
  delete(
    dataAreaId: string,
    internalInvoiceNumber: string
  ): DeleteRequestBuilder<FreightInvoiceHeadersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FreightInvoiceHeadersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FreightInvoiceHeadersV2` by taking the entity as a parameter.
   */
  delete(
    entity: FreightInvoiceHeadersV2<T>
  ): DeleteRequestBuilder<FreightInvoiceHeadersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    internalInvoiceNumber?: string
  ): DeleteRequestBuilder<FreightInvoiceHeadersV2<T>, T> {
    return new DeleteRequestBuilder<FreightInvoiceHeadersV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FreightInvoiceHeadersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InternalInvoiceNumber: internalInvoiceNumber!
          }
    );
  }
}
