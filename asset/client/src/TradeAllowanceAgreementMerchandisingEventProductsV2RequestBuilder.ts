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
import { TradeAllowanceAgreementMerchandisingEventProductsV2 } from './TradeAllowanceAgreementMerchandisingEventProductsV2';

/**
 * Request builder class for operations supported on the {@link TradeAllowanceAgreementMerchandisingEventProductsV2} entity.
 */
export class TradeAllowanceAgreementMerchandisingEventProductsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  TradeAllowanceAgreementMerchandisingEventProductsV2<T>,
  T
> {
  /**
   * Returns a request builder for querying all `TradeAllowanceAgreementMerchandisingEventProductsV2` entities.
   * @returns A request builder for creating requests to retrieve all `TradeAllowanceAgreementMerchandisingEventProductsV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventProductsV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventProductsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TradeAllowanceAgreementMerchandisingEventProductsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeAllowanceAgreementMerchandisingEventProductsV2`.
   */
  create(
    entity: TradeAllowanceAgreementMerchandisingEventProductsV2<T>
  ): CreateRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventProductsV2<T>,
    T
  > {
    return new CreateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventProductsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TradeAllowanceAgreementMerchandisingEventProductsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.dataAreaId}.
   * @param tradeAllowanceAgreementMerchandisingEventId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.tradeAllowanceAgreementMerchandisingEventId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.customerAccountNumber}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.tradeAllowanceAgreementId}.
   * @param itemNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.itemNumber}.
   * @param promotionalProductUnitSymbol Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.promotionalProductUnitSymbol}.
   * @param productColorId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.productColorId}.
   * @param productStyleId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.productStyleId}.
   * @param productVersionId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.productVersionId}.
   * @param productSizeId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.productSizeId}.
   * @param productConfigurationId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.productConfigurationId}.
   * @returns A request builder for creating requests to retrieve one `TradeAllowanceAgreementMerchandisingEventProductsV2` entity based on its keys.
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
    productVersionId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventProductsV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventProductsV2<T>,
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
      ProductVersionId: productVersionId,
      ProductSizeId: productSizeId,
      ProductConfigurationId: productConfigurationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TradeAllowanceAgreementMerchandisingEventProductsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeAllowanceAgreementMerchandisingEventProductsV2`.
   */
  update(
    entity: TradeAllowanceAgreementMerchandisingEventProductsV2<T>
  ): UpdateRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventProductsV2<T>,
    T
  > {
    return new UpdateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventProductsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEventProductsV2`.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.dataAreaId}.
   * @param tradeAllowanceAgreementMerchandisingEventId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.tradeAllowanceAgreementMerchandisingEventId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.customerAccountNumber}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.tradeAllowanceAgreementId}.
   * @param itemNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.itemNumber}.
   * @param promotionalProductUnitSymbol Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.promotionalProductUnitSymbol}.
   * @param productColorId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.productColorId}.
   * @param productStyleId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.productStyleId}.
   * @param productVersionId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.productVersionId}.
   * @param productSizeId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.productSizeId}.
   * @param productConfigurationId Key property. See {@link TradeAllowanceAgreementMerchandisingEventProductsV2.productConfigurationId}.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEventProductsV2`.
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
    productVersionId: string,
    productSizeId: string,
    productConfigurationId: string
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventProductsV2<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEventProductsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEventProductsV2` by taking the entity as a parameter.
   */
  delete(
    entity: TradeAllowanceAgreementMerchandisingEventProductsV2<T>
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventProductsV2<T>,
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
    productVersionId?: string,
    productSizeId?: string,
    productConfigurationId?: string
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventProductsV2<T>,
    T
  > {
    return new DeleteRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventProductsV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      TradeAllowanceAgreementMerchandisingEventProductsV2
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
            ProductVersionId: productVersionId!,
            ProductSizeId: productSizeId!,
            ProductConfigurationId: productConfigurationId!
          }
    );
  }
}
