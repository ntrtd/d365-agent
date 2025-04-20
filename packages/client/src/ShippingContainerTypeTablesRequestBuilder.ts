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
import { ShippingContainerTypeTables } from './ShippingContainerTypeTables';

/**
 * Request builder class for operations supported on the {@link ShippingContainerTypeTables} entity.
 */
export class ShippingContainerTypeTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingContainerTypeTables<T>, T> {
  /**
   * Returns a request builder for querying all `ShippingContainerTypeTables` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingContainerTypeTables` entities.
   */
  getAll(): GetAllRequestBuilder<ShippingContainerTypeTables<T>, T> {
    return new GetAllRequestBuilder<ShippingContainerTypeTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShippingContainerTypeTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingContainerTypeTables`.
   */
  create(
    entity: ShippingContainerTypeTables<T>
  ): CreateRequestBuilder<ShippingContainerTypeTables<T>, T> {
    return new CreateRequestBuilder<ShippingContainerTypeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShippingContainerTypeTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShippingContainerTypeTables.dataAreaId}.
   * @param shippingContainerTypeId Key property. See {@link ShippingContainerTypeTables.shippingContainerTypeId}.
   * @returns A request builder for creating requests to retrieve one `ShippingContainerTypeTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shippingContainerTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShippingContainerTypeTables<T>, T> {
    return new GetByKeyRequestBuilder<ShippingContainerTypeTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShippingContainerTypeId: shippingContainerTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingContainerTypeTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingContainerTypeTables`.
   */
  update(
    entity: ShippingContainerTypeTables<T>
  ): UpdateRequestBuilder<ShippingContainerTypeTables<T>, T> {
    return new UpdateRequestBuilder<ShippingContainerTypeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingContainerTypeTables`.
   * @param dataAreaId Key property. See {@link ShippingContainerTypeTables.dataAreaId}.
   * @param shippingContainerTypeId Key property. See {@link ShippingContainerTypeTables.shippingContainerTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingContainerTypeTables`.
   */
  delete(
    dataAreaId: string,
    shippingContainerTypeId: string
  ): DeleteRequestBuilder<ShippingContainerTypeTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingContainerTypeTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingContainerTypeTables` by taking the entity as a parameter.
   */
  delete(
    entity: ShippingContainerTypeTables<T>
  ): DeleteRequestBuilder<ShippingContainerTypeTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shippingContainerTypeId?: string
  ): DeleteRequestBuilder<ShippingContainerTypeTables<T>, T> {
    return new DeleteRequestBuilder<ShippingContainerTypeTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShippingContainerTypeTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShippingContainerTypeId: shippingContainerTypeId!
          }
    );
  }
}
