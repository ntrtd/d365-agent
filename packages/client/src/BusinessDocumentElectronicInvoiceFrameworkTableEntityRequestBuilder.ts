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
import { BusinessDocumentElectronicInvoiceFrameworkTableEntity } from './BusinessDocumentElectronicInvoiceFrameworkTableEntity';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentElectronicInvoiceFrameworkTableEntity} entity.
 */
export class BusinessDocumentElectronicInvoiceFrameworkTableEntityRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>,
  T
> {
  /**
   * Returns a request builder for querying all `BusinessDocumentElectronicInvoiceFrameworkTableEntity` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentElectronicInvoiceFrameworkTableEntity` entities.
   */
  getAll(): GetAllRequestBuilder<
    BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentElectronicInvoiceFrameworkTableEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentElectronicInvoiceFrameworkTableEntity`.
   */
  create(
    entity: BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>
  ): CreateRequestBuilder<
    BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>,
    T
  > {
    return new CreateRequestBuilder<
      BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentElectronicInvoiceFrameworkTableEntity` entity based on its keys.
   * @param dataAreaId Key property. See {@link BusinessDocumentElectronicInvoiceFrameworkTableEntity.dataAreaId}.
   * @param type Key property. See {@link BusinessDocumentElectronicInvoiceFrameworkTableEntity.type}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentElectronicInvoiceFrameworkTableEntity` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Type: type
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessDocumentElectronicInvoiceFrameworkTableEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentElectronicInvoiceFrameworkTableEntity`.
   */
  update(
    entity: BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>
  ): UpdateRequestBuilder<
    BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>,
    T
  > {
    return new UpdateRequestBuilder<
      BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentElectronicInvoiceFrameworkTableEntity`.
   * @param dataAreaId Key property. See {@link BusinessDocumentElectronicInvoiceFrameworkTableEntity.dataAreaId}.
   * @param type Key property. See {@link BusinessDocumentElectronicInvoiceFrameworkTableEntity.type}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentElectronicInvoiceFrameworkTableEntity`.
   */
  delete(
    dataAreaId: string,
    type: string
  ): DeleteRequestBuilder<
    BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentElectronicInvoiceFrameworkTableEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentElectronicInvoiceFrameworkTableEntity` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>
  ): DeleteRequestBuilder<
    BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    type?: string
  ): DeleteRequestBuilder<
    BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>,
    T
  > {
    return new DeleteRequestBuilder<
      BusinessDocumentElectronicInvoiceFrameworkTableEntity<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      BusinessDocumentElectronicInvoiceFrameworkTableEntity
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Type: type!
          }
    );
  }
}
