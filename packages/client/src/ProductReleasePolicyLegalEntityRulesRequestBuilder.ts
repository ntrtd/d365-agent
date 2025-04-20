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
import { ProductReleasePolicyLegalEntityRules } from './ProductReleasePolicyLegalEntityRules';

/**
 * Request builder class for operations supported on the {@link ProductReleasePolicyLegalEntityRules} entity.
 */
export class ProductReleasePolicyLegalEntityRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductReleasePolicyLegalEntityRules<T>, T> {
  /**
   * Returns a request builder for querying all `ProductReleasePolicyLegalEntityRules` entities.
   * @returns A request builder for creating requests to retrieve all `ProductReleasePolicyLegalEntityRules` entities.
   */
  getAll(): GetAllRequestBuilder<ProductReleasePolicyLegalEntityRules<T>, T> {
    return new GetAllRequestBuilder<ProductReleasePolicyLegalEntityRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductReleasePolicyLegalEntityRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductReleasePolicyLegalEntityRules`.
   */
  create(
    entity: ProductReleasePolicyLegalEntityRules<T>
  ): CreateRequestBuilder<ProductReleasePolicyLegalEntityRules<T>, T> {
    return new CreateRequestBuilder<ProductReleasePolicyLegalEntityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductReleasePolicyLegalEntityRules` entity based on its keys.
   * @param legalEntityId Key property. See {@link ProductReleasePolicyLegalEntityRules.legalEntityId}.
   * @param productReleasePolicyName Key property. See {@link ProductReleasePolicyLegalEntityRules.productReleasePolicyName}.
   * @returns A request builder for creating requests to retrieve one `ProductReleasePolicyLegalEntityRules` entity based on its keys.
   */
  getByKey(
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    productReleasePolicyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductReleasePolicyLegalEntityRules<T>, T> {
    return new GetByKeyRequestBuilder<
      ProductReleasePolicyLegalEntityRules<T>,
      T
    >(this.entityApi, {
      LegalEntityId: legalEntityId,
      ProductReleasePolicyName: productReleasePolicyName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductReleasePolicyLegalEntityRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductReleasePolicyLegalEntityRules`.
   */
  update(
    entity: ProductReleasePolicyLegalEntityRules<T>
  ): UpdateRequestBuilder<ProductReleasePolicyLegalEntityRules<T>, T> {
    return new UpdateRequestBuilder<ProductReleasePolicyLegalEntityRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductReleasePolicyLegalEntityRules`.
   * @param legalEntityId Key property. See {@link ProductReleasePolicyLegalEntityRules.legalEntityId}.
   * @param productReleasePolicyName Key property. See {@link ProductReleasePolicyLegalEntityRules.productReleasePolicyName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductReleasePolicyLegalEntityRules`.
   */
  delete(
    legalEntityId: string,
    productReleasePolicyName: string
  ): DeleteRequestBuilder<ProductReleasePolicyLegalEntityRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductReleasePolicyLegalEntityRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductReleasePolicyLegalEntityRules` by taking the entity as a parameter.
   */
  delete(
    entity: ProductReleasePolicyLegalEntityRules<T>
  ): DeleteRequestBuilder<ProductReleasePolicyLegalEntityRules<T>, T>;
  delete(
    legalEntityIdOrEntity: any,
    productReleasePolicyName?: string
  ): DeleteRequestBuilder<ProductReleasePolicyLegalEntityRules<T>, T> {
    return new DeleteRequestBuilder<ProductReleasePolicyLegalEntityRules<T>, T>(
      this.entityApi,
      legalEntityIdOrEntity instanceof ProductReleasePolicyLegalEntityRules
        ? legalEntityIdOrEntity
        : {
            LegalEntityId: legalEntityIdOrEntity!,
            ProductReleasePolicyName: productReleasePolicyName!
          }
    );
  }
}
