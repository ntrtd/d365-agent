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
import { ConsInvoicesCust } from './ConsInvoicesCust';

/**
 * Request builder class for operations supported on the {@link ConsInvoicesCust} entity.
 */
export class ConsInvoicesCustRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConsInvoicesCust<T>, T> {
  /**
   * Returns a request builder for querying all `ConsInvoicesCust` entities.
   * @returns A request builder for creating requests to retrieve all `ConsInvoicesCust` entities.
   */
  getAll(): GetAllRequestBuilder<ConsInvoicesCust<T>, T> {
    return new GetAllRequestBuilder<ConsInvoicesCust<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ConsInvoicesCust` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConsInvoicesCust`.
   */
  create(
    entity: ConsInvoicesCust<T>
  ): CreateRequestBuilder<ConsInvoicesCust<T>, T> {
    return new CreateRequestBuilder<ConsInvoicesCust<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConsInvoicesCust` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConsInvoicesCust.dataAreaId}.
   * @param consolidationId Key property. See {@link ConsInvoicesCust.consolidationId}.
   * @returns A request builder for creating requests to retrieve one `ConsInvoicesCust` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    consolidationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ConsInvoicesCust<T>, T> {
    return new GetByKeyRequestBuilder<ConsInvoicesCust<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ConsolidationId: consolidationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ConsInvoicesCust`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConsInvoicesCust`.
   */
  update(
    entity: ConsInvoicesCust<T>
  ): UpdateRequestBuilder<ConsInvoicesCust<T>, T> {
    return new UpdateRequestBuilder<ConsInvoicesCust<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConsInvoicesCust`.
   * @param dataAreaId Key property. See {@link ConsInvoicesCust.dataAreaId}.
   * @param consolidationId Key property. See {@link ConsInvoicesCust.consolidationId}.
   * @returns A request builder for creating requests that delete an entity of type `ConsInvoicesCust`.
   */
  delete(
    dataAreaId: string,
    consolidationId: string
  ): DeleteRequestBuilder<ConsInvoicesCust<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConsInvoicesCust`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConsInvoicesCust` by taking the entity as a parameter.
   */
  delete(
    entity: ConsInvoicesCust<T>
  ): DeleteRequestBuilder<ConsInvoicesCust<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    consolidationId?: string
  ): DeleteRequestBuilder<ConsInvoicesCust<T>, T> {
    return new DeleteRequestBuilder<ConsInvoicesCust<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConsInvoicesCust
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConsolidationId: consolidationId!
          }
    );
  }
}
