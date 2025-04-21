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
import { ConsInvoicesVend } from './ConsInvoicesVend';

/**
 * Request builder class for operations supported on the {@link ConsInvoicesVend} entity.
 */
export class ConsInvoicesVendRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConsInvoicesVend<T>, T> {
  /**
   * Returns a request builder for querying all `ConsInvoicesVend` entities.
   * @returns A request builder for creating requests to retrieve all `ConsInvoicesVend` entities.
   */
  getAll(): GetAllRequestBuilder<ConsInvoicesVend<T>, T> {
    return new GetAllRequestBuilder<ConsInvoicesVend<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ConsInvoicesVend` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConsInvoicesVend`.
   */
  create(
    entity: ConsInvoicesVend<T>
  ): CreateRequestBuilder<ConsInvoicesVend<T>, T> {
    return new CreateRequestBuilder<ConsInvoicesVend<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConsInvoicesVend` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConsInvoicesVend.dataAreaId}.
   * @param consolidationId Key property. See {@link ConsInvoicesVend.consolidationId}.
   * @returns A request builder for creating requests to retrieve one `ConsInvoicesVend` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    consolidationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ConsInvoicesVend<T>, T> {
    return new GetByKeyRequestBuilder<ConsInvoicesVend<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ConsolidationId: consolidationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ConsInvoicesVend`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConsInvoicesVend`.
   */
  update(
    entity: ConsInvoicesVend<T>
  ): UpdateRequestBuilder<ConsInvoicesVend<T>, T> {
    return new UpdateRequestBuilder<ConsInvoicesVend<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConsInvoicesVend`.
   * @param dataAreaId Key property. See {@link ConsInvoicesVend.dataAreaId}.
   * @param consolidationId Key property. See {@link ConsInvoicesVend.consolidationId}.
   * @returns A request builder for creating requests that delete an entity of type `ConsInvoicesVend`.
   */
  delete(
    dataAreaId: string,
    consolidationId: string
  ): DeleteRequestBuilder<ConsInvoicesVend<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConsInvoicesVend`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConsInvoicesVend` by taking the entity as a parameter.
   */
  delete(
    entity: ConsInvoicesVend<T>
  ): DeleteRequestBuilder<ConsInvoicesVend<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    consolidationId?: string
  ): DeleteRequestBuilder<ConsInvoicesVend<T>, T> {
    return new DeleteRequestBuilder<ConsInvoicesVend<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConsInvoicesVend
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConsolidationId: consolidationId!
          }
    );
  }
}
