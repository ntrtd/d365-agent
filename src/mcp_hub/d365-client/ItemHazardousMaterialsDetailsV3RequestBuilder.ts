/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ItemHazardousMaterialsDetailsV3 } from './ItemHazardousMaterialsDetailsV3';

/**
 * Request builder class for operations supported on the {@link ItemHazardousMaterialsDetailsV3} entity.
 */
export class ItemHazardousMaterialsDetailsV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemHazardousMaterialsDetailsV3<T>, T> {
  /**
   * Returns a request builder for querying all `ItemHazardousMaterialsDetailsV3` entities.
   * @returns A request builder for creating requests to retrieve all `ItemHazardousMaterialsDetailsV3` entities.
   */
  getAll(): GetAllRequestBuilder<ItemHazardousMaterialsDetailsV3<T>, T> {
    return new GetAllRequestBuilder<ItemHazardousMaterialsDetailsV3<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemHazardousMaterialsDetailsV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemHazardousMaterialsDetailsV3`.
   */
  create(
    entity: ItemHazardousMaterialsDetailsV3<T>
  ): CreateRequestBuilder<ItemHazardousMaterialsDetailsV3<T>, T> {
    return new CreateRequestBuilder<ItemHazardousMaterialsDetailsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemHazardousMaterialsDetailsV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemHazardousMaterialsDetailsV3.dataAreaId}.
   * @param itemId Key property. See {@link ItemHazardousMaterialsDetailsV3.itemId}.
   * @param regCode Key property. See {@link ItemHazardousMaterialsDetailsV3.regCode}.
   * @param recordId Key property. See {@link ItemHazardousMaterialsDetailsV3.recordId}.
   * @returns A request builder for creating requests to retrieve one `ItemHazardousMaterialsDetailsV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    regCode: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ItemHazardousMaterialsDetailsV3<T>, T> {
    return new GetByKeyRequestBuilder<ItemHazardousMaterialsDetailsV3<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemId: itemId,
        RegCode: regCode,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemHazardousMaterialsDetailsV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemHazardousMaterialsDetailsV3`.
   */
  update(
    entity: ItemHazardousMaterialsDetailsV3<T>
  ): UpdateRequestBuilder<ItemHazardousMaterialsDetailsV3<T>, T> {
    return new UpdateRequestBuilder<ItemHazardousMaterialsDetailsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemHazardousMaterialsDetailsV3`.
   * @param dataAreaId Key property. See {@link ItemHazardousMaterialsDetailsV3.dataAreaId}.
   * @param itemId Key property. See {@link ItemHazardousMaterialsDetailsV3.itemId}.
   * @param regCode Key property. See {@link ItemHazardousMaterialsDetailsV3.regCode}.
   * @param recordId Key property. See {@link ItemHazardousMaterialsDetailsV3.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `ItemHazardousMaterialsDetailsV3`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    regCode: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<ItemHazardousMaterialsDetailsV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemHazardousMaterialsDetailsV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemHazardousMaterialsDetailsV3` by taking the entity as a parameter.
   */
  delete(
    entity: ItemHazardousMaterialsDetailsV3<T>
  ): DeleteRequestBuilder<ItemHazardousMaterialsDetailsV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    regCode?: string,
    recordId?: BigNumber
  ): DeleteRequestBuilder<ItemHazardousMaterialsDetailsV3<T>, T> {
    return new DeleteRequestBuilder<ItemHazardousMaterialsDetailsV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemHazardousMaterialsDetailsV3
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            RegCode: regCode!,
            RecordId: recordId!
          }
    );
  }
}
