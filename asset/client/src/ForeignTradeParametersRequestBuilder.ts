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
import { ForeignTradeParameters } from './ForeignTradeParameters';

/**
 * Request builder class for operations supported on the {@link ForeignTradeParameters} entity.
 */
export class ForeignTradeParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ForeignTradeParameters<T>, T> {
  /**
   * Returns a request builder for querying all `ForeignTradeParameters` entities.
   * @returns A request builder for creating requests to retrieve all `ForeignTradeParameters` entities.
   */
  getAll(): GetAllRequestBuilder<ForeignTradeParameters<T>, T> {
    return new GetAllRequestBuilder<ForeignTradeParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ForeignTradeParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ForeignTradeParameters`.
   */
  create(
    entity: ForeignTradeParameters<T>
  ): CreateRequestBuilder<ForeignTradeParameters<T>, T> {
    return new CreateRequestBuilder<ForeignTradeParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ForeignTradeParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link ForeignTradeParameters.dataAreaId}.
   * @param id Key property. See {@link ForeignTradeParameters.id}.
   * @returns A request builder for creating requests to retrieve one `ForeignTradeParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ForeignTradeParameters<T>, T> {
    return new GetByKeyRequestBuilder<ForeignTradeParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ID: id
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ForeignTradeParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ForeignTradeParameters`.
   */
  update(
    entity: ForeignTradeParameters<T>
  ): UpdateRequestBuilder<ForeignTradeParameters<T>, T> {
    return new UpdateRequestBuilder<ForeignTradeParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ForeignTradeParameters`.
   * @param dataAreaId Key property. See {@link ForeignTradeParameters.dataAreaId}.
   * @param id Key property. See {@link ForeignTradeParameters.id}.
   * @returns A request builder for creating requests that delete an entity of type `ForeignTradeParameters`.
   */
  delete(
    dataAreaId: string,
    id: number
  ): DeleteRequestBuilder<ForeignTradeParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ForeignTradeParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ForeignTradeParameters` by taking the entity as a parameter.
   */
  delete(
    entity: ForeignTradeParameters<T>
  ): DeleteRequestBuilder<ForeignTradeParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    id?: number
  ): DeleteRequestBuilder<ForeignTradeParameters<T>, T> {
    return new DeleteRequestBuilder<ForeignTradeParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ForeignTradeParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ID: id!
          }
    );
  }
}
