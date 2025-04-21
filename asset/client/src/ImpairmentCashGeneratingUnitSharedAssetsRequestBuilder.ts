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
import { ImpairmentCashGeneratingUnitSharedAssets } from './ImpairmentCashGeneratingUnitSharedAssets';

/**
 * Request builder class for operations supported on the {@link ImpairmentCashGeneratingUnitSharedAssets} entity.
 */
export class ImpairmentCashGeneratingUnitSharedAssetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ImpairmentCashGeneratingUnitSharedAssets<T>, T> {
  /**
   * Returns a request builder for querying all `ImpairmentCashGeneratingUnitSharedAssets` entities.
   * @returns A request builder for creating requests to retrieve all `ImpairmentCashGeneratingUnitSharedAssets` entities.
   */
  getAll(): GetAllRequestBuilder<
    ImpairmentCashGeneratingUnitSharedAssets<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ImpairmentCashGeneratingUnitSharedAssets<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ImpairmentCashGeneratingUnitSharedAssets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ImpairmentCashGeneratingUnitSharedAssets`.
   */
  create(
    entity: ImpairmentCashGeneratingUnitSharedAssets<T>
  ): CreateRequestBuilder<ImpairmentCashGeneratingUnitSharedAssets<T>, T> {
    return new CreateRequestBuilder<
      ImpairmentCashGeneratingUnitSharedAssets<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ImpairmentCashGeneratingUnitSharedAssets` entity based on its keys.
   * @param dataAreaId Key property. See {@link ImpairmentCashGeneratingUnitSharedAssets.dataAreaId}.
   * @param cguGroupName Key property. See {@link ImpairmentCashGeneratingUnitSharedAssets.cguGroupName}.
   * @param assetNumber Key property. See {@link ImpairmentCashGeneratingUnitSharedAssets.assetNumber}.
   * @param book Key property. See {@link ImpairmentCashGeneratingUnitSharedAssets.book}.
   * @returns A request builder for creating requests to retrieve one `ImpairmentCashGeneratingUnitSharedAssets` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cguGroupName: DeserializedType<T, 'Edm.String'>,
    assetNumber: DeserializedType<T, 'Edm.String'>,
    book: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ImpairmentCashGeneratingUnitSharedAssets<T>, T> {
    return new GetByKeyRequestBuilder<
      ImpairmentCashGeneratingUnitSharedAssets<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      CGUGroupName: cguGroupName,
      AssetNumber: assetNumber,
      Book: book
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ImpairmentCashGeneratingUnitSharedAssets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ImpairmentCashGeneratingUnitSharedAssets`.
   */
  update(
    entity: ImpairmentCashGeneratingUnitSharedAssets<T>
  ): UpdateRequestBuilder<ImpairmentCashGeneratingUnitSharedAssets<T>, T> {
    return new UpdateRequestBuilder<
      ImpairmentCashGeneratingUnitSharedAssets<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ImpairmentCashGeneratingUnitSharedAssets`.
   * @param dataAreaId Key property. See {@link ImpairmentCashGeneratingUnitSharedAssets.dataAreaId}.
   * @param cguGroupName Key property. See {@link ImpairmentCashGeneratingUnitSharedAssets.cguGroupName}.
   * @param assetNumber Key property. See {@link ImpairmentCashGeneratingUnitSharedAssets.assetNumber}.
   * @param book Key property. See {@link ImpairmentCashGeneratingUnitSharedAssets.book}.
   * @returns A request builder for creating requests that delete an entity of type `ImpairmentCashGeneratingUnitSharedAssets`.
   */
  delete(
    dataAreaId: string,
    cguGroupName: string,
    assetNumber: string,
    book: string
  ): DeleteRequestBuilder<ImpairmentCashGeneratingUnitSharedAssets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ImpairmentCashGeneratingUnitSharedAssets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ImpairmentCashGeneratingUnitSharedAssets` by taking the entity as a parameter.
   */
  delete(
    entity: ImpairmentCashGeneratingUnitSharedAssets<T>
  ): DeleteRequestBuilder<ImpairmentCashGeneratingUnitSharedAssets<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cguGroupName?: string,
    assetNumber?: string,
    book?: string
  ): DeleteRequestBuilder<ImpairmentCashGeneratingUnitSharedAssets<T>, T> {
    return new DeleteRequestBuilder<
      ImpairmentCashGeneratingUnitSharedAssets<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ImpairmentCashGeneratingUnitSharedAssets
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CGUGroupName: cguGroupName!,
            AssetNumber: assetNumber!,
            Book: book!
          }
    );
  }
}
