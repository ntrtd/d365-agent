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
import { TradeAllowanceAgreementMerchandisingEventProducts } from './TradeAllowanceAgreementMerchandisingEventProducts';

/**
 * Request builder class for operations supported on the {@link TradeAllowanceAgreementMerchandisingEventProducts} entity.
 */
export class TradeAllowanceAgreementMerchandisingEventProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  TradeAllowanceAgreementMerchandisingEventProducts<T>,
  T
> {
  /**
   * Returns a request builder for querying all `TradeAllowanceAgreementMerchandisingEventProducts` entities.
   * @returns A request builder for creating requests to retrieve all `TradeAllowanceAgreementMerchandisingEventProducts` entities.
   */
  getAll(): GetAllRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventProducts<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventProducts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TradeAllowanceAgreementMerchandisingEventProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeAllowanceAgreementMerchandisingEventProducts`.
   */
  create(
    entity: TradeAllowanceAgreementMerchandisingEventProducts<T>
  ): CreateRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventProducts<T>,
    T
  > {
    return new CreateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventProducts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TradeAllowanceAgreementMerchandisingEventProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.dataAreaId}.
   * @param tradeAllowanceAgreementMerchandisingEventId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.tradeAllowanceAgreementMerchandisingEventId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.customerAccountNumber}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.tradeAllowanceAgreementId}.
   * @param itemNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.itemNumber}.
   * @param promotionalProductUnitSymbol Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.promotionalProductUnitSymbol}.
   * @param productColorId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.productColorId}.
   * @param productStyleId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.productStyleId}.
   * @param productSizeId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.productSizeId}.
   * @param productConfigurationId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.productConfigurationId}.
   * @returns A request builder for creating requests to retrieve one `TradeAllowanceAgreementMerchandisingEventProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementMerchandisingEventId: DeserializedType<
      T,
      'Edm.String'
    >,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    promotionalProductUnitSymbol: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventProducts<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventProducts<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TradeAllowanceAgreementMerchandisingEventId:
        tradeAllowanceAgreementMerchandisingEventId,
      CustomerAccountNumber: customerAccountNumber,
      TradeAllowanceAgreementId: tradeAllowanceAgreementId,
      ItemNumber: itemNumber,
      PromotionalProductUnitSymbol: promotionalProductUnitSymbol,
      ProductColorId: productColorId,
      ProductStyleId: productStyleId,
      ProductSizeId: productSizeId,
      ProductConfigurationId: productConfigurationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TradeAllowanceAgreementMerchandisingEventProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeAllowanceAgreementMerchandisingEventProducts`.
   */
  update(
    entity: TradeAllowanceAgreementMerchandisingEventProducts<T>
  ): UpdateRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventProducts<T>,
    T
  > {
    return new UpdateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventProducts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEventProducts`.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.dataAreaId}.
   * @param tradeAllowanceAgreementMerchandisingEventId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.tradeAllowanceAgreementMerchandisingEventId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.customerAccountNumber}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.tradeAllowanceAgreementId}.
   * @param itemNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.itemNumber}.
   * @param promotionalProductUnitSymbol Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.promotionalProductUnitSymbol}.
   * @param productColorId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.productColorId}.
   * @param productStyleId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.productStyleId}.
   * @param productSizeId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.productSizeId}.
   * @param productConfigurationId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProducts.productConfigurationId}.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEventProducts`.
   */
  delete(
    dataAreaId: string,
    tradeAllowanceAgreementMerchandisingEventId: string,
    customerAccountNumber: string,
    tradeAllowanceAgreementId: string,
    itemNumber: string,
    promotionalProductUnitSymbol: string,
    productColorId: string,
    productStyleId: string,
    productSizeId: string,
    productConfigurationId: string
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventProducts<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEventProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEventProducts` by taking the entity as a parameter.
   */
  delete(
    entity: TradeAllowanceAgreementMerchandisingEventProducts<T>
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventProducts<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    tradeAllowanceAgreementMerchandisingEventId?: string,
    customerAccountNumber?: string,
    tradeAllowanceAgreementId?: string,
    itemNumber?: string,
    promotionalProductUnitSymbol?: string,
    productColorId?: string,
    productStyleId?: string,
    productSizeId?: string,
    productConfigurationId?: string
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventProducts<T>,
    T
  > {
    return new DeleteRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventProducts<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      TradeAllowanceAgreementMerchandisingEventProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAllowanceAgreementMerchandisingEventId:
              tradeAllowanceAgreementMerchandisingEventId!,
            CustomerAccountNumber: customerAccountNumber!,
            TradeAllowanceAgreementId: tradeAllowanceAgreementId!,
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
