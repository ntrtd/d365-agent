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
import { ShippingContainerRefrigerationTypeTables } from './ShippingContainerRefrigerationTypeTables';

/**
 * Request builder class for operations supported on the {@link ShippingContainerRefrigerationTypeTables} entity.
 */
export class ShippingContainerRefrigerationTypeTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingContainerRefrigerationTypeTables<T>, T> {
  /**
   * Returns a request builder for querying all `ShippingContainerRefrigerationTypeTables` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingContainerRefrigerationTypeTables` entities.
   */
  getAll(): GetAllRequestBuilder<
    ShippingContainerRefrigerationTypeTables<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ShippingContainerRefrigerationTypeTables<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ShippingContainerRefrigerationTypeTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingContainerRefrigerationTypeTables`.
   */
  create(
    entity: ShippingContainerRefrigerationTypeTables<T>
  ): CreateRequestBuilder<ShippingContainerRefrigerationTypeTables<T>, T> {
    return new CreateRequestBuilder<
      ShippingContainerRefrigerationTypeTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ShippingContainerRefrigerationTypeTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShippingContainerRefrigerationTypeTables.dataAreaId}.
   * @param refrigerationTypeId Key property. See {@link ShippingContainerRefrigerationTypeTables.refrigerationTypeId}.
   * @returns A request builder for creating requests to retrieve one `ShippingContainerRefrigerationTypeTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    refrigerationTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShippingContainerRefrigerationTypeTables<T>, T> {
    return new GetByKeyRequestBuilder<
      ShippingContainerRefrigerationTypeTables<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RefrigerationTypeId: refrigerationTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingContainerRefrigerationTypeTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingContainerRefrigerationTypeTables`.
   */
  update(
    entity: ShippingContainerRefrigerationTypeTables<T>
  ): UpdateRequestBuilder<ShippingContainerRefrigerationTypeTables<T>, T> {
    return new UpdateRequestBuilder<
      ShippingContainerRefrigerationTypeTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingContainerRefrigerationTypeTables`.
   * @param dataAreaId Key property. See {@link ShippingContainerRefrigerationTypeTables.dataAreaId}.
   * @param refrigerationTypeId Key property. See {@link ShippingContainerRefrigerationTypeTables.refrigerationTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingContainerRefrigerationTypeTables`.
   */
  delete(
    dataAreaId: string,
    refrigerationTypeId: string
  ): DeleteRequestBuilder<ShippingContainerRefrigerationTypeTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingContainerRefrigerationTypeTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingContainerRefrigerationTypeTables` by taking the entity as a parameter.
   */
  delete(
    entity: ShippingContainerRefrigerationTypeTables<T>
  ): DeleteRequestBuilder<ShippingContainerRefrigerationTypeTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    refrigerationTypeId?: string
  ): DeleteRequestBuilder<ShippingContainerRefrigerationTypeTables<T>, T> {
    return new DeleteRequestBuilder<
      ShippingContainerRefrigerationTypeTables<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShippingContainerRefrigerationTypeTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RefrigerationTypeId: refrigerationTypeId!
          }
    );
  }
}
