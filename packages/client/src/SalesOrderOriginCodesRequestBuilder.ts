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
import { SalesOrderOriginCodes } from './SalesOrderOriginCodes';

/**
 * Request builder class for operations supported on the {@link SalesOrderOriginCodes} entity.
 */
export class SalesOrderOriginCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderOriginCodes<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderOriginCodes` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderOriginCodes` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderOriginCodes<T>, T> {
    return new GetAllRequestBuilder<SalesOrderOriginCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderOriginCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderOriginCodes`.
   */
  create(
    entity: SalesOrderOriginCodes<T>
  ): CreateRequestBuilder<SalesOrderOriginCodes<T>, T> {
    return new CreateRequestBuilder<SalesOrderOriginCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderOriginCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderOriginCodes.dataAreaId}.
   * @param originCode Key property. See {@link SalesOrderOriginCodes.originCode}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderOriginCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    originCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderOriginCodes<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderOriginCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OriginCode: originCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderOriginCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderOriginCodes`.
   */
  update(
    entity: SalesOrderOriginCodes<T>
  ): UpdateRequestBuilder<SalesOrderOriginCodes<T>, T> {
    return new UpdateRequestBuilder<SalesOrderOriginCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderOriginCodes`.
   * @param dataAreaId Key property. See {@link SalesOrderOriginCodes.dataAreaId}.
   * @param originCode Key property. See {@link SalesOrderOriginCodes.originCode}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderOriginCodes`.
   */
  delete(
    dataAreaId: string,
    originCode: string
  ): DeleteRequestBuilder<SalesOrderOriginCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderOriginCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderOriginCodes` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderOriginCodes<T>
  ): DeleteRequestBuilder<SalesOrderOriginCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    originCode?: string
  ): DeleteRequestBuilder<SalesOrderOriginCodes<T>, T> {
    return new DeleteRequestBuilder<SalesOrderOriginCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderOriginCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OriginCode: originCode!
          }
    );
  }
}
