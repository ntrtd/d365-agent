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
import { ByProductTables } from './ByProductTables';

/**
 * Request builder class for operations supported on the {@link ByProductTables} entity.
 */
export class ByProductTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ByProductTables<T>, T> {
  /**
   * Returns a request builder for querying all `ByProductTables` entities.
   * @returns A request builder for creating requests to retrieve all `ByProductTables` entities.
   */
  getAll(): GetAllRequestBuilder<ByProductTables<T>, T> {
    return new GetAllRequestBuilder<ByProductTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ByProductTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ByProductTables`.
   */
  create(
    entity: ByProductTables<T>
  ): CreateRequestBuilder<ByProductTables<T>, T> {
    return new CreateRequestBuilder<ByProductTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ByProductTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ByProductTables.dataAreaId}.
   * @param mainProduct Key property. See {@link ByProductTables.mainProduct}.
   * @param dimensionNumberMain Key property. See {@link ByProductTables.dimensionNumberMain}.
   * @param itemIdByProd Key property. See {@link ByProductTables.itemIdByProd}.
   * @param dimensionNumberByProd Key property. See {@link ByProductTables.dimensionNumberByProd}.
   * @returns A request builder for creating requests to retrieve one `ByProductTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    mainProduct: DeserializedType<T, 'Edm.String'>,
    dimensionNumberMain: DeserializedType<T, 'Edm.String'>,
    itemIdByProd: DeserializedType<T, 'Edm.String'>,
    dimensionNumberByProd: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ByProductTables<T>, T> {
    return new GetByKeyRequestBuilder<ByProductTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      MainProduct: mainProduct,
      DimensionNumberMain: dimensionNumberMain,
      ItemIdByProd: itemIdByProd,
      DimensionNumberByProd: dimensionNumberByProd
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ByProductTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ByProductTables`.
   */
  update(
    entity: ByProductTables<T>
  ): UpdateRequestBuilder<ByProductTables<T>, T> {
    return new UpdateRequestBuilder<ByProductTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ByProductTables`.
   * @param dataAreaId Key property. See {@link ByProductTables.dataAreaId}.
   * @param mainProduct Key property. See {@link ByProductTables.mainProduct}.
   * @param dimensionNumberMain Key property. See {@link ByProductTables.dimensionNumberMain}.
   * @param itemIdByProd Key property. See {@link ByProductTables.itemIdByProd}.
   * @param dimensionNumberByProd Key property. See {@link ByProductTables.dimensionNumberByProd}.
   * @returns A request builder for creating requests that delete an entity of type `ByProductTables`.
   */
  delete(
    dataAreaId: string,
    mainProduct: string,
    dimensionNumberMain: string,
    itemIdByProd: string,
    dimensionNumberByProd: string
  ): DeleteRequestBuilder<ByProductTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ByProductTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ByProductTables` by taking the entity as a parameter.
   */
  delete(
    entity: ByProductTables<T>
  ): DeleteRequestBuilder<ByProductTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    mainProduct?: string,
    dimensionNumberMain?: string,
    itemIdByProd?: string,
    dimensionNumberByProd?: string
  ): DeleteRequestBuilder<ByProductTables<T>, T> {
    return new DeleteRequestBuilder<ByProductTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ByProductTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MainProduct: mainProduct!,
            DimensionNumberMain: dimensionNumberMain!,
            ItemIdByProd: itemIdByProd!,
            DimensionNumberByProd: dimensionNumberByProd!
          }
    );
  }
}
