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
import { ShippingContainerTables } from './ShippingContainerTables';

/**
 * Request builder class for operations supported on the {@link ShippingContainerTables} entity.
 */
export class ShippingContainerTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingContainerTables<T>, T> {
  /**
   * Returns a request builder for querying all `ShippingContainerTables` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingContainerTables` entities.
   */
  getAll(): GetAllRequestBuilder<ShippingContainerTables<T>, T> {
    return new GetAllRequestBuilder<ShippingContainerTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShippingContainerTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingContainerTables`.
   */
  create(
    entity: ShippingContainerTables<T>
  ): CreateRequestBuilder<ShippingContainerTables<T>, T> {
    return new CreateRequestBuilder<ShippingContainerTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShippingContainerTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShippingContainerTables.dataAreaId}.
   * @param shippingContainerId Key property. See {@link ShippingContainerTables.shippingContainerId}.
   * @returns A request builder for creating requests to retrieve one `ShippingContainerTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shippingContainerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShippingContainerTables<T>, T> {
    return new GetByKeyRequestBuilder<ShippingContainerTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShippingContainerId: shippingContainerId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingContainerTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingContainerTables`.
   */
  update(
    entity: ShippingContainerTables<T>
  ): UpdateRequestBuilder<ShippingContainerTables<T>, T> {
    return new UpdateRequestBuilder<ShippingContainerTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingContainerTables`.
   * @param dataAreaId Key property. See {@link ShippingContainerTables.dataAreaId}.
   * @param shippingContainerId Key property. See {@link ShippingContainerTables.shippingContainerId}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingContainerTables`.
   */
  delete(
    dataAreaId: string,
    shippingContainerId: string
  ): DeleteRequestBuilder<ShippingContainerTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingContainerTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingContainerTables` by taking the entity as a parameter.
   */
  delete(
    entity: ShippingContainerTables<T>
  ): DeleteRequestBuilder<ShippingContainerTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shippingContainerId?: string
  ): DeleteRequestBuilder<ShippingContainerTables<T>, T> {
    return new DeleteRequestBuilder<ShippingContainerTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShippingContainerTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShippingContainerId: shippingContainerId!
          }
    );
  }
}
