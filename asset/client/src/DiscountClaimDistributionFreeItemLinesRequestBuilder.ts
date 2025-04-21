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
import { DiscountClaimDistributionFreeItemLines } from './DiscountClaimDistributionFreeItemLines';

/**
 * Request builder class for operations supported on the {@link DiscountClaimDistributionFreeItemLines} entity.
 */
export class DiscountClaimDistributionFreeItemLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscountClaimDistributionFreeItemLines<T>, T> {
  /**
   * Returns a request builder for querying all `DiscountClaimDistributionFreeItemLines` entities.
   * @returns A request builder for creating requests to retrieve all `DiscountClaimDistributionFreeItemLines` entities.
   */
  getAll(): GetAllRequestBuilder<DiscountClaimDistributionFreeItemLines<T>, T> {
    return new GetAllRequestBuilder<
      DiscountClaimDistributionFreeItemLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DiscountClaimDistributionFreeItemLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscountClaimDistributionFreeItemLines`.
   */
  create(
    entity: DiscountClaimDistributionFreeItemLines<T>
  ): CreateRequestBuilder<DiscountClaimDistributionFreeItemLines<T>, T> {
    return new CreateRequestBuilder<
      DiscountClaimDistributionFreeItemLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `DiscountClaimDistributionFreeItemLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link DiscountClaimDistributionFreeItemLines.dataAreaId}.
   * @param freeItemId Key property. See {@link DiscountClaimDistributionFreeItemLines.freeItemId}.
   * @param freeItemGroup Key property. See {@link DiscountClaimDistributionFreeItemLines.freeItemGroup}.
   * @param product Key property. See {@link DiscountClaimDistributionFreeItemLines.product}.
   * @param unitOfMeasure Key property. See {@link DiscountClaimDistributionFreeItemLines.unitOfMeasure}.
   * @param inventSiteId Key property. See {@link DiscountClaimDistributionFreeItemLines.inventSiteId}.
   * @param inventLocationId Key property. See {@link DiscountClaimDistributionFreeItemLines.inventLocationId}.
   * @param variant Key property. See {@link DiscountClaimDistributionFreeItemLines.variant}.
   * @param postingProfile Key property. See {@link DiscountClaimDistributionFreeItemLines.postingProfile}.
   * @returns A request builder for creating requests to retrieve one `DiscountClaimDistributionFreeItemLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    freeItemId: DeserializedType<T, 'Edm.String'>,
    freeItemGroup: DeserializedType<T, 'Edm.Int32'>,
    product: DeserializedType<T, 'Edm.String'>,
    unitOfMeasure: DeserializedType<T, 'Edm.String'>,
    inventSiteId: DeserializedType<T, 'Edm.String'>,
    inventLocationId: DeserializedType<T, 'Edm.String'>,
    variant: DeserializedType<T, 'Edm.String'>,
    postingProfile: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiscountClaimDistributionFreeItemLines<T>, T> {
    return new GetByKeyRequestBuilder<
      DiscountClaimDistributionFreeItemLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FreeItemId: freeItemId,
      FreeItemGroup: freeItemGroup,
      Product: product,
      UnitOfMeasure: unitOfMeasure,
      InventSiteId: inventSiteId,
      InventLocationId: inventLocationId,
      Variant: variant,
      PostingProfile: postingProfile
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DiscountClaimDistributionFreeItemLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscountClaimDistributionFreeItemLines`.
   */
  update(
    entity: DiscountClaimDistributionFreeItemLines<T>
  ): UpdateRequestBuilder<DiscountClaimDistributionFreeItemLines<T>, T> {
    return new UpdateRequestBuilder<
      DiscountClaimDistributionFreeItemLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscountClaimDistributionFreeItemLines`.
   * @param dataAreaId Key property. See {@link DiscountClaimDistributionFreeItemLines.dataAreaId}.
   * @param freeItemId Key property. See {@link DiscountClaimDistributionFreeItemLines.freeItemId}.
   * @param freeItemGroup Key property. See {@link DiscountClaimDistributionFreeItemLines.freeItemGroup}.
   * @param product Key property. See {@link DiscountClaimDistributionFreeItemLines.product}.
   * @param unitOfMeasure Key property. See {@link DiscountClaimDistributionFreeItemLines.unitOfMeasure}.
   * @param inventSiteId Key property. See {@link DiscountClaimDistributionFreeItemLines.inventSiteId}.
   * @param inventLocationId Key property. See {@link DiscountClaimDistributionFreeItemLines.inventLocationId}.
   * @param variant Key property. See {@link DiscountClaimDistributionFreeItemLines.variant}.
   * @param postingProfile Key property. See {@link DiscountClaimDistributionFreeItemLines.postingProfile}.
   * @returns A request builder for creating requests that delete an entity of type `DiscountClaimDistributionFreeItemLines`.
   */
  delete(
    dataAreaId: string,
    freeItemId: string,
    freeItemGroup: number,
    product: string,
    unitOfMeasure: string,
    inventSiteId: string,
    inventLocationId: string,
    variant: string,
    postingProfile: string
  ): DeleteRequestBuilder<DiscountClaimDistributionFreeItemLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscountClaimDistributionFreeItemLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscountClaimDistributionFreeItemLines` by taking the entity as a parameter.
   */
  delete(
    entity: DiscountClaimDistributionFreeItemLines<T>
  ): DeleteRequestBuilder<DiscountClaimDistributionFreeItemLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    freeItemId?: string,
    freeItemGroup?: number,
    product?: string,
    unitOfMeasure?: string,
    inventSiteId?: string,
    inventLocationId?: string,
    variant?: string,
    postingProfile?: string
  ): DeleteRequestBuilder<DiscountClaimDistributionFreeItemLines<T>, T> {
    return new DeleteRequestBuilder<
      DiscountClaimDistributionFreeItemLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof DiscountClaimDistributionFreeItemLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FreeItemId: freeItemId!,
            FreeItemGroup: freeItemGroup!,
            Product: product!,
            UnitOfMeasure: unitOfMeasure!,
            InventSiteId: inventSiteId!,
            InventLocationId: inventLocationId!,
            Variant: variant!,
            PostingProfile: postingProfile!
          }
    );
  }
}
