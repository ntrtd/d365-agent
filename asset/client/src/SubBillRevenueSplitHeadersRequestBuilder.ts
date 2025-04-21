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
import { SubBillRevenueSplitHeaders } from './SubBillRevenueSplitHeaders';

/**
 * Request builder class for operations supported on the {@link SubBillRevenueSplitHeaders} entity.
 */
export class SubBillRevenueSplitHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillRevenueSplitHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillRevenueSplitHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillRevenueSplitHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillRevenueSplitHeaders<T>, T> {
    return new GetAllRequestBuilder<SubBillRevenueSplitHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillRevenueSplitHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillRevenueSplitHeaders`.
   */
  create(
    entity: SubBillRevenueSplitHeaders<T>
  ): CreateRequestBuilder<SubBillRevenueSplitHeaders<T>, T> {
    return new CreateRequestBuilder<SubBillRevenueSplitHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillRevenueSplitHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillRevenueSplitHeaders.dataAreaId}.
   * @param parentItem Key property. See {@link SubBillRevenueSplitHeaders.parentItem}.
   * @returns A request builder for creating requests to retrieve one `SubBillRevenueSplitHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    parentItem: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillRevenueSplitHeaders<T>, T> {
    return new GetByKeyRequestBuilder<SubBillRevenueSplitHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ParentItem: parentItem
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillRevenueSplitHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillRevenueSplitHeaders`.
   */
  update(
    entity: SubBillRevenueSplitHeaders<T>
  ): UpdateRequestBuilder<SubBillRevenueSplitHeaders<T>, T> {
    return new UpdateRequestBuilder<SubBillRevenueSplitHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillRevenueSplitHeaders`.
   * @param dataAreaId Key property. See {@link SubBillRevenueSplitHeaders.dataAreaId}.
   * @param parentItem Key property. See {@link SubBillRevenueSplitHeaders.parentItem}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillRevenueSplitHeaders`.
   */
  delete(
    dataAreaId: string,
    parentItem: string
  ): DeleteRequestBuilder<SubBillRevenueSplitHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillRevenueSplitHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillRevenueSplitHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillRevenueSplitHeaders<T>
  ): DeleteRequestBuilder<SubBillRevenueSplitHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    parentItem?: string
  ): DeleteRequestBuilder<SubBillRevenueSplitHeaders<T>, T> {
    return new DeleteRequestBuilder<SubBillRevenueSplitHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillRevenueSplitHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ParentItem: parentItem!
          }
    );
  }
}
