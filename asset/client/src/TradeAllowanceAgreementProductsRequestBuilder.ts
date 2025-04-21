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
import { TradeAllowanceAgreementProducts } from './TradeAllowanceAgreementProducts';

/**
 * Request builder class for operations supported on the {@link TradeAllowanceAgreementProducts} entity.
 */
export class TradeAllowanceAgreementProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TradeAllowanceAgreementProducts<T>, T> {
  /**
   * Returns a request builder for querying all `TradeAllowanceAgreementProducts` entities.
   * @returns A request builder for creating requests to retrieve all `TradeAllowanceAgreementProducts` entities.
   */
  getAll(): GetAllRequestBuilder<TradeAllowanceAgreementProducts<T>, T> {
    return new GetAllRequestBuilder<TradeAllowanceAgreementProducts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TradeAllowanceAgreementProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeAllowanceAgreementProducts`.
   */
  create(
    entity: TradeAllowanceAgreementProducts<T>
  ): CreateRequestBuilder<TradeAllowanceAgreementProducts<T>, T> {
    return new CreateRequestBuilder<TradeAllowanceAgreementProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TradeAllowanceAgreementProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementProducts.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementProducts.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementProducts.customerAccountNumber}.
   * @param itemNumber Key property. See {@link TradeAllowanceAgreementProducts.itemNumber}.
   * @param promotionalProductUnitSymbol Key property. See {@link TradeAllowanceAgreementProducts.promotionalProductUnitSymbol}.
   * @param productColorId Key property. See {@link TradeAllowanceAgreementProducts.productColorId}.
   * @param productStyleId Key property. See {@link TradeAllowanceAgreementProducts.productStyleId}.
   * @param productSizeId Key property. See {@link TradeAllowanceAgreementProducts.productSizeId}.
   * @param productConfigurationId Key property. See {@link TradeAllowanceAgreementProducts.productConfigurationId}.
   * @returns A request builder for creating requests to retrieve one `TradeAllowanceAgreementProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    promotionalProductUnitSymbol: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TradeAllowanceAgreementProducts<T>, T> {
    return new GetByKeyRequestBuilder<TradeAllowanceAgreementProducts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TradeAllowanceAgreementId: tradeAllowanceAgreementId,
        CustomerAccountNumber: customerAccountNumber,
        ItemNumber: itemNumber,
        PromotionalProductUnitSymbol: promotionalProductUnitSymbol,
        ProductColorId: productColorId,
        ProductStyleId: productStyleId,
        ProductSizeId: productSizeId,
        ProductConfigurationId: productConfigurationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TradeAllowanceAgreementProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeAllowanceAgreementProducts`.
   */
  update(
    entity: TradeAllowanceAgreementProducts<T>
  ): UpdateRequestBuilder<TradeAllowanceAgreementProducts<T>, T> {
    return new UpdateRequestBuilder<TradeAllowanceAgreementProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementProducts`.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementProducts.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementProducts.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementProducts.customerAccountNumber}.
   * @param itemNumber Key property. See {@link TradeAllowanceAgreementProducts.itemNumber}.
   * @param promotionalProductUnitSymbol Key property. See {@link TradeAllowanceAgreementProducts.promotionalProductUnitSymbol}.
   * @param productColorId Key property. See {@link TradeAllowanceAgreementProducts.productColorId}.
   * @param productStyleId Key property. See {@link TradeAllowanceAgreementProducts.productStyleId}.
   * @param productSizeId Key property. See {@link TradeAllowanceAgreementProducts.productSizeId}.
   * @param productConfigurationId Key property. See {@link TradeAllowanceAgreementProducts.productConfigurationId}.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementProducts`.
   */
  delete(
    dataAreaId: string,
    tradeAllowanceAgreementId: string,
    customerAccountNumber: string,
    itemNumber: string,
    promotionalProductUnitSymbol: string,
    productColorId: string,
    productStyleId: string,
    productSizeId: string,
    productConfigurationId: string
  ): DeleteRequestBuilder<TradeAllowanceAgreementProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementProducts` by taking the entity as a parameter.
   */
  delete(
    entity: TradeAllowanceAgreementProducts<T>
  ): DeleteRequestBuilder<TradeAllowanceAgreementProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAllowanceAgreementId?: string,
    customerAccountNumber?: string,
    itemNumber?: string,
    promotionalProductUnitSymbol?: string,
    productColorId?: string,
    productStyleId?: string,
    productSizeId?: string,
    productConfigurationId?: string
  ): DeleteRequestBuilder<TradeAllowanceAgreementProducts<T>, T> {
    return new DeleteRequestBuilder<TradeAllowanceAgreementProducts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TradeAllowanceAgreementProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAllowanceAgreementId: tradeAllowanceAgreementId!,
            CustomerAccountNumber: customerAccountNumber!,
            ItemNumber: itemNumber!,
            PromotionalProductUnitSymbol: promotionalProductUnitSymbol!,
            ProductColorId: productColorId!,
            ProductStyleId: productStyleId!,
            ProductSizeId: productSizeId!,
            ProductConfigurationId: productConfigurationId!
          }
    );
  }
}
