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
import { TradeAllowanceAgreementProductsV2 } from './TradeAllowanceAgreementProductsV2';

/**
 * Request builder class for operations supported on the {@link TradeAllowanceAgreementProductsV2} entity.
 */
export class TradeAllowanceAgreementProductsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TradeAllowanceAgreementProductsV2<T>, T> {
  /**
   * Returns a request builder for querying all `TradeAllowanceAgreementProductsV2` entities.
   * @returns A request builder for creating requests to retrieve all `TradeAllowanceAgreementProductsV2` entities.
   */
  getAll(): GetAllRequestBuilder<TradeAllowanceAgreementProductsV2<T>, T> {
    return new GetAllRequestBuilder<TradeAllowanceAgreementProductsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TradeAllowanceAgreementProductsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeAllowanceAgreementProductsV2`.
   */
  create(
    entity: TradeAllowanceAgreementProductsV2<T>
  ): CreateRequestBuilder<TradeAllowanceAgreementProductsV2<T>, T> {
    return new CreateRequestBuilder<TradeAllowanceAgreementProductsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TradeAllowanceAgreementProductsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementProductsV2.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementProductsV2.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementProductsV2.customerAccountNumber}.
   * @param itemNumber Key property. See {@link TradeAllowanceAgreementProductsV2.itemNumber}.
   * @param promotionalProductUnitSymbol Key property. See {@link TradeAllowanceAgreementProductsV2.promotionalProductUnitSymbol}.
   * @param productColorId Key property. See {@link TradeAllowanceAgreementProductsV2.productColorId}.
   * @param productStyleId Key property. See {@link TradeAllowanceAgreementProductsV2.productStyleId}.
   * @param productVersionId Key property. See {@link TradeAllowanceAgreementProductsV2.productVersionId}.
   * @param productSizeId Key property. See {@link TradeAllowanceAgreementProductsV2.productSizeId}.
   * @param productConfigurationId Key property. See {@link TradeAllowanceAgreementProductsV2.productConfigurationId}.
   * @returns A request builder for creating requests to retrieve one `TradeAllowanceAgreementProductsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    promotionalProductUnitSymbol: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TradeAllowanceAgreementProductsV2<T>, T> {
    return new GetByKeyRequestBuilder<TradeAllowanceAgreementProductsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TradeAllowanceAgreementId: tradeAllowanceAgreementId,
        CustomerAccountNumber: customerAccountNumber,
        ItemNumber: itemNumber,
        PromotionalProductUnitSymbol: promotionalProductUnitSymbol,
        ProductColorId: productColorId,
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId,
        ProductSizeId: productSizeId,
        ProductConfigurationId: productConfigurationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TradeAllowanceAgreementProductsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeAllowanceAgreementProductsV2`.
   */
  update(
    entity: TradeAllowanceAgreementProductsV2<T>
  ): UpdateRequestBuilder<TradeAllowanceAgreementProductsV2<T>, T> {
    return new UpdateRequestBuilder<TradeAllowanceAgreementProductsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementProductsV2`.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementProductsV2.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementProductsV2.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementProductsV2.customerAccountNumber}.
   * @param itemNumber Key property. See {@link TradeAllowanceAgreementProductsV2.itemNumber}.
   * @param promotionalProductUnitSymbol Key property. See {@link TradeAllowanceAgreementProductsV2.promotionalProductUnitSymbol}.
   * @param productColorId Key property. See {@link TradeAllowanceAgreementProductsV2.productColorId}.
   * @param productStyleId Key property. See {@link TradeAllowanceAgreementProductsV2.productStyleId}.
   * @param productVersionId Key property. See {@link TradeAllowanceAgreementProductsV2.productVersionId}.
   * @param productSizeId Key property. See {@link TradeAllowanceAgreementProductsV2.productSizeId}.
   * @param productConfigurationId Key property. See {@link TradeAllowanceAgreementProductsV2.productConfigurationId}.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementProductsV2`.
   */
  delete(
    dataAreaId: string,
    tradeAllowanceAgreementId: string,
    customerAccountNumber: string,
    itemNumber: string,
    promotionalProductUnitSymbol: string,
    productColorId: string,
    productStyleId: string,
    productVersionId: string,
    productSizeId: string,
    productConfigurationId: string
  ): DeleteRequestBuilder<TradeAllowanceAgreementProductsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementProductsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementProductsV2` by taking the entity as a parameter.
   */
  delete(
    entity: TradeAllowanceAgreementProductsV2<T>
  ): DeleteRequestBuilder<TradeAllowanceAgreementProductsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAllowanceAgreementId?: string,
    customerAccountNumber?: string,
    itemNumber?: string,
    promotionalProductUnitSymbol?: string,
    productColorId?: string,
    productStyleId?: string,
    productVersionId?: string,
    productSizeId?: string,
    productConfigurationId?: string
  ): DeleteRequestBuilder<TradeAllowanceAgreementProductsV2<T>, T> {
    return new DeleteRequestBuilder<TradeAllowanceAgreementProductsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TradeAllowanceAgreementProductsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAllowanceAgreementId: tradeAllowanceAgreementId!,
            CustomerAccountNumber: customerAccountNumber!,
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
