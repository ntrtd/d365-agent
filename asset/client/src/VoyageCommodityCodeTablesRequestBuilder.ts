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
import { VoyageCommodityCodeTables } from './VoyageCommodityCodeTables';

/**
 * Request builder class for operations supported on the {@link VoyageCommodityCodeTables} entity.
 */
export class VoyageCommodityCodeTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VoyageCommodityCodeTables<T>, T> {
  /**
   * Returns a request builder for querying all `VoyageCommodityCodeTables` entities.
   * @returns A request builder for creating requests to retrieve all `VoyageCommodityCodeTables` entities.
   */
  getAll(): GetAllRequestBuilder<VoyageCommodityCodeTables<T>, T> {
    return new GetAllRequestBuilder<VoyageCommodityCodeTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VoyageCommodityCodeTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VoyageCommodityCodeTables`.
   */
  create(
    entity: VoyageCommodityCodeTables<T>
  ): CreateRequestBuilder<VoyageCommodityCodeTables<T>, T> {
    return new CreateRequestBuilder<VoyageCommodityCodeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VoyageCommodityCodeTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link VoyageCommodityCodeTables.dataAreaId}.
   * @param commodityCode Key property. See {@link VoyageCommodityCodeTables.commodityCode}.
   * @returns A request builder for creating requests to retrieve one `VoyageCommodityCodeTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    commodityCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VoyageCommodityCodeTables<T>, T> {
    return new GetByKeyRequestBuilder<VoyageCommodityCodeTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CommodityCode: commodityCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VoyageCommodityCodeTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VoyageCommodityCodeTables`.
   */
  update(
    entity: VoyageCommodityCodeTables<T>
  ): UpdateRequestBuilder<VoyageCommodityCodeTables<T>, T> {
    return new UpdateRequestBuilder<VoyageCommodityCodeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VoyageCommodityCodeTables`.
   * @param dataAreaId Key property. See {@link VoyageCommodityCodeTables.dataAreaId}.
   * @param commodityCode Key property. See {@link VoyageCommodityCodeTables.commodityCode}.
   * @returns A request builder for creating requests that delete an entity of type `VoyageCommodityCodeTables`.
   */
  delete(
    dataAreaId: string,
    commodityCode: string
  ): DeleteRequestBuilder<VoyageCommodityCodeTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VoyageCommodityCodeTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VoyageCommodityCodeTables` by taking the entity as a parameter.
   */
  delete(
    entity: VoyageCommodityCodeTables<T>
  ): DeleteRequestBuilder<VoyageCommodityCodeTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    commodityCode?: string
  ): DeleteRequestBuilder<VoyageCommodityCodeTables<T>, T> {
    return new DeleteRequestBuilder<VoyageCommodityCodeTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VoyageCommodityCodeTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CommodityCode: commodityCode!
          }
    );
  }
}
