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
import { TaxDocuments } from './TaxDocuments';

/**
 * Request builder class for operations supported on the {@link TaxDocuments} entity.
 */
export class TaxDocumentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxDocuments<T>, T> {
  /**
   * Returns a request builder for querying all `TaxDocuments` entities.
   * @returns A request builder for creating requests to retrieve all `TaxDocuments` entities.
   */
  getAll(): GetAllRequestBuilder<TaxDocuments<T>, T> {
    return new GetAllRequestBuilder<TaxDocuments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxDocuments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxDocuments`.
   */
  create(entity: TaxDocuments<T>): CreateRequestBuilder<TaxDocuments<T>, T> {
    return new CreateRequestBuilder<TaxDocuments<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TaxDocuments` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxDocuments.dataAreaId}.
   * @param taxDocumentNumber Key property. See {@link TaxDocuments.taxDocumentNumber}.
   * @param custVendTransTableId Key property. See {@link TaxDocuments.custVendTransTableId}.
   * @returns A request builder for creating requests to retrieve one `TaxDocuments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxDocumentNumber: DeserializedType<T, 'Edm.String'>,
    custVendTransTableId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<TaxDocuments<T>, T> {
    return new GetByKeyRequestBuilder<TaxDocuments<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxDocumentNumber: taxDocumentNumber,
      CustVendTransTableId: custVendTransTableId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxDocuments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxDocuments`.
   */
  update(entity: TaxDocuments<T>): UpdateRequestBuilder<TaxDocuments<T>, T> {
    return new UpdateRequestBuilder<TaxDocuments<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxDocuments`.
   * @param dataAreaId Key property. See {@link TaxDocuments.dataAreaId}.
   * @param taxDocumentNumber Key property. See {@link TaxDocuments.taxDocumentNumber}.
   * @param custVendTransTableId Key property. See {@link TaxDocuments.custVendTransTableId}.
   * @returns A request builder for creating requests that delete an entity of type `TaxDocuments`.
   */
  delete(
    dataAreaId: string,
    taxDocumentNumber: string,
    custVendTransTableId: number
  ): DeleteRequestBuilder<TaxDocuments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxDocuments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxDocuments` by taking the entity as a parameter.
   */
  delete(entity: TaxDocuments<T>): DeleteRequestBuilder<TaxDocuments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxDocumentNumber?: string,
    custVendTransTableId?: number
  ): DeleteRequestBuilder<TaxDocuments<T>, T> {
    return new DeleteRequestBuilder<TaxDocuments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxDocuments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxDocumentNumber: taxDocumentNumber!,
            CustVendTransTableId: custVendTransTableId!
          }
    );
  }
}
