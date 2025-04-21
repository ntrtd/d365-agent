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
import { InventoryProfileCustomerVendorLedgers } from './InventoryProfileCustomerVendorLedgers';
import { InventProfileTypeAllRu } from './InventProfileTypeAllRu';
import { InventProfileTypeRu } from './InventProfileTypeRu';

/**
 * Request builder class for operations supported on the {@link InventoryProfileCustomerVendorLedgers} entity.
 */
export class InventoryProfileCustomerVendorLedgersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryProfileCustomerVendorLedgers<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryProfileCustomerVendorLedgers` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryProfileCustomerVendorLedgers` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryProfileCustomerVendorLedgers<T>, T> {
    return new GetAllRequestBuilder<
      InventoryProfileCustomerVendorLedgers<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventoryProfileCustomerVendorLedgers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryProfileCustomerVendorLedgers`.
   */
  create(
    entity: InventoryProfileCustomerVendorLedgers<T>
  ): CreateRequestBuilder<InventoryProfileCustomerVendorLedgers<T>, T> {
    return new CreateRequestBuilder<
      InventoryProfileCustomerVendorLedgers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InventoryProfileCustomerVendorLedgers` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryProfileCustomerVendorLedgers.dataAreaId}.
   * @param inventoryProfileRelation Key property. See {@link InventoryProfileCustomerVendorLedgers.inventoryProfileRelation}.
   * @param inventoryProfileId Key property. See {@link InventoryProfileCustomerVendorLedgers.inventoryProfileId}.
   * @param kindOfActivity Key property. See {@link InventoryProfileCustomerVendorLedgers.kindOfActivity}.
   * @returns A request builder for creating requests to retrieve one `InventoryProfileCustomerVendorLedgers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryProfileRelation: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.InventProfileTypeAll_RU'
    >,
    inventoryProfileId: DeserializedType<T, 'Edm.String'>,
    kindOfActivity: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.InventProfileType_RU'
    >
  ): GetByKeyRequestBuilder<InventoryProfileCustomerVendorLedgers<T>, T> {
    return new GetByKeyRequestBuilder<
      InventoryProfileCustomerVendorLedgers<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      InventoryProfileRelation: inventoryProfileRelation,
      InventoryProfileId: inventoryProfileId,
      KindOfActivity: kindOfActivity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryProfileCustomerVendorLedgers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryProfileCustomerVendorLedgers`.
   */
  update(
    entity: InventoryProfileCustomerVendorLedgers<T>
  ): UpdateRequestBuilder<InventoryProfileCustomerVendorLedgers<T>, T> {
    return new UpdateRequestBuilder<
      InventoryProfileCustomerVendorLedgers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryProfileCustomerVendorLedgers`.
   * @param dataAreaId Key property. See {@link InventoryProfileCustomerVendorLedgers.dataAreaId}.
   * @param inventoryProfileRelation Key property. See {@link InventoryProfileCustomerVendorLedgers.inventoryProfileRelation}.
   * @param inventoryProfileId Key property. See {@link InventoryProfileCustomerVendorLedgers.inventoryProfileId}.
   * @param kindOfActivity Key property. See {@link InventoryProfileCustomerVendorLedgers.kindOfActivity}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryProfileCustomerVendorLedgers`.
   */
  delete(
    dataAreaId: string,
    inventoryProfileRelation: InventProfileTypeAllRu,
    inventoryProfileId: string,
    kindOfActivity: InventProfileTypeRu
  ): DeleteRequestBuilder<InventoryProfileCustomerVendorLedgers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryProfileCustomerVendorLedgers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryProfileCustomerVendorLedgers` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryProfileCustomerVendorLedgers<T>
  ): DeleteRequestBuilder<InventoryProfileCustomerVendorLedgers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryProfileRelation?: InventProfileTypeAllRu,
    inventoryProfileId?: string,
    kindOfActivity?: InventProfileTypeRu
  ): DeleteRequestBuilder<InventoryProfileCustomerVendorLedgers<T>, T> {
    return new DeleteRequestBuilder<
      InventoryProfileCustomerVendorLedgers<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryProfileCustomerVendorLedgers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryProfileRelation: inventoryProfileRelation!,
            InventoryProfileId: inventoryProfileId!,
            KindOfActivity: kindOfActivity!
          }
    );
  }
}
