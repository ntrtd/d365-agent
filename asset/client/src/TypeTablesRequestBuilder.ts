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
import { TypeTables } from './TypeTables';

/**
 * Request builder class for operations supported on the {@link TypeTables} entity.
 */
export class TypeTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TypeTables<T>, T> {
  /**
   * Returns a request builder for querying all `TypeTables` entities.
   * @returns A request builder for creating requests to retrieve all `TypeTables` entities.
   */
  getAll(): GetAllRequestBuilder<TypeTables<T>, T> {
    return new GetAllRequestBuilder<TypeTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TypeTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TypeTables`.
   */
  create(entity: TypeTables<T>): CreateRequestBuilder<TypeTables<T>, T> {
    return new CreateRequestBuilder<TypeTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TypeTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link TypeTables.dataAreaId}.
   * @param vehicleType Key property. See {@link TypeTables.vehicleType}.
   * @returns A request builder for creating requests to retrieve one `TypeTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vehicleType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TypeTables<T>, T> {
    return new GetByKeyRequestBuilder<TypeTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      VehicleType: vehicleType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TypeTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TypeTables`.
   */
  update(entity: TypeTables<T>): UpdateRequestBuilder<TypeTables<T>, T> {
    return new UpdateRequestBuilder<TypeTables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TypeTables`.
   * @param dataAreaId Key property. See {@link TypeTables.dataAreaId}.
   * @param vehicleType Key property. See {@link TypeTables.vehicleType}.
   * @returns A request builder for creating requests that delete an entity of type `TypeTables`.
   */
  delete(
    dataAreaId: string,
    vehicleType: string
  ): DeleteRequestBuilder<TypeTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TypeTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TypeTables` by taking the entity as a parameter.
   */
  delete(entity: TypeTables<T>): DeleteRequestBuilder<TypeTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vehicleType?: string
  ): DeleteRequestBuilder<TypeTables<T>, T> {
    return new DeleteRequestBuilder<TypeTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TypeTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VehicleType: vehicleType!
          }
    );
  }
}
