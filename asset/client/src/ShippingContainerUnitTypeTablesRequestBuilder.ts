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
import { ShippingContainerUnitTypeTables } from './ShippingContainerUnitTypeTables';

/**
 * Request builder class for operations supported on the {@link ShippingContainerUnitTypeTables} entity.
 */
export class ShippingContainerUnitTypeTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingContainerUnitTypeTables<T>, T> {
  /**
   * Returns a request builder for querying all `ShippingContainerUnitTypeTables` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingContainerUnitTypeTables` entities.
   */
  getAll(): GetAllRequestBuilder<ShippingContainerUnitTypeTables<T>, T> {
    return new GetAllRequestBuilder<ShippingContainerUnitTypeTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShippingContainerUnitTypeTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingContainerUnitTypeTables`.
   */
  create(
    entity: ShippingContainerUnitTypeTables<T>
  ): CreateRequestBuilder<ShippingContainerUnitTypeTables<T>, T> {
    return new CreateRequestBuilder<ShippingContainerUnitTypeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShippingContainerUnitTypeTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShippingContainerUnitTypeTables.dataAreaId}.
   * @param unitTypeId Key property. See {@link ShippingContainerUnitTypeTables.unitTypeId}.
   * @returns A request builder for creating requests to retrieve one `ShippingContainerUnitTypeTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    unitTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShippingContainerUnitTypeTables<T>, T> {
    return new GetByKeyRequestBuilder<ShippingContainerUnitTypeTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        UnitTypeId: unitTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingContainerUnitTypeTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingContainerUnitTypeTables`.
   */
  update(
    entity: ShippingContainerUnitTypeTables<T>
  ): UpdateRequestBuilder<ShippingContainerUnitTypeTables<T>, T> {
    return new UpdateRequestBuilder<ShippingContainerUnitTypeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingContainerUnitTypeTables`.
   * @param dataAreaId Key property. See {@link ShippingContainerUnitTypeTables.dataAreaId}.
   * @param unitTypeId Key property. See {@link ShippingContainerUnitTypeTables.unitTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingContainerUnitTypeTables`.
   */
  delete(
    dataAreaId: string,
    unitTypeId: string
  ): DeleteRequestBuilder<ShippingContainerUnitTypeTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingContainerUnitTypeTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingContainerUnitTypeTables` by taking the entity as a parameter.
   */
  delete(
    entity: ShippingContainerUnitTypeTables<T>
  ): DeleteRequestBuilder<ShippingContainerUnitTypeTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    unitTypeId?: string
  ): DeleteRequestBuilder<ShippingContainerUnitTypeTables<T>, T> {
    return new DeleteRequestBuilder<ShippingContainerUnitTypeTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShippingContainerUnitTypeTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            UnitTypeId: unitTypeId!
          }
    );
  }
}
