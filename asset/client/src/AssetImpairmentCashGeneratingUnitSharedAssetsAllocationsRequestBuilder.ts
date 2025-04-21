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
import { AssetImpairmentCashGeneratingUnitSharedAssetsAllocations } from './AssetImpairmentCashGeneratingUnitSharedAssetsAllocations';

/**
 * Request builder class for operations supported on the {@link AssetImpairmentCashGeneratingUnitSharedAssetsAllocations} entity.
 */
export class AssetImpairmentCashGeneratingUnitSharedAssetsAllocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AssetImpairmentCashGeneratingUnitSharedAssetsAllocations` entities.
   * @returns A request builder for creating requests to retrieve all `AssetImpairmentCashGeneratingUnitSharedAssetsAllocations` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetImpairmentCashGeneratingUnitSharedAssetsAllocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetImpairmentCashGeneratingUnitSharedAssetsAllocations`.
   */
  create(
    entity: AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>
  ): CreateRequestBuilder<
    AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>,
    T
  > {
    return new CreateRequestBuilder<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetImpairmentCashGeneratingUnitSharedAssetsAllocations` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetImpairmentCashGeneratingUnitSharedAssetsAllocations.dataAreaId}.
   * @param cguGroupName Key property. See {@link AssetImpairmentCashGeneratingUnitSharedAssetsAllocations.cguGroupName}.
   * @param sharedAssetId Key property. See {@link AssetImpairmentCashGeneratingUnitSharedAssetsAllocations.sharedAssetId}.
   * @param sharedAssetBookId Key property. See {@link AssetImpairmentCashGeneratingUnitSharedAssetsAllocations.sharedAssetBookId}.
   * @param cashGeneratingUnitNumber Key property. See {@link AssetImpairmentCashGeneratingUnitSharedAssetsAllocations.cashGeneratingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetImpairmentCashGeneratingUnitSharedAssetsAllocations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cguGroupName: DeserializedType<T, 'Edm.String'>,
    sharedAssetId: DeserializedType<T, 'Edm.String'>,
    sharedAssetBookId: DeserializedType<T, 'Edm.String'>,
    cashGeneratingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      CGUGroupName: cguGroupName,
      SharedAssetId: sharedAssetId,
      SharedAssetBookId: sharedAssetBookId,
      CashGeneratingUnitNumber: cashGeneratingUnitNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetImpairmentCashGeneratingUnitSharedAssetsAllocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetImpairmentCashGeneratingUnitSharedAssetsAllocations`.
   */
  update(
    entity: AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>
  ): UpdateRequestBuilder<
    AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetImpairmentCashGeneratingUnitSharedAssetsAllocations`.
   * @param dataAreaId Key property. See {@link AssetImpairmentCashGeneratingUnitSharedAssetsAllocations.dataAreaId}.
   * @param cguGroupName Key property. See {@link AssetImpairmentCashGeneratingUnitSharedAssetsAllocations.cguGroupName}.
   * @param sharedAssetId Key property. See {@link AssetImpairmentCashGeneratingUnitSharedAssetsAllocations.sharedAssetId}.
   * @param sharedAssetBookId Key property. See {@link AssetImpairmentCashGeneratingUnitSharedAssetsAllocations.sharedAssetBookId}.
   * @param cashGeneratingUnitNumber Key property. See {@link AssetImpairmentCashGeneratingUnitSharedAssetsAllocations.cashGeneratingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetImpairmentCashGeneratingUnitSharedAssetsAllocations`.
   */
  delete(
    dataAreaId: string,
    cguGroupName: string,
    sharedAssetId: string,
    sharedAssetBookId: string,
    cashGeneratingUnitNumber: string
  ): DeleteRequestBuilder<
    AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AssetImpairmentCashGeneratingUnitSharedAssetsAllocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetImpairmentCashGeneratingUnitSharedAssetsAllocations` by taking the entity as a parameter.
   */
  delete(
    entity: AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>
  ): DeleteRequestBuilder<
    AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    cguGroupName?: string,
    sharedAssetId?: string,
    sharedAssetBookId?: string,
    cashGeneratingUnitNumber?: string
  ): DeleteRequestBuilder<
    AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AssetImpairmentCashGeneratingUnitSharedAssetsAllocations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CGUGroupName: cguGroupName!,
            SharedAssetId: sharedAssetId!,
            SharedAssetBookId: sharedAssetBookId!,
            CashGeneratingUnitNumber: cashGeneratingUnitNumber!
          }
    );
  }
}
