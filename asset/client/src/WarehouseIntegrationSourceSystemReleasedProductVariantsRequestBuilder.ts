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
import { WarehouseIntegrationSourceSystemReleasedProductVariants } from './WarehouseIntegrationSourceSystemReleasedProductVariants';

/**
 * Request builder class for operations supported on the {@link WarehouseIntegrationSourceSystemReleasedProductVariants} entity.
 */
export class WarehouseIntegrationSourceSystemReleasedProductVariantsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  WarehouseIntegrationSourceSystemReleasedProductVariants<T>,
  T
> {
  /**
   * Returns a request builder for querying all `WarehouseIntegrationSourceSystemReleasedProductVariants` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseIntegrationSourceSystemReleasedProductVariants` entities.
   */
  getAll(): GetAllRequestBuilder<
    WarehouseIntegrationSourceSystemReleasedProductVariants<T>,
    T
  > {
    return new GetAllRequestBuilder<
      WarehouseIntegrationSourceSystemReleasedProductVariants<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehouseIntegrationSourceSystemReleasedProductVariants` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseIntegrationSourceSystemReleasedProductVariants`.
   */
  create(
    entity: WarehouseIntegrationSourceSystemReleasedProductVariants<T>
  ): CreateRequestBuilder<
    WarehouseIntegrationSourceSystemReleasedProductVariants<T>,
    T
  > {
    return new CreateRequestBuilder<
      WarehouseIntegrationSourceSystemReleasedProductVariants<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WarehouseIntegrationSourceSystemReleasedProductVariants` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseIntegrationSourceSystemReleasedProductVariants.dataAreaId}.
   * @param productVariantNumber Key property. See {@link WarehouseIntegrationSourceSystemReleasedProductVariants.productVariantNumber}.
   * @returns A request builder for creating requests to retrieve one `WarehouseIntegrationSourceSystemReleasedProductVariants` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productVariantNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    WarehouseIntegrationSourceSystemReleasedProductVariants<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      WarehouseIntegrationSourceSystemReleasedProductVariants<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ProductVariantNumber: productVariantNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseIntegrationSourceSystemReleasedProductVariants`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseIntegrationSourceSystemReleasedProductVariants`.
   */
  update(
    entity: WarehouseIntegrationSourceSystemReleasedProductVariants<T>
  ): UpdateRequestBuilder<
    WarehouseIntegrationSourceSystemReleasedProductVariants<T>,
    T
  > {
    return new UpdateRequestBuilder<
      WarehouseIntegrationSourceSystemReleasedProductVariants<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseIntegrationSourceSystemReleasedProductVariants`.
   * @param dataAreaId Key property. See {@link WarehouseIntegrationSourceSystemReleasedProductVariants.dataAreaId}.
   * @param productVariantNumber Key property. See {@link WarehouseIntegrationSourceSystemReleasedProductVariants.productVariantNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseIntegrationSourceSystemReleasedProductVariants`.
   */
  delete(
    dataAreaId: string,
    productVariantNumber: string
  ): DeleteRequestBuilder<
    WarehouseIntegrationSourceSystemReleasedProductVariants<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseIntegrationSourceSystemReleasedProductVariants`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseIntegrationSourceSystemReleasedProductVariants` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseIntegrationSourceSystemReleasedProductVariants<T>
  ): DeleteRequestBuilder<
    WarehouseIntegrationSourceSystemReleasedProductVariants<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    productVariantNumber?: string
  ): DeleteRequestBuilder<
    WarehouseIntegrationSourceSystemReleasedProductVariants<T>,
    T
  > {
    return new DeleteRequestBuilder<
      WarehouseIntegrationSourceSystemReleasedProductVariants<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      WarehouseIntegrationSourceSystemReleasedProductVariants
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductVariantNumber: productVariantNumber!
          }
    );
  }
}
