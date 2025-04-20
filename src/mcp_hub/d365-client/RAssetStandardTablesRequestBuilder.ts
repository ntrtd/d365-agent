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
import { RAssetStandardTables } from './RAssetStandardTables';

/**
 * Request builder class for operations supported on the {@link RAssetStandardTables} entity.
 */
export class RAssetStandardTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetStandardTables<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetStandardTables` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetStandardTables` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetStandardTables<T>, T> {
    return new GetAllRequestBuilder<RAssetStandardTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetStandardTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetStandardTables`.
   */
  create(
    entity: RAssetStandardTables<T>
  ): CreateRequestBuilder<RAssetStandardTables<T>, T> {
    return new CreateRequestBuilder<RAssetStandardTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetStandardTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetStandardTables.dataAreaId}.
   * @param valueModel Key property. See {@link RAssetStandardTables.valueModel}.
   * @returns A request builder for creating requests to retrieve one `RAssetStandardTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    valueModel: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RAssetStandardTables<T>, T> {
    return new GetByKeyRequestBuilder<RAssetStandardTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ValueModel: valueModel
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetStandardTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetStandardTables`.
   */
  update(
    entity: RAssetStandardTables<T>
  ): UpdateRequestBuilder<RAssetStandardTables<T>, T> {
    return new UpdateRequestBuilder<RAssetStandardTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetStandardTables`.
   * @param dataAreaId Key property. See {@link RAssetStandardTables.dataAreaId}.
   * @param valueModel Key property. See {@link RAssetStandardTables.valueModel}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetStandardTables`.
   */
  delete(
    dataAreaId: string,
    valueModel: string
  ): DeleteRequestBuilder<RAssetStandardTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetStandardTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetStandardTables` by taking the entity as a parameter.
   */
  delete(
    entity: RAssetStandardTables<T>
  ): DeleteRequestBuilder<RAssetStandardTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    valueModel?: string
  ): DeleteRequestBuilder<RAssetStandardTables<T>, T> {
    return new DeleteRequestBuilder<RAssetStandardTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetStandardTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ValueModel: valueModel!
          }
    );
  }
}
