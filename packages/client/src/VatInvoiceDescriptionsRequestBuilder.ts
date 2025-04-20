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
import { VatInvoiceDescriptions } from './VatInvoiceDescriptions';

/**
 * Request builder class for operations supported on the {@link VatInvoiceDescriptions} entity.
 */
export class VatInvoiceDescriptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VatInvoiceDescriptions<T>, T> {
  /**
   * Returns a request builder for querying all `VatInvoiceDescriptions` entities.
   * @returns A request builder for creating requests to retrieve all `VatInvoiceDescriptions` entities.
   */
  getAll(): GetAllRequestBuilder<VatInvoiceDescriptions<T>, T> {
    return new GetAllRequestBuilder<VatInvoiceDescriptions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VatInvoiceDescriptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VatInvoiceDescriptions`.
   */
  create(
    entity: VatInvoiceDescriptions<T>
  ): CreateRequestBuilder<VatInvoiceDescriptions<T>, T> {
    return new CreateRequestBuilder<VatInvoiceDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VatInvoiceDescriptions` entity based on its keys.
   * @param dataAreaId Key property. See {@link VatInvoiceDescriptions.dataAreaId}.
   * @param id Key property. See {@link VatInvoiceDescriptions.id}.
   * @returns A request builder for creating requests to retrieve one `VatInvoiceDescriptions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VatInvoiceDescriptions<T>, T> {
    return new GetByKeyRequestBuilder<VatInvoiceDescriptions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Id: id
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VatInvoiceDescriptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VatInvoiceDescriptions`.
   */
  update(
    entity: VatInvoiceDescriptions<T>
  ): UpdateRequestBuilder<VatInvoiceDescriptions<T>, T> {
    return new UpdateRequestBuilder<VatInvoiceDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VatInvoiceDescriptions`.
   * @param dataAreaId Key property. See {@link VatInvoiceDescriptions.dataAreaId}.
   * @param id Key property. See {@link VatInvoiceDescriptions.id}.
   * @returns A request builder for creating requests that delete an entity of type `VatInvoiceDescriptions`.
   */
  delete(
    dataAreaId: string,
    id: string
  ): DeleteRequestBuilder<VatInvoiceDescriptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VatInvoiceDescriptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VatInvoiceDescriptions` by taking the entity as a parameter.
   */
  delete(
    entity: VatInvoiceDescriptions<T>
  ): DeleteRequestBuilder<VatInvoiceDescriptions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    id?: string
  ): DeleteRequestBuilder<VatInvoiceDescriptions<T>, T> {
    return new DeleteRequestBuilder<VatInvoiceDescriptions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VatInvoiceDescriptions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Id: id!
          }
    );
  }
}
