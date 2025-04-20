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
import { CdsReturnOrderHeaders } from './CdsReturnOrderHeaders';

/**
 * Request builder class for operations supported on the {@link CdsReturnOrderHeaders} entity.
 */
export class CdsReturnOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsReturnOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `CdsReturnOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `CdsReturnOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<CdsReturnOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<CdsReturnOrderHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsReturnOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsReturnOrderHeaders`.
   */
  create(
    entity: CdsReturnOrderHeaders<T>
  ): CreateRequestBuilder<CdsReturnOrderHeaders<T>, T> {
    return new CreateRequestBuilder<CdsReturnOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsReturnOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsReturnOrderHeaders.dataAreaId}.
   * @param returnOrderNumber Key property. See {@link CdsReturnOrderHeaders.returnOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsReturnOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    returnOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsReturnOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<CdsReturnOrderHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReturnOrderNumber: returnOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsReturnOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsReturnOrderHeaders`.
   */
  update(
    entity: CdsReturnOrderHeaders<T>
  ): UpdateRequestBuilder<CdsReturnOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<CdsReturnOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsReturnOrderHeaders`.
   * @param dataAreaId Key property. See {@link CdsReturnOrderHeaders.dataAreaId}.
   * @param returnOrderNumber Key property. See {@link CdsReturnOrderHeaders.returnOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsReturnOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    returnOrderNumber: string
  ): DeleteRequestBuilder<CdsReturnOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsReturnOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsReturnOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: CdsReturnOrderHeaders<T>
  ): DeleteRequestBuilder<CdsReturnOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    returnOrderNumber?: string
  ): DeleteRequestBuilder<CdsReturnOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<CdsReturnOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsReturnOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReturnOrderNumber: returnOrderNumber!
          }
    );
  }
}
