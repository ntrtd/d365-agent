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
import { ImpairmentCashGeneratingUnitAssets } from './ImpairmentCashGeneratingUnitAssets';

/**
 * Request builder class for operations supported on the {@link ImpairmentCashGeneratingUnitAssets} entity.
 */
export class ImpairmentCashGeneratingUnitAssetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ImpairmentCashGeneratingUnitAssets<T>, T> {
  /**
   * Returns a request builder for querying all `ImpairmentCashGeneratingUnitAssets` entities.
   * @returns A request builder for creating requests to retrieve all `ImpairmentCashGeneratingUnitAssets` entities.
   */
  getAll(): GetAllRequestBuilder<ImpairmentCashGeneratingUnitAssets<T>, T> {
    return new GetAllRequestBuilder<ImpairmentCashGeneratingUnitAssets<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ImpairmentCashGeneratingUnitAssets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ImpairmentCashGeneratingUnitAssets`.
   */
  create(
    entity: ImpairmentCashGeneratingUnitAssets<T>
  ): CreateRequestBuilder<ImpairmentCashGeneratingUnitAssets<T>, T> {
    return new CreateRequestBuilder<ImpairmentCashGeneratingUnitAssets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ImpairmentCashGeneratingUnitAssets` entity based on its keys.
   * @param dataAreaId Key property. See {@link ImpairmentCashGeneratingUnitAssets.dataAreaId}.
   * @param cashGeneratingUnitNumber Key property. See {@link ImpairmentCashGeneratingUnitAssets.cashGeneratingUnitNumber}.
   * @param assetNumber Key property. See {@link ImpairmentCashGeneratingUnitAssets.assetNumber}.
   * @param book Key property. See {@link ImpairmentCashGeneratingUnitAssets.book}.
   * @returns A request builder for creating requests to retrieve one `ImpairmentCashGeneratingUnitAssets` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cashGeneratingUnitNumber: DeserializedType<T, 'Edm.String'>,
    assetNumber: DeserializedType<T, 'Edm.String'>,
    book: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ImpairmentCashGeneratingUnitAssets<T>, T> {
    return new GetByKeyRequestBuilder<ImpairmentCashGeneratingUnitAssets<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CashGeneratingUnitNumber: cashGeneratingUnitNumber,
        AssetNumber: assetNumber,
        Book: book
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ImpairmentCashGeneratingUnitAssets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ImpairmentCashGeneratingUnitAssets`.
   */
  update(
    entity: ImpairmentCashGeneratingUnitAssets<T>
  ): UpdateRequestBuilder<ImpairmentCashGeneratingUnitAssets<T>, T> {
    return new UpdateRequestBuilder<ImpairmentCashGeneratingUnitAssets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ImpairmentCashGeneratingUnitAssets`.
   * @param dataAreaId Key property. See {@link ImpairmentCashGeneratingUnitAssets.dataAreaId}.
   * @param cashGeneratingUnitNumber Key property. See {@link ImpairmentCashGeneratingUnitAssets.cashGeneratingUnitNumber}.
   * @param assetNumber Key property. See {@link ImpairmentCashGeneratingUnitAssets.assetNumber}.
   * @param book Key property. See {@link ImpairmentCashGeneratingUnitAssets.book}.
   * @returns A request builder for creating requests that delete an entity of type `ImpairmentCashGeneratingUnitAssets`.
   */
  delete(
    dataAreaId: string,
    cashGeneratingUnitNumber: string,
    assetNumber: string,
    book: string
  ): DeleteRequestBuilder<ImpairmentCashGeneratingUnitAssets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ImpairmentCashGeneratingUnitAssets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ImpairmentCashGeneratingUnitAssets` by taking the entity as a parameter.
   */
  delete(
    entity: ImpairmentCashGeneratingUnitAssets<T>
  ): DeleteRequestBuilder<ImpairmentCashGeneratingUnitAssets<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cashGeneratingUnitNumber?: string,
    assetNumber?: string,
    book?: string
  ): DeleteRequestBuilder<ImpairmentCashGeneratingUnitAssets<T>, T> {
    return new DeleteRequestBuilder<ImpairmentCashGeneratingUnitAssets<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ImpairmentCashGeneratingUnitAssets
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CashGeneratingUnitNumber: cashGeneratingUnitNumber!,
            AssetNumber: assetNumber!,
            Book: book!
          }
    );
  }
}
