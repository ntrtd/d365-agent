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
import { RTax25StdRateTableTables } from './RTax25StdRateTableTables';

/**
 * Request builder class for operations supported on the {@link RTax25StdRateTableTables} entity.
 */
export class RTax25StdRateTableTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RTax25StdRateTableTables<T>, T> {
  /**
   * Returns a request builder for querying all `RTax25StdRateTableTables` entities.
   * @returns A request builder for creating requests to retrieve all `RTax25StdRateTableTables` entities.
   */
  getAll(): GetAllRequestBuilder<RTax25StdRateTableTables<T>, T> {
    return new GetAllRequestBuilder<RTax25StdRateTableTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RTax25StdRateTableTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RTax25StdRateTableTables`.
   */
  create(
    entity: RTax25StdRateTableTables<T>
  ): CreateRequestBuilder<RTax25StdRateTableTables<T>, T> {
    return new CreateRequestBuilder<RTax25StdRateTableTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RTax25StdRateTableTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link RTax25StdRateTableTables.dataAreaId}.
   * @param rateCode Key property. See {@link RTax25StdRateTableTables.rateCode}.
   * @returns A request builder for creating requests to retrieve one `RTax25StdRateTableTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rateCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RTax25StdRateTableTables<T>, T> {
    return new GetByKeyRequestBuilder<RTax25StdRateTableTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RateCode: rateCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RTax25StdRateTableTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RTax25StdRateTableTables`.
   */
  update(
    entity: RTax25StdRateTableTables<T>
  ): UpdateRequestBuilder<RTax25StdRateTableTables<T>, T> {
    return new UpdateRequestBuilder<RTax25StdRateTableTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RTax25StdRateTableTables`.
   * @param dataAreaId Key property. See {@link RTax25StdRateTableTables.dataAreaId}.
   * @param rateCode Key property. See {@link RTax25StdRateTableTables.rateCode}.
   * @returns A request builder for creating requests that delete an entity of type `RTax25StdRateTableTables`.
   */
  delete(
    dataAreaId: string,
    rateCode: string
  ): DeleteRequestBuilder<RTax25StdRateTableTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RTax25StdRateTableTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RTax25StdRateTableTables` by taking the entity as a parameter.
   */
  delete(
    entity: RTax25StdRateTableTables<T>
  ): DeleteRequestBuilder<RTax25StdRateTableTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rateCode?: string
  ): DeleteRequestBuilder<RTax25StdRateTableTables<T>, T> {
    return new DeleteRequestBuilder<RTax25StdRateTableTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RTax25StdRateTableTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RateCode: rateCode!
          }
    );
  }
}
