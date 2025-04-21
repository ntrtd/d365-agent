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
import { FixedAssetGroupBookSpecialDepreciationAllowances } from './FixedAssetGroupBookSpecialDepreciationAllowances';

/**
 * Request builder class for operations supported on the {@link FixedAssetGroupBookSpecialDepreciationAllowances} entity.
 */
export class FixedAssetGroupBookSpecialDepreciationAllowancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  FixedAssetGroupBookSpecialDepreciationAllowances<T>,
  T
> {
  /**
   * Returns a request builder for querying all `FixedAssetGroupBookSpecialDepreciationAllowances` entities.
   * @returns A request builder for creating requests to retrieve all `FixedAssetGroupBookSpecialDepreciationAllowances` entities.
   */
  getAll(): GetAllRequestBuilder<
    FixedAssetGroupBookSpecialDepreciationAllowances<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FixedAssetGroupBookSpecialDepreciationAllowances<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FixedAssetGroupBookSpecialDepreciationAllowances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FixedAssetGroupBookSpecialDepreciationAllowances`.
   */
  create(
    entity: FixedAssetGroupBookSpecialDepreciationAllowances<T>
  ): CreateRequestBuilder<
    FixedAssetGroupBookSpecialDepreciationAllowances<T>,
    T
  > {
    return new CreateRequestBuilder<
      FixedAssetGroupBookSpecialDepreciationAllowances<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FixedAssetGroupBookSpecialDepreciationAllowances` entity based on its keys.
   * @param dataAreaId Key property. See {@link FixedAssetGroupBookSpecialDepreciationAllowances.dataAreaId}.
   * @param groupId Key property. See {@link FixedAssetGroupBookSpecialDepreciationAllowances.groupId}.
   * @param bookId Key property. See {@link FixedAssetGroupBookSpecialDepreciationAllowances.bookId}.
   * @param specialDepreciationAllowanceId Key property. See {@link FixedAssetGroupBookSpecialDepreciationAllowances.specialDepreciationAllowanceId}.
   * @returns A request builder for creating requests to retrieve one `FixedAssetGroupBookSpecialDepreciationAllowances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>,
    bookId: DeserializedType<T, 'Edm.String'>,
    specialDepreciationAllowanceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    FixedAssetGroupBookSpecialDepreciationAllowances<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      FixedAssetGroupBookSpecialDepreciationAllowances<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupId: groupId,
      BookId: bookId,
      SpecialDepreciationAllowanceId: specialDepreciationAllowanceId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FixedAssetGroupBookSpecialDepreciationAllowances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FixedAssetGroupBookSpecialDepreciationAllowances`.
   */
  update(
    entity: FixedAssetGroupBookSpecialDepreciationAllowances<T>
  ): UpdateRequestBuilder<
    FixedAssetGroupBookSpecialDepreciationAllowances<T>,
    T
  > {
    return new UpdateRequestBuilder<
      FixedAssetGroupBookSpecialDepreciationAllowances<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FixedAssetGroupBookSpecialDepreciationAllowances`.
   * @param dataAreaId Key property. See {@link FixedAssetGroupBookSpecialDepreciationAllowances.dataAreaId}.
   * @param groupId Key property. See {@link FixedAssetGroupBookSpecialDepreciationAllowances.groupId}.
   * @param bookId Key property. See {@link FixedAssetGroupBookSpecialDepreciationAllowances.bookId}.
   * @param specialDepreciationAllowanceId Key property. See {@link FixedAssetGroupBookSpecialDepreciationAllowances.specialDepreciationAllowanceId}.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetGroupBookSpecialDepreciationAllowances`.
   */
  delete(
    dataAreaId: string,
    groupId: string,
    bookId: string,
    specialDepreciationAllowanceId: string
  ): DeleteRequestBuilder<
    FixedAssetGroupBookSpecialDepreciationAllowances<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `FixedAssetGroupBookSpecialDepreciationAllowances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetGroupBookSpecialDepreciationAllowances` by taking the entity as a parameter.
   */
  delete(
    entity: FixedAssetGroupBookSpecialDepreciationAllowances<T>
  ): DeleteRequestBuilder<
    FixedAssetGroupBookSpecialDepreciationAllowances<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string,
    bookId?: string,
    specialDepreciationAllowanceId?: string
  ): DeleteRequestBuilder<
    FixedAssetGroupBookSpecialDepreciationAllowances<T>,
    T
  > {
    return new DeleteRequestBuilder<
      FixedAssetGroupBookSpecialDepreciationAllowances<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      FixedAssetGroupBookSpecialDepreciationAllowances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!,
            BookId: bookId!,
            SpecialDepreciationAllowanceId: specialDepreciationAllowanceId!
          }
    );
  }
}
