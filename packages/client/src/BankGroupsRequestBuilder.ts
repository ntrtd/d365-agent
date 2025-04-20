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
import { BankGroups } from './BankGroups';

/**
 * Request builder class for operations supported on the {@link BankGroups} entity.
 */
export class BankGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankGroups<T>, T> {
  /**
   * Returns a request builder for querying all `BankGroups` entities.
   * @returns A request builder for creating requests to retrieve all `BankGroups` entities.
   */
  getAll(): GetAllRequestBuilder<BankGroups<T>, T> {
    return new GetAllRequestBuilder<BankGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BankGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankGroups`.
   */
  create(entity: BankGroups<T>): CreateRequestBuilder<BankGroups<T>, T> {
    return new CreateRequestBuilder<BankGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BankGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankGroups.dataAreaId}.
   * @param bankGroupId Key property. See {@link BankGroups.bankGroupId}.
   * @returns A request builder for creating requests to retrieve one `BankGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bankGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankGroups<T>, T> {
    return new GetByKeyRequestBuilder<BankGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BankGroupId: bankGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BankGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankGroups`.
   */
  update(entity: BankGroups<T>): UpdateRequestBuilder<BankGroups<T>, T> {
    return new UpdateRequestBuilder<BankGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BankGroups`.
   * @param dataAreaId Key property. See {@link BankGroups.dataAreaId}.
   * @param bankGroupId Key property. See {@link BankGroups.bankGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `BankGroups`.
   */
  delete(
    dataAreaId: string,
    bankGroupId: string
  ): DeleteRequestBuilder<BankGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankGroups` by taking the entity as a parameter.
   */
  delete(entity: BankGroups<T>): DeleteRequestBuilder<BankGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bankGroupId?: string
  ): DeleteRequestBuilder<BankGroups<T>, T> {
    return new DeleteRequestBuilder<BankGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BankGroupId: bankGroupId!
          }
    );
  }
}
