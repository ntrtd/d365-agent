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
import { RetailFormLayouts } from './RetailFormLayouts';

/**
 * Request builder class for operations supported on the {@link RetailFormLayouts} entity.
 */
export class RetailFormLayoutsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailFormLayouts<T>, T> {
  /**
   * Returns a request builder for querying all `RetailFormLayouts` entities.
   * @returns A request builder for creating requests to retrieve all `RetailFormLayouts` entities.
   */
  getAll(): GetAllRequestBuilder<RetailFormLayouts<T>, T> {
    return new GetAllRequestBuilder<RetailFormLayouts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailFormLayouts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailFormLayouts`.
   */
  create(
    entity: RetailFormLayouts<T>
  ): CreateRequestBuilder<RetailFormLayouts<T>, T> {
    return new CreateRequestBuilder<RetailFormLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailFormLayouts` entity based on its keys.
   * @param formLayoutId Key property. See {@link RetailFormLayouts.formLayoutId}.
   * @returns A request builder for creating requests to retrieve one `RetailFormLayouts` entity based on its keys.
   */
  getByKey(
    formLayoutId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailFormLayouts<T>, T> {
    return new GetByKeyRequestBuilder<RetailFormLayouts<T>, T>(this.entityApi, {
      FormLayoutId: formLayoutId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailFormLayouts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailFormLayouts`.
   */
  update(
    entity: RetailFormLayouts<T>
  ): UpdateRequestBuilder<RetailFormLayouts<T>, T> {
    return new UpdateRequestBuilder<RetailFormLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailFormLayouts`.
   * @param formLayoutId Key property. See {@link RetailFormLayouts.formLayoutId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailFormLayouts`.
   */
  delete(formLayoutId: string): DeleteRequestBuilder<RetailFormLayouts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailFormLayouts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailFormLayouts` by taking the entity as a parameter.
   */
  delete(
    entity: RetailFormLayouts<T>
  ): DeleteRequestBuilder<RetailFormLayouts<T>, T>;
  delete(
    formLayoutIdOrEntity: any
  ): DeleteRequestBuilder<RetailFormLayouts<T>, T> {
    return new DeleteRequestBuilder<RetailFormLayouts<T>, T>(
      this.entityApi,
      formLayoutIdOrEntity instanceof RetailFormLayouts
        ? formLayoutIdOrEntity
        : { FormLayoutId: formLayoutIdOrEntity! }
    );
  }
}
