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
import { RAssetTables } from './RAssetTables';

/**
 * Request builder class for operations supported on the {@link RAssetTables} entity.
 */
export class RAssetTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetTables<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetTables` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetTables` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetTables<T>, T> {
    return new GetAllRequestBuilder<RAssetTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetTables`.
   */
  create(entity: RAssetTables<T>): CreateRequestBuilder<RAssetTables<T>, T> {
    return new CreateRequestBuilder<RAssetTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RAssetTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetTables.dataAreaId}.
   * @param faInventoryNumber Key property. See {@link RAssetTables.faInventoryNumber}.
   * @returns A request builder for creating requests to retrieve one `RAssetTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    faInventoryNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RAssetTables<T>, T> {
    return new GetByKeyRequestBuilder<RAssetTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FAInventoryNumber: faInventoryNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetTables`.
   */
  update(entity: RAssetTables<T>): UpdateRequestBuilder<RAssetTables<T>, T> {
    return new UpdateRequestBuilder<RAssetTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetTables`.
   * @param dataAreaId Key property. See {@link RAssetTables.dataAreaId}.
   * @param faInventoryNumber Key property. See {@link RAssetTables.faInventoryNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetTables`.
   */
  delete(
    dataAreaId: string,
    faInventoryNumber: string
  ): DeleteRequestBuilder<RAssetTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetTables` by taking the entity as a parameter.
   */
  delete(entity: RAssetTables<T>): DeleteRequestBuilder<RAssetTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    faInventoryNumber?: string
  ): DeleteRequestBuilder<RAssetTables<T>, T> {
    return new DeleteRequestBuilder<RAssetTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FAInventoryNumber: faInventoryNumber!
          }
    );
  }
}
