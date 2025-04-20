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
import { PriceTermTables } from './PriceTermTables';

/**
 * Request builder class for operations supported on the {@link PriceTermTables} entity.
 */
export class PriceTermTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceTermTables<T>, T> {
  /**
   * Returns a request builder for querying all `PriceTermTables` entities.
   * @returns A request builder for creating requests to retrieve all `PriceTermTables` entities.
   */
  getAll(): GetAllRequestBuilder<PriceTermTables<T>, T> {
    return new GetAllRequestBuilder<PriceTermTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PriceTermTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceTermTables`.
   */
  create(
    entity: PriceTermTables<T>
  ): CreateRequestBuilder<PriceTermTables<T>, T> {
    return new CreateRequestBuilder<PriceTermTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PriceTermTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceTermTables.dataAreaId}.
   * @param code Key property. See {@link PriceTermTables.code}.
   * @returns A request builder for creating requests to retrieve one `PriceTermTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PriceTermTables<T>, T> {
    return new GetByKeyRequestBuilder<PriceTermTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PriceTermTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceTermTables`.
   */
  update(
    entity: PriceTermTables<T>
  ): UpdateRequestBuilder<PriceTermTables<T>, T> {
    return new UpdateRequestBuilder<PriceTermTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceTermTables`.
   * @param dataAreaId Key property. See {@link PriceTermTables.dataAreaId}.
   * @param code Key property. See {@link PriceTermTables.code}.
   * @returns A request builder for creating requests that delete an entity of type `PriceTermTables`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<PriceTermTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceTermTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceTermTables` by taking the entity as a parameter.
   */
  delete(
    entity: PriceTermTables<T>
  ): DeleteRequestBuilder<PriceTermTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<PriceTermTables<T>, T> {
    return new DeleteRequestBuilder<PriceTermTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceTermTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
