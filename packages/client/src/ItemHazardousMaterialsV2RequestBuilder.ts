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
import { ItemHazardousMaterialsV2 } from './ItemHazardousMaterialsV2';

/**
 * Request builder class for operations supported on the {@link ItemHazardousMaterialsV2} entity.
 */
export class ItemHazardousMaterialsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemHazardousMaterialsV2<T>, T> {
  /**
   * Returns a request builder for querying all `ItemHazardousMaterialsV2` entities.
   * @returns A request builder for creating requests to retrieve all `ItemHazardousMaterialsV2` entities.
   */
  getAll(): GetAllRequestBuilder<ItemHazardousMaterialsV2<T>, T> {
    return new GetAllRequestBuilder<ItemHazardousMaterialsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemHazardousMaterialsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemHazardousMaterialsV2`.
   */
  create(
    entity: ItemHazardousMaterialsV2<T>
  ): CreateRequestBuilder<ItemHazardousMaterialsV2<T>, T> {
    return new CreateRequestBuilder<ItemHazardousMaterialsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemHazardousMaterialsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemHazardousMaterialsV2.dataAreaId}.
   * @param itemId Key property. See {@link ItemHazardousMaterialsV2.itemId}.
   * @param regCode Key property. See {@link ItemHazardousMaterialsV2.regCode}.
   * @param recordId Key property. See {@link ItemHazardousMaterialsV2.recordId}.
   * @returns A request builder for creating requests to retrieve one `ItemHazardousMaterialsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    regCode: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ItemHazardousMaterialsV2<T>, T> {
    return new GetByKeyRequestBuilder<ItemHazardousMaterialsV2<T>, T>(
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
   * Returns a request builder for updating an entity of type `ItemHazardousMaterialsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemHazardousMaterialsV2`.
   */
  update(
    entity: ItemHazardousMaterialsV2<T>
  ): UpdateRequestBuilder<ItemHazardousMaterialsV2<T>, T> {
    return new UpdateRequestBuilder<ItemHazardousMaterialsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemHazardousMaterialsV2`.
   * @param dataAreaId Key property. See {@link ItemHazardousMaterialsV2.dataAreaId}.
   * @param itemId Key property. See {@link ItemHazardousMaterialsV2.itemId}.
   * @param regCode Key property. See {@link ItemHazardousMaterialsV2.regCode}.
   * @param recordId Key property. See {@link ItemHazardousMaterialsV2.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `ItemHazardousMaterialsV2`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    regCode: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<ItemHazardousMaterialsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemHazardousMaterialsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemHazardousMaterialsV2` by taking the entity as a parameter.
   */
  delete(
    entity: ItemHazardousMaterialsV2<T>
  ): DeleteRequestBuilder<ItemHazardousMaterialsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    regCode?: string,
    recordId?: BigNumber
  ): DeleteRequestBuilder<ItemHazardousMaterialsV2<T>, T> {
    return new DeleteRequestBuilder<ItemHazardousMaterialsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemHazardousMaterialsV2
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
