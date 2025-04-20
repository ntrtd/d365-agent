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
import { TaxItemGroupHeadings } from './TaxItemGroupHeadings';

/**
 * Request builder class for operations supported on the {@link TaxItemGroupHeadings} entity.
 */
export class TaxItemGroupHeadingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxItemGroupHeadings<T>, T> {
  /**
   * Returns a request builder for querying all `TaxItemGroupHeadings` entities.
   * @returns A request builder for creating requests to retrieve all `TaxItemGroupHeadings` entities.
   */
  getAll(): GetAllRequestBuilder<TaxItemGroupHeadings<T>, T> {
    return new GetAllRequestBuilder<TaxItemGroupHeadings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxItemGroupHeadings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxItemGroupHeadings`.
   */
  create(
    entity: TaxItemGroupHeadings<T>
  ): CreateRequestBuilder<TaxItemGroupHeadings<T>, T> {
    return new CreateRequestBuilder<TaxItemGroupHeadings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxItemGroupHeadings` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxItemGroupHeadings.dataAreaId}.
   * @param taxItemGroup Key property. See {@link TaxItemGroupHeadings.taxItemGroup}.
   * @returns A request builder for creating requests to retrieve one `TaxItemGroupHeadings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxItemGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxItemGroupHeadings<T>, T> {
    return new GetByKeyRequestBuilder<TaxItemGroupHeadings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxItemGroup: taxItemGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxItemGroupHeadings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxItemGroupHeadings`.
   */
  update(
    entity: TaxItemGroupHeadings<T>
  ): UpdateRequestBuilder<TaxItemGroupHeadings<T>, T> {
    return new UpdateRequestBuilder<TaxItemGroupHeadings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxItemGroupHeadings`.
   * @param dataAreaId Key property. See {@link TaxItemGroupHeadings.dataAreaId}.
   * @param taxItemGroup Key property. See {@link TaxItemGroupHeadings.taxItemGroup}.
   * @returns A request builder for creating requests that delete an entity of type `TaxItemGroupHeadings`.
   */
  delete(
    dataAreaId: string,
    taxItemGroup: string
  ): DeleteRequestBuilder<TaxItemGroupHeadings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxItemGroupHeadings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxItemGroupHeadings` by taking the entity as a parameter.
   */
  delete(
    entity: TaxItemGroupHeadings<T>
  ): DeleteRequestBuilder<TaxItemGroupHeadings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxItemGroup?: string
  ): DeleteRequestBuilder<TaxItemGroupHeadings<T>, T> {
    return new DeleteRequestBuilder<TaxItemGroupHeadings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxItemGroupHeadings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxItemGroup: taxItemGroup!
          }
    );
  }
}
