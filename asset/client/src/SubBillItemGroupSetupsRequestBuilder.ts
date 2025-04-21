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
import { SubBillItemGroupSetups } from './SubBillItemGroupSetups';

/**
 * Request builder class for operations supported on the {@link SubBillItemGroupSetups} entity.
 */
export class SubBillItemGroupSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillItemGroupSetups<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillItemGroupSetups` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillItemGroupSetups` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillItemGroupSetups<T>, T> {
    return new GetAllRequestBuilder<SubBillItemGroupSetups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillItemGroupSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillItemGroupSetups`.
   */
  create(
    entity: SubBillItemGroupSetups<T>
  ): CreateRequestBuilder<SubBillItemGroupSetups<T>, T> {
    return new CreateRequestBuilder<SubBillItemGroupSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillItemGroupSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillItemGroupSetups.dataAreaId}.
   * @param itemGroup Key property. See {@link SubBillItemGroupSetups.itemGroup}.
   * @returns A request builder for creating requests to retrieve one `SubBillItemGroupSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillItemGroupSetups<T>, T> {
    return new GetByKeyRequestBuilder<SubBillItemGroupSetups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemGroup: itemGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillItemGroupSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillItemGroupSetups`.
   */
  update(
    entity: SubBillItemGroupSetups<T>
  ): UpdateRequestBuilder<SubBillItemGroupSetups<T>, T> {
    return new UpdateRequestBuilder<SubBillItemGroupSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillItemGroupSetups`.
   * @param dataAreaId Key property. See {@link SubBillItemGroupSetups.dataAreaId}.
   * @param itemGroup Key property. See {@link SubBillItemGroupSetups.itemGroup}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillItemGroupSetups`.
   */
  delete(
    dataAreaId: string,
    itemGroup: string
  ): DeleteRequestBuilder<SubBillItemGroupSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillItemGroupSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillItemGroupSetups` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillItemGroupSetups<T>
  ): DeleteRequestBuilder<SubBillItemGroupSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemGroup?: string
  ): DeleteRequestBuilder<SubBillItemGroupSetups<T>, T> {
    return new DeleteRequestBuilder<SubBillItemGroupSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillItemGroupSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemGroup: itemGroup!
          }
    );
  }
}
