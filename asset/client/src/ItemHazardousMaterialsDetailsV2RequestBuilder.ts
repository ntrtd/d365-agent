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
import { ItemHazardousMaterialsDetailsV2 } from './ItemHazardousMaterialsDetailsV2';

/**
 * Request builder class for operations supported on the {@link ItemHazardousMaterialsDetailsV2} entity.
 */
export class ItemHazardousMaterialsDetailsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemHazardousMaterialsDetailsV2<T>, T> {
  /**
   * Returns a request builder for querying all `ItemHazardousMaterialsDetailsV2` entities.
   * @returns A request builder for creating requests to retrieve all `ItemHazardousMaterialsDetailsV2` entities.
   */
  getAll(): GetAllRequestBuilder<ItemHazardousMaterialsDetailsV2<T>, T> {
    return new GetAllRequestBuilder<ItemHazardousMaterialsDetailsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemHazardousMaterialsDetailsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemHazardousMaterialsDetailsV2`.
   */
  create(
    entity: ItemHazardousMaterialsDetailsV2<T>
  ): CreateRequestBuilder<ItemHazardousMaterialsDetailsV2<T>, T> {
    return new CreateRequestBuilder<ItemHazardousMaterialsDetailsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemHazardousMaterialsDetailsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemHazardousMaterialsDetailsV2.dataAreaId}.
   * @param itemId Key property. See {@link ItemHazardousMaterialsDetailsV2.itemId}.
   * @param regCode Key property. See {@link ItemHazardousMaterialsDetailsV2.regCode}.
   * @param recordId Key property. See {@link ItemHazardousMaterialsDetailsV2.recordId}.
   * @returns A request builder for creating requests to retrieve one `ItemHazardousMaterialsDetailsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    regCode: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ItemHazardousMaterialsDetailsV2<T>, T> {
    return new GetByKeyRequestBuilder<ItemHazardousMaterialsDetailsV2<T>, T>(
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
   * Returns a request builder for updating an entity of type `ItemHazardousMaterialsDetailsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemHazardousMaterialsDetailsV2`.
   */
  update(
    entity: ItemHazardousMaterialsDetailsV2<T>
  ): UpdateRequestBuilder<ItemHazardousMaterialsDetailsV2<T>, T> {
    return new UpdateRequestBuilder<ItemHazardousMaterialsDetailsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemHazardousMaterialsDetailsV2`.
   * @param dataAreaId Key property. See {@link ItemHazardousMaterialsDetailsV2.dataAreaId}.
   * @param itemId Key property. See {@link ItemHazardousMaterialsDetailsV2.itemId}.
   * @param regCode Key property. See {@link ItemHazardousMaterialsDetailsV2.regCode}.
   * @param recordId Key property. See {@link ItemHazardousMaterialsDetailsV2.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `ItemHazardousMaterialsDetailsV2`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    regCode: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<ItemHazardousMaterialsDetailsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemHazardousMaterialsDetailsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemHazardousMaterialsDetailsV2` by taking the entity as a parameter.
   */
  delete(
    entity: ItemHazardousMaterialsDetailsV2<T>
  ): DeleteRequestBuilder<ItemHazardousMaterialsDetailsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    regCode?: string,
    recordId?: BigNumber
  ): DeleteRequestBuilder<ItemHazardousMaterialsDetailsV2<T>, T> {
    return new DeleteRequestBuilder<ItemHazardousMaterialsDetailsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemHazardousMaterialsDetailsV2
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
