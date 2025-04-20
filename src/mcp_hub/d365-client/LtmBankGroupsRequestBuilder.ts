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
import { LtmBankGroups } from './LtmBankGroups';

/**
 * Request builder class for operations supported on the {@link LtmBankGroups} entity.
 */
export class LtmBankGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmBankGroups<T>, T> {
  /**
   * Returns a request builder for querying all `LtmBankGroups` entities.
   * @returns A request builder for creating requests to retrieve all `LtmBankGroups` entities.
   */
  getAll(): GetAllRequestBuilder<LtmBankGroups<T>, T> {
    return new GetAllRequestBuilder<LtmBankGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmBankGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmBankGroups`.
   */
  create(entity: LtmBankGroups<T>): CreateRequestBuilder<LtmBankGroups<T>, T> {
    return new CreateRequestBuilder<LtmBankGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmBankGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmBankGroups.dataAreaId}.
   * @param bankGroupId Key property. See {@link LtmBankGroups.bankGroupId}.
   * @returns A request builder for creating requests to retrieve one `LtmBankGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bankGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmBankGroups<T>, T> {
    return new GetByKeyRequestBuilder<LtmBankGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BankGroupId: bankGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmBankGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmBankGroups`.
   */
  update(entity: LtmBankGroups<T>): UpdateRequestBuilder<LtmBankGroups<T>, T> {
    return new UpdateRequestBuilder<LtmBankGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmBankGroups`.
   * @param dataAreaId Key property. See {@link LtmBankGroups.dataAreaId}.
   * @param bankGroupId Key property. See {@link LtmBankGroups.bankGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmBankGroups`.
   */
  delete(
    dataAreaId: string,
    bankGroupId: string
  ): DeleteRequestBuilder<LtmBankGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmBankGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmBankGroups` by taking the entity as a parameter.
   */
  delete(entity: LtmBankGroups<T>): DeleteRequestBuilder<LtmBankGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bankGroupId?: string
  ): DeleteRequestBuilder<LtmBankGroups<T>, T> {
    return new DeleteRequestBuilder<LtmBankGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmBankGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BankGroupId: bankGroupId!
          }
    );
  }
}
