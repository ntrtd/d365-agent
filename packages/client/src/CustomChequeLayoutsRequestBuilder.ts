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
import { CustomChequeLayouts } from './CustomChequeLayouts';

/**
 * Request builder class for operations supported on the {@link CustomChequeLayouts} entity.
 */
export class CustomChequeLayoutsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomChequeLayouts<T>, T> {
  /**
   * Returns a request builder for querying all `CustomChequeLayouts` entities.
   * @returns A request builder for creating requests to retrieve all `CustomChequeLayouts` entities.
   */
  getAll(): GetAllRequestBuilder<CustomChequeLayouts<T>, T> {
    return new GetAllRequestBuilder<CustomChequeLayouts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomChequeLayouts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomChequeLayouts`.
   */
  create(
    entity: CustomChequeLayouts<T>
  ): CreateRequestBuilder<CustomChequeLayouts<T>, T> {
    return new CreateRequestBuilder<CustomChequeLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomChequeLayouts` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomChequeLayouts.dataAreaId}.
   * @param layoutId Key property. See {@link CustomChequeLayouts.layoutId}.
   * @returns A request builder for creating requests to retrieve one `CustomChequeLayouts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    layoutId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomChequeLayouts<T>, T> {
    return new GetByKeyRequestBuilder<CustomChequeLayouts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LayoutId: layoutId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomChequeLayouts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomChequeLayouts`.
   */
  update(
    entity: CustomChequeLayouts<T>
  ): UpdateRequestBuilder<CustomChequeLayouts<T>, T> {
    return new UpdateRequestBuilder<CustomChequeLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomChequeLayouts`.
   * @param dataAreaId Key property. See {@link CustomChequeLayouts.dataAreaId}.
   * @param layoutId Key property. See {@link CustomChequeLayouts.layoutId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomChequeLayouts`.
   */
  delete(
    dataAreaId: string,
    layoutId: string
  ): DeleteRequestBuilder<CustomChequeLayouts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomChequeLayouts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomChequeLayouts` by taking the entity as a parameter.
   */
  delete(
    entity: CustomChequeLayouts<T>
  ): DeleteRequestBuilder<CustomChequeLayouts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    layoutId?: string
  ): DeleteRequestBuilder<CustomChequeLayouts<T>, T> {
    return new DeleteRequestBuilder<CustomChequeLayouts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomChequeLayouts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LayoutId: layoutId!
          }
    );
  }
}
