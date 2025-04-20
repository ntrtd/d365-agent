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
import { FixedAssetBookSpecialDepreciationAllowances } from './FixedAssetBookSpecialDepreciationAllowances';

/**
 * Request builder class for operations supported on the {@link FixedAssetBookSpecialDepreciationAllowances} entity.
 */
export class FixedAssetBookSpecialDepreciationAllowancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FixedAssetBookSpecialDepreciationAllowances<T>, T> {
  /**
   * Returns a request builder for querying all `FixedAssetBookSpecialDepreciationAllowances` entities.
   * @returns A request builder for creating requests to retrieve all `FixedAssetBookSpecialDepreciationAllowances` entities.
   */
  getAll(): GetAllRequestBuilder<
    FixedAssetBookSpecialDepreciationAllowances<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FixedAssetBookSpecialDepreciationAllowances<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FixedAssetBookSpecialDepreciationAllowances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FixedAssetBookSpecialDepreciationAllowances`.
   */
  create(
    entity: FixedAssetBookSpecialDepreciationAllowances<T>
  ): CreateRequestBuilder<FixedAssetBookSpecialDepreciationAllowances<T>, T> {
    return new CreateRequestBuilder<
      FixedAssetBookSpecialDepreciationAllowances<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FixedAssetBookSpecialDepreciationAllowances` entity based on its keys.
   * @param dataAreaId Key property. See {@link FixedAssetBookSpecialDepreciationAllowances.dataAreaId}.
   * @param fixedAssetId Key property. See {@link FixedAssetBookSpecialDepreciationAllowances.fixedAssetId}.
   * @param bookId Key property. See {@link FixedAssetBookSpecialDepreciationAllowances.bookId}.
   * @param specialDepreciationAllowanceId Key property. See {@link FixedAssetBookSpecialDepreciationAllowances.specialDepreciationAllowanceId}.
   * @returns A request builder for creating requests to retrieve one `FixedAssetBookSpecialDepreciationAllowances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fixedAssetId: DeserializedType<T, 'Edm.String'>,
    bookId: DeserializedType<T, 'Edm.String'>,
    specialDepreciationAllowanceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FixedAssetBookSpecialDepreciationAllowances<T>, T> {
    return new GetByKeyRequestBuilder<
      FixedAssetBookSpecialDepreciationAllowances<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FixedAssetId: fixedAssetId,
      BookId: bookId,
      SpecialDepreciationAllowanceId: specialDepreciationAllowanceId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FixedAssetBookSpecialDepreciationAllowances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FixedAssetBookSpecialDepreciationAllowances`.
   */
  update(
    entity: FixedAssetBookSpecialDepreciationAllowances<T>
  ): UpdateRequestBuilder<FixedAssetBookSpecialDepreciationAllowances<T>, T> {
    return new UpdateRequestBuilder<
      FixedAssetBookSpecialDepreciationAllowances<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FixedAssetBookSpecialDepreciationAllowances`.
   * @param dataAreaId Key property. See {@link FixedAssetBookSpecialDepreciationAllowances.dataAreaId}.
   * @param fixedAssetId Key property. See {@link FixedAssetBookSpecialDepreciationAllowances.fixedAssetId}.
   * @param bookId Key property. See {@link FixedAssetBookSpecialDepreciationAllowances.bookId}.
   * @param specialDepreciationAllowanceId Key property. See {@link FixedAssetBookSpecialDepreciationAllowances.specialDepreciationAllowanceId}.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetBookSpecialDepreciationAllowances`.
   */
  delete(
    dataAreaId: string,
    fixedAssetId: string,
    bookId: string,
    specialDepreciationAllowanceId: string
  ): DeleteRequestBuilder<FixedAssetBookSpecialDepreciationAllowances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FixedAssetBookSpecialDepreciationAllowances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetBookSpecialDepreciationAllowances` by taking the entity as a parameter.
   */
  delete(
    entity: FixedAssetBookSpecialDepreciationAllowances<T>
  ): DeleteRequestBuilder<FixedAssetBookSpecialDepreciationAllowances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fixedAssetId?: string,
    bookId?: string,
    specialDepreciationAllowanceId?: string
  ): DeleteRequestBuilder<FixedAssetBookSpecialDepreciationAllowances<T>, T> {
    return new DeleteRequestBuilder<
      FixedAssetBookSpecialDepreciationAllowances<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof FixedAssetBookSpecialDepreciationAllowances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FixedAssetId: fixedAssetId!,
            BookId: bookId!,
            SpecialDepreciationAllowanceId: specialDepreciationAllowanceId!
          }
    );
  }
}
