/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ProductSwatchOverrides } from './ProductSwatchOverrides';
import { RetailProductDimensionType } from './RetailProductDimensionType';

/**
 * Request builder class for operations supported on the {@link ProductSwatchOverrides} entity.
 */
export class ProductSwatchOverridesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSwatchOverrides<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSwatchOverrides` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSwatchOverrides` entities.
   */
  getAll(): GetAllRequestBuilder<ProductSwatchOverrides<T>, T> {
    return new GetAllRequestBuilder<ProductSwatchOverrides<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductSwatchOverrides` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSwatchOverrides`.
   */
  create(
    entity: ProductSwatchOverrides<T>
  ): CreateRequestBuilder<ProductSwatchOverrides<T>, T> {
    return new CreateRequestBuilder<ProductSwatchOverrides<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductSwatchOverrides` entity based on its keys.
   * @param productMaster Key property. See {@link ProductSwatchOverrides.productMaster}.
   * @param dimensionValue Key property. See {@link ProductSwatchOverrides.dimensionValue}.
   * @param dimensionType Key property. See {@link ProductSwatchOverrides.dimensionType}.
   * @param catalogId Key property. See {@link ProductSwatchOverrides.catalogId}.
   * @param languageId Key property. See {@link ProductSwatchOverrides.languageId}.
   * @param internalOrganization Key property. See {@link ProductSwatchOverrides.internalOrganization}.
   * @returns A request builder for creating requests to retrieve one `ProductSwatchOverrides` entity based on its keys.
   */
  getByKey(
    productMaster: DeserializedType<T, 'Edm.Int64'>,
    dimensionValue: DeserializedType<T, 'Edm.Int64'>,
    dimensionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailProductDimensionType'
    >,
    catalogId: DeserializedType<T, 'Edm.Int64'>,
    languageId: DeserializedType<T, 'Edm.String'>,
    internalOrganization: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ProductSwatchOverrides<T>, T> {
    return new GetByKeyRequestBuilder<ProductSwatchOverrides<T>, T>(
      this.entityApi,
      {
        ProductMaster: productMaster,
        DimensionValue: dimensionValue,
        DimensionType: dimensionType,
        CatalogId: catalogId,
        LanguageId: languageId,
        InternalOrganization: internalOrganization
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSwatchOverrides`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSwatchOverrides`.
   */
  update(
    entity: ProductSwatchOverrides<T>
  ): UpdateRequestBuilder<ProductSwatchOverrides<T>, T> {
    return new UpdateRequestBuilder<ProductSwatchOverrides<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductSwatchOverrides`.
   * @param productMaster Key property. See {@link ProductSwatchOverrides.productMaster}.
   * @param dimensionValue Key property. See {@link ProductSwatchOverrides.dimensionValue}.
   * @param dimensionType Key property. See {@link ProductSwatchOverrides.dimensionType}.
   * @param catalogId Key property. See {@link ProductSwatchOverrides.catalogId}.
   * @param languageId Key property. See {@link ProductSwatchOverrides.languageId}.
   * @param internalOrganization Key property. See {@link ProductSwatchOverrides.internalOrganization}.
   * @returns A request builder for creating requests that delete an entity of type `ProductSwatchOverrides`.
   */
  delete(
    productMaster: BigNumber,
    dimensionValue: BigNumber,
    dimensionType: RetailProductDimensionType,
    catalogId: BigNumber,
    languageId: string,
    internalOrganization: BigNumber
  ): DeleteRequestBuilder<ProductSwatchOverrides<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductSwatchOverrides`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductSwatchOverrides` by taking the entity as a parameter.
   */
  delete(
    entity: ProductSwatchOverrides<T>
  ): DeleteRequestBuilder<ProductSwatchOverrides<T>, T>;
  delete(
    productMasterOrEntity: any,
    dimensionValue?: BigNumber,
    dimensionType?: RetailProductDimensionType,
    catalogId?: BigNumber,
    languageId?: string,
    internalOrganization?: BigNumber
  ): DeleteRequestBuilder<ProductSwatchOverrides<T>, T> {
    return new DeleteRequestBuilder<ProductSwatchOverrides<T>, T>(
      this.entityApi,
      productMasterOrEntity instanceof ProductSwatchOverrides
        ? productMasterOrEntity
        : {
            ProductMaster: productMasterOrEntity!,
            DimensionValue: dimensionValue!,
            DimensionType: dimensionType!,
            CatalogId: catalogId!,
            LanguageId: languageId!,
            InternalOrganization: internalOrganization!
          }
    );
  }
}
