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
import { LtmAccountTypeGroups } from './LtmAccountTypeGroups';
import { LtmCustVendEntity } from './LtmCustVendEntity';

/**
 * Request builder class for operations supported on the {@link LtmAccountTypeGroups} entity.
 */
export class LtmAccountTypeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmAccountTypeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `LtmAccountTypeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `LtmAccountTypeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<LtmAccountTypeGroups<T>, T> {
    return new GetAllRequestBuilder<LtmAccountTypeGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmAccountTypeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmAccountTypeGroups`.
   */
  create(
    entity: LtmAccountTypeGroups<T>
  ): CreateRequestBuilder<LtmAccountTypeGroups<T>, T> {
    return new CreateRequestBuilder<LtmAccountTypeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmAccountTypeGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmAccountTypeGroups.dataAreaId}.
   * @param accountTypeGroupId Key property. See {@link LtmAccountTypeGroups.accountTypeGroupId}.
   * @param custVendEntity Key property. See {@link LtmAccountTypeGroups.custVendEntity}.
   * @returns A request builder for creating requests to retrieve one `LtmAccountTypeGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountTypeGroupId: DeserializedType<T, 'Edm.String'>,
    custVendEntity: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LTMCustVendEntity'
    >
  ): GetByKeyRequestBuilder<LtmAccountTypeGroups<T>, T> {
    return new GetByKeyRequestBuilder<LtmAccountTypeGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AccountTypeGroupId: accountTypeGroupId,
        CustVendEntity: custVendEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmAccountTypeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmAccountTypeGroups`.
   */
  update(
    entity: LtmAccountTypeGroups<T>
  ): UpdateRequestBuilder<LtmAccountTypeGroups<T>, T> {
    return new UpdateRequestBuilder<LtmAccountTypeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmAccountTypeGroups`.
   * @param dataAreaId Key property. See {@link LtmAccountTypeGroups.dataAreaId}.
   * @param accountTypeGroupId Key property. See {@link LtmAccountTypeGroups.accountTypeGroupId}.
   * @param custVendEntity Key property. See {@link LtmAccountTypeGroups.custVendEntity}.
   * @returns A request builder for creating requests that delete an entity of type `LtmAccountTypeGroups`.
   */
  delete(
    dataAreaId: string,
    accountTypeGroupId: string,
    custVendEntity: LtmCustVendEntity
  ): DeleteRequestBuilder<LtmAccountTypeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmAccountTypeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmAccountTypeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: LtmAccountTypeGroups<T>
  ): DeleteRequestBuilder<LtmAccountTypeGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountTypeGroupId?: string,
    custVendEntity?: LtmCustVendEntity
  ): DeleteRequestBuilder<LtmAccountTypeGroups<T>, T> {
    return new DeleteRequestBuilder<LtmAccountTypeGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmAccountTypeGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountTypeGroupId: accountTypeGroupId!,
            CustVendEntity: custVendEntity!
          }
    );
  }
}
