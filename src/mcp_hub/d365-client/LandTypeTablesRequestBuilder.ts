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
import { LandTypeTables } from './LandTypeTables';

/**
 * Request builder class for operations supported on the {@link LandTypeTables} entity.
 */
export class LandTypeTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LandTypeTables<T>, T> {
  /**
   * Returns a request builder for querying all `LandTypeTables` entities.
   * @returns A request builder for creating requests to retrieve all `LandTypeTables` entities.
   */
  getAll(): GetAllRequestBuilder<LandTypeTables<T>, T> {
    return new GetAllRequestBuilder<LandTypeTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LandTypeTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LandTypeTables`.
   */
  create(
    entity: LandTypeTables<T>
  ): CreateRequestBuilder<LandTypeTables<T>, T> {
    return new CreateRequestBuilder<LandTypeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LandTypeTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LandTypeTables.dataAreaId}.
   * @param category Key property. See {@link LandTypeTables.category}.
   * @returns A request builder for creating requests to retrieve one `LandTypeTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LandTypeTables<T>, T> {
    return new GetByKeyRequestBuilder<LandTypeTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Category: category
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LandTypeTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LandTypeTables`.
   */
  update(
    entity: LandTypeTables<T>
  ): UpdateRequestBuilder<LandTypeTables<T>, T> {
    return new UpdateRequestBuilder<LandTypeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LandTypeTables`.
   * @param dataAreaId Key property. See {@link LandTypeTables.dataAreaId}.
   * @param category Key property. See {@link LandTypeTables.category}.
   * @returns A request builder for creating requests that delete an entity of type `LandTypeTables`.
   */
  delete(
    dataAreaId: string,
    category: string
  ): DeleteRequestBuilder<LandTypeTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LandTypeTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LandTypeTables` by taking the entity as a parameter.
   */
  delete(entity: LandTypeTables<T>): DeleteRequestBuilder<LandTypeTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    category?: string
  ): DeleteRequestBuilder<LandTypeTables<T>, T> {
    return new DeleteRequestBuilder<LandTypeTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LandTypeTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Category: category!
          }
    );
  }
}
