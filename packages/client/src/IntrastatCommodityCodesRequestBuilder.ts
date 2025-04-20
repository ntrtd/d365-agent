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
import { IntrastatCommodityCodes } from './IntrastatCommodityCodes';

/**
 * Request builder class for operations supported on the {@link IntrastatCommodityCodes} entity.
 */
export class IntrastatCommodityCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntrastatCommodityCodes<T>, T> {
  /**
   * Returns a request builder for querying all `IntrastatCommodityCodes` entities.
   * @returns A request builder for creating requests to retrieve all `IntrastatCommodityCodes` entities.
   */
  getAll(): GetAllRequestBuilder<IntrastatCommodityCodes<T>, T> {
    return new GetAllRequestBuilder<IntrastatCommodityCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IntrastatCommodityCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntrastatCommodityCodes`.
   */
  create(
    entity: IntrastatCommodityCodes<T>
  ): CreateRequestBuilder<IntrastatCommodityCodes<T>, T> {
    return new CreateRequestBuilder<IntrastatCommodityCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntrastatCommodityCodes` entity based on its keys.
   * @param commodityHierarchyName Key property. See {@link IntrastatCommodityCodes.commodityHierarchyName}.
   * @param name Key property. See {@link IntrastatCommodityCodes.name}.
   * @returns A request builder for creating requests to retrieve one `IntrastatCommodityCodes` entity based on its keys.
   */
  getByKey(
    commodityHierarchyName: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntrastatCommodityCodes<T>, T> {
    return new GetByKeyRequestBuilder<IntrastatCommodityCodes<T>, T>(
      this.entityApi,
      {
        CommodityHierarchyName: commodityHierarchyName,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntrastatCommodityCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntrastatCommodityCodes`.
   */
  update(
    entity: IntrastatCommodityCodes<T>
  ): UpdateRequestBuilder<IntrastatCommodityCodes<T>, T> {
    return new UpdateRequestBuilder<IntrastatCommodityCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntrastatCommodityCodes`.
   * @param commodityHierarchyName Key property. See {@link IntrastatCommodityCodes.commodityHierarchyName}.
   * @param name Key property. See {@link IntrastatCommodityCodes.name}.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatCommodityCodes`.
   */
  delete(
    commodityHierarchyName: string,
    name: string
  ): DeleteRequestBuilder<IntrastatCommodityCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntrastatCommodityCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatCommodityCodes` by taking the entity as a parameter.
   */
  delete(
    entity: IntrastatCommodityCodes<T>
  ): DeleteRequestBuilder<IntrastatCommodityCodes<T>, T>;
  delete(
    commodityHierarchyNameOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<IntrastatCommodityCodes<T>, T> {
    return new DeleteRequestBuilder<IntrastatCommodityCodes<T>, T>(
      this.entityApi,
      commodityHierarchyNameOrEntity instanceof IntrastatCommodityCodes
        ? commodityHierarchyNameOrEntity
        : {
            CommodityHierarchyName: commodityHierarchyNameOrEntity!,
            Name: name!
          }
    );
  }
}
