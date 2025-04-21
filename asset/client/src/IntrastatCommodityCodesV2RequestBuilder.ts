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
import { IntrastatCommodityCodesV2 } from './IntrastatCommodityCodesV2';

/**
 * Request builder class for operations supported on the {@link IntrastatCommodityCodesV2} entity.
 */
export class IntrastatCommodityCodesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntrastatCommodityCodesV2<T>, T> {
  /**
   * Returns a request builder for querying all `IntrastatCommodityCodesV2` entities.
   * @returns A request builder for creating requests to retrieve all `IntrastatCommodityCodesV2` entities.
   */
  getAll(): GetAllRequestBuilder<IntrastatCommodityCodesV2<T>, T> {
    return new GetAllRequestBuilder<IntrastatCommodityCodesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IntrastatCommodityCodesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntrastatCommodityCodesV2`.
   */
  create(
    entity: IntrastatCommodityCodesV2<T>
  ): CreateRequestBuilder<IntrastatCommodityCodesV2<T>, T> {
    return new CreateRequestBuilder<IntrastatCommodityCodesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntrastatCommodityCodesV2` entity based on its keys.
   * @param commodityHierarchyName Key property. See {@link IntrastatCommodityCodesV2.commodityHierarchyName}.
   * @param name Key property. See {@link IntrastatCommodityCodesV2.name}.
   * @param intrastatParametersDataAreaId Key property. See {@link IntrastatCommodityCodesV2.intrastatParametersDataAreaId}.
   * @returns A request builder for creating requests to retrieve one `IntrastatCommodityCodesV2` entity based on its keys.
   */
  getByKey(
    commodityHierarchyName: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    intrastatParametersDataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntrastatCommodityCodesV2<T>, T> {
    return new GetByKeyRequestBuilder<IntrastatCommodityCodesV2<T>, T>(
      this.entityApi,
      {
        CommodityHierarchyName: commodityHierarchyName,
        Name: name,
        IntrastatParametersDataAreaId: intrastatParametersDataAreaId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntrastatCommodityCodesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntrastatCommodityCodesV2`.
   */
  update(
    entity: IntrastatCommodityCodesV2<T>
  ): UpdateRequestBuilder<IntrastatCommodityCodesV2<T>, T> {
    return new UpdateRequestBuilder<IntrastatCommodityCodesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntrastatCommodityCodesV2`.
   * @param commodityHierarchyName Key property. See {@link IntrastatCommodityCodesV2.commodityHierarchyName}.
   * @param name Key property. See {@link IntrastatCommodityCodesV2.name}.
   * @param intrastatParametersDataAreaId Key property. See {@link IntrastatCommodityCodesV2.intrastatParametersDataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatCommodityCodesV2`.
   */
  delete(
    commodityHierarchyName: string,
    name: string,
    intrastatParametersDataAreaId: string
  ): DeleteRequestBuilder<IntrastatCommodityCodesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntrastatCommodityCodesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatCommodityCodesV2` by taking the entity as a parameter.
   */
  delete(
    entity: IntrastatCommodityCodesV2<T>
  ): DeleteRequestBuilder<IntrastatCommodityCodesV2<T>, T>;
  delete(
    commodityHierarchyNameOrEntity: any,
    name?: string,
    intrastatParametersDataAreaId?: string
  ): DeleteRequestBuilder<IntrastatCommodityCodesV2<T>, T> {
    return new DeleteRequestBuilder<IntrastatCommodityCodesV2<T>, T>(
      this.entityApi,
      commodityHierarchyNameOrEntity instanceof IntrastatCommodityCodesV2
        ? commodityHierarchyNameOrEntity
        : {
            CommodityHierarchyName: commodityHierarchyNameOrEntity!,
            Name: name!,
            IntrastatParametersDataAreaId: intrastatParametersDataAreaId!
          }
    );
  }
}
