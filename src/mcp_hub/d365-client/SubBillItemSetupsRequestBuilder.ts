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
import { SubBillItemSetups } from './SubBillItemSetups';
import { InventPostingItemCode } from './InventPostingItemCode';

/**
 * Request builder class for operations supported on the {@link SubBillItemSetups} entity.
 */
export class SubBillItemSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillItemSetups<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillItemSetups` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillItemSetups` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillItemSetups<T>, T> {
    return new GetAllRequestBuilder<SubBillItemSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubBillItemSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillItemSetups`.
   */
  create(
    entity: SubBillItemSetups<T>
  ): CreateRequestBuilder<SubBillItemSetups<T>, T> {
    return new CreateRequestBuilder<SubBillItemSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillItemSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillItemSetups.dataAreaId}.
   * @param itemCode Key property. See {@link SubBillItemSetups.itemCode}.
   * @param itemRelation Key property. See {@link SubBillItemSetups.itemRelation}.
   * @returns A request builder for creating requests to retrieve one `SubBillItemSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.InventPostingItemCode'
    >,
    itemRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillItemSetups<T>, T> {
    return new GetByKeyRequestBuilder<SubBillItemSetups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemCode: itemCode,
      ItemRelation: itemRelation
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillItemSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillItemSetups`.
   */
  update(
    entity: SubBillItemSetups<T>
  ): UpdateRequestBuilder<SubBillItemSetups<T>, T> {
    return new UpdateRequestBuilder<SubBillItemSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillItemSetups`.
   * @param dataAreaId Key property. See {@link SubBillItemSetups.dataAreaId}.
   * @param itemCode Key property. See {@link SubBillItemSetups.itemCode}.
   * @param itemRelation Key property. See {@link SubBillItemSetups.itemRelation}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillItemSetups`.
   */
  delete(
    dataAreaId: string,
    itemCode: InventPostingItemCode,
    itemRelation: string
  ): DeleteRequestBuilder<SubBillItemSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillItemSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillItemSetups` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillItemSetups<T>
  ): DeleteRequestBuilder<SubBillItemSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemCode?: InventPostingItemCode,
    itemRelation?: string
  ): DeleteRequestBuilder<SubBillItemSetups<T>, T> {
    return new DeleteRequestBuilder<SubBillItemSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillItemSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemCode: itemCode!,
            ItemRelation: itemRelation!
          }
    );
  }
}
