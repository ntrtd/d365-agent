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
import { KitVariantComponents } from './KitVariantComponents';

/**
 * Request builder class for operations supported on the {@link KitVariantComponents} entity.
 */
export class KitVariantComponentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KitVariantComponents<T>, T> {
  /**
   * Returns a request builder for querying all `KitVariantComponents` entities.
   * @returns A request builder for creating requests to retrieve all `KitVariantComponents` entities.
   */
  getAll(): GetAllRequestBuilder<KitVariantComponents<T>, T> {
    return new GetAllRequestBuilder<KitVariantComponents<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `KitVariantComponents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KitVariantComponents`.
   */
  create(
    entity: KitVariantComponents<T>
  ): CreateRequestBuilder<KitVariantComponents<T>, T> {
    return new CreateRequestBuilder<KitVariantComponents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `KitVariantComponents` entity based on its keys.
   * @param productNumber Key property. See {@link KitVariantComponents.productNumber}.
   * @param productVariantNumber Key property. See {@link KitVariantComponents.productVariantNumber}.
   * @param kitProductNumber Key property. See {@link KitVariantComponents.kitProductNumber}.
   * @param kitComponentLineNumber Key property. See {@link KitVariantComponents.kitComponentLineNumber}.
   * @returns A request builder for creating requests to retrieve one `KitVariantComponents` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>,
    productVariantNumber: DeserializedType<T, 'Edm.String'>,
    kitProductNumber: DeserializedType<T, 'Edm.String'>,
    kitComponentLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<KitVariantComponents<T>, T> {
    return new GetByKeyRequestBuilder<KitVariantComponents<T>, T>(
      this.entityApi,
      {
        ProductNumber: productNumber,
        ProductVariantNumber: productVariantNumber,
        KitProductNumber: kitProductNumber,
        KitComponentLineNumber: kitComponentLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `KitVariantComponents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `KitVariantComponents`.
   */
  update(
    entity: KitVariantComponents<T>
  ): UpdateRequestBuilder<KitVariantComponents<T>, T> {
    return new UpdateRequestBuilder<KitVariantComponents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `KitVariantComponents`.
   * @param productNumber Key property. See {@link KitVariantComponents.productNumber}.
   * @param productVariantNumber Key property. See {@link KitVariantComponents.productVariantNumber}.
   * @param kitProductNumber Key property. See {@link KitVariantComponents.kitProductNumber}.
   * @param kitComponentLineNumber Key property. See {@link KitVariantComponents.kitComponentLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `KitVariantComponents`.
   */
  delete(
    productNumber: string,
    productVariantNumber: string,
    kitProductNumber: string,
    kitComponentLineNumber: BigNumber
  ): DeleteRequestBuilder<KitVariantComponents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `KitVariantComponents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `KitVariantComponents` by taking the entity as a parameter.
   */
  delete(
    entity: KitVariantComponents<T>
  ): DeleteRequestBuilder<KitVariantComponents<T>, T>;
  delete(
    productNumberOrEntity: any,
    productVariantNumber?: string,
    kitProductNumber?: string,
    kitComponentLineNumber?: BigNumber
  ): DeleteRequestBuilder<KitVariantComponents<T>, T> {
    return new DeleteRequestBuilder<KitVariantComponents<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof KitVariantComponents
        ? productNumberOrEntity
        : {
            ProductNumber: productNumberOrEntity!,
            ProductVariantNumber: productVariantNumber!,
            KitProductNumber: kitProductNumber!,
            KitComponentLineNumber: kitComponentLineNumber!
          }
    );
  }
}
