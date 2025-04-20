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
import { SalesQuotationHeadersV2 } from './SalesQuotationHeadersV2';

/**
 * Request builder class for operations supported on the {@link SalesQuotationHeadersV2} entity.
 */
export class SalesQuotationHeadersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesQuotationHeadersV2<T>, T> {
  /**
   * Returns a request builder for querying all `SalesQuotationHeadersV2` entities.
   * @returns A request builder for creating requests to retrieve all `SalesQuotationHeadersV2` entities.
   */
  getAll(): GetAllRequestBuilder<SalesQuotationHeadersV2<T>, T> {
    return new GetAllRequestBuilder<SalesQuotationHeadersV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesQuotationHeadersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesQuotationHeadersV2`.
   */
  create(
    entity: SalesQuotationHeadersV2<T>
  ): CreateRequestBuilder<SalesQuotationHeadersV2<T>, T> {
    return new CreateRequestBuilder<SalesQuotationHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesQuotationHeadersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesQuotationHeadersV2.dataAreaId}.
   * @param salesQuotationNumber Key property. See {@link SalesQuotationHeadersV2.salesQuotationNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesQuotationHeadersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesQuotationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesQuotationHeadersV2<T>, T> {
    return new GetByKeyRequestBuilder<SalesQuotationHeadersV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesQuotationNumber: salesQuotationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesQuotationHeadersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesQuotationHeadersV2`.
   */
  update(
    entity: SalesQuotationHeadersV2<T>
  ): UpdateRequestBuilder<SalesQuotationHeadersV2<T>, T> {
    return new UpdateRequestBuilder<SalesQuotationHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesQuotationHeadersV2`.
   * @param dataAreaId Key property. See {@link SalesQuotationHeadersV2.dataAreaId}.
   * @param salesQuotationNumber Key property. See {@link SalesQuotationHeadersV2.salesQuotationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesQuotationHeadersV2`.
   */
  delete(
    dataAreaId: string,
    salesQuotationNumber: string
  ): DeleteRequestBuilder<SalesQuotationHeadersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesQuotationHeadersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesQuotationHeadersV2` by taking the entity as a parameter.
   */
  delete(
    entity: SalesQuotationHeadersV2<T>
  ): DeleteRequestBuilder<SalesQuotationHeadersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesQuotationNumber?: string
  ): DeleteRequestBuilder<SalesQuotationHeadersV2<T>, T> {
    return new DeleteRequestBuilder<SalesQuotationHeadersV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesQuotationHeadersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesQuotationNumber: salesQuotationNumber!
          }
    );
  }
}
