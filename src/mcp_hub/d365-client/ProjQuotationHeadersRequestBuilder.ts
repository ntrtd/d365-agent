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
import { ProjQuotationHeaders } from './ProjQuotationHeaders';

/**
 * Request builder class for operations supported on the {@link ProjQuotationHeaders} entity.
 */
export class ProjQuotationHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjQuotationHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ProjQuotationHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ProjQuotationHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ProjQuotationHeaders<T>, T> {
    return new GetAllRequestBuilder<ProjQuotationHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjQuotationHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjQuotationHeaders`.
   */
  create(
    entity: ProjQuotationHeaders<T>
  ): CreateRequestBuilder<ProjQuotationHeaders<T>, T> {
    return new CreateRequestBuilder<ProjQuotationHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjQuotationHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjQuotationHeaders.dataAreaId}.
   * @param projQuotationNumber Key property. See {@link ProjQuotationHeaders.projQuotationNumber}.
   * @returns A request builder for creating requests to retrieve one `ProjQuotationHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projQuotationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjQuotationHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ProjQuotationHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjQuotationNumber: projQuotationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjQuotationHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjQuotationHeaders`.
   */
  update(
    entity: ProjQuotationHeaders<T>
  ): UpdateRequestBuilder<ProjQuotationHeaders<T>, T> {
    return new UpdateRequestBuilder<ProjQuotationHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjQuotationHeaders`.
   * @param dataAreaId Key property. See {@link ProjQuotationHeaders.dataAreaId}.
   * @param projQuotationNumber Key property. See {@link ProjQuotationHeaders.projQuotationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProjQuotationHeaders`.
   */
  delete(
    dataAreaId: string,
    projQuotationNumber: string
  ): DeleteRequestBuilder<ProjQuotationHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjQuotationHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjQuotationHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ProjQuotationHeaders<T>
  ): DeleteRequestBuilder<ProjQuotationHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projQuotationNumber?: string
  ): DeleteRequestBuilder<ProjQuotationHeaders<T>, T> {
    return new DeleteRequestBuilder<ProjQuotationHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjQuotationHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjQuotationNumber: projQuotationNumber!
          }
    );
  }
}
